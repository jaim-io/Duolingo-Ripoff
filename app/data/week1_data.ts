import {
  Word,
  Sentence,
  Phrase,
  IrregularVerb,
  Numeric,
} from "../types/domain";

const words: Word[] = [
  {
    type: "word",
    italian: ["chi"],
    dutch: ["wie"],
  },
  {
    type: "word",
    italian: ["la amica"],
    dutch: ["de vriendin"],
  },
  {
    type: "word",
    italian: ["le amiche"],
    dutch: ["de vriendinnen"],
  },
  {
    type: "word",
    italian: ["l'amico"],
    dutch: ["de vriend"],
  },
  {
    type: "word",
    italian: ["gli amici"],
    dutch: ["de vrienden"],
  },
  {
    type: "word",
    italian: ["principessa"],
    dutch: ["princess"],
  },
  {
    type: "word",
    italian: ["e"],
    dutch: ["en"],
  },
  {
    type: "word",
    italian: ["a"],
    dutch: ["tot"],
  },
  {
    type: "word",
    italian: ["come"],
    dutch: ["hoe"],
  },
  {
    type: "word",
    italian: ["domani"],
    dutch: ["morgen"],
  },
  {
    type: "word",
    italian: ["dopo"],
    dutch: ["zo"],
  },
  {
    type: "word",
    italian: ["ciao", "salve"],
    dutch: ["hallo", "doei"],
  },
  {
    type: "word",
    italian: ["chiami"],
    dutch: ["naam"],
  },
  {
    type: "word",
    italian: ["anni"],
    dutch: ["jaar"],
  },
  {
    type: "word",
    italian: ["di"],
    dutch: ["van"],
  },
  {
    type: "word",
    italian: ["dove"],
    dutch: ["waar"],
  },
  {
    type: "word",
    italian: ["pere siempe"],
    dutch: ["bijvoorbeeld"],
  },
  {
    type: "word",
    italian: ["la cucina"],
    dutch: ["de keuken"],
  },
  {
    type: "word",
    italian: ["il gelato"],
    dutch: ["het ijs"],
  },
  {
    type: "word",
    italian: ["il chicco di cafè"],
    dutch: ["de koffie boon"],
  },
  {
    type: "word",
    italian: ["città"],
    dutch: ["stad"],
  },
  {
    type: "word",
    italian: ["gonna"],
    dutch: ["rok"],
  },
  {
    type: "word",
    italian: ["che", "cosa", "che cosa"],
    dutch: ["wat"],
  },
];

const sentences: Sentence[] = [
  {
    type: "sentence",
    italian: ["Quanto costa?"],
    dutch: ["Hoeveel kost het?"],
  },
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
    italian: ["Quanti anni hai?"],
    dutch: ["Hoe oud ben je?"],
  },
  {
    type: "sentence",
    italian: ["Come ti chiami?"],
    dutch: ["Hoe heet je?"],
  },
  {
    type: "sentence",
    italian: ["Come stai?"],
    dutch: ["Hoe gaat het?"],
  },
  {
    type: "sentence",
    italian: ["Ho ... ani."],
    dutch: ["Ik ben … jaar oud."],
  },
  {
    type: "sentence",
    italian: ["Di dove sei?"],
    dutch: ["Waar kom je vandaan?"],
  },
  {
    type: "sentence",
    italian: ["Dove abiti?"],
    dutch: ["Waar woon je?"],
  },
  {
    type: "sentence",
    italian: ["Qual'è il tuo numero di telefono?"],
    dutch: ["Wat is jouw telefoonnummer?"],
  },
  {
    type: "sentence",
    italian: ["Il mio numero di telefono è …"],
    dutch: ["Mijn telefoon nummer is …"],
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
    italian: ["arrivederci"],
    dutch: ["tot ziens"],
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
  {
    type: "phrase",
    italian: ["tuto bene"],
    dutch: ["alles goed"],
  },
  {
    type: "phrase",
    italian: ["così così"],
    dutch: ["so so"],
  },
  {
    type: "phrase",
    italian: ["no tanto bene"],
    dutch: ["niet zo goed"],
  },
  {
    type: "phrase",
    italian: ["benissimo"],
    dutch: ["heel goed"],
  },
  {
    type: "phrase",
    italian: ["bene"],
    dutch: ["goed"],
  },
];

