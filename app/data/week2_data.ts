import {Data, Phrase, RegularVerb, Sentence, Word} from "../types/domain";

const words: Word[] = [
    {
        type: "word",
        italian: ["un caffè"],
        dutch: ["een koffie"],
    },
    {
        type: "word",
        italian: ["un negozio"],
        dutch: ["een winkel"],
    },
    {
        type: "word",
        italian: ["la lingua"],
        dutch: ["de taal"],
    },
    {
        type: "word",
        italian: ["storia"],
        dutch: ["geschiedenis"],
    },
    {
        type: "word",
        italian: ["comunicazione"],
        dutch: ["communicatie"],
    },
    {
        type: "word",
        italian: ["il bambino"],
        dutch: ["het kind", "het kleine jongetje"],
    },
    {
        type: "word",
        italian: ["la bambina"],
        dutch: ["het kleine meisje"],
    },
    {
        type: "word",
        italian: ["i bambini"],
        dutch: ["de kinderen", "de kleine jongetjes"],
    },
    {
        type: "word",
        italian: ["le bambine"],
        dutch: ["de kleine meisjes"],
    },
    {
        type: "word",
        italian: ["l'amico"],
        dutch: ["de vriend"],
    },
    {
        type: "word",
        italian: ["l'amica"],
        dutch: ["de vriendin"],
    },
    {
        type: "word",
        italian: ["gli amici"],
        dutch: ["de vrienden"],
    },
    {
        type: "word",
        italian: ["le amiche"],
        dutch: ["de vriendinnen"],
    },
    {
        type: "word",
        italian: ["lo studente"],
        dutch: ["de student"],
    },
    {
        type: "word",
        italian: ["gli studenti"],
        dutch: ["de studenten"],
    },
    {
        type: "word",
        italian: ["lo zio"],
        dutch: ["de oom"],
    },
    {
        type: "word",
        italian: ["la zia"],
        dutch: ["de tante"],
    },
    {
        type: "word",
        italian: ["gli zii"],
        dutch: ["de ooms en tantes", "de ooms", "de tantes en ooms"],
    },
    {
        type: "word",
        italian: ["il padre"],
        dutch: ["de vader"],
    },
    {
        type: "word",
        italian: ["la madre"],
        dutch: ["de moeder"],
    },
    {
        type: "word",
        italian: ["i genitori"],
        dutch: ["de ouders"],
    },
    {
        type: "word",
        italian: ["il fratello"],
        dutch: ["de broer"],
    },
    {
        type: "word",
        italian: ["la sorella"],
        dutch: ["de zus"],
    },
    {
        type: "word",
        italian: ["le sorelle"],
        dutch: ["de zussen"],
    },
    {
        type: "word",
        italian: ["i fratelli"],
        dutch: ["de broers en zussen", "de broers", "de zussen en broers"],
    },
    {
        type: "word",
        italian: ["il nonno"],
        dutch: ["de opa"],
    },
    {
        type: "word",
        italian: ["la nonna"],
        dutch: ["de oma"],
    },
    {
        type: "word",
        italian: ["i nonni"],
        dutch: ["de grootouders"],
    },
    {
        type: "word",
        italian: ["i nipoti"],
        dutch: ["de kleinkinderen"],
        //  "de nichten en neven", "de neven en nichten"
    },
    {
        type: "word",
        italian: ["i cugini"],
        dutch: ["de nichten en neven", "de neven en nichten"],
    },
    {
        type: "word",
        italian: ["il figlio"],
        dutch: ["de zoon"],
    },
    {
        type: "word",
        italian: ["la figlia"],
        dutch: ["de dochter"],
    },
    {
        type: "word",
        italian: ["i figli"],
        dutch: ["de kinderen", "de zoons en dochters"],
    },
    {
        type: "word",
        italian: ["il fidanzato", "la fidanzata"],
        dutch: ["de verloofde"],
    },
    {
        type: "word",
        italian: ["i fidanzati"],
        dutch: ["de verloofden"],
    },
    {
        type: "word",
        italian: ["il marito"],
        dutch: ["de echtgenoot"],
    },
    {
        type: "word",
        italian: ["la moglie"],
        dutch: ["de echtgenote"],
    },
];

