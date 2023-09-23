"use client";

import LoadingIcon from "@/app/components/icons/loading-icon";
import StateContext from "@/app/contexts/state-context";
import { GuessState } from "@/app/types/domain";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

type SelectedType = "All" | "Wrong" | "Correct";
const SelectedTypeKeys: SelectedType[] = ["All", "Correct", "Wrong"];

const Overview = () => {
  const { state } = useContext(StateContext);
  const [selectedType, setSelectedType] = useState<SelectedType>("All");
  const [shown, setShown] = useState(state);
  const router = useRouter();

  const changeSelection = (type: SelectedType) => {
    if (selectedType === type) {
      return;
    }

    switch (type) {
      case "All":
        setShown(state);
        break;
      case "Wrong":
        setShown(state.filter((entity) => entity.state === GuessState.Wrong));
        break;
      case "Correct":
        setShown(state.filter((entity) => entity.state === GuessState.Correct));
        break;
    }

    setSelectedType(type);
  };

  useEffect(() => {
    if (state.length === 0) {
      router.push("/");
    }
  }, []);

  if (state.length === 0) {
    return (
      <div
        role="status"
        className="flex justify-center items-center pt-[25rem]"
      >
        <LoadingIcon classNames="mr-2 animate-spin fill-blue text-gray w-8 h-8 mr-3" />
        Loading...
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center pt-[7.5rem] pb-40">
      <div className="w-[36rem]">
        <div className="relative pt-2 h-[4rem]">
          <div className="flex justify-center relative">
            {SelectedTypeKeys.map((type) => (
              <button
                key={`selected-${type}`}
                className={`bg-semi-black shadow-xl rounded-lg px-2 py-2 border border-gray w-fit ${
                  type === "Wrong"
                    ? "text-red"
                    : type === "Correct"
                    ? "text-light-green"
                    : "text-white"
                } hover:border-hover-gray mr-3 ${
                  selectedType === type ? "" : "opacity-50"
                }`}
                onClick={() => changeSelection(type)}
              >
                {type}
              </button>
            ))}
            <Link
              key={`transfrom-random`}
              className="bg-semi-black hover:border-hover-gray border border-[rgba(240,246,252,0.1)] rounded-lg py-2 px-3 absolute right-0"
              href={"/"}
            >
              Home
            </Link>
          </div>
        </div>
        <div className="bg-semi-black shadow-xl rounded-lg border-gray border px-6 py-5">
          <div className="divide-y divide-zinc-700 > * + *">
            <p className="font-bold text-center pb-2">Overview</p>
            {shown.length > 0 ? (
              shown.map((entity) =>
                entity.state === GuessState.NotGuessed ? undefined : (
                  <div
                    className="grid grid-cols-6 pt-2 pb-2"
                    key={`overview-${entity.id}`}
                  >
                    <p className="col-span-2">Nr. {entity.order}:</p>
                    <p className="col-span-4">
                      {entity.state === GuessState.Wrong ? (
                        <span className="text-red">Wrong</span>
                      ) : (
                        <span className="text-light-green">Correct</span>
                      )}
                    </p>
                    <p className="col-span-2">Original:</p>
                    <p className="col-span-4">{entity[entity.transFrom][0]}</p>
                    <p className="col-span-2">Given:</p>
                    <p className="col-span-4">{entity.guess}</p>
                    <p className="col-span-2">Correct answers: </p>
                    {entity[entity.transTo].map((trans, index) => (
                      <>
                        {index !== 0 && (
                          <p
                            className="col-span-2"
                            key={`overview-exp-${index}-1`}
                          />
                        )}
                        <p
                          className="col-span-4"
                          key={`overview-exp-${index}-2`}
                        >
                          {trans}
                        </p>
                      </>
                    ))}
                  </div>
                )
              )
            ) : (
              <p className="text-center pt-2">
                You&apos;ve got nothing {selectedType.toLowerCase()}!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
