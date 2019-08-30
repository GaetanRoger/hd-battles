import { AbilityType } from 'src/app/models/ability';

// tslint:disable max-line-length
export class Ability {
  static readonly AscendanceFeerique: AbilityType = {
    name: 'Ascendance féerique',
    description: 'Vous bénéficiez d\'un avantage sur les jets de sauvegarde contre l\'effet charmé et un effet magique ne peut pas vous plonger dans le sommeil.'
  };

  static readonly Polyvalence: AbilityType = {
    name: 'Polyvalence',
    description: 'Vous gagnez la maîtrise de deux compétences de votre choix.'
  };

  static readonly Menacant: AbilityType = {
    name: 'Menaçant',
    description: 'Vous gagnez la maîtrise de la compétence Intimidation.'
  };

  static readonly Acharnement: AbilityType = {
    name: 'Acharnement',
    description: ' Quand vous vous retrouvez à 0 point de vie, mais que vous n\'êtes pas tué sur le champ, vous pouvez choisir d\'être réduit à 1 point de vie à la place. Vous ne pouvez pas réutiliser cette aptitude tant que vous n\'avez pas terminé un repos long.'
  };

  static readonly Sauvagerie: AbilityType = {
    name: 'Sauvagerie',
    description: 'Quand vous réussissez un coup critique avec une attaque de corps à corps, vous pouvez lancer un dé de dégâts supplémentaire correspondant à l\'arme utilisée et l\'ajouter aux dégâts bonus du coup critique.'
  };

  static readonly SensAiguises: AbilityType = {
    name: 'Sens aiguisés',
    description: 'Vous maîtrisez la compétence Perception.'
  };

  static readonly Transe: AbilityType = {
    name: 'Transe',
    description: ' Les elfes n\'ont pas besoin de dormir.À la place, ils passent 4 heures par jour dans un état de méditation profonde, tout en restant semi- conscients.Le mot qui décrit cette méditation en langage commun est « transe ».Pendant cette méditation, vous pouvez avoir un équivalent de rêves.De tels rêves sont en réalité des exercices mentaux qui sont devenus des réflexes au bout de plusieurs années de pratique.En vous reposant ainsi, vous obtenez les mêmes bénéfices que ceux d\'un sommeil de 8 heures pour un humain. Toutefois, il faut toujours 8 heures à un elfe pour obtenir les effets d\'un repos long.'
  };

  static readonly EntrainementAuxArmesElfiques: AbilityType = {
    name: 'Entraînement aux armes elfiques',
    description: 'Vous maîtrisez les épées longues, les épées courtes, les arcs longs et les arcs courts.'
  };

  static readonly CreatureDesTerresSauvages: AbilityType = {
    name: 'Créature des terres sauvages',
    description: 'Vous avez l\'habitude de parcourir les espaces naturels.Vous obtenez l\'avantage sur vos tests de Dextérité (Discrétion) et Sagesse (Survie) lorsque vous parcourez des espaces naturels à la lumière du jour ou des étoiles.'
  };

  static readonly ArtisansReconnus: AbilityType = {
    name: 'Artisans reconnus',
    description: 'Vous maîtrisez un type d\'outils d\'artisan de votre choix.'
  };

  static readonly RuseGnome: AbilityType = {
    name: 'Ruse gnome',
    description: 'Vous bénéficiez d\'un avantage pour tous les jets de sauvegarde d\'Intelligence, Sagesse et Charisme contre la magie.'
  };

  static readonly ConnaissancesEnIngénierie: AbilityType = {
    name: 'Connaissances en ingénierie',
    description: 'Quand vous faites un test d\'Intelligence(Histoire) relatif aux objets magiques, alchimiques ou technologiques, et que vous disposez de la maîtrise de cette compétence, vous ajoutez le double de votre bonus de maîtrise au résultat du test au lieu de votre bonus de maîtrise normal.'
  };

  static readonly Bricoleur: AbilityType = {
    name: 'Bricoleur',
    description: 'Vous maîtrisez les outils d\'artisans(outils de bricoleur). Grâce à ces outils, vous pouvez passer 1 heure et dépenser pour 10 po de matériaux pour construire un mécanisme de taille très petite(CA 5, 1 pv).Ce mécanisme cesse de fonctionner au bout de 24 heures(sauf si vous passez 1 heure à le réparer) ou si vous utilisez une action pour le démanteler.Vous pouvez à ce moment récupérer les matériaux qui ont servi à sa construction.Vous pouvez avoir jusqu\'à trois mécanismes fonctionnant en même temps.'
  };
}
