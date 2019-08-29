import { Race } from 'src/app/models/race';

export const RACES: Race[] = [
  {
    name: 'Demi-Elfe',
    rare: false,
    charBonus: {
      cha: 2,
      others: {
        count: 2,
        value: 1
      }
    },
    age: {
      adult: 20,
      max: 180
    },
    alignment: 'Chaotique',
    height: {
      min: 1.5,
      avg: 1.65,
      max: 1.85
    },
    weight: {
      min: 55,
      avg: 75,
      max: 120
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Elfe'],
    additionalLanguages: 1,
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Demi-Orc',
    rare: false,
    charBonus: {
      str: 2,
      con: 1
    },
    age: {
      adult: 14,
      max: 75
    },
    alignment: 'Chaotique Mauvais',
    height: {
      min: 1.6,
      avg: 1.8,
      max: 2.05
    },
    weight: {
      min: 70,
      avg: 110,
      max: 180
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Orc'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Elfe d\'aether',
    rare: false,
    charBonus: {
      dex: 2,
      int: 1
    },
    age: {
      adult: 100,
      max: 750
    },
    alignment: 'Neutre Bon',
    height: {
      min: 1.4,
      avg: 1.65,
      max: 1.85
    },
    weight: {
      min: 45,
      avg: 60,
      max: 85
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Elfe'],
    additionalLanguages: 1,
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Elfe de fer',
    rare: false,
    charBonus: {
      dex: 2,
      cha: 1
    },
    age: {
      adult: 100,
      max: 750
    },
    alignment: 'Neutre Bon',
    height: {
      min: 1.4,
      avg: 1.65,
      max: 1.85
    },
    weight: {
      min: 45,
      avg: 60,
      max: 85
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Elfe'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Elfe des sylves',
    rare: false,
    charBonus: {
      dex: 2,
      wis: 1
    },
    age: {
      adult: 100,
      max: 750
    },
    alignment: 'Neutre Bon',
    height: {
      min: 1.4,
      avg: 1.65,
      max: 1.85
    },
    weight: {
      min: 50,
      avg: 65,
      max: 85
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Elfe'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Gnome des roches',
    rare: false,
    charBonus: {
      int: 2,
      con: 1
    },
    age: {
      adult: 40,
      max: 500
    },
    alignment: 'Bon',
    height: {
      min: 0.95,
      avg: 1.05,
      max: 1.2
    },
    weight: {
      min: 17,
      avg: 20,
      max: 25
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Gnome'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Gnome des fées',
    rare: false,
    charBonus: {
      int: 2,
      dex: 1
    },
    age: {
      adult: 40,
      max: 500
    },
    alignment: 'Bon',
    height: {
      min: 0.9,
      avg: 1.0,
      max: 1.1
    },
    weight: {
      min: 15,
      avg: 18,
      max: 23
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Gnome'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Gnome des lacs',
    rare: false,
    charBonus: {
      int: 2,
      wis: 1
    },
    age: {
      adult: 40,
      max: 500
    },
    alignment: 'Bon',
    height: {
      min: 0.95,
      avg: 1.05,
      max: 1.2
    },
    weight: {
      min: 17,
      avg: 20,
      max: 25
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Gnome'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Halfelin pied-léger',
    rare: false,
    charBonus: {
      dex: 2,
      cha: 1
    },
    age: {
      adult: 20,
      max: 150
    },
    alignment: 'Loyal Bon',
    height: {
      min: 0.85,
      avg: 0.90,
      max: 1
    },
    weight: {
      min: 17,
      avg: 20,
      max: 25
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Halfelin']
  },
  {
    name: 'Halfelin grand-sabot',
    rare: false,
    charBonus: {
      dex: 2,
      con: 1
    },
    age: {
      adult: 20,
      max: 150
    },
    alignment: 'Loyal Bon',
    height: {
      min: 0.95,
      avg: 1,
      max: 1.1
    },
    weight: {
      min: 18,
      avg: 22,
      max: 30
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Halfelin']
  },
  {
    name: 'Humain',
    rare: false,
    charBonus: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1
    },
    age: {
      adult: 18,
      max: 90
    },
    alignment: 'Neutre Neutre',
    height: {
      min: 1.5,
      avg: 1.7,
      max: 1.95
    },
    weight: {
      min: 50,
      avg: 75,
      max: 130
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun'],
    additionalLanguages: 1,
  },
  {
    name: 'Nain des tertres',
    rare: false,
    charBonus: {
      con: 2,
      wis: 1,
    },
    age: {
      adult: 50,
      max: 350
    },
    alignment: 'Loyal Bon',
    height: {
      min: 1.1,
      avg: 1.2,
      max: 1.3
    },
    weight: {
      min: 55,
      avg: 70,
      max: 95
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Nain']
  },
  {
    name: 'Nain des pierres',
    rare: false,
    charBonus: {
      con: 2,
      int: 1,
    },
    age: {
      adult: 50,
      max: 350
    },
    alignment: 'Loyal Bon',
    height: {
      min: 1.1,
      avg: 1.2,
      max: 1.3
    },
    weight: {
      min: 55,
      avg: 70,
      max: 95
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Nain']
  },
  {
    name: 'Nain des laves',
    rare: false,
    charBonus: {
      con: 2,
      str: 1,
    },
    age: {
      adult: 50,
      max: 350
    },
    alignment: 'Loyal Bon',
    height: {
      min: 1.1,
      avg: 1.2,
      max: 1.3
    },
    weight: {
      min: 55,
      avg: 70,
      max: 95
    },
    speed: [{ type: 'sol', value: 7.5 }],
    languages: ['Commun', 'Nain'],
    nightVision: {
      type: 'perfect',
      radius: 18
    }
  },
  {
    name: 'Aasimar',
    rare: true,
    charBonus: {
      cha: 2,
      wis: 1,
    },
    age: {
      adult: 20,
      max: 120
    },
    alignment: 'Loyal Bon',
    height: {
      min: 1.55,
      avg: 1.75,
      max: 2
    },
    weight: {
      min: 55,
      avg: 80,
      max: 130
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Céleste'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Demi-ogre',
    rare: true,
    charBonus: {
      con: 2,
      str: 2,
    },
    age: {
      adult: 10,
      max: 125
    },
    alignment: 'Chaotique',
    height: {
      min: 1.8,
      avg: 2,
      max: 2.3
    },
    weight: {
      min: 100,
      avg: 150,
      max: 250
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Géant'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Félys',
    rare: true,
    charBonus: {
      dex: 2,
      wis: 1,
    },
    age: {
      adult: 8,
      max: 50
    },
    alignment: 'Chaotique',
    height: {
      min: 1.4,
      avg: 1.55,
      max: 1.7
    },
    weight: {
      min: 25,
      avg: 35,
      max: 50
    },
    speed: [{ type: 'sol', value: 12 }],
    languages: ['Commun'],
    additionalLanguages: 1,
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Homme serpent',
    rare: true,
    charBonus: {
      wis: 2,
      cha: 1,
    },
    age: {
      adult: 13,
      max: 150
    },
    alignment: 'Bon',
    height: {
      min: 1.7,
      avg: 1.8,
      max: 2
    },
    weight: {
      min: 75,
      avg: 95,
      max: 120
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Sseslish'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Sangdragon',
    rare: true,
    charBonus: {
      str: 2,
      cha: 1,
    },
    age: {
      adult: 15,
      max: 80
    },
    alignment: 'Bon',
    height: {
      min: 1.7,
      avg: 1.9,
      max: 2.1
    },
    weight: {
      min: 90,
      avg: 125,
      max: 190
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Draconique'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  },
  {
    name: 'Tieffelin',
    rare: true,
    charBonus: {
      cha: 2,
      int: 1,
    },
    age: {
      adult: 20,
      max: 100
    },
    alignment: 'Chaotique Mauvais',
    height: {
      min: 1.5,
      avg: 1.65,
      max: 1.85
    },
    weight: {
      min: 55,
      avg: 75,
      max: 120
    },
    speed: [{ type: 'sol', value: 9 }],
    languages: ['Commun', 'Infernal'],
    nightVision: {
      type: 'normal',
      radius: 18
    }
  }
];
