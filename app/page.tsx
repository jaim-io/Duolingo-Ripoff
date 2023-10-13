"use client";

import {useContext, useEffect, useState} from "react";
import week1_data from "./data/week1_data";
import week2_data from "./data/week2_data";
import week3_data from "./data/week3_data";
import week4_data from "./data/week4_data";
import Link from "next/link";
import {Translation, translations} from "./types/domain";
import {LiaRandomSolid} from "react-icons/lia";
import StateContext from "./contexts/state-context";
import Image from "next/image";
import week5_data from "@/app/data/week5_data";
import week6_data from "@/app/data/week6_data";

const keysPerDataset: { [key: string]: string[] } = {
    "week 1": Object.keys(week1_data),
    "week 2": Object.keys(week2_data),
    "week 3": Object.keys(week3_data),
    "week 4": Object.keys(week4_data),
    "week 5": Object.keys(week5_data),
    "week 6": Object.keys(week6_data)
};

const Home = () => {
    const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);
    const [translateFrom, setTranslateFrom] = useState<Translation>("nl-it");
    const {setState} = useContext(StateContext);
    useEffect(() => {
        setState([]);
    }, [setState]);

    const toggle = (newValue: string) =>
        setSelectedDatasets((prev) => {
            if (prev.includes(newValue)) {
                return prev.filter((value) => value != newValue);
            }
            return [...prev, newValue];
        });

    const toggleRow = (key: string) => {
        const newValues = keysPerDataset[key].map((value) => `${key}.${value}`);

        setSelectedDatasets((prev) => {
            const newValuesIncluded = newValues.map((newValue) =>
                prev.includes(newValue)
            );

            if (newValuesIncluded.includes(true)) {
                return prev.filter((value) => !newValues.includes(value));
            }
            return [...prev, ...newValues];
        });
        return keysPerDataset[key];
    };

    const isActive = (value: string) =>
        Object.values(selectedDatasets).includes(value);

    const isActiveRow = (key: string) => {
        const newValues = keysPerDataset[key].map((value) => `${key}.${value}`);
        const newValuesIncluded = newValues.map((value) =>
            Object.values(selectedDatasets).includes(value)
        );
        return newValuesIncluded.includes(true);
    };

    const createDataSearchParams = () =>
        selectedDatasets.map((value) => `data=${value}`).join("&");

    return (
        <>
            <div className="flex justify-center pt-[7.5rem] pb-5">
                <div className="">
                    <div className="flex justify-center">
                        <Image
                            src="/images/super-duo-thumb.png"
                            alt=""
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div className="bg-semi-black shadow-xl rounded-lg border-gray border px-6 py-5">
                        <div className="divide-y divide-zinc-700 > * + *">
                            <h1 className="pb-2 text-center font-bold">
                                Select what you want to practice
                            </h1>
                            {Object.keys(keysPerDataset).map((key) => (
                                <div key={key} className="flex pt-3">
                                    <button
                                        className={`shadow-xl rounded-lg px-3 py-2 mb-3 w-fit mr-3 text-blue hover:text-hover-gray ${
                                            isActiveRow(key) ? "" : "opacity-50"
                                        }`}
                                        onClick={() => toggleRow(key)}
                                    >
                                        {key}
                                    </button>
                                    {keysPerDataset[key].map((datasetKey) => (
                                        <button
                                            className={`bg-semi-black shadow-xl rounded-lg px-3 py-2 mb-3 border border-gray w-fit mr-3 text-white hover:border-hover-gray ${
                                                isActive(`${key}.${datasetKey}`) ? "" : "opacity-50"
                                            }`}
                                            key={`${key}-${datasetKey}`}
                                            onClick={() => toggle(`${key}.${datasetKey}`)}
                                        >
                                            {datasetKey}
                                        </button>
                                    ))}
                                </div>
                            ))}
                        </div>

                        <div className="w-full relative mt-2 h-10">
                            {selectedDatasets.length === 0 &&
                                <div className={"absolute top-0 left-0 z-2 h-[2.4rem] w-[4.6rem] cursor-not-allowed"}/>}
                            <button
                                className={`absolute top-0 left-0 text-[#e8473f] bg-gray py-1.5 px-4 rounded-lg hover:bg-red hover:border-[#f85149] hover:text-white border border-red flex items-center cursor-pointer mr-3 ${
                                    selectedDatasets.length === 0
                                        ? "opacity-50 pointer-events-none"
                                        : ""
                                }`}
                                disabled={selectedDatasets.length === 0}
                                onClick={() => setSelectedDatasets([])}
                            >
                                Clear
                            </button>
                            {selectedDatasets.length === 0 &&
                                <div className={"absolute top-0 right-0 z-2 h-9 w-[4.25rem] cursor-not-allowed"}/>}
                            <Link
                                className={`absolute top-0 right-0 bg-dark-green hover:bg-light-green text-white py-1.5 px-4 rounded-lg focus:outline-none focus:shadow-outline w-fit block ${
                                    selectedDatasets.length > 0
                                        ? ""
                                        : "pointer-events-none opacity-50"
                                }`}
                                href={`/practice?${createDataSearchParams()}&trans=${translateFrom}`}
                            >
                                Start
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center ">
                <div className="bg-semi-black shadow-xl rounded-lg border-gray border px-2 py-2 flex items-center">
                    {Object.keys(translations).map((trans) => (
                        <button
                            key={`transform-${trans}`}
                            className={`bg-semi-black shadow-xl rounded-lg px-2 py-2 border border-gray w-fit text-white hover:border-hover-gray mr-3 ${
                                translateFrom === trans ? "" : "opacity-50"
                            }`}
                            onClick={() => setTranslateFrom(trans as Translation)}
                        >
                            {trans.toUpperCase().replace("-", " => ")}
                        </button>
                    ))}
                    <button
                        key={`transform-random`}
                        className={`bg-semi-black shadow-xl rounded-lg px-2 py-2 border border-gray w-fit text-white hover:border-hover-gray h-[42px] ${
                            translateFrom === "random" ? "" : "opacity-50"
                        }`}
                        onClick={() => setTranslateFrom("random")}
                    >
                        <LiaRandomSolid className="w-[25px] h-fit"/>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
