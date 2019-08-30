import { Ability } from './../ability/ability';
import { Race } from 'src/app/models/race';
import { Resistance } from '../resistance/resistances';

// tslint:disable max-line-length
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
    },
    abilities: [
      Ability.AscendanceFeerique,
      Ability.Polyvalence
    ]
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
    },
    abilities: [
      Ability.Menacant,
      Ability.Acharnement,
      Ability.Sauvagerie
    ]
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
    },
    magicTricks: {
      count: 1,
      incantationChar: 'int'
    },
    abilities: [
      Ability.SensAiguises,
      Ability.AscendanceFeerique,
      Ability.Transe,
      Ability.EntrainementAuxArmesElfiques
    ]
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
    },
    magicTricks: {
      count: 1,
      incantationChar: 'cha'
    },
    abilities: [
      Ability.SensAiguises,
      Ability.AscendanceFeerique,
      Ability.Transe,
      Ability.EntrainementAuxArmesElfiques
    ]
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
    },
    abilities: [
      Ability.SensAiguises,
      Ability.AscendanceFeerique,
      Ability.Transe,
      Ability.CreatureDesTerresSauvages,
      Ability.ArtisansReconnus
    ]
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
    },
    abilities: [
      Ability.RuseGnome,
      Ability.ConnaissancesEnIngénierie,
      Ability.Bricoleur
    ]
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
    },
    abilities: [
      {
        name: 'Ruse gnome',
        description: 'Vous bénéficiez d\'un avantage pour tous les jets de sauvegarde d\'Intelligence, Sagesse et Charisme contre la magie.'
      },
      {
        name: 'Sens aiguisés',
        description: 'Vos sens supérieurs vous permettent de suivre n\'importe quelle piste.Vous bénéficiez d\'un avantage à tous vos tests de Sagesse (Survie) effectués afin de pister une créature.'
      },
      {
        name: 'Projection spirituelle',
        description: 'En dépensant une action, lorsque vous êtes en pleine forêt, vous pouvez appeler un petit animal : un petit oiseau ou un rongeur. Vous sifflez une étrange mélodie et, au bout d\'une minute, une créature se présente à vous.Cette dernière doit être présente dans les environs afin de répondre à l\'appel. Une fois la créature devant vous, vous projetez votre esprit et vos sens en elle. Vous pouvez prendre son contrôle et voir et entendre par ses yeux et ses oreilles. La projection dure 10 minutes et ne vous permet pas d\'éloigner la créature de plus de 500 mètres de vous.Tant que le contrôle dure, vous ne pouvez pas voir, entendre, ni agir avec votre propre corps.Vous pouvez mettre fin à tout moment à votre emprise et revenir dans votre corps, sans autre contrecoup.Subir un coup ou des dégâts vous ramène immédiatement dans votre corps, libérant la créature de votre emprise.Cependant, dans ce cas, vous êtes désorienté et subissez un désavantage à toutes vos actions pendant 1 minute.Il en va de même si l\'animal est tué pendant la projection. Vous devez terminer un repos long avant de pouvoir réutiliser cette capacité.'
      }
    ]
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
    },
    abilities: [
      {
        name: 'Ruse gnome',
        description: 'Vous bénéficiez d\'un avantage pour tous les jets de sauvegarde d\'Intelligence, Sagesse et Charisme contre la magie.'
      },
      {
        name: 'Maître des illusions',
        description: 'Vous obtenez un avantage sur les jets de sauvegarde effectués afin de résister aux sorts d\'illusion, ainsi qu\'aux tests visant à discerner la présence d\'une illusion déjà présente.'
      },
      {
        name: 'Magie instinctive',
        description: 'Vous connaissez deux tours de magie que vous choisissez parmi la liste de sorts du barde. Votre caractéristique d\'incantation pour ces sorts est la Sagesse.'
      }
    ]
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
    languages: ['Commun', 'Halfelin'],
    abilities: [
      {
        name: 'Chanceux',
        description: 'Quand vous faites un 1 avec le d20 d\'un jet d\'attaque, d\'un test de caractéristiques ou d\'un jet de sauvegarde, vous pouvez relancer le dé. Mais vous devez utiliser le nouveau résultat du jet.'
      },
      {
        name: 'Brave',
        description: 'Vous bénéficiez d\'un avantage sur les jets de sauvegarde contre la terreur.'
      },
      {
        name: 'Agilité halfeline',
        description: 'Vous pouvez traverser n\'importe quel emplacement occupé par une créature plus grande que vous.'
      },
      {
        name: 'Discrétion naturelle',
        description: 'Vous pouvez tenter de vous cacher même quand vous êtes seulement dissimulé par une créature qui fait une taille de plus que vous.'
      }
    ]
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
    languages: ['Commun', 'Halfelin'],
    abilities: [
      {
        name: 'Chanceux',
        description: 'Quand vous faites un 1 avec le d20 d\'un jet d\'attaque, d\'un test de caractéristiques ou d\'un jet de sauvegarde, vous pouvez relancer le dé. Mais vous devez utiliser le nouveau résultat du jet.'
      },
      {
        name: 'Brave',
        description: 'Vous bénéficiez d\'un avantage sur les jets de sauvegarde contre la terreur.'
      },
      {
        name: 'Agilité halfeline',
        description: 'Vous pouvez traverser n\'importe quel emplacement occupé par une créature plus grande que vous.'
      },
      {
        name: 'Esprit pragmatique',
        description: 'Vous obtenez un avantage sur les tests de Sagesse (Perspicacité) lorsque l\'on tente de vous mentir ou de vous baratiner. De plus, vous obtenez un avantage aux jets de sauvegarde contre les sorts de charme.'
      },
      {
        name: 'Travailleur acharné',
        description: 'Vous obtenez la maîtrise d\'un outil d\'artisan au choix.'
      }
    ]
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
    abilities: []
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
    languages: ['Commun', 'Nain'],
    resistance: Resistance.Naine,
    abilities: [
      {
        name: 'Entraînement aux armes naines',
        description: 'Vous maîtrisez les haches de guerre, les hachettes, les marteaux légers et les marteaux de guerre.'
      },
      {
        name: 'Maîtrise des outils',
        description: 'Vous obtenez la maîtrise des outils d\'un artisanat de votre choix parmi cette liste: outils de forgeron, matériel de brasseur, outils de maçon.'
      },
      {
        name: 'Connaissance de la pierre',
        description: 'Quand vous faites un test d\'Intelligence(Histoire) relatif au travail de la pierre, vous considérez que vous possédez la maîtrise de la compétence Histoire et vous ajoutez le double de votre bonus de maîtrise au résultat du test au lieu de votre bonus de maîtrise normal.'
      },
      {
        name: 'Ténacité naine',
        description: 'Votre nombre maximum de points de vie augmente de 1. Il augmente à nouveau de +1 à chaque niveau que vous gagnez.'
      }
    ]
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
    languages: ['Commun', 'Nain'],
    resistance: Resistance.Naine,
    abilities: [
      {
        name: 'Entraînement aux armes naines',
        description: 'Vous maîtrisez les haches de guerre, les hachettes, les marteaux légers et les marteaux de guerre.'
      },
      {
        name: 'Maîtrise des outils',
        description: 'Vous obtenez la maîtrise des outils d\'un artisanat de votre choix parmi cette liste: outils de forgeron, matériel de brasseur, outils de maçon.'
      },
      {
        name: 'Connaissance de la pierre',
        description: 'Quand vous faites un test d\'Intelligence(Histoire) relatif au travail de la pierre, vous considérez que vous possédez la maîtrise de la compétence Histoire et vous ajoutez le double de votre bonus de maîtrise au résultat du test au lieu de votre bonus de maîtrise normal.'
      },
      {
        name: 'Maître des marteaux',
        description: 'Lorsqu\'un nain des pierres inflige des dégâts avec un marteau ou toute autre arme contondante, il ignore une éventuelle résistance aux dégâts contondants de sa cible.'
      }
    ]
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
    },
    resistance: Resistance.Naine,
    abilities: [
      {
        name: 'Entraînement aux armes naines',
        description: 'Vous maîtrisez les haches de guerre, les hachettes, les marteaux légers et les marteaux de guerre.'
      },
      {
        name: 'Maîtrise des outils',
        description: 'Vous obtenez la maîtrise des outils d\'un artisanat de votre choix parmi cette liste: outils de forgeron, matériel de brasseur, outils de maçon.'
      },
      {
        name: 'Connaissance de la pierre',
        description: 'Quand vous faites un test d\'Intelligence(Histoire) relatif au travail de la pierre, vous considérez que vous possédez la maîtrise de la compétence Histoire et vous ajoutez le double de votre bonus de maîtrise au résultat du test au lieu de votre bonus de maîtrise normal.'
      },
      {
        name: 'Sensibilité à la lumière',
        description: 'Vous supportez mal les changements de luminosité. Lorsque la lumière augmente soudainement d\'intensité(de lumière faible à lumière vive, ou d\'obscurité à lumière vive), vous subissez un désavantage à tous vos tests de caractéristique nécessitant votre vue (dont les tests physique pour se précipiter, grimper ou autres). Il en va de même pour tous vos jets d\'attaque, et les ennemis bénéficient d\'un avantage s\'ils vous attaquent au corps à corps. L\'effet dure 3 rounds.'
      }
    ]
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
    },
    resistance: Resistance.Celeste,
    abilities: [
      {
        name: 'Aura céleste',
        description: 'Vous possédez certains pouvoirs issus de votre ascendance céleste. Vous connaissez le tour de magie Thaumaturgie. Quand vous atteignez le niveau 3, vous pouvez lancer une fois le sort Bouclier de la foi grâce à ce trait. Pour pouvoir lancer de nouveau ce sort, vous devez terminer un repos long. À partir du niveau 5, vous pouvez lancer une fois le sort Prière de soins comme un sort de niveau 3 grâce à ce trait. Pour pouvoir lancer de nouveau ce sort, vous devez terminer un repos long. Votre caractéristique d\'incantation pour lancer ces sorts est le Charisme.'
      }
    ]
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
    },
    abilities: [
      {
        name: 'Effrayant',
        description: 'Vous utilisez votre action et vous adoptez une posture agressive, hurlez ou lancez un regard noir suivi d\'un grognement effrayant à un adversaire.Ce dernier doit réussir un jet de sauvegarde de Charisme contre une difficulté égale à 8 + votre modificateur de Force + votre bonus de maîtrise. S\'il échoue, il est effrayé pour un nombre de rounds égal à votre bonus de maîtrise. Vous devez effectuer un repos long avant de pouvoir utiliser cette capacité de nouveau.'
      },
      {
        name: 'Cuir épais',
        description: 'Votre peau est si épaisse que vous résistez mieux aux coups que les autres. Vous obtenez une résistance aux dégâts de type contondant.'
      },
      {
        name: 'Problème de taille',
        description: 'Vous êtes grand et massif... trop grand et trop massif. Vos armures doivent être taillées sur mesure pour votre taille et votre corpulence. Quand vous achetez une armure, vous devez payer le double de son prix. De même, lorsque vous faites ajuster une armure magique à votre taille, vous devez payer un prix égal au prix de l\'armure magique concernée.Si vous portez une armure qui n\'a pas été spécialement ajustée à votre taille, votre CA est réduite de 1.'
      },
      {
        name: 'Paria',
        description: 'Votre nature même rend souvent les gens nerveux. Vous êtres craint par les races civilisées et méprisé par les ogres. Vous subissez d\'un désavantage sur vos tests de Charisme(Persuasion) et Charisme(Tromperie). De plus, la plupart des gens ont une attitude méfiante, au mieux, vis- à - vis de vous : les gardes vous contrôlent, vous êtes victime de délit de sale gueule et il n\'est pas rare que vous soyez le bouc émissaire rêvé pour les populations locales.'
      }
    ]
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
    },
    abilities: [
      {
        name: 'Sixième sens',
        description: 'Vous êtes toujours sur le qui-vive. Si vous êtes surpris, vous pouvez tout de même effectuer, au choix, un déplacement ou une action unique (comme une unique attaque, par exemple) lors de votre premier tour. Vous ne disposez cependant pas de votre action bonus ou de votre réaction. De plus, vous obtenez un avantage sur les tests de Sagesse (Survie) effectués afin de pister une créature.'
      },
      {
        name: 'Agilité féline',
        description: 'Vous obtenez un avantage sur vos tests de Force (Athlétisme) effectués afin d\'escalader.Vous pouvez grimper à votre vitesse de déplacement normale.'
      },
      {
        name: 'Griffes du fauve',
        description: 'Vous possédez de petites griffes rétractiles. Vos dommages à mains nues peuvent être tranchants ou contondants, selon ce que vous préférez. Vous devez choisir avant d\'effectuer votre jet de dé d\'attaque.'
      },
      {
        name: 'Toujours sur ses pattes',
        description: 'Les chats retombent toujours sur leurs pattes, c\'est connu.Lorsque vous tombez dans le vide, vous savez comment contrôler votre chute, que cela soit en vous réceptionnant sur les pieds ou en roulé- boulé, ou simplement en utilisant votre environnement afin de la ralentir.Vous pouvez effectuer un jet de sauvegarde de Dextérité contre une difficulté de 8 + la distance de chute(en mètres).En cas de réussite, vous ne subissez que la moitié des dommages habituels et vous vous réceptionnez correctement, évitant ainsi de vous retrouver à terre.'
      },
      {
        name: 'Difficile à croire',
        description: 'Tout le monde sait qu\'on ne peut pas faire confiance à un chat, et votre sincérité est souvent remise en question. Vous subissez un désavantage sur vos tests de Charisme(Persuasion) quand votre interlocuteur n\'est pas un félys.'
      }
    ]
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
    },
    abilities: [
      {
        name: 'Métamorphe',
        description: 'Vous êtes capable de transformer votre corps afin de recouvrer, momentanément, votre forme véritable. Vous pouvez utiliser une action afin de vous métamorphoser. Vos jambes deviennent un corps de serpent, mais vous conservez votre tronc, votre tête et vos bras. Sous cette forme, vous obtenez un avantage à vos tests de Charisme (Intimidation) et de Dextérité (Athlétisme). De plus, lorsque vous escaladez une surface, votre vitesse de déplacement correspond à votre vitesse de déplacement normale. Maintenir cette forme vous demande de maintenir votre concentration. Une fois la concentration brisée, vous reprenez votre forme humanoïde. Alternativement, vous pouvez utiliser ce pouvoir afin de ressembler à un être humain normal. Votre visage devient humain et votre queue disparaît. Votre transformation n\'est pas parfaite: un individu peut dépenser une action pour vous examiner et effectuer un test d\'Intelligence (Investigation) contre une difficulté de 8 + votre modificateur d\'Intelligence + votre bonus de maîtrise. S\'il le réussit, il réalise que quelque chose ne va pas, aperçoit l\'espace d\'un instant vos pupilles fendues, remarque furtivement des écailles sur votre main, etc. Votre forme humaine est constante : vous ne pouvez changer de visage ou de couleur de cheveux, par exemple, et encore moins prendre l\'apparence d\'une autre personne. Vous devez effectuer un repos long avant de pouvoir utiliser de nouveau cette capacité.'
      },
      {
        name: 'Hypnose',
        description: 'Comme tous les vôtres, vous avez appris à infuser votre regard d\'une étrange lueur.Vous pouvez utiliser une action bonus afin de tenter d\'hypnotiser une créature se trouvant à 1,50 mètre ou moins de vous, et pouvant vous regarder dans les yeux. Vous lancez ainsi le sort charme personne comme un sort de niveau 1. Vous devez terminer un repos long avant de pouvoir utiliser de nouveau cette capacité. Votre caractéristique d\'incantation pour lancer ce sort est le Charisme.'
      },
      {
        name: 'Regard dérangeant',
        description: 'Votre corps, votre visage et vos yeux ont quelque chose de clairement froid et étrange, effrayant pour les uns, fascinant pour les autres. Vous maîtrisez, au choix, la compétence Intimidation ou la compétence Persuasion.'
      },
      {
        name: 'Sang froid',
        description: 'Votre sang froid ne vous apporte pas que des bénéfices. Vous êtes vulnérable aux dégâts de froid.'
      }
    ]
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
    },
    abilities: [
      {
        name: 'Ascendance',
        description: 'Vous avez des ancêtres draconiques. Choisissez un type de dragon dans le tableau des ascendances. Votre choix détermine votre souffle et votre résistance aux dégâts, comme indiqué dans le tableau.'
      },
      {
        name: 'Souffle',
        description: 'Vous pouvez utiliser votre action pour exhaler une vague d\'énergie destructrice. La taille, la forme et le type de dégâts que vous causez sont liés à votre ascendance. Quand vous utilisez votre souffle, chaque créature qui se trouve dans la zone affectée doit faire un jet de sauvegarde, dont le type dépend de votre ascendance.Le DD de ce jet de sauvegarde est égal à 8 + votre modificateur de Constitution + votre bonus de maîtrise.Une créature qui rate son jet de sauvegarde subit 2d6 dégâts.Elle n\'en subit que la moitié dans le cas contraire. La quantité de dégâts que vous infligez augmente avec votre niveau et atteint 3d6 au niveau 6, 4d6 au niveau 11 et 5d6 au niveau 16. Une fois que vous avez utilisé votre souffle, vous ne pouvez plus l\'utiliser avant d\'avoir terminé un repos court ou un repos long. Résistance aux dégâts. Vous bénéficiez d\'une résistance au type de dégâts associé à votre ascendance.'
      }
    ]
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
    },
    resistance: Resistance.Infernale,
    abilities: [{
      name: 'Ascendance infernale',
      description: 'Vous connaissez le tour de magie thaumaturgie. Quand vous atteignez le niveau 3, vous pouvez lancer une fois le sort représailles infernales comme sort de niveau 2 grâce à ce trait. Pour pouvoir lancer de nouveau ce sort, vous devez terminer un repos long. À partir du niveau 5, vous pouvez lancer une fois le sort ténèbres grâce à ce trait. Pour pouvoir lancer de nouveau ce sort, vous devez finir un repos long. Votre caractéristique d\'incantation pour lancer ces sorts est le Charisme.'
    }
    ]
  }
];