const sentences: Sentence[] = [
    {
        type: "sentence",
        italian: ["Che cosa fai?", "Cosa fai?", "Che fai?"],
        dutch: ["Wat doe jij?"],
    },
    {
        type: "sentence",
        italian: ["Cosa fa tua sorella?"],
        dutch: ["Wat doet je zus?"],
    },
    {
        type: "sentence",
        italian: ["Mia sorella lavora in un ristorante."],
        dutch: ["Mijn zus werkt in een restaurant."],
    },
    {
        type: "sentence",
        italian: ["Lavoro in un ristorante.", "Io lavoro in un ristorante."],
        dutch: ["Ik werk in een restaurant."],
    },
    {
        type: "sentence",
        italian: ["Cosa studi?", "Che cosa studi?", "Che studi?"],
        dutch: ["Wat studeer je?"],
    },
    {
        type: "sentence",
        italian: ["Studio la lingua italiana."],
        dutch: ["Ik studeer de italiaanse taal."],
    },
    {
        type: "sentence",
        italian: ["Di dov'è tua famiglia?", "Da dove viene la tua famiglia?"],
        dutch: ["Waar komt je familie vandaan?"],
    },
    {
        type: "sentence",
        italian: ["La mia famiglia è di Rotterdam."],
        dutch: ["Mijn familie komt uit Rotterdam."],
    },
    {
        type: "sentence",
        italian: ["Quanti fratelli hai?"],
        dutch: ["Hoeveel broers heb jij?", "Hoeveel broers en zussen heb jij?"],
    },
    {
        type: "sentence",
        italian: [
            "Ho due sorelle e uno fratello.",
            "Io ho due sorelle e uno fratello.",
        ],
        dutch: ["Ik heb twee zussen en een broer."],
    },
    {
        type: "sentence",
        italian: ["Quanti anni ha tua nonna?"],
        dutch: ["Hoe oud is je oma?"],
    },
    {
        type: "sentence",
        italian: ["Mia nonna ha novant'anni."],
        dutch: [
            "Mijn oma is 90 jaar.",
            "Mijn oma is 90 jaar oud.",
            "Mijn oma is negentig jaar.",
            "Mijn oma is negentig jaar oud.",
        ],
    },
    {
        type: "sentence",
        italian: ["Come si chiama tua sorella?"],
        dutch: ["Hoe heet je zus?", "Wat is de naam van je zus?"],
    },
    {
        type: "sentence",
        italian: ["Mia sorella si chiama Julia."],
        dutch: ["Mijn zus heet Julia."],
    },
    {
        type: "sentence",
        italian: ["Hai bambini?", "Hai figli?"],
        dutch: ["Heb je kinderen?"],
    },
    {
        type: "sentence",
        italian: ["Sì, ho una bambina di due anni."],
        dutch: [
            "Ja, ik heb een meisje van twee jaar.",
            "Ja, ik heb een meisje van twee jaar oud.",
            "Ja, ik heb een meisje van 2 jaar.",
            "Ja, ik heb een meisje van 2 jaar oud.",
        ],
    },
    {
        type: "sentence",
        italian: ["Dove lavora tuo fratello?"],
        dutch: ["Waar werkt je broer?"],
    },
    {
        type: "sentence",
        italian: ["Mio fratello lavora a Rotterdam."],
        dutch: ["Mijn broer werkt in Rotterdam."],
    },
    {
        type: "sentence",
        italian: ["Quanti nipoti ha tua nonna?"],
        dutch: ["Hoeveel kleinkinderen heeft je oma?"],
    },
    {
        type: "sentence",
        italian: ["Mia nonna ha nove nipoti."],
        dutch: [
            "Mijn oma heeft 9 kleinkinderen.",
            "Mijn oma heeft negen kleinkinderen.",
        ],
    },
    {
        type: "sentence",
        italian: ["Come si chiama tua madre?"],
        dutch: ["Hoe heet je moeder?", "Wat is de naam van je moeder?"],
    },
    {
        type: "sentence",
        italian: ["Mia madre si chiama Alicia."],
        dutch: ["Mijn moeder heet Alicia."],
    },
    {
        type: "sentence",
        italian: ["Che lavoro fa tuo padre?"],
        dutch: ["Wat voor werkt doet je vader?"],
    },
    {
        type: "sentence",
        italian: ["Mio padre è un dottore."],
        dutch: ["Mijn vader is een dokter.", "Mijn vader is een arts."],
    },
    {
        type: "sentence",
        italian: ["Quanti anni ha tua sorellina?"],
        dutch: ["Hoe oud is je zusje?"],
    },
    {
        type: "sentence",
        italian: ["Mia sorellina ha sei anni."],
        dutch: [
            "Mijn zusje is zes jaar.",
            "Mijn zusje is zes jaar oud.",
            "Mijn zusje is 6 jaar.",
            "Mijn zusje is 6 jaar oud.",
        ],
    },
];

