"use client";

import { ReactNode, useState, useEffect } from "react";
import week4_data from "../data/week4_data";
import {
  Word,
  Sentence,
  Phrase,
  IrregularVerb,
  Language,
  Data,
  translations,
  Translation,
} from "../types/domain";
import { useSearchParams } from "next/navigation";
import week1_data from "../data/week1_data";
import week3_data from "../data/week3_data.";
import week2_data from "../data/week2_data";

enum GuessState {
  NotGuessed,
  Correct,
  Wrong,
}

type Entity = (Word | Sentence | Phrase | IrregularVerb) & {
  state: GuessState;
  id: number;
};

type Message = {
  value: string | ReactNode;
  correct: boolean;
};

const shuffle = (array: any[]): any[] => {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const randLang = (): {
  displayed: Language;
  toMatch: Language;
} =>
  Math.round(Math.random()) === 0
    ? {
        displayed: "italian",
        toMatch: "dutch",
      }
    : {
        displayed: "dutch",
        toMatch: "italian",
      };

const getDatasets = (datasetIds: string[]): Data[] => {
  const nestedData = datasetIds.map((datasetId) => {
    const [name, key] = datasetId.split(".");
    switch (name) {
      case "week 1":
        return week1_data[key];
      case "week 2":
        return week2_data[key];
      case "week 3":
        return week3_data[key];
      case "week 4":
        return week4_data[key];
      default:
        throw new Error("Invalid dataset(s)");
    }
  });

  return nestedData.flat();
};

const Practice = () => {
  const searchParams = useSearchParams();
  const datasetIds = searchParams.getAll("data");
  const translateFrom = searchParams.get("trans") as Translation;

  if (datasetIds === null || translateFrom === null) {
    throw new Error();
  }

  const [state] = useState<Entity[]>(
    shuffle(
      [...getDatasets(datasetIds)].map((val, idx) => ({
        ...val,
        state: GuessState.NotGuessed,
        id: idx,
      }))
    )
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCounter, setCorrectCounter] = useState(0);
  const [wrongCounter, setWrongCounter] = useState(0);

  const parseTransParam = (languageId: Translation) => {
    if (languageId === "random") {
      return randLang();
    }
    return {
      displayed: translations[languageId].from,
      toMatch: translations[languageId].to,
    };
  };
  const [language, setLanguage] = useState<{
    displayed: Language;
    toMatch: Language;
  }>(parseTransParam(translateFrom));
  const [input, setInput] = useState<string>("");
  const [message, setMessage] = useState<Message | undefined>();

  const getRandomText = (): string => {
    const rand = Math.floor(
      Math.random() * state[currentIndex][language.displayed].length
    );
    return state[currentIndex][language.displayed][rand];
  };
  const [displayedText, setDisplayedText] = useState(getRandomText());

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
    // setLanguage(randLang());
    setInput("");
    setMessage(undefined);
  };

  useEffect(() => {
    setDisplayedText(getRandomText());
  }, [currentIndex]);

  const validate = (): void => {
    const isValid = state[currentIndex][language.toMatch].includes(
      input.trim()
    );

    isValid
      ? setCorrectCounter((prev) => prev + 1)
      : setWrongCounter((prev) => prev + 1);

    setMessage({
      value: (
        <div className="grid grid-cols-6">
          <p className="col-span-2">Original:</p>
          <p className="col-span-4">{displayedText}</p>
          <p className="col-span-2">Given:</p>
          <p className="col-span-4">{input.trim()}</p>
          <p className="col-span-2">Correct answers: </p>
          {state[currentIndex][language.toMatch].map((trans, index) => (
            <>
              {index !== 0 && <p className="col-span-2" />}
              <p className="col-span-4" key={`exp-${index}`}>
                {trans}
              </p>
            </>
          ))}
        </div>
      ),
      correct: isValid,
    });
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      validate();
    }
  };

  return (
    <main className="flex justify-center pt-40 pb-10" suppressHydrationWarning>
      <div className="max-w-xl">
        <div className="flex">
          <p className="bg-semi-black shadow-xl rounded-lg px-3 py-2 mb-3 border border-gray w-fit mr-3 text-white">
            {currentIndex + 1}
            <span className="text-blue">/</span>
            {state.length}
          </p>{" "}
          <p className="bg-semi-black shadow-xl rounded-lg px-3 py-2 mb-3 border border-gray w-fit mr-3 text-light-green">
            {correctCounter}
          </p>
          <p className="bg-semi-black shadow-xl rounded-lg px-3 py-2 mb-3 border border-gray w-fit mr-3 text-red">
            {wrongCounter}
          </p>
        </div>
        {message ? (
          <div className="flex justify-center pb-4 text-white">
            <div
              className={`shadow appearance-none border ${
                message.correct ? "border-light-green" : "border-red"
              } rounded-lg w-[36rem] py-3 px-4 text-whiteas bg-black font-medium`}
            >
              <span
                className={`divide-y-2 ${
                  message.correct ? "divide-green" : "divide-red"
                }`}
              >
                <h1 className="font-bold pb-1 text-center">
                  {message.correct ? "Correct" : "Wrong"}
                </h1>
                <div className="pt-1">
                  <p>{message.value}</p>
                  <button
                    className="bg-gray hover:border-hover-gray border border-[rgba(240,246,252,0.1)] rounded-lg py-1 px-3 w-full mt-2 pointer-events-auto"
                    // onClick={next}
                    onKeyDown={next}
                    autoFocus
                  >
                    Continue
                  </button>
                </div>
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full m-auto bg-semi-black shadow-xl rounded-lg px-6 py-5 mb-4 border border-gray">
            <span className="divide-y-2 divide-blue">
              <p className="block mb-2 ml-1 font-bold text-white">
                Translate the following {state[currentIndex].type} from{" "}
                {language.displayed} to {language.toMatch}
              </p>
              <div className="mb-4">
                <label className="block text-white mb-2 ml-1 mt-1">
                  {displayedText}
                </label>
                <input
                  className="shadow appearance-none border border-gray rounded-lg w-full py-1.5 px-3 text-white leading-tight focus:outline focus:outline-blue focus:shadow-outline bg-black"
                  id="email"
                  type="text"
                  placeholder="Type here..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  required
                  autoComplete="off"
                  autoFocus
                  spellCheck={false}
                />
              </div>
            </span>
            <button
              className="bg-dark-green hover:bg-light-green text-white py-1.5 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full block"
              onClick={validate}
            >
              Validate
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Practice;
