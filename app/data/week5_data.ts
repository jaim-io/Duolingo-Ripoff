import {Data, IrregularVerb, Phrase, RegularVerb, Sentence, Word,} from "../types/domain";

const words: Word[] = [
    {
        type: "word",
        italian: ["il treno"],
        dutch: ["de trein"],
    },
    {
        type: "word",
        italian: ["la bicicletta", "la bici"],
        dutch: ["de fiets"],
    },
    {
        type: "word",
        italian: ["l'aereo"],
        dutch: ["het vliegtuig"],
    },
    {
        type: "word",
        italian: ["l'auto", "la macchina"],
        dutch: ["de auto"],
    },
    {
        type: "word",
        italian: ["l'autobus"],
        dutch: ["de bus"],
    },
    {
        type: "word",
        italian: ["lo zoo"],
        dutch: ["de dierentuin"],
    },
    {
        type: "word",
        italian: ["la strada"],
        dutch: ["de straat"],
    },
    {
        type: "word",
        italian: ["la piazza"],
        dutch: ["het plein"],
    },
    {
        type: "word",
        italian: ["il duomo"],
        dutch: ["de dom"],
    },
    {
        type: "word",
        italian: ["il binario"],
        dutch: ["het spoor"],
    },
    {
        type: "word",
        italian: ["l'opsedale"],
        dutch: ["het ziekenhuis"],
    },
    {
        type: "word",
        italian: ["la stazione centrale"],
        dutch: ["het centraal station"],
    },
    {
        type: "word",
        italian: ["la farmacia"],
        dutch: ["de apotheek"],
    },
    {
        type: "word",
        italian: ["la fermata"],
        dutch: ["de halte"],
    },
    {
        type: "word",
        italian: ["prossima"],
        dutch: ["volgende"],
    },
    {
        type: "word",
        italian: ["alla"],
        dutch: ["bij de"],
    },
    {
        type: "word",
        italian: ["per"],
        dutch: ["naar"],
    },
];

const sentences: Sentence[] = [
    {
        type: "sentence",
        italian: ["Dove vai?"],
        dutch: ["Waar ga je naartoe?"],
    },
    {
        type: "sentence",
        italian: ["Come arrivare ad Arezzo?"],
        dutch: ["Hoe kom je in Arezzo?", "Hoe kom ik in Arezzo?"],
    },
    {
        type: "sentence",
        italian: ["Io vado ad Arezzo.", "Vado ad Arezzo."],
        dutch: ["Ik ga naar Arezzo."],
    },
    {
        type: "sentence",
        italian: ["Io vado in treno.", "Vado in treno."],
        dutch: ["Ik ga met de trein."],
    },
    {
        type: "sentence",
        italian: ["Io vado a piedi.", "Vado a piedi."],
        dutch: ["Ik ga lopend.", "Ik ga te voet.", "Ik loop."],
    },
    {
        type: "sentence",
        italian: ["Scusi, dov'è l'ospedale?"],
        dutch: ["Pardon, waar is het ziekenhuis?", "Sorry excuseert u mij, waar is het ziekenhuis?"],
    },
    {
        type: "sentence",
        italian: ["Scusi, sa dov'è la stazione centrale?"],
        dutch: ["Pardon, weet u waar het centraal station is?", "Sorry excuseert u mij, weet u waar het centraal station is?"],
    },
    {
        type: "sentence",
        italian: ["Scusa, dov'è il duomo?"],
        dutch: ["Pardon, waar is de dom?", "Sorry, waar is de dom?"],
    },
    {
        type: "sentence",
        italian: ["Scusa, sai dov'è la scuola?"],
        dutch: ["Pardon, weet je waar de school is?", "Sorry, weet je waar de school is?"],
    },
    {
        type: "sentence",
        italian: ["C'è una farmacia qui vicino?"],
        dutch: ["Is er een apotheek dichtbij?"],
    },
    {
        type: "sentence",
        italian: ["Cerco il museo.", "Io cerco il museo."],
        dutch: ["Ik zoek het museum."],
    },
    {
        type: "sentence",
        italian: ["Devi girare a destra.", "Tu devi girare a destra."],
        dutch: ["Je moet rechtsaf slaan."],
    },
    {
        type: "sentence",
        italian: ["Devi andare a destra.", "Tu devi andare a destra."],
        dutch: ["Je moet naar rechts gaan."],
    },
    {
        type: "sentence",
        italian: ["Il treno parte dal binario tre."],
        dutch: ["De trein vertrekt vanaf spoor drie.", "De trein vertrekt vanaf spoor 3."],
    },
    {
        type: "sentence",
        italian: ["A che ora parte l'autobus per Madrid?"],
        dutch: ["Hoelaat vertrek de bus naar Madrid?"],
    },
    {
        type: "sentence",
        italian: ["Dove parte il treno per Roma?"],
        dutch: ["Waar vertrek de trein naar Roma?"],
    },
    {
        type: "sentence",
        italian: ["Puoi prendere l'autobus numero quattro."],
        dutch: ["Je kan bus nummer 4 nemen.", "Je kan bus nummer vier nemen.", "Je kunt bus nummer 4 nemen.", "Je kunt bus nummer vier nemen."],
    },
    {
        type: "sentence",
        italian: ["Devo scendere alla prossima fermata.", "Io devo scendere alla prossima fermata."],
        dutch: ["Ik moet bij de volgende halte uitstappen."],
    },
];

