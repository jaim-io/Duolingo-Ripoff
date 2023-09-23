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
    italian: ["la verdura"],
    dutch: ["de groenten"],
  },
  {
    type: "word",
    italian: ["la fruta"],
    dutch: ["het fruit"],
  },
  {
    type: "word",
    italian: ["il pane"],
    dutch: ["het brood"],
  },
  {
    type: "word",
    italian: ["il latte"],
    dutch: ["de melk"],
  },
  {
    type: "word",
    italian: ["le uova"],
    dutch: ["de eieren"],
  },
  {
    type: "word",
    italian: ["il fromaggio"],
    dutch: ["de kaas"],
  },
  {
    type: "word",
    italian: ["la carne"],
    dutch: ["het vlees"],
  },
  {
    type: "word",
    italian: ["il pesce"],
    dutch: ["de vis"],
  },
  {
    type: "word",
    italian: ["i salumi"],
    dutch: ["de vleeswaren"],
  },
  {
    type: "word",
    italian: ["il pomodoro"],
    dutch: ["de tomaat"],
  },
  {
    type: "word",
    italian: ["il panino"],
    dutch: ["de boterham"],
  },
  {
    type: "word",
    italian: ["lo yogurt"],
    dutch: ["de yoghurt"],
  },
  {
    type: "word",
    italian: ["l'avocado"],
    dutch: ["de avocado"],
  },
  {
    type: "word",
    italian: ["la fragola"],
    dutch: ["de aardbei"],
  },
  {
    type: "word",
    italian: ["la mela"],
    dutch: ["de appel"],
  },
  {
    type: "word",
    italian: ["l'arancia"],
    dutch: ["de sinaasappel"],
  },
  {
    type: "word",
    italian: ["i cannoli"],
    dutch: ["de cannoli"],
  },
  {
    type: "word",
    italian: ["cioccolato"],
    dutch: ["chocolade"],
  },
  {
    type: "word",
    italian: ["ci"],
    dutch: ["er"],
  },
  {
    type: "word",
    italian: ["o"],
    dutch: ["of"],
  },
  {
    type: "word",
    italian: ["l'antipasto"],
    dutch: ["voorgerechtje"],
  },
  {
    type: "word",
    italian: ["il primo piatto"],
    dutch: ["eerste gang"],
  },
  {
    type: "word",
    italian: ["il secondo piatto"],
    dutch: ["tweede gang"],
  },
  {
    type: "word",
    italian: ["il contorno"],
    dutch: ["bijgerecht"],
  },
  {
    type: "word",
    italian: ["il dolce"],
    dutch: ["dessert"],
  },
  {
    type: "word",
    italian: ["i signori"],
    dutch: ["de heren"],
  },
  {
    type: "word",
    italian: ["il tavolo"],
    dutch: ["de tafel"],
  },
  {
    type: "word",
    italian: ["certo"],
    dutch: ["natuurlijk"],
  },
  {
    type: "word",
    italian: ["qualcosa"],
    dutch: ["iets"],
  },
  {
    type: "word",
    italian: ["il bicchiere"],
    dutch: ["het glas"],
  },
  {
    type: "word",
    italian: ["buono/molto buono/buonissimo"],
    dutch: ["goed/heel goed/zeer goed"],
  },
  {
    type: "word",
    italian: ["questo/questa"],
    dutch: ["deze"],
  },
  {
    type: "word",
    italian: ["libero"],
    dutch: ["vrij/gratis"],
  },
];

const sentences: Sentence[] = [
  {
    type: "sentence",
    italian: ["Ciao, vorrei un cappuccino, per favore."],
    dutch: ["Hallo, ik wil graag een cappuccino, alstublieft."],
  },
  {
    type: "sentence",
    italian: ["Vuoi qualco'altro?"],
    dutch: ["Wil je iets anders?"],
  },
  {
    type: "sentence",
    italian: [
      "Oh che buono! Prendo anche un cannolo con cioccolato e prendo un etto di biscotti da portare a casa.",
    ],
    dutch: [
      "O, wat goed! Ook krijg ik een cannoli met chocolade en een pond koekjes mee naar huis.",
    ],
  },
  {
    type: "sentence",
    italian: ["Sì, certo, non c’è un problema! Basta così?"],
    dutch: ["Ja, natuurlijk is er geen probleem! Dat is genoeg?"],
  },
  {
    type: "sentence",
    italian: ["Sì, nient’altro, grazie."],
    dutch: ["Ja, verder niets, bedankt."],
  },
  {
    type: "sentence",
    italian: ["Va bene. 9 euro, per favore."],
    dutch: ["Oke. 9 euro, alstublieft."],
  },
  {
    type: "sentence",
    italian: ["Prego. Ciao, alla prossima volta!"],
    dutch: ["Alsjeblieft. Doei zie je volgende keer!"],
  },
  {
    type: "sentence",
    italian: ["Ciao, alla prossima! Buona giornata!"],
    dutch: ["Tot ziens! Goededag!"],
  },
  {
    type: "sentence",
    italian: ["Posso aiutarla?"],
    dutch: ["Kan ik u helpen?"],
  },
  {
    type: "sentence",
    italian: ["Che cosa prendi?"],
    dutch: ["Wat neem jij?"],
  },
  {
    type: "sentence",
    italian: ["Cosa prende da bere?"],
    dutch: ["Wat neemt u te drinken?"],
  },
  {
    type: "sentence",
    italian: ["E da mangiare?"],
    dutch: ["En het eten?"],
  },
  {
    type: "sentence",
    italian: ["Volete qualcosa da bere?"],
    dutch: ["Willen jullie iets te drinken?"],
  },
  {
    type: "sentence",
    italian: ["E di secondo?"],
    dutch: ["En ten tweede?"],
  },
  {
    type: "sentence",
    italian: ["Senta/scusi, possiamo ordinare da mangiare?"],
    dutch: ["Luister/pardon, kunnen we eten bestellen?"],
  },
  {
    type: "sentence",
    italian: ["Ti piace la torta di mela?"],
    dutch: ["Houd jij van appeltaart?"],
  },
  {
    type: "sentence",
    italian: ["Ti piacciono i pomodori?"],
    dutch: ["Houd jij van tomaten?"],
  },
];

