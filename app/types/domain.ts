export type Data = {
  italian: string[];
  dutch: string[];
};

export type Language = keyof Data;

export type Word = Data & { type: "word" };
export type Sentence = Data & { type: "sentence" };
export type Phrase = Data & { type: "phrase" };
export type IrregularVerb = Data & { type: "irregular verb" };
export type RegularVerb = Data & { type: "regular verb" };
export type Numeric = Data & { type: "number" };

export type Translation = "it-nl" | "nl-it" | "random";

export const translations: {
  [key: string]: {
    from: Language;
    to: Language;
  };
} = {
  "it-nl": {
    from: "italian",
    to: "dutch",
  },
  "nl-it": {
    from: "dutch",
    to: "italian",
  },
};

export enum GuessState {
  NotGuessed,
  Correct,
  Wrong,
}

export type Entity = (Word | Sentence | Phrase | IrregularVerb) & {
  id: number;
  order: number;
} & (
    | { state: GuessState.NotGuessed }
    | { state: GuessState.Correct; guess: string; transFrom: Language; transTo: Language }
    | { state: GuessState.Wrong; guess: string; transFrom: Language; transTo: Language }
  );