const phrases: Phrase[] = [
    {
        type: "phrase",
        italian: ["la mia bella famiglia italiana"],
        dutch: [
            "mijn mooie Italiaanse familie",
            "mijn prachtige Italiaanse familie",
        ],
    },
    {
        type: "phrase",
        italian: ["le mie belle famiglie italiane"],
        dutch: [
            "mijn mooie Italiaanse families",
            "mijn prachtige Italiaanse families",
        ],
    },
    {
        type: "phrase",
        italian: ["mio fratello"],
        dutch: ["mijn broer"],
    },
    {
        type: "phrase",
        italian: ["mie sorelle"],
        dutch: ["mijn zussen"],
    },
    {
        type: "phrase",
        italian: ["mia nonna"],
        dutch: ["mijn oma"],
    },
];

const regularVerbs: RegularVerb[] = [
    {
        type: "regular verb",
        italian: ["io parlo", "parlo"],
        dutch: ["ik spreek"],
    },
    {
        type: "regular verb",
        italian: ["tu parli", "parli"],
        dutch: ["jij spreekt"],
    },
    {
        type: "regular verb",
        italian: ["lei parla"],
        dutch: ["zei spreekt"],
    },
    {
        type: "regular verb",
        italian: ["lui parla"],
        dutch: ["hij spreekt"],
    },
    {
        type: "regular verb",
        italian: ["Lei parla"],
        dutch: ["u spreekt"],
    },
    {
        type: "regular verb",
        italian: ["noi parliamo", "parliamo"],
        dutch: ["wij spreken"],
    },
    {
        type: "regular verb",
        italian: ["voi parlate", "parlate"],
        dutch: ["jullie spreken"],
    },
    {
        type: "regular verb",
        italian: ["loro parlano", "parlano"],
        dutch: ["hun spreken"],
    },
    {
        type: "regular verb",
        italian: ["io studio", "studio"],
        dutch: ["ik studeer"],
    },
    {
        type: "regular verb",
        italian: ["tu studi", "studi"],
        dutch: ["jij studeert"],
    },
    {
        type: "regular verb",
        italian: ["lei studia"],
        dutch: ["zei studeert"],
    },
    {
        type: "regular verb",
        italian: ["lui studia"],
        dutch: ["hij studeert"],
    },
    {
        type: "regular verb",
        italian: ["Lei studia"],
        dutch: ["u studeert"],
    },
    {
        type: "regular verb",
        italian: ["noi studiamo", "studiamo"],
        dutch: ["wij studeren"],
    },
    {
        type: "regular verb",
        italian: ["voi studiate", "studiate"],
        dutch: ["jullie studeren"],
    },
    {
        type: "regular verb",
        italian: ["loro studiano", "studiano"],
        dutch: ["hun studeren"],
    },
    {
        type: "regular verb",
        italian: ["io lavoro", "lavoro"],
        dutch: ["ik werk"],
    },
    {
        type: "regular verb",
        italian: ["tu lavori", "lavori"],
        dutch: ["jij werkt"],
    },
    {
        type: "regular verb",
        italian: ["lei lavora"],
        dutch: ["zei werkt"],
    },
    {
        type: "regular verb",
        italian: ["lui lavora"],
        dutch: ["hij werkt"],
    },
    {
        type: "regular verb",
        italian: ["Lei lavora"],
        dutch: ["u werkt"],
    },
    {
        type: "regular verb",
        italian: ["noi lavoriamo", "lavoriamo"],
        dutch: ["wij werken"],
    },
    {
        type: "regular verb",
        italian: ["voi lavorate", "lavorate"],
        dutch: ["jullie werken"],
    },
    {
        type: "regular verb",
        italian: ["loro lavorano", "lavorano"],
        dutch: ["hun werken"],
    },
];

const week2_data: { [key: string]: Data[] } = {
    words,
    sentences,
    phrases,
    "regular verbs": regularVerbs,
};

export default week2_data;