const phrases: Phrase[] = [
  {
    type: "phrase",
    italian: ["una torta di mela"],
    dutch: ["een appeltaart"],
  },
  {
    type: "phrase",
    italian: ["un etto di biscotti"],
    dutch: ["een pond koekjes"],
  },
  {
    type: "phrase",
    italian: ["un litro di acqua"],
    dutch: ["een liter water"],
  },
  {
    type: "phrase",
    italian: ["due etti"],
    dutch: ["twee pond"],
  },
  {
    type: "phrase",
    italian: ["un pacco di burro"],
    dutch: ["een pakje boter"],
  },
  {
    type: "phrase",
    italian: ["un pacchetto di spaghetti"],
    dutch: ["een pakje spaghetti"],
  },
  {
    type: "phrase",
    italian: ["una bottiglia di vino"],
    dutch: ["een fles wijn"],
  },
  {
    type: "phrase",
    italian: ["i cannoli con cioccolato"],
    dutch: ["cannoli met chocolade"],
  },
  {
    type: "phrase",
    italian: ["i cornetti con marmellata o alla crema"],
    dutch: ["croissants met jam of room"],
  },
  {
    type: "phrase",
    italian: ["il gelato fatto in casa"],
    dutch: ["zelfgemaakt ijs"],
  },
  {
    type: "phrase",
    italian: ["io preferisco", "preferisco"],
    dutch: ["ik heb liever"],
  },
  {
    type: "phrase",
    italian: ["per me"],
    dutch: ["voor mij"],
  },
];

const regularVerbs: RegularVerb[] = [
  {
    type: "regular verb",
    italian: ["io prendo", "prendo"],
    dutch: ["ik neem"],
  },
  {
    type: "regular verb",
    italian: ["tu prendi", "prendi"],
    dutch: ["jij neemt"],
  },
  {
    type: "regular verb",
    italian: ["lei prende"],
    dutch: ["zei neemt"],
  },
  {
    type: "regular verb",
    italian: ["noi prendiamo", "prendiamo"],
    dutch: ["wij nemen"],
  },
  {
    type: "regular verb",
    italian: ["voi prendete", "prendete"],
    dutch: ["jullie nemen"],
  },
  {
    type: "regular verb",
    italian: ["loro prendono", "prendono"],
    dutch: ["hun nemen"],
  },
  // {
  //   type: "regular verb",
  //   italian: ["io mangio", "mangio"],
  //   dutch: ["ik eet"],
  // },
  // {
  //   type: "regular verb",
  //   italian: ["tu mangi", "mangi"],
  //   dutch: ["jij eet"],
  // },
  // {
  //   type: "regular verb",
  //   italian: ["Lei mangia"],
  //   dutch: ["u eet"],
  // },
  // {
  //   type: "regular verb",
  //   italian: ["noi mangiamo", "mangiamo"],
  //   dutch: ["wij eten"],
  // },
  // {
  //   type: "regular verb",
  //   italian: ["voi mangiate", "mangiate"],
  //   dutch: ["jullie eten"],
  // },
  // {
  //   type: "regular verb",
  //   italian: ["loro mangiano", "mangiano"],
  //   dutch: ["hun eten"],
  // },
  {
    type: "regular verb",
    italian: ["io offro", "offro"],
    dutch: ["ik bied aan"],
  },
  {
    type: "regular verb",
    italian: ["tu offri", "offri"],
    dutch: ["jij bied aan"],
  },
  {
    type: "regular verb",
    italian: ["lei offre"],
    dutch: ["zei bied aan"],
  },
  {
    type: "regular verb",
    italian: ["noi offriamo", "offriamo"],
    dutch: ["wij bieden aan"],
  },
  {
    type: "regular verb",
    italian: ["voi offrite", "offrite"],
    dutch: ["jullie bieden aan"],
  },
  {
    type: "regular verb",
    italian: ["loro offrono", "offrono"],
    dutch: ["hun bieden aan"],
  },
];

const irregularVerbs: IrregularVerb[] = [
  {
    type: "irregular verb",
    italian: ["io voglio", "voglio"],
    dutch: ["ik wil"],
  },
  {
    type: "irregular verb",
    italian: ["io vorrei", "vorrei"],
    dutch: ["ik wil graag"],
  },
  {
    type: "irregular verb",
    italian: ["tu vuoi", "vuoi"],
    dutch: ["jij wilt"],
  },
  {
    type: "irregular verb",
    italian: ["lei vuole"],
    dutch: ["zei wilt"],
  },
  {
    type: "irregular verb",
    italian: ["noi vogliamo", "vogliamo"],
    dutch: ["wij willen"],
  },
  {
    type: "irregular verb",
    italian: ["voi volete", "volete"],
    dutch: ["jullie willen"],
  },
  {
    type: "irregular verb",
    italian: ["loro vogliono", "vogliono"],
    dutch: ["hun willen"],
  },
];

const week3_data: { [key: string]: Data[] } = {
  words,
  sentences,
  phrases,
  "regular verbs": regularVerbs,
  "irregular verbs": irregularVerbs,
};

export default week3_data;
