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

