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
  {
    type: "word",
    italian: ["oggi"],
    dutch: ["vandaag"],
  },
  {
    type: "word",
    italian: ["domani"],
    dutch: ["morgen"],
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
    italian: ["A me piace l'opera.", "Mi piace l'opera."],
    dutch: ["Ik hou van opera."],
  },
  {
    type: "sentence",
    italian: ["Ti piace viaggiare in Italia?"],
    dutch: ["Vind je het leuk om te reizen in Italië?"],
  },
  {
    type: "sentence",
    italian: ["Che ore sono?", "Che ora sono?"],
    dutch: ["Hoe laat is het?"],
  },
  {
    type: "sentence",
    italian: ["Io faccio sport.", "Faccio sport."],
    dutch: ["Ik doe aan sport."],
  },
  {
    type: "sentence",
    italian: ["Io vado in italia.", "Vado in italia."],
    dutch: ["Ik ga naar Italië."],
  },
  {
    type: "sentence",
    italian: ["Io vado a ballare.", "Vado a ballare."],
    dutch: ["Ik ga dansen."],
  },
  {
    type: "sentence",
    italian: ["La domenica vado in piscina."],
    dutch: ["Op zondag ga ik naar het zwembad."],
  },
  {
    type: "sentence",
    italian: ["La domenica gioco a tennis."],
    dutch: ["Op zondag speel ik tennis."],
  },
  {
    type: "sentence",
    italian: ["Die sera faccio una passeggiata"],
    dutch: ["`s Avonds ga ik wandelen.", "In de avond ga ik wandelen."],
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
    italian: ["voi andate", "andate"],
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

const timeTelling: Sentence[] = [
  {
    type: "sentence",
    italian: ["È mezzogiorno."],
    dutch: ["Het is middag."],
  },
  {
    type: "sentence",
    italian: ["È mezzanotte."],
    dutch: ["Het is middernacht."],
  },
  {
    type: "sentence",
    italian: ["È la mezza."],
    dutch: ["Het is half twaalf."],
  },
  {
    type: "sentence",
    italian: ["È l'una."],
    dutch: ["Het is een uur."],
  },
  {
    type: "sentence",
    italian: ["Sono le due."],
    dutch: ["Het is twee uur."],
  },
  {
    type: "sentence",
    italian: ["Sono le due e mezzo."],
    dutch: ["Het is half drie."],
  },
  {
    type: "sentence",
    italian: ["Sono le cinque e venticinque."],
    dutch: ["Het is 5 voor half vijf."],
  },
  {
    type: "sentence",
    italian: ["Sono le cinque e venticinque."],
    dutch: ["Het is 5 voor half vijf."],
  },
  {
    type: "sentence",
    italian: ["Sono dieci meno un quatro."],
    dutch: ["Het is kwart voor tien."],
  },
  {
    type: "sentence",
    italian: ["Oggi è il primo giugno."],
    dutch: ["Vandaag is het 1 juni.", "Vandaag is het een juni."],
  },
  {
    type: "sentence",
    italian: ["Domani comincia l'inverno."],
    dutch: ["Morgen begint de winter."],
  },
  {
    type: "sentence",
    italian: ["Di mattina vado a scuola."],
    dutch: ["Ik ga 's morgens naar school", "Ik ga in de ochtend naar school."],
  },
  {
    type: "sentence",
    italian: ["A mezzogiorno mangio il pranzo."],
    dutch: ["Tussen de middag eet ik lunch."],
  },
  {
    type: "sentence",
    italian: ["In estate vado in vacanza."],
    dutch: ["In de zomer ga ik op vakantie."],
  },
];

const phrases: Phrase[] = [
  {
    type: "phrase",
    italian: ["andare al cinema"],
    dutch: ["naar de bioscoop gaan"],
  },
  {
    type: "phrase",
    italian: ["fare sport"],
    dutch: ["aan sport doen"],
  },
  {
    type: "phrase",
    italian: ["dormire"],
    dutch: ["slapen"],
  },
  {
    type: "phrase",
    italian: ["fare shopping"],
    dutch: ["winkelen"],
  },
  {
    type: "phrase",
    italian: ["guardare la televisione"],
    dutch: ["televisie kijken"],
  },
  {
    type: "phrase",
    italian: ["ascoltare la muscia"],
    dutch: ["naar muziek aan het luisteren"],
  },
  {
    type: "phrase",
    italian: ["uscire"],
    dutch: ["uitgaan"],
  },
];

const week4_data: { [key: string]: Data[] } = {
  words,
  sentences,
  "irregular verbs": irregularVerbs,
  "time telling": timeTelling,
  phrases,
};

export default week4_data;