const irregularVerbs: IrregularVerb[] = [
  {
    type: "irregular verb",
    italian: ["io sono", "sono"],
    dutch: ["ik ben"],
  },
  {
    type: "irregular verb",
    italian: ["tu sei", "sei"],
    dutch: ["jij bent"],
  },
  {
    type: "irregular verb",
    italian: ["lei è"],
    dutch: ["zei is"],
  },
  {
    type: "irregular verb",
    italian: ["lui è"],
    dutch: ["hij is"],
  },
  {
    type: "irregular verb",
    italian: ["Lei è"],
    dutch: ["u bent"],
  },
  {
    type: "irregular verb",
    italian: ["noi siamo", "siamo"],
    dutch: ["wij zijn"],
  },
  {
    type: "irregular verb",
    italian: ["voi siete", "siete"],
    dutch: ["jullie zijn"],
  },
  {
    type: "irregular verb",
    italian: ["loro sono", "sono"],
    dutch: ["hun zijn"],
  },
  {
    type: "irregular verb",
    italian: ["io ho", "ho"],
    dutch: ["ik heb"],
  },
  {
    type: "irregular verb",
    italian: ["tu hai", "hai"],
    dutch: ["jij hebt"],
  },
  {
    type: "irregular verb",
    italian: ["lei ha"],
    dutch: ["zei heeft"],
  },
  {
    type: "irregular verb",
    italian: ["lui ha"],
    dutch: ["hij heeft"],
  },
  {
    type: "irregular verb",
    italian: ["Lei ha"],
    dutch: ["u heeft"],
  },
  {
    type: "irregular verb",
    italian: ["noi abbiamo", "abbiamo"],
    dutch: ["wij hebben"],
  },
  {
    type: "irregular verb",
    italian: ["voi avete", "avete"],
    dutch: ["jullie hebben"],
  },
  {
    type: "irregular verb",
    italian: ["loro hanno", "hanno"],
    dutch: ["hun hebben"],
  },
];

const numbers: Numeric[] = [
  {
    type: "number",
    italian: ["uno"],
    dutch: ["een", "1"],
  },
  {
    type: "number",
    italian: ["due"],
    dutch: ["twee", "2"],
  },
  {
    type: "number",
    italian: ["tre"],
    dutch: ["drie", "3"],
  },
  {
    type: "number",
    italian: ["quattro"],
    dutch: ["vier", "4"],
  },
  {
    type: "number",
    italian: ["cinque"],
    dutch: ["vijf", "5"],
  },
  {
    type: "number",
    italian: ["sei"],
    dutch: ["zes", "6"],
  },
  {
    type: "number",
    italian: ["sette"],
    dutch: ["zeven", "7"],
  },
  {
    type: "number",
    italian: ["otto"],
    dutch: ["acht", "8"],
  },
  {
    type: "number",
    italian: ["nove"],
    dutch: ["negen", "9"],
  },
  {
    type: "number",
    italian: ["dieci"],
    dutch: ["tien", "10"],
  },
  {
    type: "number",
    italian: ["undici"],
    dutch: ["elf", "11"],
  },
  {
    type: "number",
    italian: ["dodici"],
    dutch: ["twaalf", "12"],
  },
  {
    type: "number",
    italian: ["tredici"],
    dutch: ["dertien", "13"],
  },
  {
    type: "number",
    italian: ["quattordici"],
    dutch: ["veertien", "14"],
  },
  {
    type: "number",
    italian: ["quindici"],
    dutch: ["vijftien", "15"],
  },
  {
    type: "number",
    italian: ["sedici"],
    dutch: ["zestien", "16"],
  },
  {
    type: "number",
    italian: ["diciasette"],
    dutch: ["zeventien", "17"],
  },
  {
    type: "number",
    italian: ["diciotto"],
    dutch: ["achttien", "18"],
  },
  {
    type: "number",
    italian: ["diciannove"],
    dutch: ["negentien", "19"],
  },
  {
    type: "number",
    italian: ["venti"],
    dutch: ["twintig", "20"],
  },
  {
    type: "number",
    italian: ["trenta"],
    dutch: ["dertig", "30"],
  },
  {
    type: "number",
    italian: ["quaranta"],
    dutch: ["veertig", "40"],
  },
  {
    type: "number",
    italian: ["cinquanta"],
    dutch: ["vijftig", "50"],
  },
];

const week1_data = {
  words,
  sentences,
  phrases,
  irregularVerbs,
  numbers,
};

export default week1_data;
