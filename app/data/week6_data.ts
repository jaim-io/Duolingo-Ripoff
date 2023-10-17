import {Data, Phrase, RegularVerb, Sentence, Word,} from "../types/domain";

const words: Word[] = [
    {
        type: "word",
        italian: ["la montagna"],
        dutch: ["de bergen"],
    },
    {
        type: "word",
        italian: ["il mare"],
        dutch: ["de zee"],
    },
    {
        type: "word",
        italian: ["prenotare"],
        dutch: ["reserveren"],
    },
    {
        type: "word",
        italian: ["la camera"],
        dutch: ["de kamer"],
    },
    {
        type: "word",
        italian: ["la prenotazione"],
        dutch: ["de reservering"],
    },
    {
        type: "word",
        italian: ["le persone"],
        dutch: ["de personen"],
    },
    {
        type: "word",
        italian: ["le persone"],
        dutch: ["de personen"],
    },
    {
        type: "word",
        italian: ["gli adulti"],
        dutch: ["de volwassenen"],
    },
    {
        type: "word",
        italian: ["il mare"],
        dutch: ["de zee"],
    },
];

const sentences: Sentence[] = [
    {
        type: "sentence",
        italian: ["Andiamo al museo?"],
        dutch: ["Zullen we naar het museum gaan?", "Gaan we naar het museum?"],
    },
    {
        type: "sentence",
        italian: ["Vado al ristorante e mangio una pizza.", "Io vado al ristorante e mangio una pizza."],
        dutch: ["Ik ga naar het restaurant en eet een pizza."],
    },
    {
        type: "sentence",
        italian: ["Vado in montagna.", "Io vado in montagna."],
        dutch: ["Ik ga naar de bergen."],
    },
    {
        type: "sentence",
        italian: ["Vai al mare?", "Tu vai al mare?"],
        dutch: ["Ga je naar de zee?"],
    },
    {
        type: "sentence",
        italian: ["Domani andiamo in Italia."],
        dutch: ["Morgen gaan we naar Italië."],
    },
    {
        type: "sentence",
        italian: ["Vado in vacanza.", "Io vado in vacanza."],
        dutch: ["Ik ga op vakantie."],
    },
    {
        type: "sentence",
        italian: ["Andate a Roma?", "Voi andate a Roma?"],
        dutch: ["Gaan jullie naar Rome?"],
    },
    {
        type: "sentence",
        italian: ["Dove vuoi andara in Italia?"],
        dutch: ["Waar wil je naartoe in Italië?"],
    },
    {
        type: "sentence",
        italian: ["Che cosa vuoi fare?", "Cosa vuoi fare?", "Che vuoi fare?"],
        dutch: ["Waar wil je naartoe in Italië?"],
    },
    {
        type: "sentence",
        italian: ["E dove?"],
        dutch: ["En waar?"],
    },
    {
        type: "sentence",
        italian: ["Vorrei prenotare una camera doppia.", "Io vorrei prenotare una camera doppia."],
        dutch: ["Ik wil graag een tweepersoonskamer reserveren."],
    },
    {
        type: "sentence",
        italian: ["Vorrei fare una prenotazione per due persone.", "Io vorrei fare una prenotazione per due persone."],
        dutch: ["Ik wil graag een reservering voor twee personen maken."],
    },
    {
        type: "sentence",
        italian: ["Siamo in due.", "Noi siamo in due."],
        dutch: ["Wij zijn met z'n tweeën."],
    },
    {
        type: "sentence",
        italian: ["Siamo in un gruppo di cinque persone.", "Noi siamo in un gruppo di cinque persone."],
        dutch: ["Wij zijn met een groep van vijf personen."],
    },
    {
        type: "sentence",
        italian: ["Siamo in un gruppo di studenti.", "Noi siamo in un gruppo di studenti."],
        dutch: ["Wij zijn met een groep studenten."],
    },
    {
        type: "sentence",
        italian: ["Pensiamo di arrivare verso mezzogiorno o nel pomeriggio."],
        dutch: ["We verwachten rond de middag of in de middag aan te komen."],
    },
    {
        type: "sentence",
        italian: ["In attesa della Vs. risposta inviamo distinti saluti."],
        dutch: ["In afwachting van uw reactie sturen wij u onze vriendelijke groeten."],
    },
    {
        type: "sentence",
        italian: ["Sabato mattina prendo l'aereo all 9.", "Sabato mattina prendo l'aereo all nove."],
        dutch: ["Zaterdagochtend neem ik het vliegtuig om 9 uur.", "Zaterdagochtend neem ik het vliegtuig om negen uur."],
    },
    {
        type: "sentence",
        italian: ["Arrivo a Roma alle 13.", "Io arrivo a Roma alle 13."],
        dutch: ["Ik kom om 13 uur in Rome aan."],
    },
];

const phrases: Phrase[] = [
    {
        type: "phrase",
        italian: ["al ristorante"],
        dutch: ["naar het restaurant"],
    },
    {
        type: "phrase",
        italian: ["allo zoo"],
        dutch: ["naar de dierentuin"],
    },
    {
        type: "phrase",
        italian: ["a scuola"],
        dutch: ["naar school"],
    },
    {
        type: "phrase",
        italian: ["Abbiamo ancora una domanda."],
        dutch: ["Wij hebben nog één vraag."],
    },
];


const regularVerbs: RegularVerb[] = [
    {
        type: "regular verb",
        italian: ["prenotare"],
        dutch: ["reserveren"],
    },
    {
        type: "regular verb",
        italian: ["io prenoto", "prenoto"],
        dutch: ["ik reserveer"],
    },
    {
        type: "regular verb",
        italian: ["tu prenoti", "prenoti"],
        dutch: ["jij reserveert"],
    },
    {
        type: "regular verb",
        italian: ["lei prenota"],
        dutch: ["zei reserveert"],
    },
    {
        type: "regular verb",
        italian: ["noi prenotiamo", "prenotiamo"],
        dutch: ["wij reserveren"],
    },
    {
        type: "regular verb",
        italian: ["voi prenotate", "prenotate"],
        dutch: ["jullie reserveren"],
    },
    {
        type: "regular verb",
        italian: ["loro prenotano", "prenotano"],
        dutch: ["hun reserveren"],
    },
]

const week6_data: { [key: string]: Data[] } = {
    words,
    sentences,
    phrases,
    "regular verbs": regularVerbs
};

export default week6_data;