const regularVerbs: RegularVerb[] = [
    {
        type: "regular verb",
        italian: ["arrivare"],
        dutch: ["aankomen"],
    },
    {
        type: "regular verb",
        italian: ["io arrivo", "arrivo"],
        dutch: ["ik kom aan"],
    },
    {
        type: "regular verb",
        italian: ["tu arrivi", "arrivi"],
        dutch: ["jij komt aan"],
    },
    {
        type: "regular verb",
        italian: ["lei arriva"],
        dutch: ["zei komt aan"],
    },
    {
        type: "regular verb",
        italian: ["noi arriviamo", "arriviamo"],
        dutch: ["wij komen aan"],
    },
    {
        type: "regular verb",
        italian: ["voi arrivate", "arrivate"],
        dutch: ["jullie komen aan"],
    },
    {
        type: "regular verb",
        italian: ["loro arrivano", "arrivano"],
        dutch: ["hun komen aan"],
    },
    {
        type: "regular verb",
        italian: ["partire"],
        dutch: ["vertrekken"],
    },
    {
        type: "regular verb",
        italian: ["io parto", "parto"],
        dutch: ["ik vertrek"],
    },
    {
        type: "regular verb",
        italian: ["tu parti", "parti"],
        dutch: ["jij vertrekt"],
    },
    {
        type: "regular verb",
        italian: ["Lei parte"],
        dutch: ["u vertrekt"],
    },
    {
        type: "regular verb",
        italian: ["noi partiamo", "partiamo"],
        dutch: ["wij vertrekken"],
    },
    {
        type: "regular verb",
        italian: ["voi partite", "partite"],
        dutch: ["jullie vertrekken"],
    },
    {
        type: "regular verb",
        italian: ["loro partono", "partono"],
        dutch: ["hun vertrekken"],
    },
];

const irregularVerbs: IrregularVerb[] = [
    {
        type: "irregular verb",
        italian: ["dovere"],
        dutch: ["moeten"],
    },
    {
        type: "irregular verb",
        italian: ["io devo", "devo"],
        dutch: ["ik moet"],
    },
    {
        type: "irregular verb",
        italian: ["tu devi", "devi"],
        dutch: ["jij moet"],
    },
    {
        type: "irregular verb",
        italian: ["lui deve"],
        dutch: ["hij moet"],
    },
    {
        type: "irregular verb",
        italian: ["noi dobbiamo", "dobbiamo"],
        dutch: ["wij moeten"],
    },
    {
        type: "irregular verb",
        italian: ["voi dovete", "dovete"],
        dutch: ["jullie moeten"],
    },
    {
        type: "irregular verb",
        italian: ["loro devono", "devono"],
        dutch: ["hun moeten"],
    },
    {
        type: "irregular verb",
        italian: ["potere"],
        dutch: ["kunnen", "mogen"],
    },
    {
        type: "irregular verb",
        italian: ["io posso", "posso"],
        dutch: ["ik kan", "ik mag"],
    },
    {
        type: "irregular verb",
        italian: ["tu puoi", "puoi"],
        dutch: ["jij kan", "jij mag"],
    },
    {
        type: "irregular verb",
        italian: ["lui può"],
        dutch: ["hij kan", "hij mag"],
    },
    {
        type: "irregular verb",
        italian: ["noi possiamo", "possiamo"],
        dutch: ["wij kunnen", "wij mogen"],
    },
    {
        type: "irregular verb",
        italian: ["voi potete", "potete"],
        dutch: ["jullie kunnen", "jullie mogen"],
    },
    {
        type: "irregular verb",
        italian: ["loro possono", "possono"],
        dutch: ["hun kunnen", "hun mogen"],
    },
];

const phrases: Phrase[] = [
    {
        type: "phrase",
        italian: ["è vicino"],
        dutch: ["het is dichtbij"],
    },
    {
        type: "phrase",
        italian: ["è lontano"],
        dutch: ["het is verweg"],
    },
    {
        type: "phrase",
        italian: ["girare a destra"],
        dutch: ["rechtsaf slaan"],
    },
    {
        type: "phrase",
        italian: ["girare a sinistra"],
        dutch: ["linksaf slaan"],
    },
    {
        type: "phrase",
        italian: ["andare sempre dritto"],
        dutch: ["altijd rechtdoor gaan"],
    },
    {
        type: "phrase",
        italian: ["continuare fino all'incrocio"],
        dutch: ["doorgaan tot aan het kruispunt", "doorgaan tot het kruispunt"],
    },
    {
        type: "phrase",
        italian: ["all'incrocio girare a sinistra"],
        dutch: ["op het kruispunt linksaf slaan"],
    },
    {
        type: "phrase",
        italian: ["all'incrocio girare a destra"],
        dutch: ["op het kruispunt rechtsaf slaan"],
    },
    {
        type: "phrase",
        italian: ["attraversare la piazza"],
        dutch: ["het plein oversteken"],
    },
];

const week5_data: { [key: string]: Data[] } = {
    words,
    sentences,
    "regular verbs": regularVerbs,
    "irregular verbs": irregularVerbs,
    phrases,
};

export default week5_data;
