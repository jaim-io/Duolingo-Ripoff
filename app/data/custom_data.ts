import { Phrase, Sentence, Word } from "../types/domain";

const words: Word[] = [
  {
    type: "word",
    italian: ["il chicco di cafè"],
    dutch: ["de koffie boon"],
  },
  {
    type: "word",
    italian: ["la spiagga"],
    dutch: ["het strand"],
  },
  {
    type: "word",
    italian: ["pere siempe"],
    dutch: ["bijvoorbeeld"],
  },
  {
    type: "word",
    italian: ["sempre"],
    dutch: ["altijd"],
  },
  {
    type: "word",
    italian: ["la domanda"],
    dutch: ["de vraag"],
  },
];

const sentences: Sentence[] = [
  {
    type: "sentence",
    italian: ["Compro sempre Chianti."],
    dutch: ["Ik koop altijd Chianti."],
  },
  {
    type: "sentence",
    italian: ["Mi piace la spiagga."],
    dutch: ["Ik hou van het strand."],
  },
  {
    type: "sentence",
    italian: ["Un bel piatto di spaghetti."],
    dutch: ["Een goed bord spaghetti."],
  },
  {
    type: "sentence",
    italian: ["Non ho capito."],
    dutch: ["Ik heb het niet begrepen."],
  },
  {
    type: "sentence",
    italian: ["Mi dispiace, non lo so."],
    dutch: ["Het spijt me, ik weet het niet."],
  },
  {
    type: "sentence",
    italian: ["Puoi riptere, per favore?"],
    dutch: ["Kan je het herhalen, alsjeblieft."],
  },
  {
    type: "sentence",
    italian: ["Che cosa significa?"],
    dutch: ["Wat betekent het?"],
  },
  {
    type: "sentence",
    italian: ["Come si pronucia?"],
    dutch: ["Hoe spreek je dat uit?"],
  },
  {
    type: "sentence",
    italian: ["Ho una domanda."],
    dutch: ["Ik heb een vraag."],
  },
  {
    type: "sentence",
    italian: ["Posso andare al bagno, per favore?"],
    dutch: ["Mag ik naar het toilet, alsjeblieft?"],
  },
  {
    type: "sentence",
    italian: ["Qual'è il tuo numero di telefono?"],
    dutch: ["Wat is jouw telefoonnummer?"],
  },
];

const phrases: Phrase[] = [
  {
    type: "phrase",
    italian: ["buongiorno"],
    dutch: ["goede morgen"],
  },
  {
    type: "phrase",
    italian: ["buon pomeriggio"],
    dutch: ["goede middag"],
  },
  {
    type: "phrase",
    italian: ["buonasera"],
    dutch: ["goede avond"],
  },
  {
    type: "phrase",
    italian: ["buonanotte"],
    dutch: ["goede nacht"],
  },
  {
    type: "phrase",
    italian: ["a dopo"],
    dutch: ["tot zo"],
  },
  {
    type: "phrase",
    italian: ["a domani"],
    dutch: ["tot morgen"],
  },
];

const custom_data = {
  words,
  sentences,
  phrases,
};

export default custom_data;
