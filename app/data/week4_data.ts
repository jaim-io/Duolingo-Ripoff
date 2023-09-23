import {
  Data,
  IrregularVerb,
  Phrase,
  RegularVerb,
  Sentence,
  Word,
} from "../types/domain";

const words: Word[] = [
  {
    type: "word",
    italian: ["la pizza"],
    dutch: ["de pizza"],
  },
  {
    type: "word",
    italian: ["il calcio"],
    dutch: ["voetbal"],
  },
  {
    type: "word",
    italian: ["ballare"],
    dutch: ["dansen"],
  },
  {
    type: "word",
    italian: ["primavera"],
    dutch: ["lente"],
  },
  {
    type: "word",
    italian: ["estate"],
    dutch: ["zomer"],
  },
  {
    type: "word",
    italian: ["autunno"],
    dutch: ["herfst"],
  },
  {
    type: "word",
    italian: ["inverno"],
    dutch: ["winter"],
  },
  {
    type: "word",
    italian: ["gennaio"],
    dutch: ["januari"],
  },
  {
    type: "word",
    italian: ["febbraio"],
    dutch: ["februari"],
  },
  {
    type: "word",
    italian: ["marzo"],
    dutch: ["maart"],
  },
  {
    type: "word",
    italian: ["aprile"],
    dutch: ["april"],
  },
  {
    type: "word",
    italian: ["maggio"],
    dutch: ["mei"],
  },
  {
    type: "word",
    italian: ["giugno"],
    dutch: ["juni"],
  },
  {
    type: "word",
    italian: ["luglio"],
    dutch: ["juli"],
  },
  {
    type: "word",
    italian: ["agosto"],
    dutch: ["augustus"],
  },
  {
    type: "word",
    italian: ["settembre"],
    dutch: ["september"],
  },
  {
    type: "word",
    italian: ["ottobre"],
    dutch: ["october"],
  },
  {
    type: "word",
    italian: ["novembre"],
    dutch: ["november"],
  },
  {
    type: "word",
    italian: ["dicembre"],
    dutch: ["december"],
  },
  {
    type: "word",
    italian: ["il lunedì"],
    dutch: ["maandag"],
  },
  {
    type: "word",
    italian: ["il martedì"],
    dutch: ["dinsdag"],
  },
  {
    type: "word",
    italian: ["il mercoledè"],
    dutch: ["woensdag"],
  },
  {
    type: "word",
    italian: ["il giovedì"],
    dutch: ["donderdag"],
  },
  {
    type: "word",
    italian: ["il venerdì"],
    dutch: ["vrijdag"],
  },
  {
    type: "word",
    italian: ["il sabato"],
    dutch: ["zaterdag"],
  },
  {
    type: "word",
    italian: ["la domenica"],
    dutch: ["zondag"],
  },
  {
    type: "word",
    italian: ["di mattina"],
    dutch: ["in de ochtend "],
  },
  {
    type: "word",
    italian: ["di pomeriggio"],
    dutch: ["in de middag"],
  },
  {
    type: "word",
    italian: ["di sera"],
    dutch: ["in de avond"],
  },
  {
    type: "word",
    italian: ["di notte"],
    dutch: ["in de nacht"],
  },
];

const sentences: Sentence[] = [
  {
    type: "sentence",
    italian: ["Ti piace la musica italiana?"],
    dutch: ["Vind jij Italiaanse muziek leuk?"],
  },
  {
    type: "sentence",
    italian: ["No, non mi piace."],
    dutch: ["Nee, ik vind het niet leuk."],
  },
  {
    type: "sentence",
    italian: ["Mi piacciono gli spaghetti."],
    dutch: ["Ik hou van spaghetti."],
  },
  {
    type: "sentence",
    italian: ["A te piace il calcio.", "Ti piace il calcio."],
    dutch: ["Jij vindt voetbal leuk."],
  },
  {
    type: "sentence",
    italian: ["A me piace l'opera."],
    dutch: ["Ik hou van opera."],
  },
];

const irregularVerbs: IrregularVerb[] = [
  {
    type: "irregular verb",
    italian: ["io vado", "vado"],
    dutch: ["ik gaan"],
  },
  {
    type: "irregular verb",
    italian: ["tu vai", "vai"],
    dutch: ["jij gaat"],
  },
  {
    type: "irregular verb",
    italian: ["lei va"],
    dutch: ["zij gaat"],
  },
  {
    type: "irregular verb",
    italian: ["noi andiamo", "andiamo"],
    dutch: ["wij gaan"],
  },
  {
    type: "irregular verb",
    italian: ["voi andata", "andata"],
    dutch: ["jullie gaan"],
  },
  {
    type: "irregular verb",
    italian: ["loro vanno", "vanno"],
    dutch: ["hun gaan"],
  },
  {
    type: "irregular verb",
    italian: ["io faccio", "faccio"],
    dutch: ["ik doe"],
  },
  {
    type: "irregular verb",
    italian: ["tu fai", "fai"],
    dutch: ["jij doet"],
  },
  {
    type: "irregular verb",
    italian: ["lei fa"],
    dutch: ["zij doet"],
  },
  {
    type: "irregular verb",
    italian: ["noi facciamo", "facciamo"],
    dutch: ["wij doen"],
  },
  {
    type: "irregular verb",
    italian: ["voi fate", "fate"],
    dutch: ["jullie doen"],
  },
  {
    type: "irregular verb",
    italian: ["loro fanno", "fanno"],
    dutch: ["hun doen"],
  },
];

const week4_data: { [key: string]: Data[] } = {
  words,
  sentences,
  "irregular verbs": irregularVerbs,
};

export default week4_data;
