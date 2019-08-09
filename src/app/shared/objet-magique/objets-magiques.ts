import { ObjetMagique } from './../../models/objet-magique.interface';

export const OBJETS_MAGIQUES: ObjetMagique[] = [
  {
    header: {
      title: 'Ailes de vol',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous êtes équipé de cette cape, vous pouvez utiliser une action pour prononcer son mot de commande. La cape se transforme alors en paire d\'ailes de chauve-souris ou d\'oiseau placée dans votre dos pendant 1 heure ou jusqu\'au moment ou vous répétez le mot de commande par une action. Les ailes vous confèrent une vitesse de déplacement en vol de 18 mètres. Il faut attendre 1d12 heures depuis la dernière disparition des ailes avant de pouvoir les réutiliser.</p>',
    link: '/liste-objets-magiques/ailes-de-vol',
    title: 'Ailes de vol',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Amulette antidote',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une gemme noire luisante et parfaitement taillée orne cette délicate chaîne d\'argent. Tant que vous portez ce pendentif, les poisons n\'ont aucun effet sur vous : vous êtes immunisé contre l\'état empoisonné et contre les dégâts de poison.</p>',
    link: '/liste-objets-magiques/amulette-antidote',
    title: 'Amulette antidote',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Amulette d\'antidétection',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette amulette, vous êtes caché aux yeux de la magie de divination. Ce genre de magie ne peut plus vous prendre pour cible et ne vous perçoit plus à travers ses organes de scrutation magiques.</p>',
    link: '/liste-objets-magiques/amulette-dantidetection',
    title: 'Amulette d\'antidétection',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Amulette de bonne santé',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette amulette, votre valeur de Constitution passe à 19. L\'amulette n\'a aucun effet si votre Constitution est déjà de 19 ou plus.</p>',
    link: '/liste-objets-magiques/amulette-de-bonne-sante',
    title: 'Amulette de bonne santé',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Amulette de cicatrisation',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce pendentif, vous vous stabilisez automatiquement au début de votre tour si vous êtes mourant. De plus, à chaque fois que vous lancez un dé de vie pour récupérer des points de vie, vous doublez le nombre de points de vie rendus.</p>',
    link: '/liste-objets-magiques/amulette-de-cicatrisation',
    title: 'Amulette de cicatrisation',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Amulette de santé',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce pendentif, vous êtes immunisé contre toutes les maladies. Si vous êtes déjà malade, les effets de la maladie sont supprimés tant que vous portez l\'amulette.</p>',
    link: '/liste-objets-magiques/amulette-de-sante',
    title: 'Amulette de santé',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Amulette des plans',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette amulette, vous pouvez utiliser votre action pour nommer un endroit qui vous est familier et se trouve sur un autre plan d\'existence. Faites ensuite un test d\'Intelligence DD 15. Si vous réussissez, vous lancez changement de plan, si vous échouez, vous et toutes les créatures et tous les objets situés dans un rayon de 4,50 mètres autour de vous êtes emportés vers une destination aléatoire. Lancez 1d100. De 1 à 60, cet endroit aléatoire se trouve sur le plan où vous trouviez déjà, de 61 à 100 vous arrivez sur un plan d\'existence déterminé au hasard.</p>',
    link: '/liste-objets-magiques/amulette-des-plans',
    title: 'Amulette des plans',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau d\'action libre',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cet anneau au doigt, les terrains difficiles ne vous coûtent aucun déplacement supplémentaire. De plus, la magie ne peut pas réduire votre vitesse, vous paralyser ou vous entraver.</p>',
    link: '/liste-objets-magiques/anneau-daction-libre',
    title: 'Anneau d\'action libre',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau d\'influence animale',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet anneau contient 3 charges et récupère 1d3 charges dépensées chaque jour, à l\'aube. Tant que vous portez l\'anneau au doigt, vous pouvez utiliser une action pour dépenser 1 de ses charges et lancer un des sorts suivants :</p>\n<ul>\n<li><a href="/grimoire/amitie-avec-les-animaux"><em>Amitié avec les animaux</em></a> (DD des jets de sauvegarde contre le sort 13)</li>\n<li><a href="/grimoire/peur"><em>Peur</em></a> (DD des jets de sauvegarde contre le sort 13). Seules les bêtes dotées d\'une Intelligence de 3 ou moins peuvent être ciblées par ce sort.</li>\n<li><a href="/grimoire/communication-avec-les-animaux"><em>Communication avec les animaux</em></a></li>\n</ul>',
    link: '/liste-objets-magiques/anneau-dinfluence-animale',
    title: 'Anneau d\'influence animale',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Anneau d\'invisibilité',
      magicitem: {
        type: 'Anneau',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez devenir <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> par une action tant que vous portez cet anneau au doigt. L\'ensemble de vos objets équipés ou transportés deviennent également invisibles. Vous restez invisible jusqu\'à ce que l\'anneau soit retiré, si vous attaquez, lancez un sort ou utilisez une action bonus pour redevenir visible.</p>',
    link: '/liste-objets-magiques/anneau-dinvisibilite',
    title: 'Anneau d\'invisibilité',
    type: 'Anneau',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de chaleur',
      magicitem: {
        type: 'Anneau',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'une résistance contre les dégâts de froid tant que vous portez cet anneau au doigt. De plus, vous et tout l\'équipement que vous portez êtes protégés contre les températures extrêmement basses (jusque -10 degrés Celsius).</p>',
    link: '/liste-objets-magiques/anneau-de-chaleur',
    title: 'Anneau de chaleur',
    type: 'Anneau',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de convocation de djinn',
      magicitem: {
        type: 'Anneau',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cet anneau au doigt, vous pouvez prononcer son mot de commande par une action pour convoquer un djinn particulier originaire du plan élémentaire de l\'Air. Le djinn apparaît dans un emplacement inoccupé que vous lui désignez et qui se situe à 36 mètres ou moins de vous. Il reste aussi longtemps que vous vous concentrez (comme si vous vous concentriez sur un sort), jusqu\'à un maximum d\'une heure ou si les points de vie de la créature tombent à 0. Il retourne ensuite sur son plan d\'origine.</p>\n<p>Le djinn convoqué est amical envers vous et vos compagnons. Il obéit à la totalité de vos ordres, quelle que soit la langue utilisée. Si vous ne parvenez pas à lui donner d\'ordre, le djinn se défend contre les éventuels agresseurs mais n\'effectue aucune autre action.</p>\n<p>Après le retour du djinn sur son plan d\'origine, vous ne pouvez plus le convoquer avant que 24 heures ne se soient écoulées. L\'anneau devient ordinaire et sa magie disparaît dès que le djinn meurt.</p>',
    link: '/liste-objets-magiques/anneau-de-convocation-de-djinn',
    title: 'Anneau de convocation de djinn',
    type: 'Anneau',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de dérobade',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet anneau contient 3 charges et récupère 1d3 charges dépensées chaque jour, à l\'aube. Si vous ratez un jet de sauvegarde de Dextérité alors que vous portez cet anneau au doigt, vous pouvez utiliser votre réaction pour dépenser 1 de ses charges et remplacer l\'échec de ce jet de sauvegarde par une réussite.</p>',
    link: '/liste-objets-magiques/anneau-de-derobade',
    title: 'Anneau de dérobade',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de feu d\'étoile',
      magicitem: {
        type: 'Anneau',
        rarity: 'Très rare',
        attunement: 'harmonisation en plain air et de nuit exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cet anneau dans des endroits faiblement éclairés ou plongés dans les ténèbres, vous pouvez lancer <a href="/grimoire/lumieres-dansantes"><em>lumières dansantes</em></a> et <a href="/grimoire/lumiere"><em>lumière</em></a> à volonté par le biais de l\'anneau. L\'incantation d\'un de ces sorts sous cette forme nécessite une action.</p>\n<p>L\'anneau contient 6 charges dans le cadre des autres propriétés suivantes. Il récupère 1d6 charges dépensées chaque jour, à l\'aube.</p>\n<p><em><strong>Lueurs féeriques</strong></em>. Vous pouvez dépenser 1 charge par une action pour lancer <a href="/grimoire/lueurs-feeriques"><em>lueurs féeriques</em></a> par le biais de l\'anneau.</p>\n<p><em><strong>Boules de foudre</strong></em>. Vous pouvez dépenser 2 charges par une action pour créer une à quatre sphères de foudre de 1 mètre de diamètre chacune. Plus les sphères créées sont nombreuses, moins chacune d\'elles est puissante.</p>\n<p>Chaque sphère apparaît dans un emplacement inoccupé situé dans votre champ de vision à 36 mètres ou moins de vous. Les sphères durent tant que vous vous concentrez (comme si vous vous concentriez sur un sort), jusqu\'à un maximum d\'une minute. Chaque sphère diffuse une faible lumière dans un rayon de 9 mètres.</p>\n<p>Par une action bonus, vous pouvez déplacer chaque sphère d\'une distance maximale de 9 mètres, sans les éloigner de plus de 36 mètres de vous. Quand une créature, à l\'exception de vous-même, approche à 1,50 mètre ou moins d\'une sphère, celle-ci la foudroie et disparaît. Cette créature doit effectuer un jet de sauvegarde de Dextérité DD 15. En cas de jet de sauvegarde raté, elle subit des dégâts de foudre en fonction du nombre de sphères créées.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">Sphères</th>\n<th style="text-align: center;">Dégâts de foudre</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: center;">2d4</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: center;">2d6</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: center;">5d4</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: center;">4d12</td>\n</tr>\n</tbody>\n</table></div></div>\n<p><em><strong>Feu d\'étoiles</strong></em>. Vous pouvez dépenser 1 à 3 charges par une action. Pour chaque charge dépensée, vous pouvez projeter une particule de lumière depuis l\'anneau jusqu\'à un point situé dans votre champ de vision à 18 mètres ou moins. Chaque créature située dans un cube de 4,50 mètres de côté autour du point désigné est criblée d\'étincelles et doit effectuer un jet de sauvegarde de Dextérité DD 15 ; elle subit 5d4 dégâts de feu en cas de jet de sauvegarde raté ou la moitié de ces dégâts seulement en cas de réussite.</p>',
    link: '/liste-objets-magiques/anneau-de-feu-detoiles',
    title: 'Anneau de feu d\'étoile',
    type: 'Anneau',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation en plain air et de nuit exigée'
  },
  {
    header: {
      title: 'Anneau de légèreté',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous descendez de 18 mètres par round et ne subissez aucun dégât de chute tant que vous portez cet anneau au doigt.</p>',
    link: '/liste-objets-magiques/anneau-de-legerete',
    title: 'Anneau de légèreté',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de lune',
      magicitem: {
        type: 'Anneau',
        rarity: 'Artefact',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet anneau en pierre grisâtre, d\'apparence très banale, fut forgé à partir d\'une pierre tombée du ciel. Le forgeron fut maudit dès qu\'il passa l\'anneau : à chaque pleine lune, il se transformait en créature mi-homme, mi-loup. Il devint le premier loup-garou et fut à l\'origine de la dissémination de la lycanthropie sur le monde.</p>\n<p><strong><em>L\'appel du sang</em></strong>. L\'anneau attire irrémédiablement les humanoïdes qui le voient. Ces derniers doivent réussir un jet de sauvegarde de Sagesse (DD 18) ou tout faire pour passer l\'anneau, même tuer si cela s\'avère nécessaire.</p>\n<p><strong><em>Lycanthrope</em></strong>. Si vous portez l\'anneau sans y être harmonisé, vous vous transformez chaque nuit de pleine lune en créature hybride entre un loup et un humanoïde de votre race. Votre équipement ne se transforme pas avec vous. Vous reprenez votre forme naturelle à l\'aube, ou si vous êtes tué. La malédiction persiste même si vous ôtez l\'anneau. Seuls les sorts <a href="/grimoire/lever-une-malediction"><em>lever une malédiction</em></a> ou <a href="/grimoire/restauration-superieure"><em>restauration supérieure</em></a> peuvent vous guérir. Sous forme hybride, vos caractéristiques et aptitudes restent inchangées, sauf celles qui suivent :</p>\n<ul>\n<li>Votre alignement devient chaotique mauvais.</li>\n<li>Votre classe d\'armure naturelle augmente de 1.</li>\n<li>Vous obtenez la vision dans le noir à 18 mètres.</li>\n<li>Vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> aux jets de Sagesse (Perception) basés sur l\'ouïe et l\'odorat.</li>\n<li>Vous êtes immunisé aux attaques d\'armes non magiques qui ne sont pas faites en argent.</li>\n<li>Vous gagnez une attaque de morsure (bonus au toucher égal au vôtre, dégâts 1d8+bonus de Force). Tout humanoïde touché par votre morsure doit réussir un jet de sauvegarde de Constitution (DD 18) ou être touché par la malédiction de lycanthropie.</li>\n</ul>\n<p><strong><em>Alpha de meute</em></strong>. Si vous vous harmonisez à l\'anneau, votre alignement devient définitivement chaotique mauvais. Vous pouvez désormais vous transformer en hybride ou en loup à volonté au prix d\'une action. Vous obtenez en outre les bénéfices suivants :</p>\n<ul>\n<li>Votre Force augmente de 2, avec un maximum de 24.</li>\n<li>Vous vitesse de déplacement augmente de 3 mètres.</li>\n<li>Tous les humanoïdes blessés par votre morsure qui deviennent des lycanthropes ont une attitude amicale envers vous et vous considèrent comme leur leader.</li>\n</ul>\n<p><strong><em>Détruire l\'anneau</em></strong>. La destruction de l\'anneau de lune est une tâche plus qu\'épique : il faut d\'abord annihiler toute trace de lycanthropie sur le monde. Une fois que le porteur de l\'anneau est le dernier loup-garou vivant, le tuer réduit l\'anneau en poussière.</p>',
    link: '/liste-objets-magiques/anneau-de-lune',
    title: 'Anneau de lune',
    type: 'Anneau',
    subtype: null,
    rarity: 'Artefact',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de maîtrise élémentaire',
      magicitem: {
        type: 'Anneau',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet anneau est lié à l\'un des quatre plans Élémentaires. Le MJ choisit ou détermine au hasard le plan concerné.</p>\n<p>Tant que vous portez cet anneau au doigt, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets d\'attaque contre les élémentaires originaires du plan lié et ceux-ci subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lors des jets d\'attaque contre vous. De plus, vous avez accès aux propriétés associées au plan auquel il est lié.</p>\n<p>L\'anneau contient 5 charges. Il récupère 1d4+1 charges dépensées chaque jour, à l\'aube. Les sorts lancés grâce à l\'anneau ont un DD des jets de sauvegarde contre eux de 17.</p>\n<p><strong><em>Anneau de maîtrise élémentaire de l\'Air</em></strong>. Vous pouvez dépenser 2 des charges de l\'anneau pour lancer <a href="/grimoire/dominer-un-monstre"><em>dominer un monstre</em></a> sur un élémentaire de l\'Air. De plus, lorsque vous chutez, vous pouvez descendre de 18 mètres par round sans subir aucun dégât de chute. Vous pouvez également parler et comprendre l\'aérien.</p>\n<p>Si vous aidez à tuer un élémentaire de l\'Air tout en étant harmonisé à l\'anneau, vous avez accès aux propriétés supplémentaires suivantes :</p>\n<ul>\n<li>Vous bénéficiez d\'une résistance aux dégâts de foudre.</li>\n<li>Vous disposez d\'une vitesse de déplacement en vol égale à votre vitesse au sol et vous pouvez voler en mode stationnaire.</li>\n<li>Vous pouvez lancer les sorts suivants grâce à l\'anneau en dépensant le nombre nécessaire de charges : <a href="/grimoire/bourrasque"><em>bourrasque</em></a> (2 charges), <a href="/grimoire/chaine-declairs"><em>chaîne d\'éclairs</em></a> (3 charges) et <a href="/grimoire/mur-de-vent"><em>mur de vent</em></a> (1 charge).</li>\n</ul>\n<p><strong><em>Anneau de maîtrise élémentaire de l\'Eau</em></strong>. Vous pouvez dépenser 2 des charges de l\'anneau pour lancer <a href="/grimoire/dominer-un-monstre"><em>dominer un monstre</em></a> sur un élémentaire de l\'Eau. De plus, vous pouvez tenir debout et marcher sur les surfaces liquides comme si elles étaient solides. Vous pouvez également parler et comprendre l\'aquatique.</p>\n<p>Si vous aidez à tuer un élémentaire de l\'Eau tout en étant harmonisé à l\'anneau, vous avez accès aux propriétés supplémentaires suivantes :</p>\n<ul>\n<li>Vous pouvez respirer sous l\'eau et disposez d\'une vitesse de déplacement à la nage égale à votre vitesse au sol.</li>\n<li>Vous pouvez lancer les sorts suivants grâce à l\'anneau en dépensant le nombre nécessaire de charges : <a href="/grimoire/controle-de-leau"><em>contrôle de l\'eau</em></a> (3 charges), <a href="/grimoire/creation-ou-destruction-deau"><em>création ou destruction d\'eau</em></a> (1 charge), <a href="/grimoire/mur-de-glace"><em>mur de glace</em></a> (3 charges) et <a href="/grimoire/tempete-de-grele"><em>tempête de grêle</em></a> (2 charges).</li>\n</ul>\n<p><strong><em>Anneau de maîtrise élémentaire de la Terre</em></strong>. Vous pouvez dépenser 2 des charges de l\'anneau pour lancer <a href="/grimoire/dominer-un-monstre"><em>dominer un monstre</em></a> sur un élémentaire de la Terre. De plus, vous pouvez vous déplacer dans les terrains difficiles composés de gravats, de rochers ou de terre comme si c\'était des terrains normaux. Vous pouvez également parler et comprendre le terreux.</p>\n<p>Si vous aidez à tuer un élémentaire de la Terre tout en étant harmonisé à l\'anneau, vous avez accès aux propriétés supplémentaires suivantes :</p>\n<ul>\n<li>Vous êtes résistant aux dégâts d\'acide.</li>\n<li>Vous pouvez vous déplacer à travers la roche ou la terre solide comme si ces zones étaient un terrain difficile. Si vous terminez votre tour dans une telle zone, vous êtes expulsé vers l\'emplacement inoccupé le plus proche du dernier emplacement occupé avant d\'entrer dans cette zone.</li>\n<li>Vous pouvez lancer les sorts suivants grâce à l\'anneau en dépensant le nombre nécessaire de charges : <a href="/grimoire/faconnage-de-la-pierre"><em>façonnage de la pierre</em></a> (2 charges), <a href="/grimoire/peau-de-pierre"><em>peau de pierre</em></a> (3 charges) et <a href="/grimoire/mur-de-pierre"><em>mur de pierre</em></a> (3 charges).</li>\n</ul>\n<p><strong><em>Anneau de maîtrise élémentaire du Feu</em></strong>. Vous pouvez dépenser 2 des charges de l\'anneau pour lancer <a href="/grimoire/dominer-un-monstre"><em>dominer un monstre</em></a>. De plus, vous bénéficiez d\'une résistance aux dégâts de feu. Vous pouvez également parler et comprendre l\'ignée.</p>\n<p>Si vous aidez à tuer un élémentaire du Feu tout en étant harmonisé à l\'anneau, vous avez accès aux propriétés supplémentaires suivantes :</p>\n<ul>\n<li>Vous êtes immunisé aux dégâts de feu.</li>\n<li>Vous pouvez lancer les sorts suivants grâce à l\'anneau en dépensant le nombre nécessaire de charges : <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> (2 charges), <a href="/grimoire/mains-brulantes"><em>mains brûlantes</em></a> (1 charge) et <a href="/grimoire/mur-de-feu"><em>mur de feu</em></a> (3 charges).</li>\n</ul>',
    link: '/liste-objets-magiques/anneau-de-maitrise-elementaire',
    title: 'Anneau de maîtrise élémentaire',
    type: 'Anneau',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de marche sur l\'eau',
      magicitem: {
        type: 'Anneau',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez vous tenir debout sur toute surface liquide et vous déplacer dessus comme si elle était solide.</p>',
    link: '/liste-objets-magiques/anneau-de-marche-sur-leau',
    title: 'Anneau de marche sur l\'eau',
    type: 'Anneau',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Anneau de nage',
      magicitem: {
        type: 'Anneau',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous possédez une vitesse de déplacement à la nage de 12 mètres tant que vous portez cet anneau au doigt.</p>',
    link: '/liste-objets-magiques/anneau-de-nage',
    title: 'Anneau de nage',
    type: 'Anneau',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Anneau de protection',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus de +1 à la CA et aux jets de sauvegarde tant que vous portez cet anneau au doigt.</p>',
    link: '/liste-objets-magiques/anneau-de-protection',
    title: 'Anneau de protection',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de protection mentale',
      magicitem: {
        type: 'Anneau',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cet anneau, vous êtes immunisé à la magie utilisée par d\'autres créatures pour lire vos pensées, déterminer si vous mentez, connaître votre alignement ou le type de créature que vous êtes. Les créatures peuvent communiquer par télépathie avec vous seulement si vous les y autorisez.</p>\n<p>Vous pouvez utiliser une action pour que l\'anneau devienne <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> jusqu\'à ce que vous utilisiez une autre action pour le rendre visible, que vous le retiriez ou que vous mourriez.</p>\n<p>Si vous perdez la vie avec l\'anneau au doigt, votre âme se réfugie à l\'intérieur, à moins qu\'il ne contienne déjà une âme. Vous pouvez rester dans l\'anneau ou vous en aller pour l\'après-vie. Tant que votre âme est à l\'intérieur de l\'anneau, vous pouvez communiquer par télépathie avec la créature qui l\'enfile. Un porteur ne peut pas empêcher cette communication télépathique.</p>',
    link: '/liste-objets-magiques/anneau-de-protection-mentale',
    title: 'Anneau de protection mentale',
    type: 'Anneau',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de régénération',
      magicitem: {
        type: 'Anneau',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cet anneau, vous récupérez 1d6 points de vie toutes les 10 minutes, à condition qu\'il vous reste au moins 1 point de vie. Si vous perdez des parties de votre corps, l\'anneau permet la repousse des parties manquantes qui retrouvent leur entière fonctionnalité au bout de 1d6+1 jours s\'il vous reste au moins 1 point de vie pendant toute cette période.</p>',
    link: '/liste-objets-magiques/anneau-de-regeneration',
    title: 'Anneau de régénération',
    type: 'Anneau',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de renvoi des sorts',
      magicitem: {
        type: 'Anneau',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre les sorts qui ne prennent que vous pour cible (et non une zone d\'effet) tant que vous portez cet anneau au doigt. De plus, si vous obtenez un 20 au jet de sauvegarde et que le sort est de niveau 7 ou moins, celui-ci ne produit aucun effet sur vous et il cible à la place son lanceur, en utilisant le niveau d\'emplacement, le DD des jets de sauvegarde contre le sort et la caractéristique d\'incantation du lanceur.</p>',
    link: '/liste-objets-magiques/anneau-de-renvoi-des-sorts',
    title: 'Anneau de renvoi des sorts',
    type: 'Anneau',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de résistance',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'une résistance contre un type de dégâts tant que vous portez cet anneau au doigt. La pierre précieuse qui orne l\'anneau indique le type que le MJ peut choisir ou déterminer au hasard.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D10</th>\n<th style="text-align: center;">Type de dégâts</th>\n<th style="text-align: center;">Pierre précieuse</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: center;">Acide</td>\n<td style="text-align: center;">Perle</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: center;">Froid</td>\n<td style="text-align: center;">Tourmaline</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: center;">Feu</td>\n<td style="text-align: center;">Grenat</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: center;">Force</td>\n<td style="text-align: center;">Saphir</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5</strong></td>\n<td style="text-align: center;">Foudre</td>\n<td style="text-align: center;">Citrine</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6</strong></td>\n<td style="text-align: center;">Nécrotique</td>\n<td style="text-align: center;">Jais</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>7</strong></td>\n<td style="text-align: center;">Poison</td>\n<td style="text-align: center;">Améthyste</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>8</strong></td>\n<td style="text-align: center;">Psychique</td>\n<td style="text-align: center;">Jade</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>9</strong></td>\n<td style="text-align: center;">Radiant</td>\n<td style="text-align: center;">Topaze</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>10</strong></td>\n<td style="text-align: center;">Tonnerre</td>\n<td style="text-align: center;">Spinelle</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/anneau-de-resistance',
    title: 'Anneau de résistance',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de saut',
      magicitem: {
        type: 'Anneau',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez lancer le sort de <a href="/grimoire/saut"><em>saut</em></a>, à volonté et par une action bonus, tant que vous portez cet anneau au doigt. Seul vous bénéficiez des effets de ce sort.</p>',
    link: '/liste-objets-magiques/anneau-de-saut',
    title: 'Anneau de saut',
    type: 'Anneau',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de stockage de sorts',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet anneau stocke des sort que l\'on lance à l\'intérieur et les conserve jusqu\'au moment où son porteur harmonisé les utilise. L\'anneau peut stocker un maximum de 5 niveaux de sorts en même temps. Au moment de sa découverte, l\'anneau contient 1d6-1 niveaux de sorts stockés choisis par le MJ.</p>\n<p>Toute créature peut lancer un sort de niveau 1 à 5 dans l\'anneau en le touchant au moment de l\'incantation du sort. Le sort ne produit aucun effet ; il est simplement stocké dans l\'anneau. Si l\'anneau ne peut pas stocker le sort, celui-ci est dépensé sans produire d\'effet. Le niveau de l\'emplacement utilisé pour lancer le sort détermine l\'espace de stockage qu\'il occupe.</p>\n<p>Tant que vous portez cet anneau, vous pouvez lancer n\'importe quel sort stocké à l\'intérieur. Le sort utilise le niveau d\'emplacement, le DD du jet de sauvegarde contre le sort, le bonus à l\'attaque du sort et la caractéristique d\'incantation de la créature qui l\'a lancé mais, pour tous les autres paramètres, on considère que c\'est vous qui lancez le sort. Le sort lancé depuis l\'anneau n\'est plus stocké à l\'intérieur et libère ainsi de l\'espace de stockage.</p>',
    link: '/liste-objets-magiques/anneau-de-stockage-de-sorts',
    title: 'Anneau de stockage de sorts',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de télékinésie',
      magicitem: {
        type: 'Anneau',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cet anneau au doigt, vous pouvez lancer le sort de <a href="/grimoire/telekinesie"><em>télékinésie</em></a> à volonté mais vous ne pouvez cibler que des objets qui ne sont ni équipés ni portés.</p>',
    link: '/liste-objets-magiques/anneau-de-telekinesie',
    title: 'Anneau de télékinésie',
    type: 'Anneau',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau de triple souhait',
      magicitem: {
        type: 'Anneau',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action pour dépenser une des 3 charges que contient l\'anneau et lancer un sort de <a href="/grimoire/souhait"><em>souhait</em></a> par son biais. L\'anneau devient ordinaire et non-magique dès que vous utilisez sa dernière charge.</p>',
    link: '/liste-objets-magiques/anneau-de-triple-souhait',
    title: 'Anneau de triple souhait',
    type: 'Anneau',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Anneau de vision aux rayons X',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action pour prononcer le mot de commande de cet anneau. Une fois celui-ci prononcé, vous pouvez voir dans et à travers la matière solide pendant 1 minute. Le rayon de cette vision s\'étend sur 9 mètres. Pour vous, les objets solides à l\'intérieur de ce rayon paraissent transparents et ne bloquent pas la lumière. La vision peut traverser 30 centimètres de pierre, 3 centimètres de métal ordinaire ou jusqu\'à 1 mètre de bois ou de terre. Les substances plus épaisses bloquent la vision, tout comme une fine couche de plomb.</p>\n<p>Chaque fois que vous utilisez l\'anneau à nouveau avant de prendre un repos long, vous devez réussir un jet de sauvegarde de Constitution DD 15 pour ne pas être affublé d\'un niveau d\'<a href="/gerer-la-sante-du-personnage#fatigue-et-épuisement">épuisement</a>.</p>',
    link: '/liste-objets-magiques/anneau-de-vision-aux-rayons-x',
    title: 'Anneau de vision aux rayons X',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Anneau du bélier',
      magicitem: {
        type: 'Anneau',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet anneau contient 3 charges et récupère 1d3 charges chaque jour, à l\'aube. Tant que vous portez cet anneau au doigt, vous pouvez utiliser une action pour dépenser de 1 à 3 charges afin d\'attaquer une créature située à 18 mètres ou moins dans votre champ de vision. L\'anneau produit une tête de bélier spectrale et effectue son jet d\'attaque avec un bonus de +7. En cas d\'attaque réussie et pour chaque charge dépensée, la cible subit 2d10 dégâts de force et elle est éloignée de vous sur une distance de 1,50 mètre.</p>\n<p>Par ailleurs, vous pouvez dépenser de 1 à 3 des charges que contient l\'anneau par une action pour tenter de briser un objet ni équipé, ni porté, et situé à 18 mètres ou moins de vous dans votre champ de vision. L\'anneau effectue un test de Force avec un bonus de +5 pour chaque charge dépensée.</p>',
    link: '/liste-objets-magiques/anneau-du-belier',
    title: 'Anneau du bélier',
    type: 'Anneau',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Arc du serment',
      magicitem: {
        type: 'Arme',
        subtype: 'Arc long',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous encochez une flèche sur cet arc, il murmure en elfe « <em>Une mort rapide à mes ennemis</em>. » Lorsque vous l\'utilisez pour une attaque à distance, vous pouvez lui chuchoter sa phrase de commande « <em>Une mort rapide pour vous qui m\'avez causé du tort</em>. » La cible de votre attaque devient votre ennemi juré jusqu\'à sa mort ou jusqu\'à ce que l\'aube se lève sur le septième jour suivant votre déclaration. Vous ne pouvez avoir qu\'un seul ennemi juré de ce type. À sa mort, vous devez attendre l\'aube suivante pour en désigner ainsi un nouveau.</p>\n<p>Quand vous faites une attaque à distance avec cet arc contre votre ennemi juré, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors du test. De plus, votre cible ne tire aucun avantage d\'un abri (à moins d\'un abri total) et vous ne subissez pas de <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> s\'il se trouve à longue portée. Si vous touchez, votre ennemi juré subit 3d6 dégâts perforants supplémentaires.</p>\n<p>Tant que vit votre ennemi juré, vous subissez un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lors de jets d\'attaque effectués avec toutes les autres armes.</p>',
    link: '/liste-objets-magiques/arc-du-serment',
    title: 'Arc du serment',
    type: 'Arme',
    subtype: 'Arc long',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Arme +1',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle arme',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus de +1 aux jets d\'attaque et de dégâts effectués avec cette arme magique.</p>',
    link: '/liste-objets-magiques/arme-1',
    title: 'Arme +1',
    type: 'Arme',
    subtype: 'N\'importe quelle arme',
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Arme +2',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle arme',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus de +2 aux jets d\'attaque et de dégâts effectués avec cette arme magique.</p>',
    link: '/liste-objets-magiques/arme-2',
    title: 'Arme +2',
    type: 'Arme',
    subtype: 'N\'importe quelle arme',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Arme +3',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle arme',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus de +3 aux jets d\'attaque et de dégâts effectués avec cette arme magique.</p>',
    link: '/liste-objets-magiques/arme-3',
    title: 'Arme +3',
    type: 'Arme',
    subtype: 'N\'importe quelle arme',
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Arme vicieuse',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle arme',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Lorsque vous obtenez un 20 sur un jet d\'attaque avec cette arme magique, votre coup critique inflige 2d6 dégâts supplémentaires du type normalement infligé par l\'arme.</p>',
    link: '/liste-objets-magiques/arme-vicieuse',
    title: 'Arme vicieuse',
    type: 'Arme',
    subtype: 'N\'importe quelle arme',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Armure +1',
      magicitem: {
        type: 'Armure',
        subtype: 'Légère, Intermédiaire ou lourde',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous disposez d\'un bonus de +1 à la CA tant que vous portez cette armure.</p>',
    link: '/liste-objets-magiques/armure-1',
    title: 'Armure +1',
    type: 'Armure',
    subtype: 'Légère, Intermédiaire ou lourde',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Armure +2',
      magicitem: {
        type: 'Armure',
        subtype: 'Légère, Intermédiaire ou lourde',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous disposez d\'un bonus de +2 à la CA tant que vous portez cette armure.</p>',
    link: '/liste-objets-magiques/armure-2',
    title: 'Armure +2',
    type: 'Armure',
    subtype: 'Légère, Intermédiaire ou lourde',
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Armure +3',
      magicitem: {
        type: 'Armure',
        subtype: 'Légère, Intermédiaire ou lourde',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous disposez d\'un bonus de +3 à la CA tant que vous portez cette armure.</p>',
    link: '/liste-objets-magiques/armure-3',
    title: 'Armure +3',
    type: 'Armure',
    subtype: 'Légère, Intermédiaire ou lourde',
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Armure d\'écailles de dragon',
      magicitem: {
        type: 'Armure',
        subtype: 'Armure d\'écailles',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une armure d\'écailles de dragon est faite à partir des écailles d\'une espèce de dragon. Parfois, un dragon récupère les écailles qu\'il a perdues et les offre à un humanoïde, parfois ce sont des chasseurs qui écorchent soigneusement un dragon mort et conservent sa peau. Dans les deux cas, une armure d\'écailles de dragon est un objet très précieux.</p>\n<p>Tant que vous portez cette armure, vous bénéficiez d\'un bonus de +1 à la CA, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> sur les jets de sauvegarde contre la présence terrifiante et le souffle des dragons et vous êtes résistant au type de dégâts déterminé par l\'espèce de dragon qui a fourni les écailles de l\'armure (voir la table).</p>\n<p>De plus, vous pouvez utiliser une action pour concentrer vos cinq sens et percevoir par magie la distance qui vous sépare du dragon le plus proche, dans un rayon de 45 kilomètres, et la direction dans laquelle il se trouve. Ce pouvoir fonctionne uniquement vis-à-vis des dragons de la même espèce que celui qui a fourni les écailles de l\'armure. Il faut attendre l\'aube suivante avant de réutiliser ce pouvoir.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">Dragon</th>\n<th style="text-align: center;">Résistance</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>Noir</strong></td>\n<td style="text-align: center;">Acide</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Bleu</strong></td>\n<td style="text-align: center;">Foudre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Airain</strong></td>\n<td style="text-align: center;">Feu</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Bronze</strong></td>\n<td style="text-align: center;">Foudre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Cuivre</strong></td>\n<td style="text-align: center;">Acide</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Or</strong></td>\n<td style="text-align: center;">Feu</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Vert</strong></td>\n<td style="text-align: center;">Poison</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Rouge</strong></td>\n<td style="text-align: center;">Feu</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Argent</strong></td>\n<td style="text-align: center;">Froid</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>Blanc</strong></td>\n<td style="text-align: center;">Froid</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/armure-decailles-de-dragon',
    title: 'Armure d\'écailles de dragon',
    type: 'Armure',
    subtype: 'Armure d\'écailles',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Armure d\'invulnérabilité',
      magicitem: {
        type: 'Armure',
        subtype: 'Harnois',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette armure, vous résistez aux dégâts non-magiques. De plus, vous pouvez dépenser une action pour vous immuniser contre les dégâts non-magiques pendant 10 minutes ou jusqu\'à ce que vous ne portiez plus l\'armure. Une fois que vous avez utilisé cette action spéciale, vous ne pouvez plus vous en servir avant l\'aube suivante.</p>',
    link: '/liste-objets-magiques/armure-dinvulnerabilite',
    title: 'Armure d\'invulnérabilité',
    type: 'Armure',
    subtype: 'Harnois',
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Armure de mithral',
      magicitem: {
        type: 'Armure',
        subtype: 'Intermédiaire ou lourde mais pas en peau',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Le mithral est un métal léger et flexible, à tel point qu\'on peut porter une chemise de mailles ou une cuirasse de cette matière sous des vêtements normaux. Si le type d\'armure impose d\'ordinaire un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lors des tests de Dextérité (Discrétion) ou si une certaine valeur de Force figure parmi ses conditions requises, ce n\'est pas le cas de sa version en mithral.</p>',
    link: '/liste-objets-magiques/armure-de-mithral',
    title: 'Armure de mithral',
    type: 'Armure',
    subtype: 'Intermédiaire ou lourde mais pas en peau',
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Armure de résistance',
      magicitem: {
        type: 'Armure',
        subtype: 'Légère, intermédiaire ou lourde',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette armure, vous êtes résistant à un type de dégâts. C\'est au MJ de choisir ce type ou de le déterminer au hasard parmi les options suivantes.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D10</th>\n<th style="text-align: center;">Type de dégâts</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: center;">Acide</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: center;">Froid</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: center;">Feu</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: center;">Force</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5</strong></td>\n<td style="text-align: center;">Foudre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6</strong></td>\n<td style="text-align: center;">Nécrotique</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>7</strong></td>\n<td style="text-align: center;">Poison</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>8</strong></td>\n<td style="text-align: center;">Psychique</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>9</strong></td>\n<td style="text-align: center;">Radiant</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>10</strong></td>\n<td style="text-align: center;">Tonnerre</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/armure-de-resistance',
    title: 'Armure de résistance',
    type: 'Armure',
    subtype: 'Légère, intermédiaire ou lourde',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Armure de vulnérabilité',
      magicitem: {
        type: 'Armure',
        subtype: 'Harnois',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette armure, vous êtes résistant à un type de dégâts parmi les suivants : contondants, perforants ou tranchants. C\'est au MJ de choisir ce type ou de le déterminer au hasard.</p>\n<p><strong><em>Malédiction</em></strong>. Cette armure est maudite, mais les gens l\'ignorent à moins de lui lancer le sort <a href="/grimoire/identification">identification</a> ou de s\'harmoniser avec elle. Si vous vous harmonisez avec l\'armure, elle vous maudit jusqu\'à ce que vous bénéficiez du sort <a href="/grimoire/lever-une-malediction">lever une malédiction</a> ou d\'une magie similaire. Vous aurez beau enlever l\'armure, cela ne suffit pas à briser la malédiction. Tant que vous êtes maudit, vous êtes vulnérable à deux des trois types de dégâts contre lesquels l\'armure peut vous offrir une résistance (jamais celui pour lequel elle vous rend résistant).</p>',
    link: '/liste-objets-magiques/armure-de-vulnerabilite',
    title: 'Armure de vulnérabilité',
    type: 'Armure',
    subtype: 'Harnois',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Armure démoniaque',
      magicitem: {
        type: 'Armure',
        subtype: 'Harnois',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette armure, vous gagnez un bonus de +1 à la CA et vous comprenez et parlez l\'abyssal. De plus, les gantelets de l\'armure sont équipés de griffes qui transforment les attaques à mains nues portées avec eux en attaques portées avec une arme magique infligeant des dégâts tranchants, dotée d\'un bonus de +1 aux jets d\'attaque et de dégâts et infligeant 1d8 de dégâts.</p>\n<p><strong><em>Malédiction</em></strong>. Une fois que vous avez enfilé cette armure maudite, vous ne pouvez plus la retirer, à moins de bénéficier du sort <a href="/grimoire/lever-une-malediction">lever une malédiction</a> ou d\'une magie similaire. Tant que vous portez l\'armure, vous subissez un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lors de vos jets d\'attaque contre les démons et de vos jets de sauvegarde contre leurs sorts et de leurs pouvoirs spéciaux.</p>',
    link: '/liste-objets-magiques/armure-demoniaque',
    title: 'Armure démoniaque',
    type: 'Armure',
    subtype: 'Harnois',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Armure en adamantium',
      magicitem: {
        type: 'Armure',
        subtype: 'Intermédiaire ou lourde, mais pas en peau',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette armure est renforcée à base d\'adamantium, l\'une des substances les plus solides au monde. Tant que vous la portez, tous les coups critiques réussis contre vous se muent en coups normaux.</p>',
    link: '/liste-objets-magiques/armure-en-adamantium',
    title: 'Armure en adamantium',
    type: 'Armure',
    subtype: 'Intermédiaire ou lourde, mais pas en peau',
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Baguette d\'éclairs',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs charges et lancer le sort de <a href="/grimoire/eclair"><em>éclair</em></a> (DD des jets de sauvegarde contre le sort 15) par son biais. Pour 1 charge, vous lancez la version de niveau 3 du sort. Vous pouvez augmenter de un le niveau de l\'emplacement du sort pour chaque charge supplémentaire que vous dépensez.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. La baguette est détruite et tombe en cendres sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baguette-declairs',
    title: 'Baguette d\'éclairs',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette de boules de feu',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs charges et lancer le sort de <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> (DD des jets de sauvegarde contre le sort 15) par son biais. Pour 1 charge, vous lancez la version de niveau 3 du sort. Vous pouvez augmenter de un le niveau de l\'emplacement du sort pour chaque charge supplémentaire que vous dépensez.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. La baguette est détruite et tombe en cendres sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baguette-de-boules-de-feu',
    title: 'Baguette de boules de feu',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette de détection de l\'ennemi',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action et dépenser 1 charge pour prononcer son mot de commande. Pendant la minute qui suit, vous connaissez la direction (mais pas la distance) de la créature hostile envers vous la plus proche et située à 18 mètres ou moins. La baguette perçoit la présence des créatures hostiles éthérées, <a href="/gerer-la-sante-du-personnage#invisible"><em>invisibles</em></a>, déguisées ou cachées, en plus de celles exposées à la vue de tous. L\'effet prend fin si vous ne tenez plus la baguette en main.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. Sur un 1, elle est détruite et tombe en cendres.</p>',
    link: '/liste-objets-magiques/baguette-de-detection-de-lennemi',
    title: 'Baguette de détection de l\'ennemi',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Baguette de détection de la magie',
      magicitem: {
        type: 'Baguette',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 3 charges. Avec cette baguette en main, vous pouvez dépenser 1 charge par une action pour lancer le sort <a href="/grimoire/detection-de-la-magie">détection de la magie</a> par son biais. La baguette récupère 1d3 charges dépensées chaque jour, à l\'aube.</p>',
    link: '/liste-objets-magiques/baguette-de-detection-de-la-magie',
    title: 'Baguette de détection de la magie',
    type: 'Baguette',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Baguette de métamorphose',
      magicitem: {
        type: 'Baguette',
        rarity: 'Très rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs charges et lancer le sort de <a href="/grimoire/metamorphose"><em>métamorphose</em></a> (DD des jets de sauvegarde contre le sort 15) par son biais.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. La baguette est détruite et tombe en cendres sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baguette-de-metamorphose',
    title: 'Baguette de métamorphose',
    type: 'Baguette',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette de paralysie',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 de ses charges et projeter un fin rayon bleu de l\'extrémité de la baguette vers une créature située à 18 mètres ou moins dans votre champ de vision. La cible doit réussir un jet de sauvegarde de Constitution DD 15 pour ne pas être <a href="/gerer-la-sante-du-personnage#paralysé"><em>paralysée</em></a> pendant 1 minute. À la fin de chacun des tours de la cible, elle peut retenter le jet de sauvegarde et mettre fin à l\'effet dont elle est victime en cas de réussite.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. La baguette est détruite et tombe en cendres sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baguette-de-paralysie',
    title: 'Baguette de paralysie',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette de projectiles magiques',
      magicitem: {
        type: 'Baguette',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs charges et lancer le sort de <a href="/grimoire/projectile-magique"><em>projectile magique</em></a> par son biais. Pour 1 charge, vous lancez la version de niveau 1 de ce sort. Vous pouvez augmenter de un le niveau de l\'emplacement du sort pour chaque charge supplémentaire que vous dépensez.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. La baguette est détruite et tombe en cendres sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baguette-de-projectiles-magiques',
    title: 'Baguette de projectiles magiques',
    type: 'Baguette',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Baguette de terreur',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges en ce qui concerne les propriétés suivantes. Elle récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. Sur un 1, elle est détruite et tombe en cendres.</p>\n<p><strong><em>Ordre</em></strong>. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 charge et ordonner à une créature de fuir ou de se mettre à plat ventre, comme avec le sort <a href="/grimoire/injonction"><em>injonction</em></a> (DD des jets de sauvegarde 15).</p>\n<p><strong><em>Cône de terreur</em></strong>. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 2 charges et projeter depuis l\'extrémité de la baguette un cône de 18 mètres de lumière ambrée. Les créatures dans le cône doivent chacune réussir un jet de sauvegarde de Sagesse DD 15 pour ne pas être <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisées</em></a> par votre présence pendant 1 minute. Terrorisée de cette façon, une créature doit consacrer ses tours à tenter de s\'éloigner le plus loin possible de vous. Elle ne peut pas approcher volontairement à 9 mètres ou moins de vous. Elle ne peut plus non plus faire de réaction. En ce qui concerne ses actions, elle peut effectuer uniquement l\'action <em>se précipiter</em> ou tenter d\'échapper à un effet qui l\'empêche de se déplacer. Si elle n\'a nulle part où aller, elle peut effectuer l\'action <em>esquiver</em>. À la fin de chacun de ses tours, une créature peut retenter le jet de sauvegarde et mettre fin à l\'effet dont elle est victime en cas de réussite.</p>',
    link: '/liste-objets-magiques/baguette-de-terreur',
    title: 'Baguette de terreur',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Baguette des entraves',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges en ce qui concerne les propriétés suivantes. Elle récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. Sur un 1, elle est détruite et tombe en cendres.</p>\n<p><strong><em>Sorts</em></strong>. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser certaines de ses charges et lancer un des sorts suivants (DD des jets de sauvegarde 17) : <a href="/grimoire/immobiliser-un-monstre"><em>immobiliser un monstre</em></a> (5 charges) ou <a href="/grimoire/immobiliser-un-humanoide"><em>immobiliser un humanoïde</em></a> (2 charges).</p>\n<p><strong><em>Évasion facilitée</em></strong>. Avec cette baguette en main, vous pouvez utiliser votre réaction et vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors d\'un jet de sauvegarde effectué pour ne pas vous retrouver <a href="/gerer-la-sante-du-personnage#paralysé"><em>paralysé</em></a> ou <a href="/gerer-la-sante-du-personnage#entravé"><em>entravé</em></a>. Vous pouvez aussi dépenser 1 charge de cette façon pour obtenir l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors d\'un test effectué pour éviter de vous retrouver <a href="/gerer-la-sante-du-personnage#empoigné"><em>empoigné</em></a>.</p>',
    link: '/liste-objets-magiques/baguette-des-entraves',
    title: 'Baguette des entraves',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette des secrets',
      magicitem: {
        type: 'Baguette',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 de ses charges et, si une porte secrète ou un piège est présent à 9 mètres ou moins de vous, la baguette se met à pulser et pointe dans la direction du plus proche de vous. La baguette récupère 1d3 charges dépensées chaque jour, à l\'aube.</p>',
    link: '/liste-objets-magiques/baguette-des-secrets',
    title: 'Baguette des secrets',
    type: 'Baguette',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Baguette du mage de guerre +1',
      magicitem: {
        type: 'Baguette',
        rarity: 'Peu courant',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Avec cette baguette en main, vous bénéficiez d\'un bonus de +1 aux jets d\'attaque des sorts. En outre, vous ignorez les abris partiels lorsque vous effectuez une attaque de sort.</p>',
    link: '/liste-objets-magiques/baguette-du-mage-de-guerre-1',
    title: 'Baguette du mage de guerre +1',
    type: 'Baguette',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette du mage de guerre +2',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Avec cette baguette en main, vous bénéficiez d\'un bonus de +2 aux jets d\'attaque des sorts. En outre, vous ignorez les abris partiels lorsque vous effectuez une attaque de sort.</p>',
    link: '/liste-objets-magiques/baguette-du-mage-de-guerre-2',
    title: 'Baguette du mage de guerre +2',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette du mage de guerre +3',
      magicitem: {
        type: 'Baguette',
        rarity: 'Très rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Avec cette baguette en main, vous bénéficiez d\'un bonus de +3 aux jets d\'attaque des sorts. En outre, vous ignorez les abris partiels lorsque vous effectuez une attaque de sort.</p>',
    link: '/liste-objets-magiques/baguette-du-mage-de-guerre-3',
    title: 'Baguette du mage de guerre +3',
    type: 'Baguette',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette entoilée',
      magicitem: {
        type: 'Baguette',
        rarity: 'Peu courant',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 de ses charges et lancer le sort <a href="/grimoire/toile-daraignee"><em>toile d\'araignée</em></a> (DD des jets de sauvegarde contre le sort 15) par son biais.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. La baguette est détruite et tombe en cendres sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baguette-entoilee',
    title: 'Baguette entoilée',
    type: 'Baguette',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Baguette merveilleuse',
      magicitem: {
        type: 'Baguette',
        rarity: 'Rare',
        attunement: 'harmonisation avec un lanceur de sorts exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette baguette contient 7 charges. Avec cette baguette en main, vous pouvez utiliser une action pour dépenser 1 de ses charges et choisir une cible à 36 mètres ou moins de vous. La cible peut être une créature, un objet ou un point dans l\'espace. Lancez un d100 et consultez la table suivante pour découvrir ce qu\'il se passe.</p>\n<p>Si l\'effet produit vous pousse à lancer un sort bar le biais de la baguette, le DD des jets de sauvegarde du sort s\'élève à 15. Si le sort a normalement une portée exprimée en mètres, celle du sort lancé par le biais de la baguette s\'élève à 36 mètres si ce n\'est pas déjà le cas.</p>\n<p>Si l\'effet produit couvre une zone, vous devez centrer le sort sur la cible qui doit être comprise dans sa zone d\'effet. Si l\'effet produit peut cibler plusieurs sujets, le MJ détermine au hasard les créatures affectées.</p>\n<p>La baguette récupère 1d6+1 charges dépensées chaque jour, à l\'aube. Lancez un d20 si vous dépensez la dernière charge. La baguette est détruite et tombe en poussière sur un résultat de 1.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: left;">Effet</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>01-05</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/peur"><em>peur</em></a>.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>06-10</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/lueurs-feeriques"><em>leurs féeriques</em></a>.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>11-15</strong></td>\n<td style="text-align: left;">Vous êtes étourdi jusqu\'à la fin de votre prochain tour, mais vous croyez que quelque chose d\'incroyable vient tout juste d\'arriver.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>16-20</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/bourrasque"><em>bourrasque</em></a>.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>21-25</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/detection-des-pensees"><em>détection des pensées</em></a> sur la cible de votre choix. Vous subissez 1d6 dégâts psychiques si vous ne ciblez aucune créature.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>26-30</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/nuage-puant"><em>nuage puant</em></a>.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>31-33</strong></td>\n<td style="text-align: left;">Une forte pluie tombe dans un rayon de 18 mètres centré sur la cible. La visibilité dans cette zone est réduite. La pluie tombe ainsi jusqu\'au début de votre prochain tour.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>34-36</strong></td>\n<td style="text-align: left;">Un animal apparaît dans l\'emplacement inoccupé le plus proche de la cible. L\'animal n\'est pas sous votre contrôle et agit comme tout autre animal de son espèce. Lancez un d100 pour déterminer quel animal apparaît. Entre 01 et 25, un rhinocéros apparaît ; entre 26 et 50, un éléphant apparaît ; et entre 51 et 100, un rat apparaît.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>37-46</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/eclair"><em>éclair</em></a>.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>47-49</strong></td>\n<td style="text-align: left;">Une nuée de 600 gros papillons envahit une zone de 9 mètres de rayon centrée sur la cible. La visibilité dans cette zone est nulle. Les papillons restent pendant 10 minutes.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>50-53</strong></td>\n<td style="text-align: left;">Vous agrandissez la cible comme si vous aviez lancé <a href="/grimoire/agrandir-retrecir"><em>agrandir/rétrécir</em></a>. Vous devenez la cible du sort si celle que vous avez désignée ne peut être affectée ou si vous ne ciblez aucune créature.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>54-58</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/tenebres"><em>ténèbres</em></a>.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>59-62</strong></td>\n<td style="text-align: left;">De l\'herbe pousse par terre dans une zone de 18 mètres de rayon centrée sur la cible. S\'il y a déjà de l\'herbe, elle pousse pour atteindre dix fois sa taille normale et conserve cette nouvelle taille pendant 1 minute.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>63-65</strong></td>\n<td style="text-align: left;">Un objet au choix du MJ disparaît dans le plan éthéré. L\'objet ne doit être équipé ou porté par personne, il doit se trouver à 36 mètres ou moins de la cible et ses dimensions ne peuvent dépasser 3 mètres.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>66-69</strong></td>\n<td style="text-align: left;">Vous rapetissez comme si vous aviez lancé le sort <a href="/grimoire/agrandir-retrecir"><em>agrandir/rétrécir</em></a> sur vous-même.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>70-79</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a>.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>80-84</strong></td>\n<td style="text-align: left;">Vous lancez <a href="/grimoire/invisibilite"><em>invisibilité</em></a> sur vous-même.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>85-87</strong></td>\n<td style="text-align: left;">Des feuilles de plante poussent sur la cible. Si vous prenez un point dans l\'espace pour cible, des feuilles poussent sur la créature la plus proche de ce point. À moins d\'être arrachées, les feuilles se racornissent peu à peu et tombent au bout de 24 heures.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>88-90</strong></td>\n<td style="text-align: left;">Un flot de 1d4×10 pierres précieuses, valant 1 po chacune, surgit de l\'extrémité de la baguette sur une ligne de 9 mètres de long et 1,50 mètre de large. Chaque pierre précieuse inflige 1 dégât contondant et les dégâts totaux infligés par ces pierres sont divisés à parts égales entre toutes les cibles sur la ligne.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>91-95</strong></td>\n<td style="text-align: left;">Une explosion de lumière scintillante s\'étend autour de vous sur un rayon de 9 mètres. Vous, et les créatures dans la zone qui peuvent vous voir, devez chacune réussir un jet de sauvegarde de Constitution DD 15 pour ne pas être aveuglées pendant 1 minute. Une créature peut retenter le jet de sauvegarde à la fin de chacun de ses tours et mettre fin à l\'effet dont elle est victime en cas de réussite.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>96-97</strong></td>\n<td style="text-align: left;">La peau de la cible devient bleue et luminescente pendant 1d10 jours. Si vous avez pris un point dans l\'espace pour cible, c\'est la créature la plus proche de ce point qui est affectée.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>98-00</strong></td>\n<td style="text-align: left;">Si vous avez pris une créature pour cible, celle-ci doit effectuer un jet de sauvegarde de Constitution DD 15. Si vous n\'avez pris aucune créature pour cible, c\'est vous la cible du sort, et vous devez effectuer le jet de sauvegarde. Si le jet de sauvegarde rate de 5 points ou plus, la cible est instantanément <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifiée</em></a>. Tous les autres jets de sauvegarde ratés signifient que la cible est <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> et commence à se transformer en pierre. Entravée de cette façon, la cible doit retenter le jet de sauvegarde à la fin de son prochain tour ; elle est <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifiée</em></a> en cas d\'échec ou met fin à l\'effet en cas de réussite. La pétrification dure tant que la cible n\'est pas libérée par un sort de <a href="/grimoire/restauration-superieure"><em>restauration supérieure</em></a> ou une magie similaire.</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/baguette-merveilleuse',
    title: 'Baguette merveilleuse',
    type: 'Baguette',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un lanceur de sorts exigée'
  },
  {
    header: {
      title: 'Balai volant',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce balai de bois pèse 1,5 kilo et fonctionne comme un balai ordinaire, à moins que vous ne vous mettiez à califourchon dessus et prononciez son mot de commande. Il se met alors à flotter et vous pouvez le chevaucher pour vous déplacer dans les airs. Il dispose d\'une vitesse de vol de 15 mètres et porte jusqu\'à 200 kilos, mais sa vitesse se réduit à 9 mètres si la charge dépasse les 100 kilos. Le balai cesse de flotter dès que vous atterrissez.</p>\n<p>Vous pouvez envoyer le balai rejoindre seul une destination située dans un rayon de 1,5 kilomètre, à condition de prononcer le mot de commande, le nom de la destination et de bien connaître cette dernière. Le balai revient à vous quand vous prononcez un autre mot de commande, à condition qu\'il se trouve encore dans un rayon de 1,5 kilomètre autour de vous.</p>',
    link: '/liste-objets-magiques/balai-volant',
    title: 'Balai volant',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Bandeau d\'intelligence',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce bandeau, votre Intelligence passe à 19. Si elle est déjà de 19 ou plus, il n\'a aucun effet sur vous.</p>',
    link: '/liste-objets-magiques/bandeau-dintelligence',
    title: 'Bandeau d\'intelligence',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bateau pliable',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet objet ressemble à une boîte en bois de 30 centimètres de long pour 15 de large et 15 de profondeur. Il pèse 2 kilos et flotte. On peut l\'ouvrir pour stocker des objets à l\'intérieur. Il répond à trois mots de commande, chacun nécessitant une action.</p>\n<p>Le premier déplie la boîte qui se transforme en bateau de 3 mètres de long pour 1,20 mètre de large et 60 centimètres de profondeur. Il est doté d\'une paire de rames, d\'une ancre, d\'un mât et d\'une voile latine. Quatre créatures de taille M au maximum peuvent s\'y installer confortablement.</p>\n<p>Le deuxième mot de commande déplie la boîte pour former un bateau de 7 mètres de long, 2,40 mètres de large et 2 mètres de profondeur. Il est doté d\'un pont, de bancs pour les rameurs, de cinq paires d\'avirons, d\'un aviron de queue, d\'une ancre, d\'une cabine de pont et d\'un mât à la voile carrée. Il accueille confortablement 15 créatures de taille M.</p>\n<p>Quand la boîte se change en bateau, son poids devient celui d\'un navire ordinaire de sa taille et tout ce qui se trouvait dans la boîte reste dans le bateau.</p>\n<p>Le troisième mot de commande replie le bateau qui redevient une boîte, à condition qu\'il n\'y ait pas de créatures à bord. Tout objet qui se trouve à bord et ne peut pas tenir dans la boîte se retrouve à l\'extérieur de ce récipient quand le navire se replie. Tout objet qui se trouve à bord du bateau et peut tenir dans la boîte se retrouve à l\'intérieur.</p>',
    link: '/liste-objets-magiques/bateau-pliable',
    title: 'Bateau pliable',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Bâton d\'envoûtement',
      magicitem: {
        type: 'Bâton',
        rarity: 'Rare',
        attunement: 'harmonisation avec un barde, un clerc, un druide, un ensorceleur, un magicien ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce bâton en main, vous pouvez utiliser une action pour dépenser 1 des 10 charges qu\'il contient et lancer <a href="/grimoire/charme-personne"><em>charme-personne</em></a>, <a href="/grimoire/injonction"><em>injonction</em></a> ou <a href="/grimoire/comprehension-des-langues"><em>compréhension des langues</em></a> par son biais en appliquant le DD des jets de sauvegarde contre vos sorts. On peut également manier ce bâton comme une arme magique.</p>\n<p>Si vous tenez le bâton en main et ratez un jet de sauvegarde contre un sort d\'enchantement qui vous prend vous, et uniquement vous, pour cible, vous pouvez transformer votre jet de sauvegarde raté en réussite. Vous ne pourrez plus utiliser cette propriété du bâton jusqu\'à l\'aube suivante. Si vous réussissez un jet de sauvegarde contre un sort d\'enchantement qui vous prend vous, et uniquement vous, pour cible, avec ou sans l\'intervention du bâton, vous pouvez utiliser votre réaction pour dépenser 1 charge du bâton et renvoyer le sort, comme si vous l\'aviez vous-même lancé, vers son expéditeur.</p>\n<p>Le bâton récupère 1d8+2 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. La magie du bâton disparaît sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baton-denvoutement',
    title: 'Bâton d\'envoûtement',
    type: 'Bâton',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un barde, un clerc, un druide, un ensorceleur, un magicien ou un sorcier exigée'
  },
  {
    header: {
      title: 'Bâton de combat',
      magicitem: {
        type: 'Bâton',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bâton peut être manié comme une arme magique qui confère un bonus de +3 à l\'attaque et aux jets de dégâts effectués par son biais.</p>\n<p>Le bâton contient 10 charges. Quand vous réussissez une attaque au corps à corps en l\'utilisant, vous pouvez dépenser jusqu\'à 3 charges. Pour chaque charge dépensée, la cible subit 1d6 dégâts de force supplémentaires. Le bâton récupère 1d6+4 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. La magie du bâton disparaît sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baton-de-combat',
    title: 'Bâton de combat',
    type: 'Bâton',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bâton de feu',
      magicitem: {
        type: 'Bâton',
        rarity: 'Très rare',
        attunement: 'harmonisation avec un druide, un ensorceleur, un magicien ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'une résistance contre les dégâts de feu tant que vous tenez ce bâton en main.</p>\n<p>Le bâton contient 10 charges. Tant que vous le tenez en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs de ses charges et lancer un des sorts suivants par son biais, en appliquant le DD des jets de sauvegarde contre vos sorts : <a href="/grimoire/mains-brulantes"><em>mains brûlantes</em></a> (1 charge), <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> (3 charges) ou <a href="/grimoire/mur-de-feu"><em>mur de feu</em></a> (4 charges).</p>\n<p>Le bâton récupère 1d6+4 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. Le bâton est détruit, se racornit et tombe en cendres sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baton-de-feu',
    title: 'Bâton de feu',
    type: 'Bâton',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation avec un druide, un ensorceleur, un magicien ou un sorcier exigée'
  },
  {
    header: {
      title: 'Bâton de flétrissement',
      magicitem: {
        type: 'Bâton',
        rarity: 'Rare',
        attunement: 'harmonisation avec un druide, un clerc ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bâton contient 3 charges et récupère 1d3 charges dépensées chaque jour, à l\'aube.</p>\n<p>Le bâton peut être manié comme une arme magique. En cas d\'attaque réussie, il inflige les dégâts d\'un bâton normal et vous pouvez dépenser 1 charge pour infliger 2d10 dégâts nécrotiques supplémentaires à la cible. De plus, la cible doit réussir un jet de sauvegarde de Constitution DD 15 pour ne pas subir de <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> pendant 1 heure lors des tests de caractéristique et des jets de sauvegarde basés sur la Force ou la Constitution.</p>',
    link: '/liste-objets-magiques/baton-de-fletrissement',
    title: 'Bâton de flétrissement',
    type: 'Bâton',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un druide, un clerc ou un sorcier exigée'
  },
  {
    header: {
      title: 'Bâton de givre',
      magicitem: {
        type: 'Bâton',
        rarity: 'Très rare',
        attunement: 'harmonisation avec un druide, un ensorceleur, un magicien ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'une résistance contre les dégâts de froid tant que vous tenez ce bâton en main.</p>\n<p>Le bâton contient 10 charges. Tant que vous le tenez en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs de ses charges et lancer un des sorts suivants par son biais, en appliquant le DD des jets de sauvegarde contre vos sorts : <a href="/grimoire/cone-de-froid"><em>cône de froid</em></a> (5 charges), <a href="/grimoire/tempete-de-grele"><em>tempête de grêle</em></a> (4 charges) ou <a href="/grimoire/mur-de-glace"><em>mur de glace</em></a> (4 charges).</p>\n<p>Le bâton récupère 1d6+4 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. Le bâton est détruit et se transforme en eau sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baton-de-givre',
    title: 'Bâton de givre',
    type: 'Bâton',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation avec un druide, un ensorceleur, un magicien ou un sorcier exigée'
  },
  {
    header: {
      title: 'Bâton de guérison',
      magicitem: {
        type: 'Bâton',
        rarity: 'Rare',
        attunement: 'harmonisation avec un barde, un clerc ou un druide exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Le bâton contient 10 charges. Tant que vous le tenez en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs de ses charges et lancer un des sorts suivants par son biais, en appliquant le DD des jets de sauvegarde contre vos sorts et le modificateur de votre caractéristique d\'incantation : <a href="/grimoire/soin-des-blessures"><em>soin des blessures</em></a> (1 charge par niveau de sort, 4 e au maximum), <a href="/grimoire/restauration-inferieure"><em>restauration inférieure</em></a> (2 charges) ou <a href="/grimoire/soin-des-blessures-de-groupe"><em>soin des blessures de groupe</em></a> (5 charges).</p>\n<p>Le bâton récupère 1d6+4 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. Le bâton disparaît en un éclat de lumière sur un résultat de 1.</p>',
    link: '/liste-objets-magiques/baton-de-guerison',
    title: 'Bâton de guérison',
    type: 'Bâton',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un barde, un clerc ou un druide exigée'
  },
  {
    header: {
      title: 'Bâton de puissance',
      magicitem: {
        type: 'Bâton',
        rarity: 'Très rare',
        attunement: 'harmonisation avec un ensorceleur, un magicien ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bâton peut être manié comme une arme magique qui confère un bonus de +2 à l\'attaque et aux jets de dégâts effectués par son biais. Tant que vous le tenez en main, vous bénéficiez d\'un bonus de +2 à la Classe d\'Armure, aux jets de sauvegarde et aux jets d\'attaque des sorts.</p>\n<p>Le bâton contient 20 charges en ce qui concerne l\'utilisation des propriétés suivantes. Il récupère 2d8+4 charges dépensées à l\'aube. Si vous dépensez la dernière charge, lancez un d20. Le bâton conserve son bonus de +2 aux jets d\'attaque et de dégâts mais perd toutes ses autres propriétés sur un résultat de 1. Le bâton récupère 1d8+2 charges sur un résultat de 20.</p>\n<p><strong><em>Frappe surpuissante</em></strong>. Quand vous réussissez une attaque au corps à corps en maniant le bâton, vous pouvez dépenser 1 charge pour infliger 1d6 dégâts de force supplémentaires à la cible.</p>\n<p><strong><em>Sorts</em></strong>. Tant que vous tenez ce bâton en main, vous pouvez utiliser une action pour dépenser 1 ou plusieurs charges et lancer un des sorts suivants, en appliquant le DD des jets de sauvegarde contre vos sorts et votre bonus d\'attaque de sort : <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> (version de niveau 5, 5 charges), <a href="/grimoire/cone-de-froid"><em>cône de froid</em></a> (5 charges), <a href="/grimoire/eclair"><em>éclair</em></a> (version de niveau 5, 5 charges), <a href="/grimoire/globe-dinvulnerabilite"><em>globe d\'invulnérabilité</em></a> (6 charges), <a href="/grimoire/immobiliser-un-monstre"><em>immobiliser un monstre</em></a> (5 charges), <a href="/grimoire/levitation"><em>lévitation</em></a> (2 charges), <a href="/grimoire/mur-de-force"><em>mur de force</em></a> (5 charges), <a href="/grimoire/projectile-magique"><em>projectile magique</em></a> (1 charge) ou <a href="/grimoire/rayon-affaiblissant"><em>rayon affaiblissant</em></a> (1 charge).</p>\n<p><strong><em>Contrecoup vengeur</em></strong>. Vous pouvez utiliser une action pour briser le bâton sur votre genou ou une surface solide et déclencher son contrecoup vengeur. Le bâton est détruit et libère le reste de sa magie en une explosion en forme de sphère de 9 mètres de rayon centrée sur lui.</p>\n<p>Il y a 50 % de chances pour que vous soyez instantanément transporté vers un plan d\'existence déterminé au hasard, ce qui vous permet d\'éviter l\'explosion. Si vous ne parvenez  pas à l\'éviter, vous subissez des dégâts de force égaux à 16 × le nombre de charges restantes du bâton. Toutes les autres créatures présentes dans la zone doivent chacune effectuer un jet de sauvegarde de Dextérité DD 17. En cas de jet de sauvegarde raté, une créature subit un montant de dégâts basés sur la distance qui la sépare du point d\'origine de l\'explosion, comme indiqué dans la table suivante. En cas de jet de sauvegarde réussi, elle subit la moitié des dégâts seulement.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">Distance du point d\'origine</th>\n<th style="text-align: center;">Dégâts</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>&lt; ou = 3m</strong></td>\n<td style="text-align: center;">8 × nombre de charges restantes du bâton</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>&gt; à 3m et &lt; ou = à 6m</strong></td>\n<td style="text-align: center;">6 × nombre de charges restantes du bâton</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>&gt; à 6m et &lt; ou = à 9m</strong></td>\n<td style="text-align: center;">4 × nombre de charges restantes du bâton</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/baton-de-puissance',
    title: 'Bâton de puissance',
    type: 'Bâton',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation avec un ensorceleur, un magicien ou un sorcier exigée'
  },
  {
    header: {
      title: 'Bâton de tonnerre et de foudre',
      magicitem: {
        type: 'Bâton',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bâton peut être manié comme une arme magique qui confère un bonus de +2 à l\'attaque et aux jets de dégâts effectués par son biais. Il possède également les propriétés supplémentaires suivantes. Quand une de ces propriétés est utilisée, il faut attendre l\'aube suivante avant de pouvoir l\'utiliser à nouveau.</p>\n<p><strong><em>Foudre</em></strong>. Quand vous réussissez une attaque au corps à corps avec le bâton, vous pouvez faire en sorte que la cible subisse 2d6 dégâts de foudre supplémentaires.</p>\n<p><strong><em>Tonnerre</em></strong>. Quand vous réussissez une attaque au corps à corps avec le bâton, vous pouvez faire en sorte qu\'il émette un claquement de tonnerre audible à 90 mètres à la ronde. La cible frappée doit réussir un jet de sauvegarde de Constitution DD 17 pour ne pas être <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> jusqu\'à la fin de votre prochain tour.</p>\n<p><strong><em>Frappe foudroyante</em></strong>. Vous pouvez utiliser une action pour qu\'un éclair surgisse de l\'extrémité du bâton sur une ligne de 1,50 mètre de large et 36 mètres de long. Les créatures sur cette ligne doivent chacune effectuer un jet de sauvegarde de Dextérité DD 17 ; elles subissent 9d6 dégâts de foudre en cas de jet de sauvegarde raté ou la moitié de ces dégâts seulement en cas de réussite.</p>\n<p><strong><em>Coup de tonnerre</em></strong>. Vous pouvez utiliser une action pour que le bâton émette un coup de tonnerre assourdissant audible à 180 mètres à la ronde. Les créatures situées à 18 mètres ou moins de vous (mais pas vous) doivent chacune effectuer un jet de sauvegarde de Constitution DD 17. En cas de jet de sauvegarde raté, une créature subit 2d6 dégâts de tonnerre et devient <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdie</em></a> pendant 1 minute. En cas de jet de sauvegarde réussi, une créature subit la moitié des dégâts seulement et n\'est pas <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdie</em></a>.</p>\n<p><strong><em>Tonnerre et foudre</em></strong>. Vous pouvez utiliser une action pour vous servir en même temps des propriétés Frappe foudroyante et Coup de tonnerre. L\'activation de cette propriété dépense son utilisation quotidienne. Elle ne dépense toutefois pas l\'utilisation quotidienne des propriétés Frappe foudroyante et Coup de tonnerre.</p>',
    link: '/liste-objets-magiques/baton-de-tonnerre-et-de-foudre',
    title: 'Bâton de tonnerre et de foudre',
    type: 'Bâton',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bâton des forêts',
      magicitem: {
        type: 'Bâton',
        rarity: 'Rare',
        attunement: 'harmonisation avec un druide exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bâton peut être manié comme une arme magique qui confère un bonus de +2 à l\'attaque et aux jets de dégâts effectués par son biais. Tant que vous le tenez en main, vous bénéficiez d\'un bonus de +2 aux jets d\'attaque des sorts.</p>\n<p>Le bâton contient 10 charges en ce qui concerne les propriétés suivantes. Il récupère 1d6+4 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. Sur un résultat de 1, la magie du bâton disparaît, il perd toutes ses propriétés et devient un bâton non-magique ordinaire.</p>\n<p><strong><em>Sorts</em></strong>. Vous pouvez utiliser une action pour dépenser 1 ou plusieurs des charges du bâton et lancer un des sorts suivants par son biais, en appliquant le DD des jets de sauvegarde contre vos sorts : <a href="/grimoire/amitie-avec-les-animaux"><em>amitié avec les animaux</em></a> (1 charge), <a href="/grimoire/communication-avec-les-animaux"><em>communication avec les animaux</em></a> (1 charge), <a href="/grimoire/communication-avec-les-plantes"><em>communication avec les plantes</em></a> (3 charges), <a href="/grimoire/eveil"><em>éveil</em></a> (5 charges), <a href="/grimoire/localiser-des-animaux-ou-des-plantes"><em>localiser des animaux ou des plantes</em></a> (2 charges), <a href="/grimoire/mur-depines"><em>mur d\'épines</em></a> (6 charges) ou <a href="/grimoire/peau-decorce"><em>peau d\'écorce</em></a> (2 charges).</p>\n<p>Vous pouvez également utiliser une action pour lancer le sort <a href="/grimoire/passage-sans-trace"><em>passage sans trace</em></a> par le biais du bâton et ce, sans dépenser aucune charge.</p>\n<p>Forme d\'arbre . Vous pouvez utiliser une action pour planter une extrémité du bâton dans la terre fertile et dépenser une charge afin de transformer le bâton en un arbre vigoureux. Cet arbre doté d\'un tronc de 1,50 mètre de diamètre fait 18 mètres de haut. Les branches au sommet de la canopée s\'étendent depuis le haut du tronc sur un rayon de 6 mètres. L\'arbre semble ordinaire ; il émane néanmoins de lui une faible aura de transmutation magique si on le cible d\'une <a href="/grimoire/detection-de-la-magie"><em>détection de la magie</em></a>. Si vous touchez l\'arbre et utilisez une autre action pour prononcer le mot de commande du bâton, vous le forcez à retrouver sa forme normale. Les créatures dans l\'arbre chutent lorsque celui-ci redevient un bâton.</p>',
    link: '/liste-objets-magiques/baton-des-forets',
    title: 'Bâton des forêts',
    type: 'Bâton',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un druide exigée'
  },
  {
    header: {
      title: 'Bâton du grand essaim',
      magicitem: {
        type: 'Bâton',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bâton contient 10 charges. Il récupère 1d6+4 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. Sur un résultat de 1, un nuée d\'insectes dévore et détruit le bâton, puis se disperse.</p>\n<p><strong><em>Sorts</em></strong>. Tant que vous tenez le bâton en main, vous pouvez utiliser une action pour dépenser plusieurs de ses charges et lancer un des sorts suivants par son biais, en appliquant le DD des jets de sauvegarde contre vos sorts : <a href="/grimoire/fleau-dinsectes"><em>fléau d\'insectes</em></a> (5 charges) ou <a href="/grimoire/insecte-geant"><em>insecte géant</em></a> (4 charges).</p>\n<p><strong><em>Nuée d\'insectes</em></strong>. Tant que vous tenez le bâton en main, vous pouvez utiliser une action pour dépenser 1 charge et provoquer l\'apparition d\'une nuée d\'insectes volants inoffensifs qui s\'étend dans un rayon de 3 mètres autour de vous. Les insectes restent ainsi pendant 10 minutes. La visibilité dans la zone qu\'ils occupent est nulle pour toutes les créatures sauf vous. La nuée vous suit et reste centrée sur vous. Un vent de 30 kilomètres par heure au moins disperse la nuée et met fin à l\'effet qu\'elle produit.</p>',
    link: '/liste-objets-magiques/baton-du-grand-essaim',
    title: 'Bâton du grand essaim',
    type: 'Bâton',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bâton du python',
      magicitem: {
        type: 'Bâton',
        rarity: 'Peu courant',
        attunement: 'harmonisation avec un clerc, un druide ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action pour prononcer le mot de commande de ce bâton et le lancer par terre, à 3 mètres ou moins de vous. Le bâton se transforme alors en <a href="/bestiaire/serpent-constricteur-geant">serpent constricteur géant</a>. Il agit lors de son propre décompte d\'initiative mais reste sous votre contrôle. En utilisant une action bonus pour prononcer une nouvelle fois le mot de commande, le bâton reprend sa forme normale dans le dernier espace occupé lorsqu\'il était serpent.</p>\n<p>Lors de votre tour, vous pouvez mentalement diriger le serpent si celui-ci se situe à 18 mètres ou moins de vous et si vous n\'êtes pas <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisé</em></a>. Vous choisissez l\'action qu\'entreprend le serpent et l\'endroit vers lequel il se déplace lors de son prochain tour. Vous pouvez également donner un ordre moins spécifique (attaquer vos ennemis ou protéger un endroit).</p>\n<p>Si le nombre de points de vie du serpent tombe à 0, il meurt et reprend sa forme de bâton. Le bâton est alors détruit et vole en éclats. Si le serpent reprend sa forme de bâton avant de perdre la totalité de ses points de vie, il les récupère tous.</p>',
    link: '/liste-objets-magiques/baton-du-python',
    title: 'Bâton du python',
    type: 'Bâton',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation avec un clerc, un druide ou un sorcier exigée'
  },
  {
    header: {
      title: 'Bâton du thaumaturge',
      magicitem: {
        type: 'Bâton',
        rarity: 'Légendaire',
        attunement: 'harmonisation avec un ensorceleur, un magicien ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bâton peut être manié comme une arme magique qui confère un bonus de +3 à l\'attaque et aux jets de dégâts effectués par son biais. Tant que vous le tenez en main, vous bénéficiez d\'un bonus de +2 aux jets d\'attaque des sorts.</p>\n<p>Le bâton contient 50 charges en ce qui concerne les propriétés suivantes. Il récupère 4d6+2 charges dépensées chaque jour, à l\'aube. Si vous dépensez la dernière charge, lancez un d20. Sur un résultat de 20, le bâton récupère 1d12+1 charges.</p>\n<p><strong><em>Absorption des sorts</em></strong>. Tant que vous tenez le bâton en main, vous vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre les sorts. De plus, vous pouvez utiliser votre réaction quand une autre créature lance un sort qui vous prend vous, et uniquement vous, pour cible. Le cas échéant, le bâton absorbe la magie du sort et annule son effet en récupérant un nombre de charges égal au niveau du sort absorbé. Attention toutefois : si le bâton contient plus de 50 charges suite à cette récupération, il explose comme si vous aviez activé le contrecoup vengeur du bâton (voir ci-dessous).</p>\n<p><strong><em>Sorts</em></strong>. Tant que vous tenez ce bâton en main, vous pouvez utiliser une action pour dépenser certaines des charges du bâton et lancer un des sorts suivants, en appliquant le DD des jets de sauvegarde contre vos sorts et votre caractéristique d\'incantation : <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> (version de niveau 7, 7 charges), <a href="/grimoire/changement-de-plan"><em>changement de plan</em></a> (7 charges), <a href="/grimoire/deblocage"><em>déblocage</em></a> (2 charges), <a href="/grimoire/dissipation-de-la-magie"><em>dissipation de la magie</em></a> (3 charges), <a href="/grimoire/eclair"><em>éclair</em></a> (version de niveau 7, 7 charges), <a href="/grimoire/invisibilite"><em>invisibilité</em></a> (2 charges), <a href="/grimoire/invoquer-un-elementaire"><em>invoquer un élémentaire</em></a> (7 charges), <a href="/grimoire/mur-de-feu"><em>mur de feu</em></a> (4 charges), <a href="/grimoire/passe-muraille"><em>passe-muraille</em></a> (5 charges), <a href="/grimoire/sphere-de-feu"><em>sphère de feu</em></a> (2 charges), <a href="/grimoire/telekinesie"><em>télékinésie</em></a> (5 charges), <a href="/grimoire/tempete-de-grele"><em>tempête de grêle</em></a> (4 charges) ou <a href="/grimoire/toile-daraignee"><em>toile d\'araignée</em></a> (2 charges).</p>\n<p>Vous pouvez également utiliser une action pour lancer un des sorts suivants par le biais du bâton et ce, sans dépenser aucune charge : <a href="/grimoire/agrandir-retrecir"><em>agrandir/rétrécir</em></a>, <a href="/grimoire/detection-de-la-magie"><em>détection de la magie</em></a>, <a href="/grimoire/lumiere"><em>lumière</em></a>, <a href="/grimoire/main-du-mage"><em>main du mage</em></a>, <a href="/grimoire/protection-contre-le-mal-et-le-bien"><em>protection contre le mal et le bien</em></a> ou <a href="/grimoire/verrou-magique"><em>verrou magique</em></a>.</p>\n<p><strong><em>Contrecoup vengeur</em></strong>. Vous pouvez utiliser une action pour briser le bâton sur votre genou ou une surface solide et déclencher son contrecoup vengeur. Le bâton est détruit et libère le reste de sa magie en une explosion en forme de sphère de 9 mètres de rayon centrée sur lui.</p>\n<p>Il y a 50 % de chances pour que vous soyez instantanément transporté vers un plan d\'existence déterminé au hasard, ce qui vous permet d\'éviter l\'explosion. Si vous ne parvenez pas à l\'éviter, vous subissez des dégâts de force égaux à 16 × le nombre de charges restantes du bâton. Toutes les autres créatures présentes dans la zone doivent chacune effectuer un jet de sauvegarde de Dextérité DD 17. En cas de jet de sauvegarde raté, une créature subit un montant de dégâts basés sur la distance qui la sépare du point d\'origine de l\'explosion, comme indiqué dans la table suivante. En cas de jet de sauvegarde réussi, elle subit la moitié des dégâts seulement.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">Distance du point d\'origine</th>\n<th style="text-align: center;">Dégâts</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>&lt; ou = 3m</strong></td>\n<td style="text-align: center;">8 × nombre de charges restantes du bâton</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>&gt; à 3m et &lt; ou = à 6m</strong></td>\n<td style="text-align: center;">6 × nombre de charges restantes du bâton</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>&gt; à 6m et &lt; ou = à 9m</strong></td>\n<td style="text-align: center;">4 × nombre de charges restantes du bâton</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/baton-du-thaumaturge',
    title: 'Bâton du thaumaturge',
    type: 'Bâton',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation avec un ensorceleur, un magicien ou un sorcier exigée'
  },
  {
    header: {
      title: 'Baume revigorant',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce pot en verre de 7 à 8 centimètres de diamètre contient 1d4+1 doses d\'une mixture épaisse qui sent légèrement l\'aloès. Le pot et son contenu pèsent un total de 250 grammes.</p>\n<p>Par une action, il est possible d\'avaler ou d\'appliquer sur la peau une dose de baume. La créature qui en bénéficie récupère 2d8+2 points de vie, elle n\'est plus <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisinnée</em></a> et toutes les maladies dont elle est victime sont soignées.</p>',
    link: '/liste-objets-magiques/baume-revigorant',
    title: 'Baume revigorant',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Bol de contrôle des élémentaires d\'eau',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que ce bol est rempli d\'eau, vous pouvez utiliser une action pour prononcer son mot de commande et invoquer un élémentaire de l\'eau, comme si vous aviez lancé le sort <a href="/grimoire/invoquer-un-elementaire"><em>invoquer un élémentaire</em></a>. Ensuite, il faut attendre l\'aube suivante avant de pouvoir réutiliser ainsi le bol.</p>\n<p>Le bol fait une trentaine de centimètres de diamètre pour quinze centimètres de profondeur. Vide, il pèse 1,5 kilo et contient dans les 10 litres.</p>',
    link: '/liste-objets-magiques/bol-de-controle-des-elementaires-deau',
    title: 'Bol de contrôle des élémentaires d\'eau',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Bottes ailées',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces bottes aux pieds, vous disposez d\'une vitesse de déplacement en vol égale à votre vitesse au sol. Vous pouvez utiliser les bottes pour voler pendant un maximum de 4 heures d\'affilée ou lors de vols plus courts. Toutefois, chaque utilisation dépense au minimum 1 minute de cette durée. Si vous volez au moment où cette durée prend fin, vous descendez à une vitesse de 9 mètres par round jusqu\'à toucher le sol.</p>\n<p>Les bottes récupèrent 2 heures de capacité de vol pour chaque période de 12 heures passées sans être utilisées.</p>',
    link: '/liste-objets-magiques/bottes-ailees',
    title: 'Bottes ailées',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bottes de lévitation',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces bottes, vous pouvez utiliser une action pour lancer le sort <a href="/grimoire/levitation"><em>lévitation</em></a> sur votre personne à volonté.</p>',
    link: '/liste-objets-magiques/bottes-de-levitation',
    title: 'Bottes de lévitation',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bottes de marche et de saut',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces bottes, votre vitesse au sol passe à 9 mètres (à moins qu\'elle ne soit déjà supérieure) et elle ne se réduit pas si vous êtes encombré ou portez une armure lourde. De plus, vous pouvez sauter trois fois plus loin que la normale, sans dépasser la distance que vous pourriez parcourir avec la distance de déplacement qui vous reste.</p>',
    link: '/liste-objets-magiques/bottes-de-marche-et-de-saut',
    title: 'Bottes de marche et de saut',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bottes de rapidité',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces bottes, vous pouvez utiliser une action bonus pour claquer des talons. Dans ce cas, les bottes doublent votre vitesse au sol et toute créature effectuant une attaque d\'opportunité contre vous subit un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lors du jet d\'attaque. Vous mettez un terme à l\'effet si vous claquez de nouveau des talons.</p>\n<p>Une fois que la capacité spéciale des bottes a servi pendant un total de 10 minutes, cette magie est indisponible jusqu\'à ce que vous ayez terminé un long repos.</p>',
    link: '/liste-objets-magiques/bottes-de-rapidite',
    title: 'Bottes de rapidité',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bottes des terres gelées',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ces bottes fourrées sont chaudes et bien douillettes. Tant que vous les portez, vous bénéficiez des avantages suivants.</p>\n<ul>\n<li>Vous êtes résistants aux dégâts de froid.</li>\n<li>Vous ignorez les terrains rendus difficiles à cause de la glace ou de la neige.</li>\n<li>Vous supportez des températures descendant jusqu\'à -45°C sans protection supplémentaire. Si vous portez des vêtements chauds, vous supportez des températures allant jusqu\'à -75°C.</li>\n</ul>',
    link: '/liste-objets-magiques/bottes-des-terres-gelees',
    title: 'Bottes des terres gelées',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bottes elfiques',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces bottes, vos pas ne s\'accompagnent d\'aucun bruit, quelle que soit la surface que vous traversez. Vous obtenez également l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests de Dextérité (Discrétion) basés sur le silence de vos déplacements.</p>',
    link: '/liste-objets-magiques/bottes-elfiques',
    title: 'Bottes elfiques',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Bouclier +1',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce bouclier, vous bénéficiez d\'un bonus de +1 à la CA. Ce bonus vient en plus du bonus normal à la CA que le bouclier confère.</p>',
    link: '/liste-objets-magiques/bouclier-1',
    title: 'Bouclier +1',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Bouclier +2',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce bouclier, vous bénéficiez d\'un bonus de +2 à la CA. Ce bonus vient en plus du bonus normal à la CA que le bouclier confère.</p>',
    link: '/liste-objets-magiques/bouclier-2',
    title: 'Bouclier +2',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Bouclier +3',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce bouclier, vous bénéficiez d\'un bonus de +3 à la CA. Ce bonus vient en plus du bonus normal à la CA que le bouclier confère.</p>',
    link: '/liste-objets-magiques/bouclier-3',
    title: 'Bouclier +3',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Bouclier animé',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous maniez ce bouclier, vous pouvez prononcer son mot de commande par une action bonus. Il s\'anime alors, bondit dans les airs et flotte dans votre emplacement pour vous protéger comme si vous le teniez alors que vous gardez les mains libres. Il reste animé pendant 1 minute, jusqu\'à ce que vous utilisiez une action bonus pour mettre un terme à l\'effet ou jusqu\'à ce que vous soyez <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisé</em></a> ou mort. Il tombe alors à terre ou revient dans votre main si vous avez une main libre.</p>',
    link: '/liste-objets-magiques/bouclier-anime',
    title: 'Bouclier animé',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bouclier antiprojectiles',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous maniez ce bouclier, vous bénéficiez d\'un bonus de +2 à la CA contre les attaques à distance. Ce bonus s\'ajoute au bonus que le bouclier apporte déjà d\'ordinaire à la CA. De plus, quand un assaillant effectue une attaque à distance contre une cible située à 1,50 mètre de vous ou moins, vous pouvez utiliser votre réaction pour devenir la cible de cette attaque à sa place.</p>',
    link: '/liste-objets-magiques/bouclier-antiprojectiles',
    title: 'Bouclier antiprojectiles',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bouclier d\'attraction des projectiles',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce bouclier, vous bénéficiez d\'une résistance contre les dégâts infligés par les attaques d\'armes à distance.</p>\n<p><strong><em>Malédiction</em></strong>. Ce bouclier est maudit. L\'harmonisation avec ce bouclier vous maudit jusqu\'à ce que vous soyez la cible du sort <a href="/grimoire/lever-une-malediction"><em>lever une malédiction</em></a> ou d\'une magie similaire. Se débarrasser du bouclier ne met pas fin à la malédiction qui pèse sur vous. Chaque fois qu\'une attaque d\'arme à distance est effectuée contre une cible située à 3 mètres ou moins de vous, la malédiction intervient pour que vous soyez la cible de l\'attaque à la place de la cible initiale.</p>',
    link: '/liste-objets-magiques/bouclier-dattraction-des-projectiles',
    title: 'Bouclier d\'attraction des projectiles',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bouclier de Hroljnir',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Artefact',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Pendant les temps anciens, géants et dragons s\'affrontèrent dans une guerre effroyable. Le champion des géants, Hroljnir, se forgea une targe dans un bloc d\'adamantium le plus pur. Il vainquit plusieurs grands vers avant d\'être terrassé lors de la dernière bataille de la guerre dans un marais putride tenu par un immense dragon noir, peut être le premier de son genre. Ce dernier s\'empara du bouclier pour en faire le joyau de son trésor. Au cours des millénaires, la targe passa de dragon en dragon au fil des duels et subit les souffles dévastateurs des vainqueurs. Qui sait quel vénérable dragon est aujourd\'hui en possession du bouclier ?</p>\n<p>Hroljnir fixait sa targe à son avant-bras. Elle peut servir de pavois pour une créature de taille M.</p>\n<p><strong><em>Bouclier magique</em></strong>. La targe de Hroljnir est un bouclier qui offre un bonus de +3 à la classe d\'armure de son porteur. Il offre également une résistance aux dégâts de type acide, feu, froid, foudre et poison.</p>\n<p><strong><em>Don des géants</em></strong>. Une fois harmonisé au bouclier, vous gagnez les bénéfices suivants :</p>\n<ul>\n<li>Votre Force augmente de 2, avec un maximum de 24.</li>\n<li>Vous parlez la langue des géants.</li>\n<li>Lorsque vous effectuez une attaque avec une arme, vous pouvez utiliser une action bonus pour infliger 1d6 dommages supplémentaires de type acide, feu, froid, foudre ou poison, au choix.</li>\n</ul>\n<p><strong><em>Renforts</em></strong>. Si vous êtes harmonisé au bouclier, vous pouvez utiliser une action pour invoquer un <a href="/bestiaire/geant-des-tempetes">géant des tempêtes</a>. Ce dernier apparaît dans un espace inoccupé situé à moins de 27 mètres de vous. Il est amical envers vous et vos compagnons et obéit aux ordres que vous lui donnez. Il n\'attaquera jamais une créature de type géant et, si vous lui demandez de le faire, il devient hostile envers vous et tentera par tous les moyens de vous priver du bouclier. Une fois que vous avez utilisé cette capacité, vous devez attendre que trois jours aient passé avant de pouvoir recommencer.</p>\n<p><strong><em>Détruire le bouclier</em></strong>. Le bouclier n\'est détruit que s\'il subit simultanément le souffle de cinq dragons vénérables : un rouge, un bleu, un noir, un vert et un blanc.</p>',
    link: '/liste-objets-magiques/bouclier-de-hroljnir',
    title: 'Bouclier de Hroljnir',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Artefact',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bouclier de protection contre la magie',
      magicitem: {
        type: 'Armure',
        subtype: 'Bouclier',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce bouclier, vous vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre les sorts et autres effets magiques. De plus, les attaques de sort subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lorsqu\'elles vous prennent pour cible.</p>',
    link: '/liste-objets-magiques/bouclier-de-protection-contre-la-magie',
    title: 'Bouclier de protection contre la magie',
    type: 'Armure',
    subtype: 'Bouclier',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Boule de cristal',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez lancer le sort <a href="/grimoire/scrutation"><em>scrutation</em></a> (DD 17) par son intermédiaire.</p>',
    link: '/liste-objets-magiques/boule-de-cristal',
    title: 'Boule de cristal',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Boule de cristal de lecture des pensées',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez lancer le sort <a href="/grimoire/scrutation"><em>scrutation</em></a> (DD 17) par son intermédiaire.</p>\n<p>Vous pouvez dépenser une action pour lancer le sort <a href="/grimoire/detection-des-pensees"><em>détection des pensées</em></a> (DD 17) tandis que vous êtes en pleine scrutation avec la <em>boule de cristal</em>. Vous devez prendre pour cible une créature située dans un rayon de 9 mètres autour de l\'organe sensoriel et visible à travers lui. Vous n\'avez pas besoin de vous concentrer sur cette détection des pensées pour la maintenir pendant toute sa durée, mais elle se termine en même temps que la scrutation.</p>',
    link: '/liste-objets-magiques/boule-de-cristal-de-lecture-des-pensees',
    title: 'Boule de cristal de lecture des pensées',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Boule de cristal de télépathie',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez lancer le sort <a href="/grimoire/scrutation"><em>scrutation</em></a> (DD 17) par son intermédiaire.</p>\n<p>Pendant que vous scrutez quelque chose avec la <em>boule de cristal</em>, vous pouvez communiquer par télépathie avec les créatures situées dans un rayon de 9 mètres autour de l\'organe sensoriel et visibles à travers lui. Vous pouvez aussi utiliser une action pour lancer le sort <a href="/grimoire/suggestion"><em>suggestion</em></a> (DD 17) sur l\'une de ces créatures par l\'intermédiaire de l\'organe sensoriel. Vous n\'avez pas besoin de vous concentrer sur cette suggestion pour la maintenir pendant toute sa durée, mais elle se termine en même temps que la scrutation. Une fois le pouvoir de suggestion de la boule utilisé, vous devez attendre l\'aube suivante avant de pouvoir vous en servir à nouveau.</p>',
    link: '/liste-objets-magiques/boule-de-cristal-de-telepathie',
    title: 'Boule de cristal de télépathie',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Boule de cristal de vision suprême',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez lancer le sort <a href="/grimoire/scrutation"><em>scrutation</em></a> (DD 17) par son intermédiaire.</p>\n<p>Pendant que vous utilisez la <em>boule de cristal</em> pour scruter quelque chose, vous bénéficiez de la <a href="/grimoire/vision-supreme"><em>vision suprême</em></a> dans un rayon de 36 mètres autour de l\'organe sensoriel.</p>',
    link: '/liste-objets-magiques/boule-de-cristal-de-vision-supreme',
    title: 'Boule de cristal de vision suprême',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bouteille de l\'éfrit',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette bouteille en laiton est ornée de peintures et pèse 0,5 kilo. Si vous utilisez une action pour la déboucher, un épais nuage de fumée s\'en échappe. La fumée se dissipe à la fin de votre tour dans un éclair de feu inoffensif et un <a href="/bestiaire/efrit">éfrit</a> apparaît dans un emplacement inoccupé dans un rayon de 9 mètres autour de vous.</p>\n<p>Le MJ lance un dé dans la table suivante quand quelqu\'un ouvre la bouteille pour la première fois afin de déterminer ce qu\'il se produit.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: left;">Effet</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>01-10</strong></td>\n<td style="text-align: left;">L\'éfrit vous attaque. Il disparaît après 5 rounds de combat et la bouteille perd sa magie.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>11-90</strong></td>\n<td style="text-align: left;">L\'éfrit vous sert pendant 1 heure et obéit à vos ordres puis il retourne dans la bouteille qu\'un nouveau bouchon vient sceller. Il est impossible de la déboucher pendant 24 heures. Il se produit la même chose lorsque l\'on ouvre la bouteille les deux fois suivantes. À la quatrième ouverture, l\'éfrit s\'échappe et disparaît et la bouteille perd toute magie.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>91-100</strong></td>\n<td style="text-align: left;">L\'éfrit peut lancer le sort de <a href="/grimoire/souhait"><em>souhait</em></a> à trois reprises pour vous. Il disparaît quand il a accordé le dernier souhait ou au bout d\'une heure et la bouteille perd sa magie.</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/bouteille-de-lefrit',
    title: 'Bouteille de l\'éfrit',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Bouteille fumigène',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>De la fumée s\'échappe du goulot de cette bouteille pourtant scellée au plomb et pesant 0,5 kilo. Quand vous utilisez une action pour la déboucher, un épais nuage de fumée se déverse dans un rayon de 18 mètres autour de la bouteille. La visibilité est nulle dans le nuage. À chaque fois que la bouteille passe une minute ouverte au sein du nuage, le rayon de ce dernier augmente de 3 mètres, jusqu\'à ce qu\'il atteigne son rayon maximum, à savoir 36 mètres.</p>\n<p>Le nuage persiste tant que la bouteille est ouverte. Pour la fermer, vous devez prononcer son mot de commande par une action. Une fois la bouteille fermée, le nuage se dissipe en 10 minutes. Un vent modéré (16 à 30 km/h) disperse la fumée en 1 minute tandis qu\'un vent fort (31 km/h ou plus) la dissipe en 1 round.</p>',
    link: '/liste-objets-magiques/bouteille-fumigene',
    title: 'Bouteille fumigène',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Bracelets d\'archerie',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces bracelets, vous maîtrisez l\'arc long et l\'arc court et gagnez un bonus de +2 aux jets de dégâts des attaques à distance avec ces armes.</p>',
    link: '/liste-objets-magiques/bracelets-darcherie',
    title: 'Bracelets d\'archerie',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Bracelets de défense',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces bracelets, vous gagnez un bonus de +2 à la CA, à condition que vous ne portiez ni armure, ni bouclier.</p>',
    link: '/liste-objets-magiques/bracelets-de-defense',
    title: 'Bracelets de défense',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Brasero de contrôle des élémentaires du feu',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant qu\'un feu brûle dans ce brasero en laiton, vous pouvez utiliser une action pour prononcer son mot de commande et invoquer un élémentaire du feu, comme si vous aviez lancé le sort <a href="/grimoire/invoquer-un-elementaire"><em>invoquer un élémentaire</em></a>. Ensuite, il faut attendre l\'aube suivante avant de pouvoir réutiliser ainsi le brasero.</p>\n<p>Le brasero pèse 2,5 kilos.</p>',
    link: '/liste-objets-magiques/brasero-de-controle-des-elementaires-du-feu',
    title: 'Brasero de contrôle des élémentaires du feu',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Broche de protection',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette broche, vous êtes résistant aux dégâts de force et vous êtes immunisé contre les dégâts du sort de <a href="/grimoire/projectile-magique"><em>projectile magique</em></a>.</p>',
    link: '/liste-objets-magiques/broche-de-protection',
    title: 'Broche de protection',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Cape de déplacement',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous enfilez cette cape, elle projette une illusion donnant l\'impression que vous vous tenez non loin de votre position réelle. Les créatures qui vous attaquent subissent donc un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lors de leur jet d\'attaque contre vous. Si vous subissez des dégâts, cette propriété cesse de fonctionner jusqu\'au début de votre prochain tour. Elle ne fonctionne pas non plus si vous êtes <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisé</em></a>, <a href="/gerer-la-sante-du-personnage#entravé"><em>entravé</em></a> ou incapable de bouger.</p>',
    link: '/liste-objets-magiques/cape-de-deplacement',
    title: 'Cape de déplacement',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Cape de l\'arachnide',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce bel habit est fait de soie noire mêlée de discrets filaments d\'argent. Tant que vous le portez, vous bénéficiez des avantages suivants.</p>\n<ul>\n<li>Vous êtes résistant aux dégâts de poison.</li>\n<li>Votre vitesse d\'escalade est égale à votre vitesse au sol.</li>\n<li>Vous pouvez vous déplacer de haut en bas sur une surface verticale et la tête en bas au plafond tout en gardant les mains libres.</li>\n<li>Vous ne pouvez pas rester coincé dans une toile, quel que soit son type, et vous pouvez vous déplacer à travers ses filaments comme si c\'était simplement un terrain difficile.</li>\n<li>Vous pouvez utiliser une action pour lancer le sort de <a href="/grimoire/toile-daraignee"><em>toile d\'araignée</em></a> (DD 13). La toile créée occupe le double de l\'espace habituel. Une fois que vous avez utilisé la cape ainsi, vous ne pouvez pas recommencer avant l\'aube suivante.</li>\n</ul>',
    link: '/liste-objets-magiques/cape-de-larachnide',
    title: 'Cape de l\'arachnide',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Cape de la chauve-souris',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette cape, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests de Dextérité (Discrétion). Dans les zones de faible lumière ou de ténèbres, vous pouvez attraper les bords de la cape à pleine main et vous en servir pour voler à une vitesse de 12 mètres. Si vous ne tenez plus les bords de la cape alors que vous volez ainsi ou si vous n\'êtes plus dans une zone de faible lumière ou de ténèbres, vous perdez cette vitesse de vol.</p>\n<p>Tant que vous portez la cape dans une zone de faible lumière ou de ténèbres, vous pouvez dépenser votre action pour lancer <a href="/grimoire/metamorphose"><em>métamorphose</em></a> sur votre personne et vous changer en <a href="/bestiaire/chauve-souris">chauve-souris</a>. Vous conservez vos valeurs d\'Intelligence, de Sagesse et de Charisme. Vous ne pouvez plus utiliser la cape pour vous transformer avant l\'aube suivante.</p>',
    link: '/liste-objets-magiques/cape-de-la-chauve-souris',
    title: 'Cape de la chauve-souris',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Cape de la raie manta',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette cape avec le capuchon tiré, vous pouvez respirer sous l\'eau et vous bénéficiez d\'une vitesse de nage de 18 mètres. Il faut dépenser une action pour coiffer le capuchon ou le repousser.</p>',
    link: '/liste-objets-magiques/cape-de-la-raie-manta',
    title: 'Cape de la raie manta',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Cape de prestidigitateur',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette cape sent légèrement le soufre. Tant que vous la portez, vous pouvez l\'utiliser pour lancer le sort <a href="/grimoire/porte-dimensionnelle"><em>porte dimensionnelle</em></a> par une action. Vous devez attendre l\'aube suivante pour réutiliser ce pouvoir.</p>\n<p>Quand vous disparaissez, vous laissez un nuage de fumée derrière vous et apparaissez dans un nuage similaire à la destination choisie. La visibilité est réduite dans le nuage que vous quittez et dans celui dans lequel vous arrivez. La fumée se dissipe à la fin de votre prochain tour, à moins qu\'un vent fort ou léger ne la disperse avant.</p>',
    link: '/liste-objets-magiques/cape-de-prestidigitateur',
    title: 'Cape de prestidigitateur',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Cape de protection',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 à la CA et aux jets de sauvegarde tant que vous portez cette cape.</p>',
    link: '/liste-objets-magiques/cape-de-protection',
    title: 'Cape de protection',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Cape elfique',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette cape avec le capuchon tiré, les créatures qui tentent un test de Sagesse (Perception) pour vous voir subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a>, tandis que vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> sur les tests de Dextérité (Discrétion) effectués pour vous cacher, car les teintes de la cape se modifient pour vous camoufler au mieux. Il faut une action pour tirer ou rabattre la capuche.</p>',
    link: '/liste-objets-magiques/cape-elfique',
    title: 'Cape elfique',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Carafe intarissable',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette carafe coiffée d\'un couvercle fait un bruit de liquide quand on la secoue, comme si elle contenait de l\'eau. Elle pèse 1 kilo.</p>\n<p>Vous pouvez dépenser une action pour enlever le couvercle et prononcer l\'un des trois mots de commande. De l\'eau douce ou salée (à vous de choisir) se déverse alors. Elle cesse de couler au début de votre prochain tour. Choisissez l\'une des options suivantes.</p>\n<ul>\n<li>« Ruisseau » produit 3,5 litres d\'eau.</li>\n<li>« Fontaine » produit 17,5 litres d\'eau.</li>\n<li>« Geyser » produit 105 litres d\'eau qui jaillissent en un geyser de 9 mètres de long pour 30 centimètres de large. Vous pouvez utiliser une action bonus tout en tenant la carafe pour diriger le geyser contre une créature située dans un rayon de 9 mètres autour de vous. Elle doit réussir un jet de sauvegarde de Force DD 13 ou subir 1d4 dégâts contondants et tomber <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>. Vous pouvez viser un objet au lieu d\'une créature, à condition que personne ne l\'ait équipé ou ne le transporte et qu\'il pèse au maximum 100 kilos. L\'objet est renversé ou repoussé à 4,50 mètres de vous.</li>\n</ul>',
    link: '/liste-objets-magiques/carafe-intarissable',
    title: 'Carafe intarissable',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Carillon d\'ouverture',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce tube métallique creux mesure une trentaine de centimètres de long pour 0,5 kilo. Vous pouvez utiliser une action pour le faire tinter et le pointer sur un objet que l\'on peut ouvrir et qui se situe dans un rayon de 36 mètres, comme une porte, un couvercle ou un verrou. Le carillon émet un son clair et l\'une des serrures ou l\'un des verrous qui fermait l\'objet s\'ouvre soudain, à moins que le son ne puisse pas atteindre l\'objet. S\'il n\'y a plus ni verrou ni serrure, l\'objet s\'ouvre.</p>\n<p>Le carillon dispose de dix utilisations. Il se fissure après la dixième et ne sert plus à rien.</p>',
    link: '/liste-objets-magiques/carillon-douverture',
    title: 'Carillon d\'ouverture',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Carquois efficace',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce carquois dispose de trois compartiments, chacun étant relié à un espace extradimensionnel qui lui permet de contenir de nombreux objets sans jamais peser plus de 1 kilo. Le compartiment le plus court peut accueillir jusqu\'à soixante flèches, carreaux ou objets similaires. Le compartiment de taille intermédiaire peut recevoir jusqu\'à dix-huit javelines ou objets similaires et le plus long peut contenir six objets tout en longueur, comme des arcs, des bâtons ou des lances.</p>\n<p>Vous pouvez tirer ces objets du carquois comme vous le feriez avec un carquois ou un fourreau ordinaire.</p>',
    link: '/liste-objets-magiques/carquois-efficace',
    title: 'Carquois efficace',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Cartes d\'illusion',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette boîte contient un jeu de cartes faites de parchemin. Le jeu complet compte 34 cartes mais, quand on trouve un jeu, il lui manque souvent 1d20 - 1 cartes.</p>\n<p>La magie du jeu fonctionne uniquement si on tire les cartes au hasard (vous pouvez utiliser un jeu de cartes ordinaire modifié pour simuler les <em>cartes d\'illusion</em>). Vous pouvez dépenser une action pour tirer une carte au hasard dans le jeu et la lancer au sol, à une distance maximum de 9 mètres.</p>\n<p>L\'illusion d\'une ou plusieurs créatures se forme au-dessus de la carte lancée et persiste jusqu\'à dissipation. Une créature illusoire semble réelle. Elle est de la taille appropriée et se comporte comme un véritable membre de son espèce, si ce n\'est qu\'elle ne peut pas causer le moindre mal. Tant que vous vous trouvez dans un rayon de 36 mètres autour de la créature illusoire et que vous la voyez, vous pouvez utiliser une action pour la déplacer magiquement n\'importe où dans un rayon de 9 mètres autour de sa carte. Toute interaction physique avec la créature révèle qu\'elle n\'est qu\'une illusion, car les objets la traversent. Quelqu\'un qui utilise une action pour inspecter visuellement la créature illusoire comprend qu\'elle n\'est pas réelle s\'il réussit un test d\'Intelligence (Investigation) DD 15. La créature lui paraît ensuite translucide.</p>\n<p>L\'illusion persiste jusqu\'à ce qu\'on la dissipe ou que l\'on déplace la carte. Quand l\'illusion se termine, l\'image de la carte s\'efface et on ne peut plus s\'en servir.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: left;">Carte à jouer</th>\n<th style="text-align: left;">Illusion</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: left;"><strong>As de cœur</strong></td>\n<td style="text-align: left;">Dragon rouge</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de cœur</strong></td>\n<td style="text-align: left;">Chevalier et quatre gardes</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de cœur</strong></td>\n<td style="text-align: left;">Succube ou incube</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de cœur</strong></td>\n<td style="text-align: left;">Druide</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>10 de cœur</strong></td>\n<td style="text-align: left;">Géant des nuages</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>9 de cœur</strong></td>\n<td style="text-align: left;">Ettin</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>8 de cœur</strong></td>\n<td style="text-align: left;">Gobelours</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de cœur</strong></td>\n<td style="text-align: left;">Gobelin</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>As de carreau</strong></td>\n<td style="text-align: left;">Tyrannœil</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de carreau</strong></td>\n<td style="text-align: left;">Archimage et apprenti mage</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de carreau</strong></td>\n<td style="text-align: left;">Guenaude nocturne</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de carreau</strong></td>\n<td style="text-align: left;">Assassin</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>10 de carreau</strong></td>\n<td style="text-align: left;">Géant du feu</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>9 de carreau</strong></td>\n<td style="text-align: left;">Ogre mage</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>8 de carreau</strong></td>\n<td style="text-align: left;">Gnoll</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de carreau</strong></td>\n<td style="text-align: left;">Kobold</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>As de pique</strong></td>\n<td style="text-align: left;">Liche</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de pique</strong></td>\n<td style="text-align: left;">Clerc et deux acolytes</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de pique</strong></td>\n<td style="text-align: left;">Méduse</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de pique</strong></td>\n<td style="text-align: left;">Vétéran</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>10 de pique</strong></td>\n<td style="text-align: left;">Géant du givre</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>9 de pique</strong></td>\n<td style="text-align: left;">Troll</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>8 de pique</strong></td>\n<td style="text-align: left;">Hobgobelin</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de pique</strong></td>\n<td style="text-align: left;">Gobelin</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>As de trèfle</strong></td>\n<td style="text-align: left;">Golem de fer</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de trèfle</strong></td>\n<td style="text-align: left;">Capitaine des bandits et trois bandits</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de trèfle</strong></td>\n<td style="text-align: left;">Érinyes</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de trèfle</strong></td>\n<td style="text-align: left;">Berserker</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>10 de trèfle</strong></td>\n<td style="text-align: left;">Géant des collines</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>9 de trèfle</strong></td>\n<td style="text-align: left;">Ogre</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>8 de trèfle</strong></td>\n<td style="text-align: left;">Orc</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de trèfle</strong></td>\n<td style="text-align: left;">Kobold</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Joker</strong></td>\n<td style="text-align: left;">Vous (le propriétaire des cartes)</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/cartes-dillusion',
    title: 'Cartes d\'illusion',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Cartes merveilleuses',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce jeu de cartes, en ivoire ou sur vélin, se trouve généralement dans une boîte ou une bourse. La plupart des jeux (75 %) n\'ont que treize cartes, mais les autres en ont vingt-deux.</p>\n<p>Avant de piocher, vous devez annoncer combien de cartes vous comptez tirer, puis vous les piochez au hasard (vous pouvez utiliser un jeu de cartes ordinaire modifié pour représenter les <em>cartes merveilleuses</em>). Toute carte tirée en plus du nombre indiqué reste sans effet. En dehors de cela, la magie d\'une carte s\'active dès que vous la piochez. Il ne doit pas s\'écouler plus d\'une heure entre le tirage de deux cartes : si vous ne piochez pas le nombre de cartes que vous avez annoncé, des cartes s\'envolent du jeu pour atteindre ce nombre et font effet toutes en même temps.</p>\n<p>Une fois une carte piochée, elle disparaît, mais à moins qu\'il ne s\'agisse du Fou ou du Bouffon, elle réapparaît dans le jeu et il se peut donc que vous la tiriez de nouveau.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: left;">Carte à jouer</th>\n<th style="text-align: left;">Illusion</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: left;"><strong>As de carreau</strong></td>\n<td style="text-align: left;">Vizir*</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de carreau</strong></td>\n<td style="text-align: left;">Soleil</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de carreau</strong></td>\n<td style="text-align: left;">Lune</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de carreau</strong></td>\n<td style="text-align: left;">Étoile</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de carreau</strong></td>\n<td style="text-align: left;">Comète*</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>As de cœur</strong></td>\n<td style="text-align: left;">Les parques*</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de cœur</strong></td>\n<td style="text-align: left;">Trône</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de cœur</strong></td>\n<td style="text-align: left;">Clef</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de cœur</strong></td>\n<td style="text-align: left;">Chevalier</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de cœur</strong></td>\n<td style="text-align: left;">Gemme*</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>As de trèfle</strong></td>\n<td style="text-align: left;">Serres*</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de trèfle</strong></td>\n<td style="text-align: left;">le Néant</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de trèfle</strong></td>\n<td style="text-align: left;">Flammes</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de trèfle</strong></td>\n<td style="text-align: left;">Crâne</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de trèfle</strong></td>\n<td style="text-align: left;">Idiot</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>As de pique</strong></td>\n<td style="text-align: left;">Donjon*</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Roi de pique</strong></td>\n<td style="text-align: left;">Ruine</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Dame de pique</strong></td>\n<td style="text-align: left;">Euryale</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Valet de pique</strong></td>\n<td style="text-align: left;">Trahison</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>2 de pique</strong></td>\n<td style="text-align: left;">Balance</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Joker (noir et blanc)</strong></td>\n<td style="text-align: left;">Fou*</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Joker (couleur)</strong></td>\n<td style="text-align: left;">Bouffon</td>\n</tr>\n</tbody>\n</table></div></div>\n<p><em>* Se trouve uniquement dans un jeu de vingt-deux cartes</em></p>\n<p><strong><em>Balance</em></strong>. Votre esprit subit une modification déchirante qui change votre alignement. Les loyaux deviennent chaotiques, les bons mauvais et inversement. Si vous êtes neutre strict ou sans alignement, cette carte n\'a aucun effet sur vous.</p>\n<p><strong><em>Comète</em></strong>. Si vous triomphez à vous seul du prochain monstre ou groupe de monstres que vous rencontrez, vous gagnez suffisamment de points d\'expérience pour monter de niveau. Sinon, cette carte n\'a aucun effet.</p>\n<p><strong><em>Donjon</em></strong>. Vous disparaissez et vous trouvez enfermé en état d\'animation suspendue dans une sphère extradimensionnelle. Tout ce que vous aviez équipé et ce que vous transportiez reste dans l\'espace que vous occupiez avant de disparaître. Vous restez emprisonné dans la sphère jusqu\'à ce que quelqu\'un vous trouve et vous libère. La magie de divination ne suffit pas à vous localiser mais un <a href="/grimoire/souhait"><em>souhait</em></a> révèle la position de votre prison. Vous ne tirez pas plus de cartes.</p>\n<p><strong><em>Euryale</em></strong>. Le visage de méduse qui orne cette carte vous maudit. Tant que vous êtes victime de cette malédiction, vous subissez un malus de -2 aux jets de sauvegarde. Pour mettre un terme à la malédiction, il faut l\'aide d\'un dieu ou la magie de la carte des Parques.</p>\n<p><strong><em>Les Parques</em></strong>. Le tissu de la réalité se défait et se tisse de nouveau, vous permettant d\'éviter ou d\'effacer un événement, comme s\'il ne s\'était jamais produit. Vous pouvez utiliser la magie de la carte tout de suite après l\'avoir piochée ou à n\'importe quel moment avant votre mort.</p>\n<p><strong><em>Flammes</em></strong>. Un puissant diable devient votre ennemi. Il s\'efforce de causer votre perte et de ruiner votre vie, savourant vos souffrances avant de tenter de vous tuer. Cette hostilité persiste jusqu\'à la mort du diable ou la vôtre.</p>\n<p><strong><em>Fou</em></strong>. Vous perdez 10000 PX, jetez cette carte et piochez-en une nouvelle, le tirage du Fou et celui de la nouvelle carte comptant comme un seul vis-à-vis du nombre de cartes que vous avez annoncé vouloir piocher. Si la perte de PX devrait vous faire perdre un niveau, vous ne le perdez pas : vous le conservez et perdez juste assez de PX pour arriver à la limite du niveau précédent.</p>\n<p><strong><em>Gemme</em></strong>. Vingt-cinq bijoux d\'une valeur de 2000 po pièce ou cinquante gemmes d\'une valeur de 1000 po l\'une apparaissent à vos pieds.</p>\n<p><strong><em>Idiot</em></strong>. Votre Intelligence diminue définitivement de 1d4+1 (sans descendre au-dessous de 1). Vous pouvez piocher une carte en plus par rapport à ce que vous aviez annoncé.</p>\n<p><strong><em>Bouffon</em></strong>. Vous gagnez 10000 PX ou vous pouvez piocher deux cartes de plus que ce que vous aviez annoncé.</p>\n<p><strong><em>Clef</em></strong>. Une arme magique rare, très rare ou légendaire dont vous maîtrisez l\'usage apparaît dans vos mains. C\'est au MJ de choisir cette arme.</p>\n<p><strong><em>Chevalier</em></strong>. Vous gagnez les services d\'un guerrier de niveau 4 qui apparaît dans un emplacement de votre choix situé dans un rayon de 9 mètres autour de vous. Ce guerrier est de la même race que vous et vous sert fidèlement jusqu\'à la mort, persuadé que c\'est le destin qui l\'a conduit à vous. C\'est vous en tant que joueur qui contrôlez ce personnage.</p>\n<p><strong><em>Lune</em></strong>. Vous êtes habilité à lancer le sort de <a href="/grimoire/souhait"><em>souhait</em></a> 1d3 fois.</p>\n<p><strong><em>Trahison</em></strong>. Un personnage non-joueur (au choix du MJ) devient hostile envers vous. L\'identité de ce nouvel ennemi reste un secret jusqu\'à ce qu\'il décide de se dévoiler ou que quelqu\'un d\'autre s\'en charge. Il est impossible d\'enrayer son hostilité envers vous à moins d\'un <a href="/grimoire/souhait"><em>souhait</em></a> ou d\'une intervention divine.</p>\n<p><strong><em>Ruine</em></strong>. Toutes les richesses que vous portiez ou possédiez, sous quelque forme que ce soit en dehors de vos objets magiques, sont définitivement perdues. Les biens mobiles disparaissent, les entreprises commerciales, les bâtiments et les terres qui vous appartenaient sont perdus de manière à affecter la réalité le plus discrètement possible. Tout document prouvant que vous possédiez quelque chose que vous perdez à cause de cette carte disparaît aussi.</p>\n<p><strong><em>Crâne</em></strong>. Vous invoquez un <a href="/bestiaire/avatar-de-la-mort">avatar de la mort</a>, un squelette humanoïde fantomatique vêtu d\'une robe noire en haillon et brandissant une faux spectrale. Il apparaît dans un emplacement choisi par le MJ, dans un rayon de 3 mètres autour de vous et vous attaque en avertissant toute personne alentour que vous devez livrer ce combat seul. L\'avatar se bat jusqu\'à ce que vous mourriez ou qu\'il tombe à 0 point de vie, auquel cas il disparaît. Si quelqu\'un tente de vous aider, il provoque l\'apparition de son propre <a href="/bestiaire/avatar-de-la-mort">avatar de la mort</a>. Il est impossible de ramener à la vie une personne tuée par l\'<a href="/bestiaire/avatar-de-la-mort">avatar de la mort</a>.</p>\n<p><strong><em>Étoile</em></strong>. Augmente l\'une de vos valeurs de caractéristiques de 2. Cette caractéristique peut dépasser 20 mais ne peut aller au-delà de 24.</p>\n<p><strong><em>Soleil</em></strong>. Vous gagnez 50000 PX et un objet merveilleux (que le MJ détermine au hasard) apparaît dans vos mains.</p>\n<p><strong><em>Serres</em></strong>. Tous les objets magiques en votre possession (qu\'ils soient équipés ou transportés) se désintègrent. Vos artefacts ne sont pas détruits mais ils se volatilisent.</p>\n<p><strong><em>Trône</em></strong>. Vous maîtrisez la compétence de Persuasion et vous doublez votre bonus de maîtrise lors des tests effectués avec cette compétence. De plus, vous devenez le propriétaire légal d\'un petit fort situé quelque part dans le monde. Cependant, il est actuellement entre les mains d\'un groupe de monstres que vous devez chasser pour récupérer votre bien.</p>\n<p><strong><em>Vizir</em></strong>. Dans un délai d\'un an après avoir pioché cette carte, vous pouvez méditer pour poser une question à laquelle vous recevrez une réponse mentale fiable. En plus de l\'information transmise, la réponse vous aide à résoudre votre problème ou votre dilemme. En d\'autres termes, la connaissance acquise s\'accompagne de la sagesse nécessaire pour l\'appliquer au mieux.</p>\n<p><strong><em>Le Néant</em></strong>. Cette carte noire annonce une catastrophe. Votre âme est arrachée à votre corps et enfermée dans un objet en un lieu choisi par le MJ. Un ou plusieurs êtres puissants gardent les lieux. Votre corps est <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisé</em></a> tant que votre âme est ainsi retenue. Le sort <a href="/grimoire/souhait"><em>souhait</em></a> ne suffit pas à ramener votre âme mais il révèle où se trouve l\'objet qui la contient. Vous ne pouvez pas piocher de cartes supplémentaires.</p>',
    link: '/liste-objets-magiques/cartes-merveilleuses',
    title: 'Cartes merveilleuses',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Ceinturon de force de géant des collines',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce ceinturon, votre valeur de Force est égale à 21. Si votre Force est déjà égale ou supérieure à celle qu\'offre le ceinturon, ce dernier n\'a aucun effet sur vous.</p>',
    link: '/liste-objets-magiques/ceinturon-de-force-de-geant-des-collines',
    title: 'Ceinturon de force de géant des collines',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Ceinturon de force de géant des nuages',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce ceinturon, votre valeur de Force est égale à 27. Si votre Force est déjà égale ou supérieure à celle qu\'offre le ceinturon, ce dernier n\'a aucun effet sur vous.</p>',
    link: '/liste-objets-magiques/ceinturon-de-force-de-geant-des-nuages',
    title: 'Ceinturon de force de géant des nuages',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Ceinturon de force de géant des pierres/du givre',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce ceinturon, votre valeur de Force est égale à 23. Si votre Force est déjà égale ou supérieure à celle qu\'offre le ceinturon, ce dernier n\'a aucun effet sur vous.</p>\n<p>Le <em>ceinturon de force de géant des pierres</em> et le <em>ceinturon de force de géant du givre</em> ont une apparence différente mais offrent les mêmes effets.</p>',
    link: '/liste-objets-magiques/ceinturon-de-force-de-geant-des-pierres-du-givre',
    title: 'Ceinturon de force de géant des pierres/du givre',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Ceinturon de force de géant des tempêtes',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce ceinturon, votre valeur de Force est égale à 29. Si votre Force est déjà égale ou supérieure à celle qu\'offre le ceinturon, ce dernier n\'a aucun effet sur vous.</p>',
    link: '/liste-objets-magiques/ceinturon-de-force-de-geant-des-tempetes',
    title: 'Ceinturon de force de géant des tempêtes',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Ceinturon de force de géant du feu',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce ceinturon, votre valeur de Force est égale à 25. Si votre Force est déjà égale ou supérieure à celle qu\'offre le ceinturon, ce dernier n\'a aucun effet sur vous.</p>',
    link: '/liste-objets-magiques/ceinturon-de-force-de-geant-du-feu',
    title: 'Ceinturon de force de géant du feu',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Ceinturon des nains',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce ceinturon, vous bénéficiez des avantages suivants :</p>\n<ul>\n<li>Votre valeur de Constitution augmente de 2, sans dépasser un maximum de 20.</li>\n<li>Vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests de Charisme (Persuasion) pour interagir avec des nains.</li>\n<li>De plus, tant que vous êtes harmonisé avec le ceinturon, vous avez 50 % de chances par jour de voir une belle barbe pousser sur votre menton (si vous êtes capable de développer une telle pilosité). Si vous en avez déjà une, elle devient visiblement plus touffue.</li>\n</ul>\n<p>Si vous n\'êtes pas un nain, vous gagnez les avantages supplémentaires suivants quand vous portez le ceinturon :</p>\n<ul>\n<li>Vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre le poison et vous êtes résistant contre les dégâts de poison.</li>\n<li>Vous gagnez la vision dans le noir à une distance de 18 mètres.</li>\n<li>Vous parlez, lisez et écrivez le nain.</li>\n</ul>',
    link: '/liste-objets-magiques/ceinturon-des-nains',
    title: 'Ceinturon des nains',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Chapeau de déguisement',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce chapeau, vous pouvez lancer <a href="/grimoire/deguisement"><em>déguisement</em></a> sur vous par son intermédiaire, et ce à volonté. Le sort se termine si vous enlevez le chapeau.</p>',
    link: '/liste-objets-magiques/chapeau-de-deguisement',
    title: 'Chapeau de déguisement',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Chapelet',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation avec un clerc, un druide ou un paladin exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce chapelet se présente sous forme de collier et comporte 1d4+2 grains magiques faits d\'aigues-marines, de perles noires ou de topazes. Il possède aussi de nombreux grains ordinaires taillés dans de l\'ambre, de l\'héliotrope, de la citrine, du corail, du jade, des perles ou du quartz. Si on retire un grain magique du chapelet, il perd sa magie.</p>\n<p>Il existe six types de grains magiques. C\'est au MJ de décider du type de chaque grain ou de le déterminer au hasard. Un même chapelet peut posséder plusieurs grains du même type. Il faut porter le collier pour en utiliser un. Chaque grain renferme un sort que vous pouvez lancer en utilisant une action bonus (en vous servant du DD des jets de sauvegarde contre vos sorts si besoin). Une fois qu\'un grain a servi à lancer un sort, il faut attendre l\'aube suivante avant de pouvoir s\'en servir de nouveau.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D20</th>\n<th style="text-align: left;">Grain de...</th>\n<th style="text-align: left;">Sort</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1-6</strong></td>\n<td style="text-align: left;">Bénédiction</td>\n<td style="text-align: left;"><a href="/grimoire/benediction"><em>Bénédiction</em></a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>7-12</strong></td>\n<td style="text-align: left;">Guérison</td>\n<td style="text-align: left;"><a href="/grimoire/soin-des-blessures"><em>Soin des blessures</em></a> (niveau 2) ou <a href="/grimoire/restauration-inferieure"><em>restauration inférieure</em></a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>13-16</strong></td>\n<td style="text-align: left;">Faveur</td>\n<td style="text-align: left;"><a href="/grimoire/restauration-superieure"><em>Restauration supérieure</em></a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>17-18</strong></td>\n<td style="text-align: left;">Châtiment</td>\n<td style="text-align: left;"><a href="/grimoire/frappe-lumineuse"><em>Frappe lumineuse</em></a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>19</strong></td>\n<td style="text-align: left;">Convocations</td>\n<td style="text-align: left;"><a href="/grimoire/allie-planaire"><em>Allié planaire</em></a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>20</strong></td>\n<td style="text-align: left;">Vent</td>\n<td style="text-align: left;"><a href="/grimoire/marche-sur-le-vent"><em>Marche sur le vent</em></a></td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/chapelet',
    title: 'Chapelet',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation avec un clerc, un druide ou un paladin exigée'
  },
  {
    header: {
      title: 'Chaussons de l\'araignée',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces souliers légers aux pieds, vous pouvez vous déplacer vers le haut, le bas et le long de surfaces verticales, ou la tête en bas le long de plafonds, tout en gardant les mains libres. Vous disposez d\'une vitesse d\'escalade égale à votre vitesse au sol. Les chaussons ne permettent toutefois pas de se déplacer de cette façon sur des surfaces glissantes, si elles sont recouvertes de glace ou d\'huile, par exemple.</p>',
    link: '/liste-objets-magiques/chaussons-de-laraignee',
    title: 'Chaussons de l\'araignée',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Chemise de mailles elfique',
      magicitem: {
        type: 'Armure',
        subtype: 'Chemise de mailles',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 à la CA tant que vous portez cette armure. Vous êtes considéré comme maîtrisant le port de cette armure, même si vous ne maîtrisez pas les armures intermédiaires.</p>',
    link: '/liste-objets-magiques/chemise-de-mailles-elfique',
    title: 'Chemise de mailles elfique',
    type: 'Armure',
    subtype: 'Chemise de mailles',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Cierge d\'invocation',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce mince cierge est dédié à une divinité précise et partage son alignement. On peut détecter ce dernier avec le sort <a href="/grimoire/detection-du-mal-et-du-bien"><em>détection du mal et du bien</em></a>. C\'est au MJ de choisir le dieu et l\'alignement associé ou de les déterminer au hasard.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D20</th>\n<th style="text-align: left;">Alignement</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1-2</strong></td>\n<td style="text-align: left;">Chaotique mauvais</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3-4</strong></td>\n<td style="text-align: left;">Chaotique Neutre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5-7</strong></td>\n<td style="text-align: left;">Chaotique bon</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>8-9</strong></td>\n<td style="text-align: left;">Neutre mauvais</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>10-11</strong></td>\n<td style="text-align: left;">Neutre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>12-13</strong></td>\n<td style="text-align: left;">Neutre bon</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>14-15</strong></td>\n<td style="text-align: left;">Loyal mauvais</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>16-17</strong></td>\n<td style="text-align: left;">Loyal neutre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>18-20</strong></td>\n<td style="text-align: left;">Loyal bon</td>\n</tr>\n</tbody>\n</table></div></div>\n<p>La magie du cierge s\'active quand on l\'allume, ce qui demande une action. Il est détruit après 4 heures de combustion. Vous pouvez l\'éteindre avant pour le réutiliser plus tard. Déduisez chaque période de combustion (par portions d\'une minute) de la durée totale de combustion du cierge.</p>\n<p>Tant que le cierge est allumé, il émet une faible lumière dans un rayon de 9 mètres. Chaque créature baignée dans cette lumière et disposant du même alignement que le cierge obtient l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors de ses jets d\'attaque et de sauvegarde ainsi que lors de ses tests de caractéristique. De plus, un clerc ou un druide présent dans la lumière et disposant du même alignement que le cierge peut lancer les sorts de niveau 1 qu\'il a préparés sans dépenser d\'emplacement de sort, bien que le sort fasse effet comme s\'il était lancé depuis un emplacement de niveau 1.</p>\n<p>Sinon, vous pouvez lancer le sort <a href="/grimoire/portail"><em>portail</em></a> avec le cierge quand vous l\'allumez pour la première fois, mais cela le détruit.</p>',
    link: '/liste-objets-magiques/cierge-dinvocation',
    title: 'Cierge d\'invocation',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Cimeterre de célérité',
      magicitem: {
        type: 'Arme',
        subtype: 'Cimeterre',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus de +2 aux jets d\'attaque et de dégâts effectués avec cette arme magique. De plus, vous pouvez effectuer une attaque avec elle par une action bonus lors de chacun de vos tours.</p>',
    link: '/liste-objets-magiques/cimeterre-de-celerite',
    title: 'Cimeterre de célérité',
    type: 'Arme',
    subtype: 'Cimeterre',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Colle universelle',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette substance visqueuse et aussi blanche que le lait peut coller deux objets de manière définitive. Elle doit être conservée dans un pot dont la surface intérieure a été badigeonnée d\'<a href="/liste-objets-magiques/huile-glissante"><em>huile glissante</em></a>. Un récipient nouvellement découvert contient 1d6+1 doses de cette colle, de 30 grammes chacune.</p>\n<p>30 grammes de colle sont suffisants pour recouvrir une surface de 30 centimètres de côté. Il faut une minute pour que la colle se solidifie. Une fois solidifiée, il est impossible de la détruire, à moins d\'utiliser un <a href="/liste-objets-magiques/solvant-universel"><em>solvant universel</em></a> ou une <a href="/liste-objets-magiques/huile-etheree"><em>huile éthérée</em></a>, ou à l\'aide d\'un sort de <a href="/grimoire/souhait"><em>souhait</em></a>.</p>',
    link: '/liste-objets-magiques/colle-universelle',
    title: 'Colle universelle',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Collier d\'adaptation',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce collier, vous pouvez respirer normalement quel que soit l\'environnement dans lequel vous vous trouvez, et vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre les gaz et vapeurs toxiques (comme un <a href="/grimoire/nuage-mortel"><em>nuage mortel</em></a> ou un <a href="/grimoire/nuage-puant"><em>nuage puant</em></a>, un poison par inhalation ou le souffle de certains dragons).</p>',
    link: '/liste-objets-magiques/collier-dadaptation',
    title: 'Collier d\'adaptation',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Collier de boules de feu',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce collier possède 1d6+3 perles. Vous pouvez utiliser une action pour détacher une perle et la lancer sur une distance maximale de 18 mètres. Quand elle arrive au bout de sa trajectoire, elle explose comme le sort <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> de niveau 3 (DD 15).</p>\n<p>Vous pouvez lancer plusieurs perles, ou même tout le collier, en une seule action. Dans ce cas, le niveau du sort de <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> augmente de 1 par perle en plus de la première.</p>',
    link: '/liste-objets-magiques/collier-de-boules-de-feu',
    title: 'Collier de boules de feu',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Cor de destruction',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser votre action pour prononcer le mot de commande du cor puis souffler dedans. Il émet un fracas de tonnerre dans un cône de 9 mètres de long, qui s\'entend jusqu\'à 180 mètres de distance. Chaque créature présente dans le cône doit faire un jet de sauvegarde de Constitution DD 15. Celles qui échouent subissent 5d6 dégâts de tonnerre et sont <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdies</em></a> pendant 1 minute, les autres reçoivent moitié moins de dégâts et ne sont pas <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdies</em></a>. Les créatures et les objets faits de verre ou de cristal subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> sur le jet de sauvegarde et subissent 10d6 dégâts de tonnerre au lieu de 5d6.</p>\n<p>À chaque utilisation, le cor a 20 % de chances d\'exploser. L\'explosion inflige 10d6 dégâts de feu à celui qui soufflait dans le cor et détruit l\'instrument.</p>',
    link: '/liste-objets-magiques/cor-de-destruction',
    title: 'Cor de destruction',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Cor du Valhalla d\'argent',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Si vous utilisez une action pour souffler dans ce cor, 2d4+2 esprits guerriers du Valhalla apparaissent dans un rayon de 18 mètres autour de vous. Ils utilisent les statistiques d\'un <a href="/bestiaire/berserker">berserker</a> et retournent au Valhalla au bout d\'une heure ou dès qu\'ils tombent à 0 point de vie. Une fois que vous avez utilisé la corne, vous ne pouvez plus vous en servir pendant 7 jours.</p>',
    link: '/liste-objets-magiques/cor-du-valhalla-dargent',
    title: 'Cor du Valhalla d\'argent',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Cor du Valhalla de bronze',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Si vous utilisez une action pour souffler dans ce cor, 4d4+4 esprits guerriers du Valhalla apparaissent dans un rayon de 18 mètres autour de vous. Ils utilisent les statistiques d\'un <a href="/bestiaire/berserker">berserker</a> et retournent au Valhalla au bout d\'une heure ou dès qu\'ils tombent à 0 point de vie. Une fois que vous avez utilisé la corne, vous ne pouvez plus vous en servir pendant 7 jours.</p>\n<p>Vous devez avoir la maîtrise de toutes les armures intermédiaires. Si vous soufflez dans le cor alors que vous ne remplissez pas les conditions requises, les esprits guerriers invoqués vous attaquent. Si vous les remplissez, ils se montrent amicaux envers vous et vos compagnons et obéissent à vos ordres.</p>',
    link: '/liste-objets-magiques/cor-du-valhalla-de-bronze',
    title: 'Cor du Valhalla de bronze',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Cor du Valhalla de cuivre',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Si vous utilisez une action pour souffler dans ce cor, 3d4+3 esprits guerriers du Valhalla apparaissent dans un rayon de 18 mètres autour de vous. Ils utilisent les statistiques d\'un <a href="/bestiaire/berserker">berserker</a> et retournent au Valhalla au bout d\'une heure ou dès qu\'ils tombent à 0 point de vie. Une fois que vous avez utilisé la corne, vous ne pouvez plus vous en servir pendant 7 jours.</p>\n<p>Vous devez avoir la maîtrise de toutes les armes courantes. Si vous soufflez dans le cor alors que vous ne remplissez pas les conditions requises, les esprits guerriers invoqués vous attaquent. Si vous les remplissez, ils se montrent amicaux envers vous et vos compagnons et obéissent à vos ordres.</p>',
    link: '/liste-objets-magiques/cor-du-valhalla-de-cuivre',
    title: 'Cor du Valhalla de cuivre',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Cor du Valhalla de fer',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Si vous utilisez une action pour souffler dans ce cor, 5d4+5 esprits guerriers du Valhalla apparaissent dans un rayon de 18 mètres autour de vous. Ils utilisent les statistiques d\'un <a href="/bestiaire/berserker">berserker</a> et retournent au Valhalla au bout d\'une heure ou dès qu\'ils tombent à 0 point de vie. Une fois que vous avez utilisé la corne, vous ne pouvez plus vous en servir pendant 7 jours.</p>\n<p>Vous devez avoir la maîtrise de toutes les armes de guerre. Si vous soufflez dans le cor alors que vous ne remplissez pas les conditions requises, les esprits guerriers invoqués vous attaquent. Si vous les remplissez, ils se montrent amicaux envers vous et vos compagnons et obéissent à vos ordres.</p>',
    link: '/liste-objets-magiques/cor-du-valhalla-de-fer',
    title: 'Cor du Valhalla de fer',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Corde d\'enchevêtrement',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette corde fait 9 mètres de long et pèse 1,5 kilo. Si vous tenez en main une extrémité de la corde et utilisez une action pour prononcer son mot de commande, l\'autre extrémité se jette sur une créature située à 6 mètres ou moins de vous dans votre champ de vision pour l\'enchevêtrer. La cible doit réussir un jet de sauvegarde de Dextérité DD 15 pour ne pas se retrouver <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a>.</p>\n<p>Vous pouvez libérer la créature en utilisant une action bonus pour prononcer un deuxième mot de commande. Une cible <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par la corde peut utiliser une action pour effectuer un test de Force ou de Dextérité (au choix de la cible) DD 15. En cas de réussite, elle n\'est plus <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par la corde.</p>\n<p>La corde possède une CA de 20 et 20 points de vie. Elle récupère 1 point de vie toutes les 5 minutes tant qu\'il lui reste au moins 1 point de vie. Elle est détruite si son nombre de points de vie tombe à 0.</p>',
    link: '/liste-objets-magiques/corde-denchevetrement',
    title: 'Corde d\'enchevêtrement',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Corde d\'escalade',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette corde en soie de 18 mètres de long pèse 1,5 kilo et peut soutenir un maximum de 1500 kilos. La corde s\'anime si vous tenez en main une extrémité et utilisez une action pour prononcer le mot de commande. Pour une action bonus, vous pouvez ordonner à l\'autre extrémité de se déplacer vers la destination de votre choix. Cette extrémité se déplace de 3 mètres lors du tour où vous lui avez donné l\'ordre et de 3 mètres lors de chacun de vos tours, jusqu\'à ce qu\'elle atteigne sa destination, que sa longueur maximale soit atteinte ou que vous lui ordonniez de s\'arrêter. Vous pouvez également ordonner à la corde de s\'attacher fermement à un objet ou de s\'en détacher, de se nouer ou se dénouer, ou de s\'enrouler pour faciliter son transport.</p>\n<p>Si vous ordonnez à la corde de se nouer, des gros nœuds apparaissent sur sa longueur à 30 centimètres les uns des autres. Nouée de la sorte, la corde ne fait plus que 15 mètres de long et permet d\'obtenir l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests effectués pour la grimper.</p>\n<p>La corde possède une CA de 20 et 20 points de vie. Elle récupère 1 point de vie toutes les 5 minutes tant qu\'il lui reste au moins 1 point de vie. Elle est détruite si son nombre de points de vie tombe à 0.</p>',
    link: '/liste-objets-magiques/corde-descalade',
    title: 'Corde d\'escalade',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Cube de force',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce cube fait 2,5 centimètres d\'arête. Chaque face est dotée d\'une marque distinctive sur laquelle on peut appuyer. Le cube a 36 charges au départ et, chaque matin à l\'aube, il récupère 1d20 charges dépensées.</p>\n<p>Vous pouvez utiliser une action pour appuyer sur l\'une des faces du cube et dépenser un nombre de charges dépendant de la face choisie, comme indiqué dans la table Faces du cube de force. Chaque face produit un effet différent. Si le cube n\'a plus assez de charges pour alimenter l\'effet, il ne se passe rien. Sinon, une barrière de force invisible se déploie en un cube de 4,50 mètres d\'arête. Elle est centrée sur vous, se déplace avec vous et persiste une minute, jusqu\'à ce que vous dépensiez une action pour appuyer sur la sixième face du cube ou jusqu\'à ce que le cube ait épuisé toutes ses charges. Vous pouvez changer l\'effet de la barrière en appuyant sur une nouvelle face et en dépensant le nombre de charges requis, ce qui réinitialise la durée de l\'effet.</p>\n<p>Si vos déplacements mettent la barrière en contact avec un objet solide qui ne peut pas traverser le cube, vous ne pouvez pas vous rapprocher de cet objet tant que la barrière est érigée.</p>\n<div class="table-container">\n<h2 id="faces-du-cube-de-force">Faces du cube de force</h2>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">Face</th>\n<th style="text-align: center;">Charges</th>\n<th style="text-align: left;">Effet</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: center;">1</td>\n<td style="text-align: left;">Les gaz, le vent et le brouillard ne peuvent pas franchir la barrière.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: center;">2</td>\n<td style="text-align: left;">La matière non-vivante ne peut pas franchir la barrière. Si vous le désirez, les murs, le sol et le plafond peuvent la traverser.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: center;">3</td>\n<td style="text-align: left;">La matière vivante ne peut pas franchir la barrière.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: center;">4</td>\n<td style="text-align: left;">Les effets de sort ne peuvent pas franchir la barrière.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5</strong></td>\n<td style="text-align: center;">5</td>\n<td style="text-align: left;">Rien ne peut traverser la barrière. Si vous le désirez, les murs, le sol et le plafond peuvent la traverser.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6</strong></td>\n<td style="text-align: center;">0</td>\n<td style="text-align: left;">La barrière se désactive.</td>\n</tr>\n</tbody>\n</table></div></div>\n</div>\n<p>Le cube perd des charges quand la barrière est la cible de certains sorts ou entre en contact avec certains effets issus de sorts ou d\'objets magiques, comme indiqué dans la table suivante.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: left;">Sort ou objet</th>\n<th style="text-align: center;">Charges perdues</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: left;"><strong><a href="/grimoire/desintegration">Désintégration</a></strong></td>\n<td style="text-align: center;">1d12</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong><a href="/liste-objets-magiques/cor-de-destruction">Cor de destruction</a></strong></td>\n<td style="text-align: center;">1d10</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong><a href="/grimoire/passe-muraille">Passe-muraille</a></strong></td>\n<td style="text-align: center;">1d6</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong><a href="/grimoire/embruns-prismatiques">Embruns prismatiques</a></strong></td>\n<td style="text-align: center;">1d20</td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong><a href="/grimoire/mur-de-feu">Mur de feu</a></strong></td>\n<td style="text-align: center;">1d4</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/cube-de-force',
    title: 'Cube de force',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Cuir clouté glamour',
      magicitem: {
        type: 'Armure',
        subtype: 'Cuir clouté',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette armure, vous gagnez un bonus de +1 à la CA. Vous pouvez également dépenser une action bonus pour prononcer son mot de commande et lui donner l\'apparence d\'habits normaux ou d\'une autre armure. À vous de décider à quoi elle ressemble, aussi bien au niveau de la couleur, du style que des accessoires. Cependant, elle conserve son poids et son volume. L\'illusion persiste jusqu\'à ce que vous utilisiez de nouveau ce pouvoir ou que vous ôtiez l\'armure.</p>',
    link: '/liste-objets-magiques/cuir-cloute-glamour',
    title: 'Cuir clouté glamour',
    type: 'Armure',
    subtype: 'Cuir clouté',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Dague venimeuse',
      magicitem: {
        type: 'Arme',
        subtype: 'Dague',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 aux jets d\'attaque et de dégâts effectués avec cette arme magique.</p>\n<p>Vous pouvez dépenser une action pour qu\'un épais poison noir enduise la lame. Il persiste pendant 1 minute ou jusqu\'à ce que l\'arme touche une créature suite à une attaque. Cette créature doit réussir un jet de sauvegarde de Constitution DD 15 ou subir 2d10 dégâts de poison pendant 1 minute. Il faut attendre l\'aube suivante pour pouvoir utiliser de nouveau la dague de cette manière.</p>',
    link: '/liste-objets-magiques/dague-venimeuse',
    title: 'Dague venimeuse',
    type: 'Arme',
    subtype: 'Dague',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Diadème de destruction',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce diadème, vous pouvez utiliser votre action pour lancer le sort <a href="/grimoire/rayon-ardent"><em>rayon ardent</em></a> par son intermédiaire. Quand vous effectuez l\'attaque de sort, votre bonus d\'attaque est de +5. Il faut attendre l\'aube suivante avant d\'utiliser de nouveau le diadème de cette manière.</p>',
    link: '/liste-objets-magiques/diademe-de-destruction',
    title: 'Diadème de destruction',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Encensoir de contrôle des élémentaires de l\'air',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que de l\'encens brûle dans cet encensoir, vous pouvez utiliser une action pour prononcer son mot de commande et invoquer un élémentaire de l\'air, comme si vous aviez lancé le sort <a href="/grimoire/invoquer-un-elementaire"><em>invoquer un élémentaire</em></a>. Ensuite, il faut attendre l\'aube suivante avant de pouvoir réutiliser ainsi l\'encensoir.</p>\n<p>L\'encensoir ressemble à un calice de 15 centimètres de large pour 30 centimètres de haut fermé d\'un couvercle ornementé. Il pèse 0,5 kilo.</p>',
    link: '/liste-objets-magiques/encensoir-de-controle-des-elementaires-de-lair',
    title: 'Encensoir de contrôle des élémentaires de l\'air',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Épée ardente',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action bonus pour prononcer le mot de commande de cette épée magique et envelopper sa lame d\'un linceul de flammes qui émettent une vive lumière dans un rayon de 12 mètres et une faible lumière dans un rayon de 12 mètres de plus. Tant que l\'épée est embrasée, elle inflige 2d6 dégâts de feu supplémentaire à toute cible qu\'elle touche. Les flammes brûlent jusqu\'à ce que vous dépensiez une action bonus pour prononcer de nouveau le mot de commande ou jusqu\'à ce que vous lâchiez ou rengainiez l\'épée.</p>',
    link: '/liste-objets-magiques/epee-ardente',
    title: 'Épée ardente',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Épée dansante',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action bonus pour lancer cette épée magique en l\'air et prononcer son mot de commande. Elle se met alors à flotter et s\'envole à une distance maximum de 9 mètres, attaquant la créature de votre choix située dans un rayon de 1,50 mètre autour d\'elle. L\'épée utilise votre jet d\'attaque et votre modificateur de caractéristique aux jets de dégâts.</p>\n<p>Tant que l\'épée flotte dans les airs, vous pouvez utiliser une action bonus pour l\'envoyer voler sur une distance maximum de 9 mètres jusqu\'à un emplacement situé dans un rayon de 9 mètres autour de vous. Lors de cette action bonus, vous pouvez demander à l\'épée d\'attaquer une créature située dans un rayon de 1,50 mètre autour d\'elle.</p>\n<p>Une fois que l\'épée a attaqué pour la quatrième fois, elle vole sur un maximum de 9 mètres et tente de retourner dans votre main. Si vous avez les deux mains prises, elle tombe à vos pieds. Si l\'épée ne dispose d\'aucun chemin d\'accès pour vous rejoindre, elle se rapproche de vous autant que possible et tombe à terre. Elle cesse également de flotter dans les airs si vous l\'attrapez ou si vous vous éloignez à plus de 9 mètres d\'elle.</p>',
    link: '/liste-objets-magiques/epee-dansante',
    title: 'Épée dansante',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Épée mordante',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Seul un repos court ou long permet de récupérer les points de vie perdus à cause des dégâts infligés par cette arme. Ni la régénération, ni la magie, ni aucun autre moyen ne peuvent soigner ces points de vie perdus.</p>\n<p>Une fois par tour, lorsque vous réussissez une attaque contre une créature avec cette arme magique, vous pouvez inciser la cible. Au début de chacun des tours de la créature ainsi incisée, celle-ci subit 1d4 dégâts nécrotiques pour chaque attaque d\'incision réussie à son encontre. Elle peut ensuite effectuer un jet de sauvegarde de Constitution DD 15 et mettre fin à l\'effet de la totalité des incisions dont elle est victime en cas de réussite. Par ailleurs, une créature incisée, ou une autre créature située à 1,50 mètre ou moins d\'elle, peut utiliser une action pour effectuer un test de Sagesse (Médecine) DD 15 et mettre fin à l\'effet des incisions dont elle est victime en cas de réussite.</p>',
    link: '/liste-objets-magiques/epee-mordante',
    title: 'Épée mordante',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Épée radieuse',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée longue',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Au premier abord, cet objet est la garde d\'une épée longue. Lorsque vous la prenez en main, vous pouvez utiliser une action bonus pour qu\'une lame de lumière pure en surgisse ou pour la faire disparaître. Tant que la lame est sortie, cette épée longue magique est dotée de la propriété finesse. Si vous maîtrisez le maniement des épées courtes ou longues, vous maîtrisez également celui d\'une épée radieuse.</p>\n<p>Vous bénéficiez d\'un bonus de +2 aux jets d\'attaque et de dégâts effectués avec cette arme qui inflige des dégâts radiants, et non plus des dégâts tranchants. Quand vous réussissez une attaque contre un mort-vivant avec cette arme, la cible subit 1d8 dégâts radiants supplémentaires.</p>\n<p>La lame lumineuse de l\'épée diffuse une lumière vive sur un rayon de 4,50 mètres et une lumière faible 4,50 mètres au-delà. Cette lumière est celle du soleil. Tant que la lame est sortie, vous pouvez utiliser une action pour augmenter ou réduire le rayon de la lumière vive et de la lumière faible de 1,50 mètre chacun, jusqu\'à ce qu\'ils atteignent un maximum de 9 mètres chacun ou un minimum de 3 mètres chacun.</p>',
    link: '/liste-objets-magiques/epee-radieuse',
    title: 'Épée radieuse',
    type: 'Arme',
    subtype: 'Épée longue',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Épée tranchante',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle épée qui inflige des dégâts tranchants',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous réussissez une attaque contre un objet avec cette arme magique, considérez que le(s) dé(s) de dégâts de l\'arme obtient le plus haut résultat contre la cible.</p>\n<p>Quand vous attaquez une créature avec cette arme et obtenez un 20 au jet d\'attaque, la cible subit 4d6 dégâts tranchants supplémentaires. Lancez ensuite un autre d20. Si vous obtenez un 20, vous lui tranchez un de ses membres et l\'effet de cette perte est laissé à l\'appréciation du MJ. Si la créature ne possède aucun membre à trancher, vous tranchez une partie de son corps à la place.</p>\n<p>En outre, vous pouvez prononcer le mot de commande de l\'épée pour que la lame diffuse une lumière vive sur un rayon de 3 mètres et une lumière faible 3 mètres au-delà. La lumière s\'éteint si le mot de commande est prononcé une deuxième fois ou si l\'épée est rengainée.</p>',
    link: '/liste-objets-magiques/epee-tranchante',
    title: 'Épée tranchante',
    type: 'Arme',
    subtype: 'N\'importe quelle épée qui inflige des dégâts tranchants',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Épée voleuse de vie',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous attaquez une créature avec cette arme magique et obtenez un 20 sur le jet d\'attaque, la cible subit 3d6 dégâts nécrotiques supplémentaires, à condition qu\'elle ne soit ni une créature artificielle, ni un mort-vivant. Vous gagnez un nombre de points de vie temporaires égal aux dégâts supplémentaires infligés.</p>',
    link: '/liste-objets-magiques/epee-voleuse-de-vie',
    title: 'Épée voleuse de vie',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Épée vorpale',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quel type d\'épée qui inflige des dégâts tranchants',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous obtenez un bonus de +3 aux jets d\'attaque et de dégâts effectués avec cette arme magique. De plus, l\'arme ignore toute résistance aux dégâts tranchants.</p>\n<p>Lorsque vous attaquez avec cette arme une créature dotée d\'une tête au moins et que vous obtenez un 20 au jet d\'attaque, vous tranchez une de ses têtes. La créature meurt si cette tête lui est nécessaire pour survivre à ce coup. Une créature est immunisée contre cet effet si elle l\'est également contre les dégâts tranchants, si elle n\'a pas de tête ou n\'en pas besoin, si elle peut effectuer des actions légendaires ou si le MJ décide que la créature est trop grosse pour que sa tête soit ainsi tranchée. Contre une telle créature, l\'attaque pourrait à la place infliger 6d8 dégâts tranchants supplémentaires.</p>',
    link: '/liste-objets-magiques/epee-vorpale',
    title: 'Épée vorpale',
    type: 'Arme',
    subtype: 'N\'importe quel type d\'épée qui inflige des dégâts tranchants',
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Éventail enchanté',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Avec cet éventail en main, vous pouvez utiliser une action pour lancer le sort <a href="/grimoire/bourrasque"><em>bourrasque</em></a> (DD des jets de sauvegarde contre le sort 13). Suite à cette première utilisation, l\'éventail ne peut plus être utilisé sans risque de l\'abîmer avant l\'aube suivante. Chaque fois qu\'il est utilisé une fois de plus avant l\'aube prochaine, il y a 20% de chances cumulatives qu\'il ne fonctionne pas et se casse pour devenir un éventail déchiré ordinaire et inutile.</p>',
    link: '/liste-objets-magiques/eventail-enchante',
    title: 'Éventail enchanté',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Fer gelé',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous touchez une créature suite à une attaque avec cette arme magique, votre cible subit 1d6 dégâts de froid supplémentaire. De plus, vous êtes résistant aux dégâts de feu tant que vous tenez cette épée.</p>\n<p>Si la température est glaciale, l\'épée émet une vive lumière dans un rayon de 3 mètres et une faible lumière dans un rayon de 3 mètres de plus.</p>\n<p>Quand vous dégainez cette épée, vous pouvez éteindre toutes les flammes non-magiques situées dans un rayon de 9 mètres autour de vous. Ce pouvoir s\'utilise seulement une fois par heure.</p>',
    link: '/liste-objets-magiques/fer-gele',
    title: 'Fer gelé',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Fers de rapidité',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ces fers à cheval se trouvent par quatre. Quand un cheval ou une créature similaire est ferrée des quatre avec eux, ils augmentent sa vitesse au sol de 9 mètres.</p>',
    link: '/liste-objets-magiques/fers-de-rapidite',
    title: 'Fers de rapidité',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Fers du zéphyr',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ces fers à cheval se trouvent par quatre. Quand un cheval ou une créature similaire est ferrée des quatre avec eux, ils lui permettent de se déplacer normalement tout en flottant à une dizaine de centimètres du sol. Grâce à cet effet, la créature peut traverser une surface instable ou non-solide (comme de l\'eau ou de la lave) ou se tenir dessus. Elle ne laisse pas de trace et ignore les terrains difficiles. De plus, elle peut se déplacer à sa vitesse normale pendant un maximum de 12 heures par jour sans souffrir de l\'épuisement lié à une marche forcée.</p>',
    link: '/liste-objets-magiques/fers-du-zephyr',
    title: 'Fers du zéphyr',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse d\'éléphant de marbre',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Cette statuette de marbre fait une dizaine de centimètres de long comme de large. Elle peut se changer en <a href="/bestiaire/elephant">éléphant</a> pendant 24 heures. Une fois qu\'elle a été utilisée, il faut attendre 7 jours avant de s\'en servir de nouveau.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-delephant-de-marbre',
    title: 'Figurine merveilleuse d\'éléphant de marbre',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de chèvres d\'ivoire',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Ces statuettes de chèvre en ivoire sont toujours créées par trois. Elles possèdent toutes une apparence unique et fonctionnent différemment les unes des autres. Voici leurs propriétés :</p>\n<p>La <em>chèvre de voyage</em> peut se changer en chèvre de taille G, dotée des mêmes statistiques qu\'un <a href="/bestiaire/cheval-de-selle">cheval de selle</a>. Elle a 24 charges et chaque heure passée ou entamée sous forme de bête en consomme une. Vous pouvez utiliser cette chèvre aussi souvent que vous le voulez tant qu\'il lui reste des charges, ensuite, elle reprend sa forme de figurine et ne peut plus servir jusqu\'à ce que 7 jours se soient écoulés. Elle récupère alors toutes ses charges.</p>\n<p>La <em>chèvre de travail</em> se transforme en <a href="/bestiaire/chevre-geante">chèvre géante</a> pendant un maximum de 3 heures. Une fois utilisée, il faut attendre 30 jours avant de pouvoir s\'en servir à nouveau.</p>\n<p>La <em>chèvre de terreur</em> se change en <a href="/bestiaire/chevre-geante">chèvre géante</a> pendant un maximum de 3 heures. Elle ne peut pas attaquer, mais vous pouvez lui retirer ses cornes et vous en servir comme armes. L\'une d\'elle se mue en lance +1, l\'autre en épée longue +2. Il faut dépenser une action pour retirer une corne. L\'arme disparaît et la chèvre récupère sa corne quand elle se transforme de nouveau en statuette. De plus, la chèvre émet une aura de terreur dans un rayon de 9 mètres quand vous la chevauchez. Une créature hostile envers vous qui commence son tour au sein de cette aura doit réussir un jet de sauvegarde de Sagesse DD 15, sans quoi elle a peur de la chèvre et reste <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> pendant 1 minute ou jusqu\'à ce que la chèvre redeviennent une figurine. La créature <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> peut refaire un jet de sauvegarde à la fin de chacun de ses tours. Si elle en réussit un, l\'effet se termine pour elle. Une fois qu\'une créature a réussi son jet de sauvegarde contre cet effet, elle est immunisée contre l\'aura de la chèvre pendant 24 heures. Une fois cette figurine utilisée, il faut attendre 15 jours avant de pouvoir s\'en servir à nouveau.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-chevres-divoire',
    title: 'Figurine merveilleuse de chèvres d\'ivoire',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de chien d\'onyx',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Cette statuette de chien en onyx peut se changer en <a href="/bestiaire/mastiff">mastiff</a> pendant un maximum de 6 heures. Le mastiff a une intelligence de 8 et parle le commun. Il dispose aussi de la vision dans le noir à 18 mètres et discerne les créatures et objets invisibles présents dans ce périmètre. Une fois utilisé, on ne peut plus s\'en servir avant 7 jours.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-chien-donyx',
    title: 'Figurine merveilleuse de chien d\'onyx',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de chouette serpentine',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Cette statuette en serpentine représente une chouette et se change en <a href="/bestiaire/chouette-geante">chouette géante</a> pendant un maximum de 8 heures. Une fois utilisée, il faut attendre 2 jours avant de s\'en servir à nouveau. La chouette peut communiquer avec vous par télépathie sur n\'importe quelle distance, tant que vous vous trouvez tous sur le même plan d\'existence.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-chouette-serpentine',
    title: 'Figurine merveilleuse de chouette serpentine',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de corbeau d\'argent',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Cette statuette de corbeau en argent peut se changer en véritable <a href="/bestiaire/corbeau">corbeau</a> pendant un maximum de 12 heures. Ensuite, il faut attendre 2 jours avant de pouvoir s\'en servir de nouveau. Sous forme de corbeau, la figurine vous permet de lancer le sort <a href="/grimoire/messager-animal"><em>messager animal</em></a> sur elle à volonté.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-corbeau-dargent',
    title: 'Figurine merveilleuse de corbeau d\'argent',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de destrier d\'ébène',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Ce cheval en obsidienne polie se change en <a href="/bestiaire/destrier-noir">destrier noir</a> pendant 24 heures. Il se bat seulement pour se défendre et, une fois utilisé, il faut attendre 5 jours avant de pouvoir s\'en servir à nouveau.</p>\n<p>Si vous êtes d\'alignement bon, la figurine a 10% de chance d\'ignorer vos ordres, y compris celui lui intimant de reprendre sa forme de statuette. Si vous êtes en selle alors que le destrier ignore un de vos ordres, vous êtes instantanément tous deux transportés sur un plan des enfers où le destrier reprend sa forme de statuette.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-destrier-debene',
    title: 'Figurine merveilleuse de destrier d\'ébène',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de griffon de bronze',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Cette statuette de bronze représente un griffon rampant. Elle peut se changer en véritable <a href="/bestiaire/griffon">griffon</a> pendant un maximum de 6 heures. Une fois ce pouvoir utilisé, il faut attendre 5 jours avant de pouvoir s\'en servir à nouveau.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-griffon-de-bronze',
    title: 'Figurine merveilleuse de griffon de bronze',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de lions dores',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Ces statuettes de lions dorés sont toujours créées par paire. Vous pouvez utiliser une figurine à la fois ou les deux. Chacune peut se changer en <a href="/bestiaire/lion">lion</a> pendant un maximum d\'une heure. Une fois qu\'un lion a été utilisé, il ne peut plus servir avant 7 jours.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-lions-dores',
    title: 'Figurine merveilleuse de lions dores',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Figurine merveilleuse de mouche d\'ébène',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>figurine merveilleuse</em> est une statuette représentant un animal et assez petite pour tenir dans une poche. Si vous utilisez une action pour prononcer le mot de commande et lancez la figurine au sol dans un rayon de 18 mètres autour de vous, elle se change en créature vivante. Si l\'emplacement qu\'elle devrait occuper accueille déjà d\'autres créatures ou objets, ou s\'il n\'y a pas assez de place pour l\'animal, la figurine ne se métamorphose pas.</p>\n<p>La créature issue de la figurine existe pendant une durée dépendant de sa statuette. Ensuite, elle se change de nouveau en bibelot. Elle reprend sa forme de figurine avant cela si elle tombe à 0 point de vie ou si vous utilisez une action pour prononcer de nouveau le mot de commande en la touchant. Une fois la créature redevenue bibelot, il faut attendre un certain temps avant qu\'elle puisse se transformer de nouveau, comme indiqué dans sa description.</p>\n<p>Cette statuette en ébène représente un taon. Elle se change en <a href="/bestiaire/mouche-debene">mouche géante</a> pendant 12 heures et peut alors servir de monture. Une fois ce pouvoir utilisé, il faut attendre 2 jours avant de pouvoir s\'en servir à nouveau.</p>',
    link: '/liste-objets-magiques/figurine-merveilleuse-de-mouche-debene',
    title: 'Figurine merveilleuse de mouche d\'ébène',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Flasque de fer',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette petite bouteille de fer est fermée par un bouchon de laiton. Vous pouvez utiliser une action pour prononcer le mot de commande de la flasque et viser une créature située dans votre champ de vision et dans un rayon de 18 mètres autour de vous. Si la cible est originaire d\'un plan autre que celui sur lequel vous vous trouvez, elle doit réussir un jet de sauvegarde de Sagesse DD 17. Si elle échoue, elle se retrouve piégée dans la flasque. Si la cible a déjà été piégée dans cette flasque auparavant, elle obtient l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors du jet de sauvegarde. La flasque ne peut contenir qu\'une créature à la fois. Une créature prisonnière de la flasque n\'a pas besoin de respirer, de manger ni de boire.</p>\n<p>Vous pouvez utiliser une action pour déboucher la flasque et libérer la créature qu\'elle contient. Elle se montre amicale envers vous et vos compagnons pendant 1 heure et vous obéit pendant tout ce temps. Si vous ne donnez pas d\'ordre à la créature ou que vous lui donnez des directives qui se solderont probablement par sa mort, elle se défend mais n\'entreprend pas d\'autres actions. À la fin de l\'heure, la créature agit en accord avec son caractère et son alignement habituels.</p>\n<p>Le sort <a href="/grimoire/identification"><em>identification</em></a> révèle si la flasque contient une créature ou pas, mais pour savoir quel type de créature, il faut ouvrir la flasque. Une flasque peut contenir une créature, choisie par le MJ ou déterminée au hasard, quand vous la découvrez.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: left;">Contenu</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1-50</strong></td>\n<td style="text-align: left;">Vide</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>51-54</strong></td>\n<td style="text-align: left;">Démon (Type 1)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>55-58</strong></td>\n<td style="text-align: left;">Démon (Type 2)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>59-62</strong></td>\n<td style="text-align: left;">Démon (Type 3)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>63-64</strong></td>\n<td style="text-align: left;">Démon (Type 4)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>65</strong></td>\n<td style="text-align: left;">Démon (Type 5)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>66</strong></td>\n<td style="text-align: left;">Démon (Type 6)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>67</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/deva">Déva</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>68-69</strong></td>\n<td style="text-align: left;">Diable (Supérieur)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>70-73</strong></td>\n<td style="text-align: left;">Diable (Inférieur)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>76-77</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/efrit">Éfrit</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>78-83</strong></td>\n<td style="text-align: left;">Élémentaire (au choix)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>84-86</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/traqueur-invisible">Traqueur invisible</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>87-90</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/guenaude-nocturne">Guenaude nocturne</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>91</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/planetar">Planétar</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>92-95</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/salamandre">Salamandre</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>96</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/solar">Solar</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>97-99</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/succube-incube">Succube/Incube</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>100</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/xorn">Xorn</a></td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/flasque-de-fer',
    title: 'Flasque de fer',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Flèche tueuse',
      magicitem: {
        type: 'Arme',
        subtype: 'Flèche',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Une <em>flèche tueuse</em> est une arme magique conçue pour tuer un type précis de créature. Certaines sont plus spécialisées que d\'autres : il existe par exemple des <em>flèches tueuses de dragons</em> et des <em>flèches tueuses de dragons bleus</em>. Si une créature appartient au type, à la race ou au groupe associé à la flèche, elle subit les dégâts normaux et doit faire un jet de sauvegarde de Constitution DD 17. Si elle le rate, elle reçoit 6d10 dégâts perforants supplémentaires, la moitié seulement si elle réussit.</p>\n<p>Dès que la <em>flèche tueuse</em> a infligé des dégâts supplémentaires à une créature, elle redevient une simple flèche ordinaire.</p>\n<p>Il existe d\'autres munitions magiques similaires, comme des <em>carreaux tueurs</em> pour les arbalètes, mais les flèches restent les plus répandues.</p>',
    link: '/liste-objets-magiques/fleche-tueuse',
    title: 'Flèche tueuse',
    type: 'Arme',
    subtype: 'Flèche',
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Flûte des égouts',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous devez maîtriser les instruments à vent si vous voulez jouer de cette flûte. Tant que vous êtes harmonisé avec elle, les rats ordinaires et les rats géants sont indifférents envers vous et ne vous attaquent pas, à moins que vous ne les menaciez ou les blessiez.</p>\n<p>La flûte a trois charges. Si vous utilisez une action pour jouer de la flûte, vous pouvez dépenser une action bonus pour utiliser de 1 à 3 charges et appeler une <a href="/bestiaire/nuee-de-rats">nuée de rats</a> par charge dépensée, à condition qu\'il y ait assez de rats dans un rayon d\'un kilomètre pour répondre ainsi à votre appel (c\'est au MJ d\'en décider). S\'il n\'y a pas assez de rats pour former une nuée, la charge est gaspillée. Une nuée ainsi appelée se précipite vers l\'origine de la musique par le chemin le plus court, mais vous ne la contrôlez pas. Chaque jour à l\'aube, la flûte récupère 1d3 charges dépensées.</p>\n<p>Quand une <a href="/bestiaire/nuee-de-rats">nuée de rats</a> qui ne se trouve pas sous le contrôle d\'une tierce personne arrive dans un rayon de 9 mètres autour de vous alors que vous jouez de la flûte, vous pouvez faire un test de Charisme opposé au test de Sagesse de la nuée. Si vous perdez, la nuée se comporte comme elle le ferait d\'ordinaire et ne se laisse plus influencer par la musique de la flûte pendant les 24 heures qui suivent. Si vous l\'emportez, la nuée est envoûtée par votre mélodie et se montre amicale envers vous et vos compagnons tant que vous continuez de jouer en dépensant une action à chaque round. Une nuée amicale obéit à vos ordres. Si vous n\'en donnez pas, elle se défend mais, en dehors de cela, elle n\'entreprend pas la moindre action. Si une nuée est amicale mais débute son tour dans l\'incapacité d\'entendre la flûte, vous en perdez le contrôle et elle se comporte comme le veut sa nature. La musique de la flûte ne l\'influence plus pendant les 24 heures suivantes.</p>',
    link: '/liste-objets-magiques/flute-des-egouts',
    title: 'Flûte des égouts',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Flûte terrifiante',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous devez maîtriser les instruments à vent si vous voulez jouer de cette flûte dotée de 3 charges. Vous pouvez utiliser une action pour jouer et dépenser une charge pour créer une étrange mélodie envoûtante. Chaque créature qui se situe dans un rayon de 9 mètres autour de vous et vous entend jouer doit réussir un jet de sauvegarde de Sagesse DD 15, sans quoi vous la <em>terrorisez</em> pendant 1 minute. Si vous le désirez, toutes les créatures qui ne sont pas hostiles envers vous mais sont présentes dans la zone réussissent automatiquement leur jet de sauvegarde. Une créature qui a raté son jet de sauvegarde peut le refaire à la fin de chacun de ses tours. L\'effet se termine pour elle dès qu\'elle le réussit. Si une créature réussit son jet de sauvegarde contre la flûte, elle est immunisée contre ses effets pendant 24 heures. Chaque matin à l\'aube, la flûte récupère 1d3 charges dépensées.</p>',
    link: '/liste-objets-magiques/flute-terrifiante',
    title: 'Flûte terrifiante',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Forteresse instantanée',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action pour poser ce tube de métal de 2,5 centimètres à terre et prononcer son mot de commande. Il grandit rapidement pour se muer en forteresse. Il reste sous cette forme jusqu\'à ce que vous dépensiez une action pour prononcer le mot de commande permettant de la révoquer (ce qui fonctionne uniquement si elle est vide).</p>\n<p>La forteresse est une tour carrée de 6 mètres de côté pour 9 mètres de haut. Tous ses murs sont percés de meurtrières et couronnés de créneaux. L\'intérieur se divise en deux étages, reliés par une échelle courant le long d\'un mur. Elle se termine sur une trappe donnant sur le toit. Quand vous activez la tour, elle apparaît avec une petite porte en face de vous. Elle s\'ouvre uniquement sur votre ordre, quand vous prononcez le mot de commande par une action bonus. Elle est immunisée contre le sort <a href="/grimoire/deblocage"><em>déblocage</em></a> et les magies similaires, comme celle d\'un <a href="/liste-objets-magiques/carillon-douverture"><em>carillon d\'ouverture</em></a>.</p>\n<p>Chaque créature qui se trouve dans la zone lorsque la forteresse se déploie doit faire un jet de sauvegarde de Dextérité DD 15. Celles qui échouent subissent 10d10 dégâts contondants, les autres la moitié seulement. Dans les deux cas, la créature est repoussée dans un emplacement inoccupé situé hors de la zone que recouvre la forteresse, mais adjacente à elle. Les objets présents dans la zone subissent automatiquement des dégâts et sont repoussés, à moins qu\'ils ne soient équipés ou transportés par quelqu\'un.</p>\n<p>La tour est faite en adamantium et sa magie empêche qu\'une force extérieure la renverse. Le toit, la porte et les murs ont tous 100 points de vie et sont immunisés contre les dégâts des armes non-magiques, mais pas contre ceux des armes de siège. Ils sont résistants contre tous les autres types de dégâts. Il est impossible de réparer la forteresse, à moins de recourir au sort de <a href="/grimoire/souhait"><em>souhait</em></a> (cette utilisation est assimilée à une copie d\'un sort de niveau 8 ou inférieur). Chaque <a href="/grimoire/souhait"><em>souhait</em></a> ainsi utilisé rend 50 points de vie au toit, à la porte ou à un mur.</p>',
    link: '/liste-objets-magiques/forteresse-instantanee',
    title: 'Forteresse instantanée',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Gantelets de puissance d\'ogre',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces gants, votre valeur de Force est de 19. Si elle est déjà de 19 ou plus, ils n\'ont aucun effet sur vous.</p>',
    link: '/liste-objets-magiques/gantelets-de-puissance-dogre',
    title: 'Gantelets de puissance d\'ogre',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Gants de nage et d\'escalade',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ces gants, la natation et l\'escalade ne vous demandent pas de déplacement supplémentaire et vous gagnez un bonus de +5 aux tests de Force (Athlétisme) pour grimper ou nager.</p>',
    link: '/liste-objets-magiques/gants-de-nage-et-descalade',
    title: 'Gants de nage et d\'escalade',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Gants piégeurs de projectiles',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous enfliez ces gants, ils semblent presque fusionner avec votre peau. Quand vous êtes touché par une attaque d\'arme à distance alors que vous les portez, vous pouvez utiliser votre réaction pour réduire les dégâts subis de 1d10 + votre modificateur de Dextérité, à condition que vous ayez une main libre. Si vous réduisez les dégâts à 0, vous attrapez le projectile (s\'il est de taille assez réduite pour que vous puissiez le tenir d\'une main).</p>',
    link: '/liste-objets-magiques/gants-piegeurs-de-projectiles',
    title: 'Gants piégeurs de projectiles',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Gemme de vision',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette gemme a 3 charges. Vous pouvez prononcer son mot de commande par une action et dépenser une charge. Pendant les 10 minutes suivantes, vous disposez de la <a href="/partir-a-laventure#vision-parfaite">vision parfaite</a> dans un rayon de 36 mètres, à condition de regarder à travers la gemme.</p>\n<p>Chaque matin à l\'aube, la gemme récupère 1d3 charges dépensées.</p>',
    link: '/liste-objets-magiques/gemme-de-vision',
    title: 'Gemme de vision',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Gemme élémentaire',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette gemme contient une particule d\'énergie élémentaire. Quand vous brisez la gemme par une action, un élémentaire apparaît, comme si vous l\'aviez invoqué avec un sort d\'<a href="/grimoire/invoquer-un-elementaire"><em>invoquer un élémentaire</em></a> et la gemme perd toute magie. Le type d\'élémentaire invoqué dépend de la gemme utilisée.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: left;">Gemme</th>\n<th style="text-align: left;">Élémentaire invoqué</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: left;"><strong>Saphir bleu</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/elementaire-de-lair">Élémentaire de l\'air</a></td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Diamant jaune</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/elementaire-de-la-terre">Élémentaire de la terre</a></td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Corindon rouge</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/elementaire-du-feu">Élémentaire du feu</a></td>\n</tr>\n<tr>\n<td style="text-align: left;"><strong>Émeraude</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/elementaire-de-leau">Élémentaire de l\'eau</a></td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/gemme-elementaire',
    title: 'Gemme élémentaire',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Gemme lumineuse',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce prisme a 50 charges. Tant que vous le tenez, vous pouvez utiliser une action pour prononcer l\'un des trois mots de commande qui provoquent l\'un des effets suivants.</p>\n<p>Grâce au premier mot de commande, la gemme émet une vive lumière dans un rayon de 9 mètres et une faible lumière dans un rayon de 9 mètres de plus. Cet effet ne dépense aucune charge. Il se maintient jusqu\'à ce que vous utilisiez une action bonus pour répéter le mot de commande ou jusqu\'à ce que vous utilisiez une autre fonction de la gemme.</p>\n<p>Le second mot de commande dépense 1 charge et fait jaillir un rayon de lumière de la gemme. Il va frapper une créature située dans un rayon de 18 mètres et dans votre champ de vision. Cette créature doit réussir un jet de sauvegarde DD 15, sans quoi elle est <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> pendant 1 minute. Elle peut refaire ce jet de sauvegarde à la fin de chacun de ses tours, jusqu\'à ce qu\'elle le réussisse, ce qui met fin à l\'essai.</p>\n<p>Le troisième mot de commande dépense 5 charges et génère une explosion de lumière dans un cône de 9 mètres partant de la gemme. Chaque créature présente dans le cône doit réussir un jet de sauvegarde comme si elle était touchée par le rayon de lumière né du deuxième mot de commande.</p>\n<p>Quand la gemme a épuisé toutes ses charges, elle devient un joyau dépourvu de magie d\'une valeur de 50 po.</p>',
    link: '/liste-objets-magiques/gemme-lumineuse',
    title: 'Gemme lumineuse',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Hache de berserker',
      magicitem: {
        type: 'Arme',
        subtype: 'Hache',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 aux jets d\'attaque et de dégâts liés à cette arme magique. De plus, tant que vous êtes harmonisé avec elle, votre maximum de points de vie augmente de 1 par niveau que vous possédez.</p>\n<p><strong><em>Malédiction</em></strong>. Cette hache est maudite et vous transmet sa malédiction dès que vous vous harmonisez avec elle. Tant que vous êtes maudit, vous refusez catégoriquement de vous séparer de la hache et la gardez à portée de main en toute circonstance. Vous subissez un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> si vous effectuez un jet d\'attaque avec une autre arme, à moins que vous ne voyiez et n\'entendiez pas d\'ennemis dans un rayon de 18 mètres.</p>\n<p>Quand une créature hostile vous blesse alors que vous êtes en possession de cette hache, vous devez réussir un jet de sauvegarde de Sagesse DD 15 ou devenir fou furieux. Dans ce cas, vous devez utiliser votre action du round pour attaquer la créature la plus proche de vous avec la hache. Si vous êtes en mesure de porter des attaques supplémentaires lors d\'une action d\'Attaque, vous le faites et vous vous déplacez pour attaquer la créature la plus proche après votre cible actuelle une fois que vous avez éliminé celle-ci. Si vous avez plusieurs cibles à disposition, vous en attaquez une au hasard. Vous restez fou furieux jusqu\'à ce que vous commenciez votre tour sans la moindre créature visible ou audible dans un rayon de 18 mètres.</p>',
    link: '/liste-objets-magiques/hache-de-berserker',
    title: 'Hache de berserker',
    type: 'Arme',
    subtype: 'Hache',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Harnois éthéré',
      magicitem: {
        type: 'Armure',
        subtype: 'Harnois',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette armure, vous pouvez prononcer son mot de commande par une action pour bénéficier des effets du sort <a href="/grimoire/forme-etheree"><em>forme éthérée</em></a> pendant 10 minutes, jusqu\'à ce que vous retiriez l\'armure ou jusqu\'à ce que vous dépensiez une action pour prononcer de nouveau le mot de commande. Ensuite, vous devez attendre l\'aube suivante avant d\'utiliser de nouveau ce pouvoir.</p>',
    link: '/liste-objets-magiques/harnois-ethere',
    title: 'Harnois éthéré',
    type: 'Armure',
    subtype: 'Harnois',
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Harnois nain',
      magicitem: {
        type: 'Armure',
        subtype: 'Harnois',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette armure, vous gagnez un bonus de +2 à la CA. De plus, si un effet vous déplace contre votre gré, vous pouvez utiliser votre réaction pour réduire la distance parcourue d\'un maximum de 3 mètres.</p>',
    link: '/liste-objets-magiques/harnois-nain',
    title: 'Harnois nain',
    type: 'Armure',
    subtype: 'Harnois',
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Havresac magique',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce sac à dos dispose d\'une poche centrale et de deux poches latérales, chacune donnant sur un espace extradimensionnel. Chaque poche latérale peut recevoir jusqu\'à 10 kilos de matériel, sans dépasser un volume de 30 litres. La grande poche centrale peut accueillir jusqu\'à 120 litres ou 40 kilos de matériel. Le sac pèse toujours 2,5 kilos, quel que soit son contenu.</p>\n<p>Pour placer un objet dans le havresac, vous devez suivre les règles habituelles d\'interaction avec les objets. Pour récupérer un objet dans le sac, vous devez dépenser une action. Quand vous plongez la main dans le havresac pour y prendre un objet précis, ce dernier se trouve toujours par magie au sommet de la pile.</p>\n<p>Le havresac a quelques limites. S\'il est surchargé ou si un objet pointu le perce ou le lacère, il se déchire et il est détruit. À sa destruction, son contenu est perdu à jamais, bien que les artefacts finissent toujours par réapparaître quelque part. Si on retourne le sac pour le mettre sur l\'envers, son contenu se répand à terre, sans dommage, et il faut remettre le sac sur l\'endroit avant de s\'en servir de nouveau. Si l\'on place une créature qui a besoin de respirer dans le havresac, elle survit au maximum 10 minutes, ensuite, elle commence à suffoquer.</p>\n<p>Si l\'on place le havresac dans l\'espace extradimensionnel né d\'un <a href="/liste-objets-magiques/sac-sans-fond"><em>sac sans fond</em></a>, d\'un <a href="/liste-objets-magiques/puits-portatif"><em>puits portatif</em></a> ou d\'un objet similaire, les deux objets sont instantanément détruis et un portail s\'ouvre vers le plan Astral. Il apparaît là où l\'on a placé le premier objet dans le second et toutes les créatures situées dans un rayon de 3 mètres autour de ce portail sont emportées vers un endroit aléatoire du plan Astral. Le portail se referme ensuite, sachant qu\'il est à sens unique et qu\'il est impossible de le rouvrir.</p>',
    link: '/liste-objets-magiques/havresac-magique',
    title: 'Havresac magique',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Heaume de compréhension des langages',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce heaume, vous pouvez utiliser une action pour lancer <a href="/grimoire/comprehension-des-langues"><em>compréhension des langues</em></a> à volonté par son intermédiaire.</p>',
    link: '/liste-objets-magiques/heaume-de-comprehension-des-langages',
    title: 'Heaume de compréhension des langages',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Heaume de télépathie',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce heaume, vous pouvez utiliser une action pour lancer <a href="/grimoire/detection-des-pensees"><em>détection des pensées</em></a> (DD 13) par son intermédiaire. Tant que vous restez concentré sur le sort, vous pouvez utiliser une action bonus pour envoyer un message télépathique à une créature sur laquelle vous vous concentrez. Elle peut vous répondre (en utilisant une action bonus) tant que vous restez concentré sur elle.</p>\n<p>Tant que vous vous concentrez sur une créature avec <a href="/grimoire/detection-des-pensees"><em>détection des pensées</em></a>, vous pouvez utiliser une action pour lancer le sort <a href="/grimoire/suggestion"><em>suggestion</em></a> (DD 13) sur elle par l\'intermédiaire du heaume. Une fois que vous avez utilisé ce pouvoir, vous devez attendre l\'aube suivante avant de pouvoir recommencer.</p>',
    link: '/liste-objets-magiques/heaume-de-telepathie',
    title: 'Heaume de télépathie',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Heaume de téléportation',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce heaume possède 3 charges. Tant que vous le portez, vous pouvez utiliser une action pour dépenser 1 charge et lancer <a href="/grimoire/teleportation"><em>téléportation</em></a> par son intermédiaire. Chaque matin à l\'aube, il récupère 1d3 charges dépensées.</p>',
    link: '/liste-objets-magiques/heaume-de-teleportation',
    title: 'Heaume de téléportation',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Heaume scintillant',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce heaume éblouissant est serti de 1d10 diamants, 2d10 rubis, 3d10 opales de feu et 4d10 opales. Toute gemme arrachée au heaume tombe en poussière. Le heaume perd ses pouvoirs magiques une fois que toutes ses gemmes ont été détruites ou arrachées.</p>\n<p>Tant que vous portez le heaume, vous bénéficiez des avantages suivants :</p>\n<ul>\n<li>Vous pouvez utiliser une action pour lancer l\'un des sorts suivants (DD 18) en utilisant une gemme du type indiqué comme composante : <a href="/grimoire/lumiere-du-jour"><em>lumière du jour</em></a> (opale), <a href="/grimoire/boule-de-feu"><em>boule de feu</em></a> (opale de feu), <a href="/grimoire/embruns-prismatiques">embruns prismatiques</a> (diamant) ou <a href="/grimoire/mur-de-feu"><em>mur de feu</em></a> (rubis). La gemme est détruite au moment de l\'incantation et disparaît.</li>\n</ul>\n<p>Tant que le heaume possède encore au moins un diamant, il émet une faible lumière dans un rayon de 9 mètres quand il y a au moins un mort-vivant dans ce même rayon. Tout mort-vivant qui débute son tour dans cette zone subit 1d6 dégâts radiants.</p>\n<p>Tant qu\'il reste au moins un rubis sur le heaume, vous êtes résistant aux dégâts de feu.</p>\n<p>Tant que le heaume possède au moins une opale de feu, vous pouvez utiliser une action pour prononcer le mot de commande et enflammer une arme actuellement dans votre main. Les flammes émettent une vive lumière dans un rayon de 3 mètres et une faible lumière dans un rayon de 3 mètres de plus. Les flammes ne causent aucun dégât à votre personne ni à votre arme, en revanche, quand vous attaquez avec l\'arme enflammée et touchez votre cible, vous lui infligez 1d6 dégâts de feu supplémentaires. Les flammes persistent jusqu\'à ce que vous utilisiez une action bonus pour prononcer de nouveau le mot de commande ou que vous lâchiez l\'arme ou la rengainiez.</p>\n<p>Lancez 1d20 si vous portez le heaume et subissez des dégâts de feu à cause d\'un échec à un jet de sauvegarde contre un sort. Sur un 1, les gemmes encore présentes émettent des rayons de lumière. Chaque créature (autre que vous) présente dans un rayon de 18 mètres autour du heaume doit réussir un jet de sauvegarde de Dextérité DD 17, sans quoi un rayon la frappe et lui inflige des dégâts radiants égaux au nombre de gemmes restant sur le heaume. Le heaume et ses gemmes sont ensuite détruits.</p>',
    link: '/liste-objets-magiques/heaume-scintillant',
    title: 'Heaume scintillant',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Huile d\'affûtage',
      magicitem: {
        type: 'Potion',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette huile claire et gélatineuse est constellée de minuscules paillettes d\'argent. On peut s\'en servir pour enduire une arme tranchante ou perforante ou bien 5 munitions tranchantes ou perforantes au maximum. Il faut 1 minute pour appliquer l\'huile, ensuite, l\'objet enduit devient magique et doté d\'un bonus de +3 aux jets d\'attaque et de dégâts pendant 1 heure.</p>',
    link: '/liste-objets-magiques/huile-daffutage',
    title: 'Huile d\'affûtage',
    type: 'Potion',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Huile étherée',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>L\'huile d\'un gris trouble contenue dans ce récipient forme des perles sur sa paroi externe, mais elles s\'évaporent rapidement. On peut recouvrir une créature de taille M ou inférieure avec l\'huile, ainsi que tout son équipement et tous les objets en sa possession (il faut vider une fiole de plus par catégorie de taille au-dessus de M si la créature est plus grande). Il faut 10 minutes pour appliquer l\'huile correctement. La créature affectée bénéficie alors des effets du sort <a href="/grimoire/forme-etheree"><em>forme éthérée</em></a> pendant 1 heure.</p>',
    link: '/liste-objets-magiques/huile-etheree',
    title: 'Huile étherée',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Huile glissante',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cet épais onguent noir est dense et lourd tant qu\'il reste dans son récipient, mais il coule avec fluidité dès qu\'on le verse. Il permet de recouvrir une créature de taille M ou inférieure (il faut verser une fiole de plus pour chaque catégorie de taille au-dessus de M). Il faut 10 minutes pour appliquer l\'huile. La créature affectée bénéficie alors des effets du sort <a href="/grimoire/liberte-de-mouvement"><em>liberté de mouvement</em></a> pendant 8 heures.</p>\n<p>Sinon, vous pouvez verser l\'huile à terre par une action. Elle recouvre une zone de 3 mètres de côté et produit les mêmes effets que le sort <a href="/grimoire/graisse"><em>graisse</em></a>.</p>',
    link: '/liste-objets-magiques/huile-glissante',
    title: 'Huile glissante',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Javeline de foudre',
      magicitem: {
        type: 'Arme',
        subtype: 'Javeline',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette javeline est une arme magique. Quand vous la lancez et prononcez son mot de commande, elle se transforme en éclair, formant une ligne de 1,50 mètre de large qui s\'étend de votre personne jusqu\'à une cible située à une distance maximale de 36 mètres. Chaque créature présente sur cette ligne, à l\'exception de vous et de votre cible, doit faire un jet de sauvegarde de Dextérité DD 13. Celles qui échouent subissent 4d6 points de dégâts de foudre, les autres la moitié seulement. L\'éclair reprend sa forme de javeline quand il atteint sa cible. Faites une attaque d\'arme à distance contre elle. Si vous touchez, la cible subit les dégâts habituels de la javeline plus 4d6 dégâts de foudre.</p>\n<p>Il faut attendre l\'aube suivante pour se servir de nouveau de cette propriété de la javeline. En attendant, elle fonctionne tout de même comme une arme magique.</p>',
    link: '/liste-objets-magiques/javeline-de-foudre',
    title: 'Javeline de foudre',
    type: 'Arme',
    subtype: 'Javeline',
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Lame porte-bonheur',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 aux jets d\'attaque et de dégâts avec cette arme magique. Tant qu\'elle se trouve en votre possession, vous gagnez un bonus de +1 aux jets de sauvegarde.</p>\n<p><strong><em>Chance</em></strong>. Si l\'épée se trouve sur votre personne, vous pouvez faire appel à sa chance (sans faire d\'action) pour relancer un jet d\'attaque, un test de caractéristique ou un jet de sauvegarde qui vous déplaît. Vous devez conserver le résultat du second jet. Il faut attendre l\'aube suivante avant de pouvoir se servir de nouveau de cette propriété.</p>\n<p><strong><em>Souhait</em></strong>. L\'épée dispose de 1d4-1 charges. Tant qu\'elle se trouve en votre possession, vous pouvez utiliser une action pour dépenser une charge et lancer le sort <a href="/grimoire/souhait"><em>souhait</em></a>. Il est impossible de se servir de nouveau de cette propriété avant l\'aube suivante. L\'épée perd ce pouvoir si elle n\'a plus de charge.</p>',
    link: '/liste-objets-magiques/lame-porte-bonheur',
    title: 'Lame porte-bonheur',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Lanterne de révélation',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand cette lanterne à capote est allumée, elle brûle pendant 6 heures en consommant 0,5 litre d\'huile. Elle émet alors une vive lumière dans un rayon de 9 mètres et une faible lumière dans un rayon de 9 mètres de plus. Les créatures et les objets <a href="/gerer-la-sante-du-personnage#invisible"><em>invisibles</em></a> situés dans la zone de vive lumière de la lanterne deviennent visibles. Vous pouvez utiliser une action pour baisser la capote et réduire la luminosité à une faible lumière dans un rayon de 1,50 mètre.</p>',
    link: '/liste-objets-magiques/lanterne-de-revelation',
    title: 'Lanterne de révélation',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Lentilles de netteté',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ces lentilles de cristal se portent sur les yeux. Tant que vous les portez, votre vue est bien meilleure que d\'habitude dans un rayon de 30 centimètres. Vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests d\'Intelligence (Investigation) basés sur la vue quand vous fouillez une zone ou étudiez un objet situé dans ce rayon.</p>',
    link: '/liste-objets-magiques/lentilles-de-nettete',
    title: 'Lentilles de netteté',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Liens de fer',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette sphère de fer rouillé mesure 7,5 centimètres de diamètre et pèse 0,5 kilo. Vous pouvez utiliser une action pour prononcer le mot de commande et lancer la sphère sur une créature de taille TG ou inférieure située dans votre champ de vision et dans un rayon de 18 mètres autour de vous. La sphère se déploie en un entrelacs de bandes de métal alors qu\'elle file dans les airs.</p>\n<p>Faites un jet d\'attaque à distance avec un bonus d\'attaque égal à votre modificateur de Dextérité plus votre bonus de maîtrise. Si vous touchez votre cible, elle est <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> jusqu\'à ce que vous dépensiez une action bonus pour prononcer le mot de commande afin de la libérer. Dans ce cas, ou si vous ratez votre cible, les bandes de métal se rétractent et reprennent leur forme de sphère.</p>\n<p>Une créature (y compris la victime <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a>) peut utiliser une action pour faire un test de Force DD 20 pour briser les liens de fer. Si elle réussit, l\'objet est détruit et la créature <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> est libérée. Si la créature rate son test, toutes ses tentatives ultérieures échouent automatiquement pendant les 24 heures suivantes.</p>\n<p>Une fois les fers utilisés, il faut attendre l\'aube prochaine pour s\'en servir à nouveau.</p>',
    link: '/liste-objets-magiques/liens-de-fer',
    title: 'Liens de fer',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Lunettes nocturnes',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous portez ces verres sombres, vous bénéficiez de la vision dans le noir à 18 mètres. Si vous disposez déjà de ce pouvoir, son rayon augmente de 18 mètres.</p>',
    link: '/liste-objets-magiques/lunettes-nocturnes',
    title: 'Lunettes nocturnes',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Lyre de la reine sylvestre',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Artefact',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Faite d\'acajou serti d\'or, cette lyre à onze cordes était l\'instrument de la reine d\'un peuple elfique dont le temps a effacé le nom. La reine jouait de l\'instrument pour combattre sa mélancolie quand son roi partait à la bataille. La tristesse de la dame émeut une déesse qui donna de grands pouvoirs de guérison aux larmes qu\'elle versait. Un jour, le roi ne revint pas de la guerre, et la reine fut anéantie de chagrin. Elle pleura des jours et des nuits entières sur sa lyre, lui transmettant ainsi le pouvoir divin de ses larmes. À la fin de sa très longue vie, la reine s\'exila et partit à la recherche de l\'âme de son défunt roi. La reine et sa lyre n\'ont pas été revues depuis.</p>\n<p><strong><em>Musique apaisante</em></strong>. La lyre émet un son enchanteur qui évoque subtilement une voix féminine emprunte de tristesse. Toute créature qui l\'entend doit réussir un jet de sauvegarde de Sagesse (DD 18) ou voir son attitude envers le joueur de lyre améliorée d\'un cran (une créature hostile devient indifférente, une créature indifférente devient amicale). Une fois qu\'une créature a subi cette capacité, qu\'elle y ait résisté ou non, elle y est immunisée à vie.</p>\n<p><strong><em>Bénédiction sylvestre</em></strong>. Si vous êtes un elfe et êtes harmonisé à la lyre, vous gagnez les bénéfices suivants :</p>\n<ul>\n<li>La portée de votre vision dans le noir passe à 36 mètres.</li>\n<li>Vous gagnez la maîtrise des lyres.</li>\n<li>Vous êtes immunisé à l\'effet <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a>.</li>\n</ul>\n<p><strong><em>Sorts divins</em></strong>. En jouant de la lyre, vous pouvez lancer un des sorts suivants : <a href="/grimoire/guerison-de-groupe"><em>guérison de groupe</em></a>, <a href="/grimoire/regeneration"><em>régénération</em></a>, <a href="/grimoire/resurrection"><em>résurrection</em></a>. La musique de la lyre remplace toutes les composantes des sorts. Une fois que vous avez lancé un sort grâce à la lyre, vous devez terminer un repos long avant de réutiliser cette capacité.</p>\n<p><strong><em>Détruire la lyre</em></strong>. Seule la joie véritable de la reine sylvestre pourrait détruire la lyre. Une véritable quête épique attend celui qui voudrait retrouver le nom de cette reine, la ramener à la vie et lui ramener son époux décédé à l\'aube des temps. La lyre perdrait tout pouvoir si la reine, enfin heureuse, y jouait quelques notes.</p>',
    link: '/liste-objets-magiques/lyre-de-la-reine-sylvestre',
    title: 'Lyre de la reine sylvestre',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Artefact',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Manteau de résistance aux sorts',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez ce manteau, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre les sorts.</p>',
    link: '/liste-objets-magiques/manteau-de-resistance-aux-sorts',
    title: 'Manteau de résistance aux sorts',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Manuel d\'exercices physiques',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce livre propose des exercices d\'entretien musculaire, et ses mots sont chargés de magie. Si vous passez 48 heures sur une période de 6 jours au moins à étudier ce livre et appliquer ses conseils, votre valeur de Force augmente de 2, tout comme votre maximum pour cette valeur. Le manuel perd alors toute magie mais elle se recharge au bout d\'un siècle.</p>',
    link: '/liste-objets-magiques/manuel-dexercices-physiques',
    title: 'Manuel d\'exercices physiques',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Manuel de bonne santé',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce livre contient des conseils pour rester en bonne santé et s\'alimenter sainement, et ses mots sont chargés de magie. Si vous passez 48 heures sur une période de 6 jours au moins à étudier ce livre et appliquer ses conseils, votre valeur de Constitution augmente de 2, tout comme votre maximum pour cette valeur. Le manuel perd alors toute magie, mais elle se recharge au bout d\'un siècle.</p>',
    link: '/liste-objets-magiques/manuel-de-bonne-sante',
    title: 'Manuel de bonne santé',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Manuel de vivacité',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce livre propose des exercices d\'équilibre et de coordination, et ses mots sont chargés de magie. Si vous passez 48 heures sur une période de 6 jours au moins à étudier ce livre et appliquer ses conseils, votre valeur de Dextérité augmente de 2, tout comme votre maximum pour cette valeur. Le manuel perd alors toute magie mais elle se recharge au bout d\'un siècle.</p>',
    link: '/liste-objets-magiques/manuel-de-vivacite',
    title: 'Manuel de vivacité',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Manuel des golems',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce livre présente des informations et des incantations nécessaires à la fabrication d\'un certain type de golems. C\'est au MJ de choisir ce type ou de le déterminer au hasard. Pour déchiffrer le manuel et vous en servir, vous devez être un incantateur disposant d\'au moins deux emplacements de sort de niveau 5. Si une créature tente de lire le <em>manuel des golems</em> alors qu\'elle est incapable de s\'en servir, elle subit 6d6 dégâts psychiques.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D20</th>\n<th style="text-align: center;">Golem</th>\n<th style="text-align: center;">Durée</th>\n<th style="text-align: center;">Prix</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1-5</strong></td>\n<td style="text-align: center;"><a href="/bestiaire/golem-dargile">Argile</a></td>\n<td style="text-align: center;">30 jours</td>\n<td style="text-align: center;">65000 po</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6-17</strong></td>\n<td style="text-align: center;"><a href="/bestiaire/golem-de-chair">Chair</a></td>\n<td style="text-align: center;">60 jours</td>\n<td style="text-align: center;">50000 po</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>18</strong></td>\n<td style="text-align: center;"><a href="/bestiaire/golem-de-fer">Fer</a></td>\n<td style="text-align: center;">120 jours</td>\n<td style="text-align: center;">100000 po</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>19-20</strong></td>\n<td style="text-align: center;"><a href="/bestiaire/golem-de-pierre">Pierre</a></td>\n<td style="text-align: center;">90 jours</td>\n<td style="text-align: center;">80000 po</td>\n</tr>\n</tbody>\n</table></div></div>\n<p>Pour créer un golem, vous devez passer le temps indiqué dans la table à travailler sans interruption en vous aidant du manuel, sans vous reposer plus de 8 heures par jour. Vous devez également payer le prix indiqué pour acheter vos fournitures.</p>\n<p>Dès que vous avez achevé la construction du golem, le manuel se consume dans des flammes surnaturelles. Le golem s\'anime une fois que vous l\'avez saupoudré avec les cendres du livre. Il est sous votre contrôle, comprend vos ordres vocaux et leur obéit.</p>',
    link: '/liste-objets-magiques/manuel-des-golems',
    title: 'Manuel des golems',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Marteau de lancer nain',
      magicitem: {
        type: 'Arme',
        subtype: 'Marteau de guerre',
        rarity: 'Très rare',
        attunement: 'harmonisation requise avec un nain'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +3 aux jets d\'attaque et de dégâts avec cette arme magique. Elle dispose de la propriété de lancer à une portée normale de 6 mètres et une longue portée de 18 mètres. Quand vous touchez votre cible avec une attaque à distance effectuée avec cette arme, elle inflige 1d8 dégâts supplémentaires ou 2d8 dégâts supplémentaires si la cible est un géant. L\'arme revient dans votre main immédiatement après l\'attaque.</p>',
    link: '/liste-objets-magiques/marteau-de-lancer-nain',
    title: 'Marteau de lancer nain',
    type: 'Arme',
    subtype: 'Marteau de guerre',
    rarity: 'Très rare',
    attunement: 'harmonisation requise avec un nain'
  },
  {
    header: {
      title: 'Marteau du tonnerre',
      magicitem: {
        type: 'Arme',
        subtype: 'Merlin',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 aux jets d\'attaque et de dégâts effectués avec cette arme magique.</p>\n<p><strong><em>Tueur de géant (harmonisation requise)</em></strong>. Pour vous harmoniser avec cette arme, vous devez porter un ceinturon de force de géant et des gantelets de puissance d\'ogre. L\'harmonisation se rompt si vous ôtez l\'un de ces objets. Tant que vous êtes harmonisé avec cette arme et que vous la tenez en main, votre valeur de Force augmente de 4 et peut dépasser 20, mais pas 30. Quand vous obtenez un 20 au dé sur un jet d\'attaque effectué avec cette arme contre un géant, ce dernier doit réussir un jet de sauvegarde de Constitution DD 17 ou mourir sur-le-champ.</p>\n<p>Le marteau dispose de 5 charges. Tant que vous êtes harmonisé avec lui, vous pouvez dépenser une charge pour faire une attaque d\'arme à distance avec lui et le lancer comme s\'il disposait de la propriété lancer avec une portée normale de 6 mètres et une portée longue de 18 mètres. Si l\'attaque touche, le marteau fait résonner un coup de tonnerre qui s\'entend dans un rayon de 90 mètres. La cible et toutes les créatures situées dans un rayon de 9 mètres autour d\'elle doivent réussir un jet de sauvegarde de Constitution ou se trouver étourdies jusqu\'à la fin de votre prochain tour. Chaque matin à l\'aube, le marteau récupère 1d4+1 charges dépensées.</p>',
    link: '/liste-objets-magiques/marteau-du-tonnerre',
    title: 'Marteau du tonnerre',
    type: 'Arme',
    subtype: 'Merlin',
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Masse d\'anéantissement',
      magicitem: {
        type: 'Arme',
        subtype: 'Masse d\'armes',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous touchez un fiélon ou un mort-vivant avec cette arme magique, cette créature subit 2d6 dégâts radiants supplémentaires. Si la cible se retrouve avec 25 points de vie ou moins après avoir subi ces dégâts, elle doit réussir un jet de sauvegarde de Sagesse DD 15, sans quoi elle est détruite. Si elle réussit son jet de sauvegarde, elle est <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> : elle a peur de vous jusqu\'à la fin de votre prochain tour.</p>\n<p>Tant que vous tenez cette arme en main, elle émet une vive lumière dans un rayon de 6 mètres et une faible lumière dans un rayon de 6 mètres supplémentaires.</p>',
    link: '/liste-objets-magiques/masse-daneantissement',
    title: 'Masse d\'anéantissement',
    type: 'Arme',
    subtype: 'Masse d\'armes',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Masse destructrice',
      magicitem: {
        type: 'Arme',
        subtype: 'Masse d\'armes',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 aux jets d\'attaque et de dégâts avec cette arme magique. Ce bonus passe à +3 si vous l\'utilisez contre une créature artificielle.</p>\n<p>Quand vous obtenez un 20 sur un jet d\'attaque effectué avec cette arme, la cible subit 2d6 dégâts contondants supplémentaires ou 4d6 si c\'est une créature artificielle. Si une créature artificielle a seulement 25 points de vie ou moins après avoir subi de tels dégâts, elle est détruite.</p>',
    link: '/liste-objets-magiques/masse-destructrice',
    title: 'Masse destructrice',
    type: 'Arme',
    subtype: 'Masse d\'armes',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Masse terrifiante',
      magicitem: {
        type: 'Arme',
        subtype: 'Masse d\'armes',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette arme magique dispose de 3 charges. Tant que vous la tenez en main, vous pouvez dépenser une action et une charge pour émettre une vague de terreur. Les créatures de votre choix se trouvant dans un rayon de 9 mètres autour de vous doivent réussir un jet de sauvegarde de Sagesse DD 15, sans quoi elles sont <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisées</em></a> et ont peur de vous pendant 1 minute. Tant qu\'une créature est ainsi <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a>, elle s\'efforce de s\'éloigner au maximum de vous pendant tout son tour et elle est incapable de s\'avancer de son plein gré dans un emplacement situé dans un rayon de 9 mètres autour de vous. Elle est aussi dans l\'incapacité d\'utiliser une réaction. Au niveau de ses actions, elle est limitée à <em>se précipiter</em> ou à tenter de se libérer de tout effet l\'empêchant de se déplacer. Si la créature n\'a aucun endroit où aller, elle peut utiliser l\'action <em>esquiver</em>. Elle a droit à un nouveau jet de sauvegarde à la fin de chacun de ses tours, la terreur se terminant si elle en réussit un.</p>\n<p>Chaque matin à l\'aube, la masse récupère 1d3 charges dépensées.</p>',
    link: '/liste-objets-magiques/masse-terrifiante',
    title: 'Masse terrifiante',
    type: 'Arme',
    subtype: 'Masse d\'armes',
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Médaillon des pensées',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Le médaillon a 3 charges. Tant que vous le portez, vous pouvez utiliser une action et dépenser une charge pour lancer <a href="/grimoire/detection-des-pensees"><em>détection des pensées</em></a> (DD 13) par son intermédiaire. Chaque matin à l\'aube, il récupère 1d3 charges dépensées.</p>',
    link: '/liste-objets-magiques/medaillon-des-pensees',
    title: 'Médaillon des pensées',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Menottes dimensionnelles',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action pour menotter une créature <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> avec cet objet. Les menottes s\'ajustent aux poignets des créatures de taille P à G. En plus de servir d\'entraves traditionnelles, elles empêchent la créature attachée d\'utiliser la moindre méthode de déplacement extradimensionnel, y compris la téléportation et les voyages vers d\'autres plans d\'existence. En revanche, elles n\'empêchent pas leur prisonnier de traverser un portail interdimensionnel.</p>\n<p>Vous-même et toute créature que vous désignez au moment de fermer les menottes pouvez dépenser une action pour les retirer. Une fois tous les 30 jours, la créature menottée peut faire un test de Force (Athlétisme) DD 30. Si elle le réussit, elle se libère et détruit les menottes.</p>',
    link: '/liste-objets-magiques/menottes-dimensionnelles',
    title: 'Menottes dimensionnelles',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Miroir d\'emprisonnement',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand on regarde indirectement ce miroir de 1,20 mètre de haut, on y aperçoit vaguement les reflets de plusieurs créatures. Il pèse 25 kilos pour une CA de 11, a 10 points de vie et il est vulnérable aux dégâts contondants. Il vole en éclats et il est détruit s\'il tombe à 0 point de vie.</p>\n<p>S\'il est accroché sur une surface verticale et que vous vous trouvez dans un rayon de 1,50 mètre autour de lui, vous pouvez utiliser une action pour prononcer son mot de commande et l\'activer. Il reste ainsi jusqu\'à ce que vous utilisiez une action pour prononcer de nouveau son mot de commande.</p>\n<p>Toute créature autre que vous qui regarde son reflet dans le miroir activé et se trouve dans un rayon de 9 mètres autour de lui doit réussir un jet de sauvegarde de Charisme ou se faire piéger, avec tout son équipement et toutes ses possessions, dans l\'une des douze cellules extradimensionnelles du miroir. Si la créature connaît les propriétés du miroir, elle obtient l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors du jet de sauvegarde. Les créatures artificielles réussissent automatiquement leur jet de sauvegarde.</p>\n<p>Chaque cellule extradimensionnelle est un espace infini emplit d\'un épais brouillard qui réduit la visibilité à 3 mètres. Les créatures piégées dans le miroir ne vieillissent pas et n\'ont pas besoin de manger, boire, ni dormir. Une créature enfermée peut s\'enfuir via une magie de déplacement planaire, sinon, elle reste prisonnière jusqu\'à ce que quelqu\'un la libère.</p>\n<p>Si le miroir piège une créature alors que ses douze cellules sont occupées, il en libère une au hasard pour faire de la place au nouveau prisonnier. Une créature libérée apparaît dans un emplacement inoccupé dans le champ de vision du miroir mais en lui tournant le dos. Si le miroir vole en éclats, toutes les créatures qu\'il renfermait sont libres et apparaissent dans des emplacements inoccupés proches de lui.</p>\n<p>Tant que vous vous trouvez dans un rayon de 1,50 mètre autour du miroir, vous pouvez utiliser une action pour prononcer le nom d\'une créature piégée en son sein ou donner le numéro d\'une cellule. L\'image de la créature nommée ou se trouvant dans la cellule nommée apparaît alors à la surface du miroir. Vous pouvez communiquer normalement avec elle.</p>\n<p>De même, vous pouvez prononcer un deuxième mot de commande et libérer une créature piégée dans le miroir. La créature libérée apparaît dans l\'emplacement inoccupé le plus proche du miroir, dos à lui.</p>',
    link: '/liste-objets-magiques/miroir-demprisonnement',
    title: 'Miroir d\'emprisonnement',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Munition +1',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle munition',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus aux jets d\'attaque et de dégâts de +1 effectués avec cette munition. Cette dernière perd toute magie dès qu\'elle a touché une cible.</p>',
    link: '/liste-objets-magiques/munition-1',
    title: 'Munition +1',
    type: 'Arme',
    subtype: 'N\'importe quelle munition',
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Munition +2',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle munition',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus aux jets d\'attaque et de dégâts de +2 effectués avec cette munition. Cette dernière perd toute magie dès qu\'elle a touché une cible.</p>',
    link: '/liste-objets-magiques/munition-2',
    title: 'Munition +2',
    type: 'Arme',
    subtype: 'N\'importe quelle munition',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Munition +3',
      magicitem: {
        type: 'Arme',
        subtype: 'N\'importe quelle munition',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'un bonus aux jets d\'attaque et de dégâts de +3 effectués avec cette munition. Cette dernière perd toute magie dès qu\'elle a touché une cible.</p>',
    link: '/liste-objets-magiques/munition-3',
    title: 'Munition +3',
    type: 'Arme',
    subtype: 'N\'importe quelle munition',
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Œil de lynx',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ces lentilles de cristal se portent sur les yeux. Tant que vous les portez, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests de Sagesse (Perception) basés sur la vue. Si la visibilité est bien dégagée, vous percevez tous les détails des créatures et des objets, même très éloignés, à conditions que ces créatures et objets fassent au moins 60 centimètres de large.</p>',
    link: '/liste-objets-magiques/oeil-de-lynx',
    title: 'Œil de lynx',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Orbe des dragons',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Artefact',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Il y a une éternité, les elfes et les humains ont mené une guerre terrible contre les dragons maléfiques. Alors que le monde semblait condamné, de puissants magiciens se sont réunis pour produire ensemble la plus importante de leurs magies et forger les cinq <em>orbes des dragons</em> (ou <em>orbes draconiques</em>) afin de les aider à vaincre ces créatures. Les orbes ont été emportés dans chacune des cinq tours de magie et, là-bas, ils ont servi à mettre un terme rapide et victorieux à la guerre. Les magiciens ont utilisé les orbes pour attirer à eux les dragons afin de les détruire ensuite de leur puissante magie.</p>\n<p>Les tours sont tombées au fil du temps, et les orbes ont été détruits ou sont devenus de simples légendes. Seuls trois d\'entre eux ont survécu. Les siècles ont déformé et perverti leur magie et, même s\'ils ont toujours pour principal objectif d\'appeler à eux les dragons, ils confèrent également un contrôle précaire sur ces créatures.</p>\n<p>Chaque orbe contient l\'essence d\'un dragon maléfique, une présence qui n\'apprécie pas que l\'on tente d\'utiliser sa magie. Ceux qui manquent de personnalité peuvent devenir les esclaves d\'un orbe.</p>\n<p>Un orbe est un globe de cristal gravé de 25 centimètres de diamètre. Quand on l\'utilise, il grossit pour atteindre un diamètre de 50 centimètres et on voit une brume tourbillonner à l\'intérieur.</p>\n<p>Si vous êtes en harmonie avec un orbe, vous pouvez utiliser une action pour observer ses profondeurs brumeuses et prononcer son mot de commande. Vous devez ensuite effectuer un test de Charisme DD 15. En cas de test réussi, vous contrôlez l\'orbe aussi longtemps que vous restez en harmonie avec lui. En cas de test raté, l\'orbe vous charme aussi longtemps que vous restez en harmonie avec lui.</p>\n<p>Tant que vous êtes <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a> par l\'orbe, vous ne pouvez plus mettre volontairement fin à l\'harmonie avec lui. L\'orbe lance une <a href="/grimoire/suggestion"><em>suggestion</em></a> sur vous à volonté (DD du jet de sauvegarde du sort 18) et vous pousse à œuvrer dans le sens des maléfiques desseins qu\'il cherche à atteindre. Les désirs de l\'essence de dragon à l\'intérieur de l\'orbe peuvent être multiples et variés : l\'annihilation d\'un peuple spécifique, sortir de l\'orbe, répandre souffrance et douleur de par le monde, encourager le culte de Tiamat ou tout autre objectif décidé par le MJ.</p>\n<p><strong><em>Propriétés aléatoires</em></strong>. Un <em>orbe des dragons</em> possède les propriétés suivantes à déterminer aléatoirement :</p>\n<ul>\n<li>2 propriétés bénéfiques mineures</li>\n<li>1 propriété néfaste mineure</li>\n<li>1 propriété néfaste majeure</li>\n</ul>\n<p><strong><em>Sorts</em></strong>. L\'orbe contient 7 charges et récupère 1d4+3 charges dépensées chaque jour, à l\'aube. Si vous contrôlez l\'orbe, vous pouvez utiliser une action et dépenser 1 ou plusieurs charges pour lancer un des sorts suivants (DD 18 r les jets de sauvegarde contre ces sorts) par son biais : <a href="/grimoire/soin-des-blessures"><em>soin des blessures</em></a> (version de niveau 5, 3 charges), <a href="/grimoire/lumiere-du-jour"><em>lumière du jour</em></a> (1 charge), <a href="/grimoire/protection-contre-la-mort"><em>protection contre la mort</em></a> (2 charges) ou <a href="/grimoire/scrutation"><em>scrutation</em></a> (3 charges).</p>\n<p>Vous pouvez également utiliser une action pour lancer le sort <a href="/grimoire/detection-de-la-magie"><em>détection de la magie</em></a> depuis l\'orbe sans dépenser aucune charge.</p>\n<p><strong><em>Appel des dragons</em></strong>. Tant que vous contrôlez l\'orbe, vous pouvez utiliser une action pour que l\'artefact émette un appel télépathique dans toutes les directions sur une distance de 60 kilomètres. Les dragons maléfiques à portée se sentent obligés d\'emprunter l\'itinéraire le plus court pour rejoindre l\'orbe dès que possible. Les divinités des dragons, comme Tiamat, ne sont pas affectées par cet appel. Les dragons attirés vers un orbe peuvent vous en vouloir pour les avoir obligés à se déplacer contre leur volonté. Il faut attendre une heure avant de pouvoir utiliser cette propriété à nouveau.</p>\n<p><strong><em>Destruction d\'un orbe</em></strong>. Un orbe des dragons paraît fragile, mais rien ne peut en venir à bout, pas même les attaques et les souffles des dragons. Un sort de <a href="/grimoire/desintegration"><em>désintégration</em></a> ou une frappe réussie avec une arme magique +3 suffit néanmoins pour détruire un orbe.</p>',
    link: '/liste-objets-magiques/orbe-des-dragons',
    title: 'Orbe des dragons',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Artefact',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 1)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 13<br>\n<strong>Bonus à l\'attaque</strong> : +5</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-1',
    title: 'Parchemin magique (Niveau 1)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Courant',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 2)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 13<br>\n<strong>Bonus à l\'attaque</strong> : +5</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-2',
    title: 'Parchemin magique (Niveau 2)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 3)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 15<br>\n<strong>Bonus à l\'attaque</strong> : +7</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-3',
    title: 'Parchemin magique (Niveau 3)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 4)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 15<br>\n<strong>Bonus à l\'attaque</strong> : +7</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-4',
    title: 'Parchemin magique (Niveau 4)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 5)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 17<br>\n<strong>Bonus à l\'attaque</strong> : +9</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-5',
    title: 'Parchemin magique (Niveau 5)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 6)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 17<br>\n<strong>Bonus à l\'attaque</strong> : +9</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-6',
    title: 'Parchemin magique (Niveau 6)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 7)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 18<br>\n<strong>Bonus à l\'attaque</strong> : +10</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-7',
    title: 'Parchemin magique (Niveau 7)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 8)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 18<br>\n<strong>Bonus à l\'attaque</strong> : +10</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-8',
    title: 'Parchemin magique (Niveau 8)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Niveau 9)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 19<br>\n<strong>Bonus à l\'attaque</strong> : +11</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-9',
    title: 'Parchemin magique (Niveau 9)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Parchemin magique (Tour de magie)',
      magicitem: {
        type: 'Parchemin',
        rarity: 'Courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Sur un <em>parchemin magique</em> est inscrite la formule d\'un unique sort, rédigée tel un message mystique crypté. Si le sort est présent dans la liste de sorts de votre classe de personnage, vous pouvez utiliser une action pour lire le parchemin et lancer le sort qu\'il contient dans devoir fournir aucune de ses composantes. Sinon, le sort est incompréhensible.</p>\n<p>Si le sort est présent dans la liste de sorts de votre classe de personnage mais d\'un niveau supérieur à ceux que vous êtes normalement capable de lancer, vous devez effectuer un test de caractéristique en utilisant votre caractéristique d\'incantation pour déterminer si vous parvenez à le lancer. Le DD est égal à 10 + le niveau du sort. En cas de test raté, le sort disparaît du parchemin sans produire d\'effet.</p>\n<p>Une fois le sort lancé, la formule disparaît de la surface du parchemin qui tombe ensuite en poussière.</p>\n<p><strong>DD du jet de sauvegarde</strong> : 13<br>\n<strong>Bonus à l\'attaque</strong> : +5</p>\n<p>Un sort de magicien inscrit sur un <em>parchemin magique</em> peut être recopié, tout comme on recopie les sorts dans un grimoire. Quand un sort est recopié depuis un <em>parchemin magique</em>, celui qui s\'y adonne doit réussir un test d\'Intelligence (Arcanes) contre un DD égal à 10 + le niveau du sort. En cas de réussite sur ce test, le sort est recopié avec succès. Le <em>parchemin magique</em> est détruit quel que la soit le résultat du test.</p>',
    link: '/liste-objets-magiques/parchemin-magique-0',
    title: 'Parchemin magique (Tour de magie)',
    type: 'Parchemin',
    subtype: null,
    rarity: 'Courant',
    attunement: null
  },
  {
    header: {
      title: 'Perle de force',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette petite sphère noire de 2 centimètres de diamètre pèse 30 grammes. En général, on trouve 1d4+4 <em>perles de force</em> à la fois.</p>\n<p>Vous pouvez utiliser votre action pour lancer la bille à une distance maximale de 18 mètres. Elle explose et se détruit à l\'impact. Chaque créature située dans un rayon de 3 mètres autour du point d\'impact doit réussir un jet de sauvegarde de Dextérité DD 15 ou subir 5d4 dégâts de force. Une sphère de force transparente englobe cette zone pendant 1 minute. Une créature qui rate le jet de sauvegarde et se trouve entièrement englobée dans la zone affectée s\'y retrouve piégée. Les créatures qui réussissent leur jet de sauvegarde ou ne se trouvent qu\'en partie dans la sphère sont repoussées à l\'opposé du centre de la sphère, jusqu\'à ce qu\'elles ne se trouvent plus du tout en son sein. La paroi de la sphère ne laisse rien passer à part l\'air respirable, pas même les attaques ou autres effets.</p>\n<p>Une créature enfermée peut utiliser son action pour peser contre la paroi de la sphère et la faire rouler à la moitié de sa vitesse au sol. On peut ramasser la sphère qui, grâce à sa magie, ne pèse que 500 grammes, quel que soit le poids des créatures prisonnières à l\'intérieur.</p>',
    link: '/liste-objets-magiques/perle-de-force',
    title: 'Perle de force',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Perle de puissance',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise avec un lanceur de sorts'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez cette perle sur vous, vous pouvez utiliser une action pour prononcer son mot de commande et récupérer un emplacement de sort dépensé. En revanche, si ce dernier est de niveau 4 ou supérieur, le nouvel emplacement est de niveau 3. Une fois que vous avez utilisé la perle, vous devez attendre l\'aube suivante pour vous en servir à nouveau.</p>',
    link: '/liste-objets-magiques/perle-de-puissance',
    title: 'Perle de puissance',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise avec un lanceur de sorts'
  },
  {
    header: {
      title: 'Perle des profondeurs',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Artefact',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Même les dieux font des erreurs. Il y a des millénaires de cela, l\'un d\'entre eux créa des créatures gigantesques pour mener une guerre dans les profondeurs des océans : les krakens. Une fois la guerre terminée, les terribles monstres continuèrent de semer la destruction sous et autour des mers. Le dieu décida d\'en finir et envoya un Solar pour les exterminer. Ce dernier détruisit plusieurs krakens mais fut finalement vaincu. Son sang fut répandu et une perle en absorba une grande quantité, devenant ainsi divine par essence.</p>\n<p><strong><em>Bénédiction des océans</em></strong>. Une fois harmonisé à la perle, vous obtenez les bénéfices suivants :</p>\n<ul>\n<li>Vous avez une vitesse de nage de 18 mètres.</li>\n<li>Vous pouvez respirer sous l\'eau.</li>\n<li>Vous obtenez une vision dans le noir à 18 mètres.</li>\n<li>Vous pouvez lancer le sort <a href="/grimoire/dominer-un-monstre"><em>Dominer un monstre</em></a> (DD du jet de sauvegarde 18) contre toute créature possédant une vitesse de nage innée. Vous pouvez lancer le sort trois fois entre deux repos longs.</li>\n</ul>\n<p><strong><em>Appel du kraken</em></strong>. Si vous êtes harmonisé à la perle et immergé dans l\'océan, vous pouvez éveiller et appeler un <a href="/bestiaire/kraken">kraken</a>. Ce dernier apparaît 3d10+30 minutes plus tard à 100 mètres de l\'endroit où se trouve la perle. Vous n\'avez aucun contrôle sur le kraken, et son attitude envers vous – et tout ce qui vous entoure – est hostile.</p>\n<p><strong><em>Malédiction</em></strong>. Une fois harmonisé à la perle, vous subissez sa malédiction : votre peau se couvre d\'écailles, des branchies apparaissent sur votre cou et vos doigts deviennent palmés. Vous devez vous immerger complètement dans l\'eau de mer chaque jour ou subir un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> à toutes vos actions. Au terme du dixième jour sans vous immerger, vous mourez. La malédiction reste même si vous n\'êtes plus harmonisé à la perle. Le seul moyen de s\'en débarrasser est d\'utiliser les sorts <a href="/grimoire/lever-une-malediction"><em>lever une malédiction</em></a> ou <a href="/grimoire/restauration-superieure"><em>restauration supérieure</em></a>.</p>\n<p><strong><em>Détruire la perle</em></strong>. Le sang d\'un Solar a créé la perle, seul le sang de son ennemi peut la détruire. La perle doit être immergée pendant une heure dans un litre de sang de <a href="/bestiaire/kraken">kraken</a> par au moins 100 mètres de profondeur pour être détruite.</p>',
    link: '/liste-objets-magiques/perle-des-profondeurs',
    title: 'Perle des profondeurs',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Artefact',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Philtre d\'amour',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Dans les 10 minutes qui suivent l\'absorption de cette potion, vous êtes <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a> pendant 1 heure par la première créature que vous voyez. Si cette créature est d\'une espèce et d\'un sexe pour lesquels vous êtes susceptible de ressentir une attirance naturelle, vous considérez vos sentiments comme un amour véritable pendant toute la durée du charme. La potion est effervescente et de teinte rose et contient une bulle en forme de cœur, mais on peut facilement ne pas la voir parmi les autres.</p>',
    link: '/liste-objets-magiques/philtre-damour',
    title: 'Philtre d\'amour',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Pierre de contrôle des élémentaires de la terre',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Si la pierre est en contact avec le sol, vous pouvez utiliser une action pour prononcer son mot de commande et convoquer un élémentaire de la Terre, comme si vous aviez lancé le sort <a href="/grimoire/invoquer-un-elementaire"><em>invoquer un élémentaire</em></a>. Il faut attendre l\'aube suivante avant de pouvoir réutiliser la pierre. Elle pèse 2,5 kilos.</p>',
    link: '/liste-objets-magiques/pierre-de-controle-des-elementaires-de-la-terre',
    title: 'Pierre de contrôle des élémentaires de la terre',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Pierre Ioun d\'absorption',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Tant que cet ellipsoïde lavande clair tourne autour de votre tête, vous pouvez utiliser votre réaction pour annuler un sort de niveau 4 ou inférieur que lance une créature présente dans votre champ de vision et qui vise uniquement votre personne.</p>\n<p>Une fois que la pierre a annulé 20 niveaux de sort, elle est épuisée et prend une teinte gris terne, indiquant qu\'elle a perdu toute magie. Si vous êtes la cible d\'un sort d\'un niveau supérieur au nombre de niveaux de sorts que la pierre peut encore annuler, elle est incapable de l\'annuler.</p>',
    link: '/liste-objets-magiques/pierre-ioun-dabsorption',
    title: 'Pierre Ioun d\'absorption',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun d\'absorption supérieure',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Tant que cet ellipsoïde marbré de vert et lavande tourne autour de votre tête, vous pouvez utiliser votre réaction pour annuler un sort de niveau 8 ou inférieur que lance une créature présente dans votre champ de vision et qui vise uniquement votre personne.</p>\n<p>Une fois que la pierre a annulé 50 niveaux de sort, elle est épuisée et prend une teinte gris terne, indiquant qu\'elle a perdu toute magie. Si vous êtes la cible d\'un sort d\'un niveau supérieur au nombre de niveaux de sorts que la pierre peut encore annuler, elle est incapable de l\'annuler.</p>',
    link: '/liste-objets-magiques/pierre-ioun-dabsorption-superieure',
    title: 'Pierre Ioun d\'absorption supérieure',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun d\'agilité',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Votre valeur de Dextérité augmente de 2, sans dépasser un maximum de 20, tant que cette sphère rouge sombre tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-dagilite',
    title: 'Pierre Ioun d\'agilité',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun d\'intellect',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Votre valeur d\'Intelligence augmente de 2, pour un maximum de 20, tant que cette sphère marbrée de rouge et de bleu tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-dintellect',
    title: 'Pierre Ioun d\'intellect',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun d\'intuition',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Votre valeur de Sagesse augmente de 2, pour un maximum de 20, tant que cette sphère bleu vif tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-dintuition',
    title: 'Pierre Ioun d\'intuition',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de dirigeant',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Votre valeur de Charisme augmente de 2, pour un maximum de 20, tant que cette sphère marbrée de rose et de vert tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-dirigeant',
    title: 'Pierre Ioun de dirigeant',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de force',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Votre valeur de Force augmente de 2, pour un maximum de 20, tant que ce rhomboïde bleu clair tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-force',
    title: 'Pierre Ioun de force',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de maîtrise',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Votre bonus de maîtrise augmente de 1 tant que ce prisme vert clair tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-maitrise',
    title: 'Pierre Ioun de maîtrise',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de nourriture',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Vous n\'avez pas besoin de manger ni de boire tant que ce fuseau translucide tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-nourriture',
    title: 'Pierre Ioun de nourriture',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de protection',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Vous gagnez un bonus de +1 à la CA tant que ce prisme vieux rose tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-protection',
    title: 'Pierre Ioun de protection',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de régénération',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Vous récupérez 15 points de vie à la fin de chacun de vos tours tant que ce fuseau blanc perle tourne autour de votre tête et que vous avez au moins encore 1 point de vie.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-regeneration',
    title: 'Pierre Ioun de régénération',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de réserve',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Ce prisme violet vif stocke les sorts qu\'on lui lance et les conserve jusqu\'à ce que vous les utilisiez. Il peut contenir jusqu\'à trois niveaux de sort à la fois. Quand vous le découvrez, il contient 1d4-1 niveaux de sorts choisis par le MJ.</p>\n<p>N\'importe quelle créature peut lancer un sort de niveau 1 à 3 sur la pierre en la touchant au moment de l\'incantation. Le sort n\'a alors aucun effet, il est simplement stocké dans la pierre. Si la pierre est incapable d\'accueillir le sort, ce dernier est simplement dépensé sans le moindre effet. C\'est le niveau d\'emplacement de sort utilisé lors de l\'incantation qui détermine la place que tient le sort.</p>\n<p>Tant que cette pierre tourne autour de votre tête, vous pouvez lancer n\'importe quel sort stocké en son sein. L\'emplacement de sort, le DD du jet de sauvegarde, le bonus d\'attaque du sort et la caractéristique d\'incantation dépendent de l\'incantateur original, pour le reste, on considère que c\'est vous qui lancez le sort. Une fois le sort lancé, il ne se trouve plus dans la pierre et libère l\'emplacement qu\'il y occupait.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-reserve',
    title: 'Pierre Ioun de réserve',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de vigilance',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Vous ne pouvez pas être surpris tant que ce rhomboïde bleu foncé tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-vigilance',
    title: 'Pierre Ioun de vigilance',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre Ioun de vigueur',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>La <em>pierre Ioun</em> doit son nom à Ioun, un dieu du savoir et des prophéties vénéré sur certains mondes. Il existe de nombreuses variétés de <em>pierre Ioun</em>, chacune caractérisée par sa forme et sa couleur.</p>\n<p>Quand vous utilisez une action pour lancer une telle pierre en l\'air, elle se met à tournoyer en orbite à 1d3 × 30 centimètres autour de votre tête. Ensuite, si une tierce personne veut séparer la pierre de votre personne, elle doit dépenser une action pour l\'attraper, soit en réussissent un jet d\'attaque contre une CA de 24, soit en réussissant un test de Dextérité (Acrobaties) DD 24. Vous, en revanche, avez seulement à utiliser une action pour vous saisir de la pierre et la ranger, ce qui met fin à ses effets.</p>\n<p>Une pierre a une CA de 24, 10 points de vie et une résistance contre tous les dégâts. Tant qu\'elle est en orbite autour de votre tête, elle est considérée comme un objet équipé.</p>\n<p>Votre valeur de Constitution augmente de 2, sans dépasser un maximum de 20, tant que ce rhomboïde rose tourne autour de votre tête.</p>',
    link: '/liste-objets-magiques/pierre-ioun-de-vigueur',
    title: 'Pierre Ioun de vigueur',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pierre porte-bonheur',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous portez sur vous cette agate lustrée, vous bénéficiez d\'un bonus de +1 aux tests de caractéristique et aux jets de sauvegarde.</p>',
    link: '/liste-objets-magiques/pierre-porte-bonheur',
    title: 'Pierre porte-bonheur',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Pigments merveilleux',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ces pigments se trouvent généralement dans 1d4 pots rangés dans une boîte de bois en compagnie d\'un pinceau (le tout pesant 0,5 kilo). Ils vous permettent de créer des objets en trois dimensions en les peignant en deux dimensions. La peinture coule du pinceau pour dessiner l\'objet désiré alors que vous vous concentrez sur son image.</p>\n<p>Chaque pot de peinture permet de couvrir 90 mètres carrés de surface, ce qui vous permet de créer des objets inanimés ou des caractéristiques paysagères (comme une porte, un puits, des fleurs, des arbres, une cellule, une pièce, une arme...) d\'au maximum 280 mètres cubes. Il faut 10 minutes pour couvrir une surface de 9 mètres carrés.</p>\n<p>Une fois la peinture terminée, l\'objet ou le terrain représenté devient réel et non-magique. Ainsi, si vous peignez une porte sur un mur, ce dernier se dote d\'une véritable porte donnant sur ce qui se trouve derrière, quoi que ce soit. Si vous peignez un trou au sol, un véritable trou s\'y creuse et sa profondeur est décomptée de l\'aire totale des objets que vous pouvez créer.</p>\n<p>Il est impossible d\'utiliser les pigments pour créer quelque chose valant plus de 25 po. Si vous peignez un objet d\'une valeur supérieure (comme un diamant ou un tas de pièce d\'or), l\'objet a l\'air authentique mais il suffit de l\'inspecter de près pour comprendre qu\'il est fait de pâte, d\'os ou d\'un autre matériau sans valeur.</p>\n<p>Si vous peigniez une forme d\'énergie, comme du feu ou de la foudre, elle apparaît dès la peinture terminée mais se dissipe aussitôt, sans faire le moindre mal.</p>',
    link: '/liste-objets-magiques/pigments-merveilleux',
    title: 'Pigments merveilleux',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Plume magique',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce petit bibelot ressemble à une plume. Il existe plusieurs types de plume, chacune produisant un effet différent à usage unique. C\'est au MJ de décider du type ou de le déterminer au hasard.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: left;">Plume magique</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1-20</strong></td>\n<td style="text-align: left;">Ancre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>21-35</strong></td>\n<td style="text-align: left;">Oiseau</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>36-50</strong></td>\n<td style="text-align: left;">Éventail</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>51-65</strong></td>\n<td style="text-align: left;">Bateau-cygne</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>66-90</strong></td>\n<td style="text-align: left;">Arbre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>91-00</strong></td>\n<td style="text-align: left;">Fouet</td>\n</tr>\n</tbody>\n</table></div></div>\n<p><strong><em>Ancre</em></strong>. Vous pouvez utiliser une action pour mettre le bibelot en contact avec un bateau. Pendant les 24 heures qui suivent, il est impossible de déplacer ce navire, par quelque moyen que ce soit. Il suffit de mettre de nouveau le bibelot en contact avec le bateau pour mettre un terme à l\'effet. Le bibelot disparaît dès que l\'effet se termine.</p>\n<p><strong><em>Oiseau</em></strong>. Vous pouvez utiliser une action pour lancer ce bibelot à 1,50 mètre de haut. Il disparaît tandis qu\'un énorme oiseau multicolore se matérialise. Il a les mêmes statistiques qu\'un <a href="/bestiaire/roc">roc</a> mais obéit aux ordres simples que vous lui donnez et ne peut pas attaquer. Il peut transporter jusqu\'à 250 kilos en volant à sa vitesse maximale (24 km/h sur un maximum de 216 kilomètres par jour avec des pauses d\'une heure toutes les trois heures de vol). S\'il vole moitié moins vite, il peut porter jusqu\'à 500 kilos. L\'oiseau disparaît une fois qu\'il a parcouru sa distance maximale en une journée ou s\'il tombe à 0 point de vie. Vous pouvez le révoquer par une action.</p>\n<p><strong><em>Éventail</em></strong>. Si vous vous trouvez sur un navire, vous pouvez utiliser une action pour lancer ce bibelot à 3 mètres de haut. Il disparaît pour faire place à un éventail géant qui flotte et s\'agite pour générer un vent assez puissant pour gonfler les voiles du bateau et augmenter sa vitesse de 7,5 kilomètres pendant 8 heures. Vous pouvez révoquer l\'éventail par une action.</p>\n<p><strong><em>Bateau-cygne</em></strong>. Vous pouvez utiliser une action pour mettre le bibelot en contact avec une étendue aqueuse d\'au moins 18 mètres de diamètre. Il se mue alors en bateau en forme de cygne, de 15 mètres de long pour 6 mètres de large. Le bateau dispose de son propre système de propulsion et vogue sur l\'eau à une vitesse de 9 km/h. Tant que vous êtes à bord, vous pouvez utiliser une action pour ordonner au bateau de se déplacer ou de tourner, au maximum à 90 degrés. Le bateau peut transporter un maximum de trente-deux créatures de taille M ou inférieure. Une créature de taille G compte comme quatre créatures de taille M tandis qu\'une créature TG compte comme neuf créatures de taille M. Le bateau existe pendant 24 heures puis disparaît. Vous pouvez révoquer le bateau par une action.</p>\n<p><strong><em>Arbre</em></strong>. Vous devez vous trouver en extérieur pour utiliser ce bibelot et dépenser une action pour le mettre en contact avec le sol dans un emplacement inoccupé. Le bibelot disparaît pour faire place à un chêne non-magique au tronc de 1,50 mètre de diamètre. Au sommet, ses branches se déploient sur un rayon de 6 mètres.</p>\n<p><strong><em>Fouet</em></strong>. Vous pouvez utiliser une action pour lancer le bibelot à une distance maximale de 3 mètres. Il se mue en fouet flottant dans les airs. Vous pouvez dépenser une action bonus pour faire une attaque de sort au corps à corps contre une créature située dans un rayon de 3 mètres autour du fouet, avec un bonus d\'attaque de +9. Si vous touchez la cible, elle subit 1d6+5 dégâts de force.</p>\n<p>À votre tour et par une action bonus, vous pouvez ordonner au fouet de s\'envoler à une distance maximale de 6 mètres et répéter l\'attaque contre une créature située dans un rayon de 3 mètres autour d\'elle. Le fouet disparaît au bout d\'une heure, quand vous utilisez une action pour le révoquer ou si vous êtes <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisé</em></a> ou mort.</p>',
    link: '/liste-objets-magiques/plume-magique',
    title: 'Plume magique',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Portail cubique',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce cube de 7,5 centimètres d\'arête émet une énergie magique palpable. Chacune de ses six faces est liée à un plan d\'existence distinct, l\'un d\'eux étant le plan Matériel. Les autres sont liées à des plans déterminés par le MJ.</p>\n<p>Vous pouvez dépenser une action pour appuyer sur l\'une des faces du cube et lancer le sort <a href="/grimoire/portail"><em>portail</em></a> à travers elle, ouvrant une porte sur le plan lié à cette face. Sinon, vous pouvez utiliser une action pour appuyer deux fois sur une face et lancer le sort <a href="/grimoire/changement-de-plan"><em>changement de plan</em></a> (DD 17) grâce au cube. Vous transportez alors les créatures visées sur le plan lié à la face concernée.</p>\n<p>Le cube a trois charges et en perd une à chaque utilisation. Chaque matin à l\'aube, il récupère 1d3 charges dépensées.</p>',
    link: '/liste-objets-magiques/portail-cubique',
    title: 'Portail cubique',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Potion d\'agrandissement',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, vous êtes affecté par la version « <em>agrandir</em> » du sort <a href="/grimoire/agrandir-retrecir"><em>agrandir/rétrécir</em></a> pendant 1d4 heures (sans avoir besoin de vous concentrer). Une tache rouge dans le liquide s\'étend jusqu\'à colorer tout le liquide translucide et se rétracte pour former une petite bille. Ce cycle se répète sans cesse sans interruption, même si on secoue la bouteille.</p>',
    link: '/liste-objets-magiques/potion-dagrandissement',
    title: 'Potion d\'agrandissement',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion d\'amitié avec les animaux',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, vous pouvez lancer le sort <a href="/grimoire/amitie-avec-les-animaux"><em>amitié avec les animaux</em></a> (DD 13) à volonté pendant 1 heure. Si on agite ce liquide trouble, on distingue de petits morceaux : une écaille de poisson, une langue de colibri, une griffe de chat ou des poils d\'écureuil.</p>',
    link: '/liste-objets-magiques/potion-damitie-avec-les-animaux',
    title: 'Potion d\'amitié avec les animaux',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion d\'escalade',
      magicitem: {
        type: 'Potion',
        rarity: 'Courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, vous gagnez une vitesse d\'escalade égale à votre vitesse au sol pendant 1 heure. Pendant tout ce temps, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests de Force (Escalade) que vous effectuez pour grimper. La potion se divise en couches brunes, argent et grises qui rappellent des stries dans la roche. Les couleurs ne se mélangent pas, même quand on agite la bouteille.</p>',
    link: '/liste-objets-magiques/potion-descalade',
    title: 'Potion d\'escalade',
    type: 'Potion',
    subtype: null,
    rarity: 'Courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion d\'héroïsme',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Pendant 1 heure après l\'avoir bue, vous obtenez 10 points de vie temporaires. Pendant cette même période, vous êtes sous l\'effet d\'un sort de <a href="/grimoire/benediction"><em>bénédiction</em></a> (aucune concentration requise). Le liquide bleu bouillonne comme s\'il était chauffé en permanence.</p>',
    link: '/liste-objets-magiques/potion-dheroisme',
    title: 'Potion d\'héroïsme',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion d\'invisibilité',
      magicitem: {
        type: 'Potion',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Le contenant de cette potion paraît vide mais il semble, au contact, contenir un liquide. Vous devenez invisible pendant 1 heure après l\'avoir bue. La totalité des objets équipés ou transportés deviennent également <a href="/gerer-la-sante-du-personnage#invisible"><em>invisibles</em></a>. L\'effet prend fin prématurément si vous attaquez ou lancez un sort.</p>',
    link: '/liste-objets-magiques/potion-dinvisibilite',
    title: 'Potion d\'invisibilité',
    type: 'Potion',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de clairvoyance',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, vous bénéficiez des effets du sort <a href="/grimoire/clairvoyance"><em>clairvoyance</em></a>. Un globe oculaire flotte dans ce liquide jaunâtre, mais disparaît dès qu\'on ouvre la potion.</p>',
    link: '/liste-objets-magiques/potion-de-clairvoyance',
    title: 'Potion de clairvoyance',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de force de géant des collines',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, votre valeur de Force est égale à 21 pendant 1 heure. La potion n\'a aucun effet si votre Force est déjà égale ou supérieure à cette valeur.</p>\n<p>Une rognure d\'ongle d\'un géant du type approprié flotte dans cette potion transparente.</p>',
    link: '/liste-objets-magiques/potion-de-force-de-geant-des-collines',
    title: 'Potion de force de géant des collines',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion de force de géant des nuages',
      magicitem: {
        type: 'Potion',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, votre valeur de Force est égale à 27 pendant 1 heure. La potion n\'a aucun effet si votre Force est déjà égale ou supérieure à cette valeur.</p>\n<p>Une rognure d\'ongle d\'un géant du type approprié flotte dans cette potion transparente.</p>',
    link: '/liste-objets-magiques/potion-de-force-de-geant-des-nuages',
    title: 'Potion de force de géant des nuages',
    type: 'Potion',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de force de géant des pierres/du givre',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, votre valeur de Force est égale à 23 pendant 1 heure. La potion n\'a aucun effet si votre Force est déjà égale ou supérieure à cette valeur.</p>\n<p>Une rognure d\'ongle d\'un géant du type approprié flotte dans cette potion transparente. La <em>potion de force de géant du givre</em> et la <em>potion de force de géant des pierres</em> ont le même effet.</p>',
    link: '/liste-objets-magiques/potion-de-force-de-geant-des-pierres-du-givre',
    title: 'Potion de force de géant des pierres/du givre',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de force de géant des tempêtes',
      magicitem: {
        type: 'Potion',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, votre valeur de Force est égale à 29 pendant 1 heure. La potion n\'a aucun effet si votre Force est déjà égale ou supérieure à cette valeur.</p>\n<p>Une rognure d\'ongle d\'un géant du type approprié flotte dans cette potion transparente.</p>',
    link: '/liste-objets-magiques/potion-de-force-de-geant-des-tempetes',
    title: 'Potion de force de géant des tempêtes',
    type: 'Potion',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Potion de force de géant du feu',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, votre valeur de Force est égale à 25 pendant 1 heure. La potion n\'a aucun effet si votre Force est déjà égale ou supérieure à cette valeur.</p>\n<p>Une rognure d\'ongle d\'un géant du type approprié flotte dans cette potion transparente.</p>',
    link: '/liste-objets-magiques/potion-de-force-de-geant-du-feu',
    title: 'Potion de force de géant du feu',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de forme gazeuse',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, vous bénéficiez des effets du sort <a href="/grimoire/forme-gazeuse"><em>forme gazeuse</em></a> pendant 1 heure (sans avoir besoin de vous concentrer) ou jusqu\'à ce que vous mettiez un terme à l\'effet par une action bonus. La bouteille semble contenir une brume qui bouge et se verse comme de l\'eau.</p>',
    link: '/liste-objets-magiques/potion-de-forme-gazeuse',
    title: 'Potion de forme gazeuse',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de lecture des pensées',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez des effets d\'un sort de <a href="/grimoire/detection-des-pensees"><em>détection des pensées</em></a> (DD des jets de sauvegarde contre le sort 13) quand vous buvez cette potion. Dans le liquide violet et épais de cette concoction flotte un nuage rose en forme d\'œuf.</p>',
    link: '/liste-objets-magiques/potion-de-lecture-des-pensees',
    title: 'Potion de lecture des pensées',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de poison',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette concoction ressemble, tant au niveau du goût, de l\'odeur et de l\'aspect visuel, à une <a href="/liste-objets-magiques/potion-de-soins"><em>potion de soins</em></a> ou autre potion bénéfique. C\'est pourtant du poison dissimulé par une magie illusoire, et un sort d\'<a href="/grimoire/identification"><em>identification</em></a> révèle sa véritable nature.</p>\n<p>Vous subissez 3d6 dégâts de poison et devez réussir un jet de sauvegarde de Constitution DD 13 pour ne pas être <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisinné</em></a> si vous la buvez. Vous subissez 3d6 dégâts de poison au début de chacun de vos tours tant que vous êtes <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisinné</em></a> de cette façon. À la fin de chacun de vos tours, vous pouvez retenter le jet de sauvegarde. En cas de réussite, les dégâts de poison subis lors des tours suivants diminuent de 1d6, et le poison disparaît quand les dégâts sont réduits à 0.</p>',
    link: '/liste-objets-magiques/potion-de-poison',
    title: 'Potion de poison',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion de résistance',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez d\'une résistance à un type spécifique de dégâts pendant 1 heure après avoir bu cette potion. Le MJ choisit le type ou le détermine au hasard parmi les potions suivantes.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D10</th>\n<th style="text-align: center;">Type de dégâts</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: center;">Acide</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: center;">Froid</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: center;">Feu</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: center;">Force</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5</strong></td>\n<td style="text-align: center;">Foudre</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6</strong></td>\n<td style="text-align: center;">Nécrotique</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>7</strong></td>\n<td style="text-align: center;">Poison</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>8</strong></td>\n<td style="text-align: center;">Psychique</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>9</strong></td>\n<td style="text-align: center;">Radiant</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>10</strong></td>\n<td style="text-align: center;">Tonnerre</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/potion-de-resistance',
    title: 'Potion de résistance',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion de respiration aquatique',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez respirer sous l\'eau pendant 1 heure après avoir bu cette potion. Le liquide vert et trouble qu\'elle contient, dans lequel flotte une bulle à l\'aspect de méduse, sent la mer.</p>',
    link: '/liste-objets-magiques/potion-de-respiration-aquatique',
    title: 'Potion de respiration aquatique',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion de rétrécissement',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, vous êtes affecté par la version « <em>rétrécir</em> » du sort <a href="/grimoire/agrandir-retrecir"><em>agrandir/rétrécir</em></a> pendant 1d4 heures (sans avoir besoin de vous concentrer). Une tache rouge dans le liquide se rétrécit jusqu\'à former une petit bille et s\'étale ensuite jusqu\'à colorer tout le liquide translucide. Ce cycle se répète sans cesse sans interruption, même si on secoue la bouteille.</p>',
    link: '/liste-objets-magiques/potion-de-retrecissement',
    title: 'Potion de rétrécissement',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de soins',
      magicitem: {
        type: 'Potion',
        rarity: 'Courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous récupérez 2d4+2 points de vie quand vous buvez cette potion. Son liquide rouge scintille quand on l\'agite.</p>',
    link: '/liste-objets-magiques/potion-de-soins',
    title: 'Potion de soins',
    type: 'Potion',
    subtype: null,
    rarity: 'Courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion de soins excellents',
      magicitem: {
        type: 'Potion',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous récupérez 8d4+8 points de vie quand vous buvez cette potion. Son liquide rouge scintille quand on l\'agite.</p>',
    link: '/liste-objets-magiques/potion-de-soins-excellents',
    title: 'Potion de soins excellents',
    type: 'Potion',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de soins supérieurs',
      magicitem: {
        type: 'Potion',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous récupérez 4d4+4 points de vie quand vous buvez cette potion. Son liquide rouge scintille quand on l\'agite.</p>',
    link: '/liste-objets-magiques/potion-de-soins-superieurs',
    title: 'Potion de soins supérieurs',
    type: 'Potion',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Potion de soins suprêmes',
      magicitem: {
        type: 'Potion',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous récupérez 10d4+20 points de vie quand vous buvez cette potion. Son liquide rouge scintille quand on l\'agite.</p>',
    link: '/liste-objets-magiques/potion-de-soins-supremes',
    title: 'Potion de soins suprêmes',
    type: 'Potion',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de vitesse',
      magicitem: {
        type: 'Potion',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous bénéficiez des effets d\'un sort de <a href="/grimoire/hate"><em>hâte</em></a> pendant 1 minute (aucune concentration requise) après avoir bu cette potion. Le liquide jaune strié de noir de cette concoction tournoie de lui-même sans qu\'on le remue.</p>',
    link: '/liste-objets-magiques/potion-de-vitesse',
    title: 'Potion de vitesse',
    type: 'Potion',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Potion de vol',
      magicitem: {
        type: 'Potion',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous buvez cette potion, vous gagnez une vitesse de vol égale à votre vitesse au sol pendant 1 heure. Vous êtes aussi en mesure de faire du vol stationnaire. Si vous vous trouvez dans les airs quand les effets de la potion se dissipent, vous tombez, à moins que vous ne disposiez d\'un autre moyen de vous maintenir en l\'air. Le liquide transparent de cette potion flotte au sommet de sa bouteille tandis que des impuretés d\'un blanc laiteux le traversent.</p>',
    link: '/liste-objets-magiques/potion-de-vol',
    title: 'Potion de vol',
    type: 'Potion',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Poussière à éternuer',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette poudre se trouve dans un petit récipient et ressemble à du sable fin. On dirait de la <a href="/liste-objets-magiques/poussiere-de-disparition"><em>poussière de disparition</em></a> et le sort d\'<a href="/grimoire/identification"><em>identification</em></a> confirme cette erreur. Il y en a assez pour une seule utilisation.</p>\n<p>Quand vous utilisez une action pour jeter une poignée de poussière dans les airs, vous et chaque créature qui a besoin de respirer et se trouve dans un rayon de 9 mètres autour de vous doit réussir un jet de sauvegarde de Constitution DD 15 ou se retrouver incapable de respirer tant elle tousse. Une créature ainsi affectée est <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> et suffoque. Tant qu\'elle est consciente, la créature peut refaire le jet de sauvegarde à la fin de chacun de ses tours, sachant que l\'effet se termine pour elle si elle réussit. Le sort de <a href="/grimoire/restauration-inferieure"><em>restauration inférieure</em></a> met aussi un terme à l\'effet sur la créature qu\'il touche.</p>',
    link: '/liste-objets-magiques/poussiere-a-eternuer',
    title: 'Poussière à éternuer',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Poussière d\'assèchement',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce petit paquet contient 1d6+4 pincées de poussière. Vous pouvez dépenser une action pour en saupoudrer une sur l\'eau. La poussière transforme un cube d\'eau de 4,50 mètres d\'arête en une boulette de la taille d\'une bille. Elle flotte ou repose près de l\'endroit où vous avez saupoudré la poussière. Son poids est négligeable.</p>\n<p>Quelqu\'un peut utiliser une action pour briser la boulette contre une surface solide : elle éclate alors et libère l\'eau absorbée. La magie de la boulette disparaît alors.</p>\n<p>Un élémentaire majoritairement composé d\'eau exposé à la poussière doit faire un jet de sauvegarde de Constitution. S\'il échoue, il subit 10d6 dégâts nécrotiques, la moitié seulement sinon.</p>',
    link: '/liste-objets-magiques/poussiere-dassechement',
    title: 'Poussière d\'assèchement',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Poussière de disparition',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette poudre se trouve dans un petit paquet et ressemble à du sable fin. Il y en a assez pour une utilisation. Si vous utilisez une action pour lancer la poussière en l\'air, vous et chaque créature et objet situé dans un rayon de 3 mètres autour de vous devenez <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> pendant 2d4 minutes. La durée est la même pour toutes les cibles et la poussière est entièrement consumée dès que sa magie fait effet. Si une créature affectée par la poussière attaque ou lance un sort, l\'invisibilité se termine pour elle.</p>',
    link: '/liste-objets-magiques/poussiere-de-disparition',
    title: 'Poussière de disparition',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Protectrice',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +3 aux jets d\'attaque et de dégâts effectués avec cette arme magique.</p>\n<p>À chacun de vos tours, quand vous attaquez pour la première fois avec cette épée, vous pouvez transférer tout ou partie du bonus de l\'arme à votre CA au lieu d\'utiliser le bonus pour les attaques de ce tour. Par exemple, vous pouvez réduire le bonus de vos jets d\'attaque et de dégâts en le faisant passer à +1, ce qui vous apporte un bonus de +2 à la CA. Ces bonus modifiés restent valables jusqu\'au début de votre prochain tour, bien que vous deviez tenir l\'épée en main pour bénéficier de son bonus à la CA.</p>',
    link: '/liste-objets-magiques/protectrice',
    title: 'Protectrice',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Puits des mondes',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce morceau d\'étoffe noire, fine et douce comme la soie, peut se plier pour adopter les dimensions d\'un mouchoir. On peut le déplier pour former une étendue circulaire de 1,80 mètre de diamètre.</p>\n<p>Vous pouvez utiliser une action pour déplier et positionner le <em>puits des mondes</em> contre une surface solide et créer ainsi un portail, empruntable dans les deux sens, qui permet de voyager vers un autre monde ou plan d\'existence. Chaque fois que l\'objet ouvre un portail, le MJ décide de l\'endroit où il mène. Vous pouvez utiliser une action pour fermer un portail ouvert en prenant les bords du morceau d\'étoffe et en le repliant. Une fois qu\'un portail a été ouvert grâce au <em>puits des mondes</em>, il faut attendre 1d8 heures avant que cet objet magique ne puisse en ouvrir un nouveau.</p>',
    link: '/liste-objets-magiques/puits-des-mondes',
    title: 'Puits des mondes',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Puits portatif',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette mince étoffe noire, aussi douce que de la soie, est repliée pour tenir aussi peu de place qu\'un mouchoir. Dépliée, elle se présente sous forme d\'un disque de 1,80 mètre de diamètre.</p>\n<p>Vous pouvez utiliser une action pour déplier le <em>puits portatif</em> et le poser sur ou contre une surface solide, où il crée un trou extradimensionnel de 3 mètres de profondeur. L\'espace cylindrique qui forme le trou existe sur un autre plan, il est donc impossible de se servir du puits pour créer un passage. Si une créature se trouve dans le <em>puits portatif</em> alors qu\'il est ouvert, il lui suffit d\'escalader la paroi pour en sortir.</p>\n<p>Vous pouvez dépenser une action pour fermer le puits en attrapant les bords du tissu avant de replier ce dernier. Une fois le trou fermé, les créatures et les objets qu\'il contient sont piégés dans son espace extradimensionnel. Le puits ne pèse presque rien, peu importe ce qui se trouve à l\'intérieur.</p>\n<p>Si le puits est refermé et qu\'une créature se trouve dans son espace extradimensionnel, elle peut utiliser une action pour faire un test de Force DD 10. Si elle réussit, elle se fraie de force un chemin hors du puits et apparaît dans un rayon de 1,50 mètre autour du <em>puits portatif</em> ou de la créature qui le transporte. Une créature qui a besoin de respirer et se trouve dans un puits refermé y survit jusqu\'à 10 minutes, ensuite, elle commence à suffoquer.</p>\n<p>Si l\'on place un <em>puits portatif</em> dans l\'espace extradimensionnel né d\'un <a href="/liste-objets-magiques/havresac-magique"><em>havresac magique</em></a>, d\'un <a href="/liste-objets-magiques/sac-sans-fond"><em>sac sans fond</em></a> ou d\'un objet similaire, les deux objets sont instantanément détruits et un portail s\'ouvre vers le plan Astral. Il apparaît là où l\'on a placé le premier objet dans le second et toutes les créatures situées dans un rayon de 3 mètres autour de ce portail sont emportées vers un endroit aléatoire du plan Astral. Le portail se referme ensuite, sachant qu\'il est à sens unique et qu\'il est impossible de le rouvrir.</p>',
    link: '/liste-objets-magiques/puits-portatif',
    title: 'Puits portatif',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Regard charmeur',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ces lentilles de cristal se portent sur les yeux et possèdent trois charges. Tant que vous les portez, vous pouvez dépenser une charge pour lancer le sort <a href="/grimoire/charme-personne"><em>charme-personne</em></a> (DD 13) sur un humanoïde situé dans un rayon de 9 mètres, à condition que vous voyiez la cible et qu\'elle vous voie. Chaque jour à l\'aube, les lentilles régénèrent toutes les charges dépensées.</p>',
    link: '/liste-objets-magiques/regard-charmeur',
    title: 'Regard charmeur',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Robe aux étoiles',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette robe noire ou bleue foncée est brodée de petites étoiles blanches ou argentées. Vous bénéficiez d\'un bonus de +1 aux jets de sauvegarde tant que vous la portez.</p>\n<p>Six étoiles, situées sur la partie avant supérieure de la robe, sont particulièrement grandes. Tant que vous portez cette robe, vous pouvez effectuer une action pour détacher une de ces étoiles et l\'utiliser pour lancer <a href="/grimoire/projectile-magique"><em>projectile magique</em></a> comme un sort de niveau 5. Tous les jours au crépuscule, 1d6 étoiles détachées réapparaissent sur la robe.</p>\n<p>Tant que vous portez la robe, vous pouvez effectuer une action pour entrer dans le plan Astral avec tous vos objets équipés ou portés. Vous restez là-bas jusqu\'à ce que vous effectuiez une action pour revenir sur le plan duquel vous êtes parti. Vous réapparaissez dans le dernier emplacement que vous occupiez à ce moment-là ou, si cet emplacement est déjà occupé, dans l\'emplacement inoccupé le plus proche.</p>',
    link: '/liste-objets-magiques/robe-aux-etoiles',
    title: 'Robe aux étoiles',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Robe aux yeux multiples',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette robe est ornée de motifs en forme d\'yeux. Vous bénéficiez des avantages suivants tant que vous portez cette robe :</p>\n<ul>\n<li>La robe vous permet de voir dans toutes les directions et vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests de Sagesse (Perception) basés sur la vue.</li>\n<li>Vous disposez de la vision dans le noir sur une distance de 36 mètres.</li>\n<li>Vous pouvez voir les créatures et les objets <a href="/gerer-la-sante-du-personnage#invisible"><em>invisibles</em></a>. Vous pouvez également voir dans le plan Éthéré sur une distance de 36 mètres.</li>\n</ul>\n<p>Il est impossible de fermer ou de couvrir les yeux sur la robe. Même si vous pouvez fermer ou couvrir vos propres yeux, on considère que vous ne le faites jamais tant que vous portez cette robe.</p>\n<p>Un sort de <a href="/grimoire/lumiere"><em>lumière</em></a> lancé sur la robe ou un sort de <a href="/grimoire/lumiere-du-jour"><em>lumière du jour</em></a> lancé à 1,50 mètre ou moins de celle-ci provoque votre cécité pendant 1 minute. À la fin de chacun de vos tours, vous pouvez effectuer un jet de sauvegarde de Constitution (DD 11 contre une <a href="/grimoire/lumiere"><em>lumière</em></a> ou DD 15 contre une <a href="/grimoire/lumiere-du-jour"><em>lumière du jour</em></a>) et mettre fin à la cécité en cas de réussite.</p>',
    link: '/liste-objets-magiques/robe-aux-yeux-multiples',
    title: 'Robe aux yeux multiples',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Robe d\'objets pratiques',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette robe est couverte de pièces de tissu de formes et de couleurs diverses. Tant que vous portez ce vêtement, vous pouvez effectuer une action pour détacher une des pièces et provoquer sa transformation en l\'objet ou la créature qu\'elle représente. Dès que la dernière pièce est détachée, la robe devient un vêtement ordinaire.</p>\n<p>Deux pièces de chacun des éléments suivants sont cousues sur la robe :</p>\n<ul>\n<li>Dague</li>\n<li>Lanterne sourde (remplie et allumée)</li>\n<li>Miroir en acier</li>\n<li>Perche de 3 mètres</li>\n<li>Corde de chanvre (15 mètres, enroulée)</li>\n<li>Sac</li>\n</ul>\n<p>En outre, la robe se compose de 4d4 autres pièces. Le MJ choisit ces pièces ou les détermine au hasard.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: left;">Pièce</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>01-08</strong></td>\n<td style="text-align: left;">100 po dans un sac</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>09-15</strong></td>\n<td style="text-align: left;">Coffre en argent (30 centimètres de long, 15 centimètres de large et de profondeur) d\'une valeur de 500 po</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>16-22</strong></td>\n<td style="text-align: left;">Porte en fer (d\'une largeur et d\'une hauteur maximales de 3 mètres, barrée du côté de votre choix) que vous pouvez placer dans une ouverture à votre portée ; la taille s\'adapte aux dimensions de l\'ouverture et s\'y fixe d\'elle-même.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>23-30</strong></td>\n<td style="text-align: left;">10 pierres précieuses d\'une valeur de 100 po chacune</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>34-44</strong></td>\n<td style="text-align: left;">Échelle en bois de 7,30 mètres de long</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>45-51</strong></td>\n<td style="text-align: left;">Cheval de selle avec fontes</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>52-59</strong></td>\n<td style="text-align: left;">Fosse (cube de 3 mètres d\'arête) que vous pouvez placer dans le sol à 3 mètres ou moins de vous</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>60-68</strong></td>\n<td style="text-align: left;">4 potions de soins</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>69-75</strong></td>\n<td style="text-align: left;">Barque (3,60 mètres de long)</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>76-83</strong></td>\n<td style="text-align: left;">Parchemin magique contenant un sort de niveau 1 à 3</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>84-90</strong></td>\n<td style="text-align: left;">2 <a href="/bestiaire/mastiff">molosses</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>91-96</strong></td>\n<td style="text-align: left;">Fenêtre (60 centimètres sur 1,20 mètre et jusqu\'à 60 centimètres d\'épaisseur) que vous pouvez placer sur une surface verticale à votre portée</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>97-00</strong></td>\n<td style="text-align: left;">Bélier portable</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/robe-dobjets-pratiques',
    title: 'Robe d\'objets pratiques',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Robe de couleurs étincelantes',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette robe contient 3 charges et récupère 1d3 charges dépensées chaque jour, à l\'aube. Tant que vous la portez, vous pouvez utiliser une action et dépenser 1 charge pour que le vêtement produise un motif changeant de couleurs éblouissantes jusqu\'à la fin de son prochain tour. Pendant cette période, la robe diffuse une lumière vive sur un rayon de 9 mètres et une faible lumière sur 9 mètres au-delà. Les créatures qui peuvent vous voir subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>désavantage</em></a> lors des jets d\'attaque contre vous. De plus, les créatures situées dans la zone de lumière vive et qui peuvent vous voir lorsque le pouvoir de la robe est activé doivent réussir un jet de sauvegarde de Sagesse DD 15 pour ne pas être <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdies</em></a> jusqu\'à la fin de cet effet.</p>',
    link: '/liste-objets-magiques/robe-de-couleurs-etincelantes',
    title: 'Robe de couleurs étincelantes',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Robe de l\'archimage',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation avec un ensorceleur, un magicien ou un sorcier exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce vêtement élégant est taillé dans un magnifique tissu blanc, gris ou noir, brodé de runes argentées. La couleur de la robe correspond à l\'alignement pour lequel l\'objet à été crée. Les robes blanches sont conçues pour soutenir le bien, les grises pour soutenir la neutralité et les noires pour soutenir le mal. Vous ne pouvez pas vous harmoniser avec une <em>robe de l\'archimage</em> qui ne correspond pas à votre alignement.</p>\n<p>Vous bénéficiez des avantages suivants lorsque vous portez la robe :</p>\n<ul>\n<li>Votre Classe d\'Armure de base est égale à 15 + votre modificateur de Dextérité si vous ne portez aucune armure.</li>\n<li>Vous obtenez l\'avantage lors des jets de sauvegarde contre les sorts et autres effets magiques.</li>\n<li>Les DD des jets de sauvegarde contre vos sorts et votre bonus d\'attaque des sorts augmentent chacun de 2.</li>\n</ul>',
    link: '/liste-objets-magiques/robe-de-larchimage',
    title: 'Robe de l\'archimage',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation avec un ensorceleur, un magicien ou un sorcier exigée'
  },
  {
    header: {
      title: 'Sac à malice',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce banal sac gris, rouille ou brun semble vide. Cependant, si l\'on plonge la main à l\'intérieur, on sent un petit objet duveteux. Le sac pèse 250 grammes.</p>\n<p>Vous pouvez dépenser une action pour sortir l\'objet duveteux du sac et le lancer à une distance maximale de 6 mètres. Quand il atterrit, il se transforme en une créature que vous déterminez en lançant un d8 dans la table correspondant à la couleur du sac.</p>\n<p>La créature se montre amicale envers vous et vos compagnons et agit à votre tour. Vous pouvez utiliser une action bonus pour gérer ses déplacements et son action lors de son prochain tour ou pour lui donner des ordres génériques, comme d\'attaquer vos ennemis. En l\'absence d\'ordre, la créature se comporte en accord avec sa nature.</p>\n<p>Une fois que vous avez sorti trois objets duveteux du sac, il devient inutile jusqu\'à l\'aube suivante.</p>\n<div class="table-container">\n<h2 id="sac-a-malice-gris">Sac à malice gris</h2>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D8</th>\n<th style="text-align: left;">Créature</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/belette">Belette</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/rat-geant">Rat géant</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/blaireau">Blaireau</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/sanglier">Sanglier</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/panthere">Panthère</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/blaireau-geant">Blaireau géant</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>7</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/loup-sanguinaire">Loup sanguinaire</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>8</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/elan-geant">Élan géant</a></td>\n</tr>\n</tbody>\n</table></div></div>\n</div>\n<div class="table-container">\n<h2 id="sac-a-malice-rouille">Sac à malice rouille</h2>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D8</th>\n<th style="text-align: left;">Créature</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/rat">Rat</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/chouette">Chouette</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/mastiff">Mastiff</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/chevre">Chèvre</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/chevre-geante">Chèvre géante</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/sanglier-geant">Sanglier géant</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>7</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/lion">Lion</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>8</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/ours-brun">Ours brun</a></td>\n</tr>\n</tbody>\n</table></div></div>\n</div>\n<div class="table-container">\n<h2 id="sac-a-malice-brun">Sac à malice brun</h2>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D8</th>\n<th style="text-align: left;">Créature</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>1</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/chacal">Chacal</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>2</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/grand-singe">Grand singe</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>3</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/babouin">Babouin</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>4</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/bec-de-hache">Bec de hache</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>5</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/ours-noir">Ours noir</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>6</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/belette-geante">Belette géante</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>7</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/hyene-geante">Hyène géante</a></td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>8</strong></td>\n<td style="text-align: left;"><a href="/bestiaire/tigre">Tigre</a></td>\n</tr>\n</tbody>\n</table></div></div>\n</div>',
    link: '/liste-objets-magiques/sac-a-malice',
    title: 'Sac à malice',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Sac affamé',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>À première vue, ce sac ressemble à un <a href="/liste-objets-magiques/sac-sans-fond"><em>sac sans fond</em></a>, mais en réalité, il s\'agit de l\'orifice nourricier d\'une créature extradimensionnelle gigantesque. L\'orifice se ferme si l\'on met le sac sur l\'envers, c\'est-à-dire la paroi interne devenant la paroi externe.</p>\n<p>La créature extradimensionnelle reliée au sac perçoit tout ce que l\'on met à l\'intérieur: les matières animales et végétales sont dévorées et perdues à jamais dès qu\'elles entrent dans le sac. Quand une créature vivante place un bout de sa personne dans le sac, ce qui arrive si quelqu\'un y plonge la main pour récupérer quelque chose, il y a 50% de chances que la malheureuse soit entraînée dans le sac. Dans ce cas, elle doit utiliser son action pour s\'échapper via un test de Force DD 15. Une tierce personne peut utiliser son action pour plonger la main dans le sac et en sortir la créature à condition de réussir un test de Force DD 20 (et de ne pas s\'être laissée emportée dans le sac). Toute créature qui débute son tour dans le sac se fait dévorer et son corps est détruit.</p>\n<p>On peut stocker des objets inanimés dans le sac, qui contient au maximum 28 litres de matière inanimée. Cependant, une fois par jour, le sac avale tous les objets placés en son sein et les recrache sur un autre plan d\'existence. C\'est au MJ de décider à quelle heure cela se produit et quel est le plan de destination.</p>\n<p>Si le sac est perforé ou déchiré, il est détruit et tout ce qu\'il contenait est emporté en un lieu aléatoire du plan Astral.</p>',
    link: '/liste-objets-magiques/sac-affame',
    title: 'Sac affamé',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Sac de haricots',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce lourd sac de toile contient 3d4 haricots secs. Il pèse 250 grammes plus 125 grammes par haricot.</p>\n<p>Si vous jetez le contenu du sac par terre, les haricots explosent, la déflagration affectant un rayon de 3 mètres autour d\'eux. Chaque créature située dans la zone, vous compris, doit faire un jet de sauvegarde de Dextérité DD 15. Celles qui échouent subissent 5d4 dégâts de feu, les autres moitié moins. Le feu embrase les objets inflammables de la zone, sauf ceux qui sont déjà équipés ou transportés.</p>\n<p>Si vous sortez un haricot du sac, le plantez dans la terre ou le sable et l\'arrosez, il génère un effet une minute plus tard, au niveau du sol où il a été planté. C\'est au MJ de choisir cet effet, de le déterminer au hasard dans la liste suivante ou bien d\'en créer un.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: left;">Effet</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>01</strong></td>\n<td style="text-align: left;">5d4 champignons vénéneux poussent soudain. Si une créature en mange un, lancez un dé. Sur un nombre impair, elle doit réussir un jet de sauvegarde de Constitution DD 15, sans quoi elle subit 5d6 dégâts de poison et se retrouve empoisonnée pendant 1 heure. Sur un nombre pair, elle gagne 5d6 points de vie temporaires pendant 1 heure.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>02-10</strong></td>\n<td style="text-align: left;">Un geyser crache de l\'eau, de la bière, du jus de fruit, du thé, du vinaigre, du vin ou de l\'huile (au choix du MJ) à 9 mètres de haut pendant 1d12 rounds.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>11-20</strong></td>\n<td style="text-align: left;">Un <a href="/bestiaire/sylvanien">sylvanien</a> germe du haricot, sachant qu\'il y a 50 % de chances qu\'il soit chaotique mauvais et attaque.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>21-30</strong></td>\n<td style="text-align: left;">Une statue pousse. Elle est animée, en pierre, immobile et à votre effigie. Elle vous lance des menaces verbales. Si vous la quittez et que d\'autres créatures approchent, elle vous décrit comme étant le pire des scélérats et charge les nouveaux-venus de vous retrouver et de vous éliminer. Si vous vous trouvez sur le même plan d\'existence que la statue, elle sait où vous vous trouvez. Elle devient inanimée au bout de 24 heures.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>31-40</strong></td>\n<td style="text-align: left;">Un feu de camp aux flammes bleues apparaît et brûle pendant 24 heures (ou jusqu\'à ce que quelqu\'un l\'éteigne).</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>41-50</strong></td>\n<td style="text-align: left;">1d6+6 <a href="/bestiaire/criard">criards</a> apparaissent.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>51-60</strong></td>\n<td style="text-align: left;">1d4+8 crapauds sortent de terre. Ils sont d\'un beau rose vif et, dès qu\'on en touche un, il se transforme en monstre de taille G ou inférieure choisi par le MJ. Le monstre reste 1 minute puis disparaît dans un nuage de fumée rose.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>61-70</strong></td>\n<td style="text-align: left;">Une <a href="/bestiaire/bulette">bulette</a> affamée sort de terre et attaque.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>71-80</strong></td>\n<td style="text-align: left;">Un arbre fruitier sort de terre. Il porte 1d10+20 fruits, dont 1d8 agissent comme une <a href="/liste-objets-magiques/liste?type=Potion">potion magique</a> aléatoire tandis qu\'un seul agit comme un poison par voie d\'ingestion que choisit le MJ. L\'arbre disparaît au bout d\'une heure. Les fruits déjà cueillis ne s\'évanouissent pas et conservent leur magie pendant 30 jours.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>81-90</strong></td>\n<td style="text-align: left;">Un nid sort de terre, contenant 1d4+3 œufs. Une créature qui mange l\'un d\'eux doit faire un jet de sauvegarde de Constitution DD 20. Si elle le réussit, sa valeur de caractéristique la plus basse augmente définitivement de 1. En cas d\'égalité entre plusieurs caractéristique, c\'est le hasard qui décide de celle qui augmente. Si la créature rate son jet de sauvegarde, elle subit 10d6 dégâts de force suite à une explosion magique interne.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>91-99</strong></td>\n<td style="text-align: left;">Une pyramide dotée d\'une base de 5 mètres de côté jaillit du sol. Elle contient le sarcophage d\'une <a href="/bestiaire/momie-auguste">momie auguste</a>. La pyramide fonctionne comme l\'antre de la momie et le sarcophage contient un trésor à choisir par le MJ.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>100</strong></td>\n<td style="text-align: left;">Un pied de haricot géant pousse soudain et grimpe à une hauteur à définir par le MJ. Le sommet débouche là où le MJ le souhaite : il offre une vue magnifique sur le paysage, donne accès au château d\'un géant des nuages ou rejoint un autre plan d\'existence.</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/sac-de-haricots',
    title: 'Sac de haricots',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Sac sans fond',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce sac abrite un espace intérieur bien plus grand que ce que ses dimensions extérieures laissent présager. Visuellement, il fait une soixantaine de centimètres de diamètre au niveau de l\'ouverture pour 1,20 mètre de profondeur. En revanche, il peut contenir jusqu\'à 250 kilos de matière, sans dépasser un volume de 2 000 litres. Le sac pèse 7,5 kilos, quel que soit son contenu. Il faut dépenser une action pour récupérer un objet dans le sac.</p>\n<p>Si le sac est surchargé, percé ou déchiré, il se découd complètement. Il est alors détruit et son contenu s\'éparpille sur le plan Astral. Si on retourne le sac sur l\'envers, son contenu se répand à terre, sans dommage, mais il faut le remettre sur l\'endroit avant de pouvoir s\'en servir de nouveau. Si l\'on place une créature ayant besoin de respirer dans le sac, sa survie est limitée : elle peut y rester un nombre de minutes égal à 10 divisé par le nombre de créatures présentes dans le sac (une minute au minimum), ensuite, elle commence à suffoquer.</p>\n<p>Si l\'on place un sac sans fond dans l\'espace extradimensionnel né d\'un <a href="/liste-objets-magiques/havresac-magique"><em>havresac magique</em></a>, d\'un <a href="/liste-objets-magiques/puits-portatif"><em>puits portatif</em></a> ou d\'un objet similaire, les deux objets sont instantanément détruits et un portail s\'ouvre vers le plan Astral. Il apparaît là où l\'on a placé le premier objet dans le second et toutes les créatures situées dans un rayon de 3 mètres autour de ce portail sont emportées vers un endroit aléatoire du plan Astral. Le portail se referme ensuite, sachant qu\'il est à sens unique et qu\'il est impossible de le rouvrir.</p>',
    link: '/liste-objets-magiques/sac-sans-fond',
    title: 'Sac sans fond',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Scarabée de protection',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Si vous tenez ce médaillon en forme de scarabée dans la main pendant 1 round, une inscription apparaît à sa surface, révélant sa nature magique. Il confère deux avantages tant que vous le portez sur vous :</p>\n<ul>\n<li>vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre les sorts.</li>\n<li>Le scarabée contient 12 charges. Si vous ratez un jet de sauvegarde contre un sort de nécromancie ou un effet nuisible infligé par un mort-vivant, vous pouvez utiliser votre réaction pour dépenser 1 charge et transformer l\'échec du jet de sauvegarde en réussite. Le scarabée est détruit et tombe alors en poussière quand sa dernière charge est dépensée.</li>\n</ul>',
    link: '/liste-objets-magiques/scarabee-de-protection',
    title: 'Scarabée de protection',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Sceptre d\'absorption',
      magicitem: {
        type: 'Sceptre',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce sceptre en main, vous pouvez utiliser votre réaction pour absorber un sort qui ne cible que vous et n\'est donc pas un sort à zone d\'effet. L\'effet du sort absorbé est annulé et l\'énergie magique (et non le sort lui-même) est stockée dans le sceptre. Cette énergie est du même niveau que le sort au moment de son incantation. Le sceptre peut absorber et stocker jusqu\'à 50 niveaux d\'énergie au cours de son existence. Dès que le sceptre a absorbé 50 niveaux d\'énergie, il ne peut plus en absorber davantage. Si vous êtes la cible d\'un sort dont le sceptre ne peut pas absorber l\'énergie, l\'objet magique ne produit aucun effet sur ce sort.</p>\n<p>Quand vous êtes en harmonie avec le sceptre, vous connaissez le nombre de niveaux d\'énergie absorbés par le sceptre au cours de son existence et le nombre de niveaux d\'énergie magique qu\'il contient actuellement.</p>\n<p>Si vous êtes un lanceur de sorts et que vous tenez le sceptre en main, vous pouvez convertir l\'énergie stockée en emplacements de sort pour lancer des sorts que vous connaissez ou que vous avez préparés. Vous pouvez créer des emplacements de sort uniquement d\'un niveau égal ou inférieur à vos propres niveaux de sort et ce, jusqu\'au niveau 5 au maximum. Vous utilisez les niveaux stockés à la place de vos emplacements et lancez, par ailleurs, le sort comme à l\'accoutumée. Par exemple, vous pouvez utiliser 3 niveaux stockés dans le sceptre comme un emplacement de sort de niveau 3.</p>\n<p>Un sceptre qui vient d\'être découvert contient 1d10 niveaux d\'énergie magique. La magie du sceptre disparaît dès qu\'il ne peut plus absorber d\'énergie magique et qu\'aucune énergie n\'est stockée à l\'intérieur.</p>',
    link: '/liste-objets-magiques/sceptre-dabsorption',
    title: 'Sceptre d\'absorption',
    type: 'Sceptre',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Sceptre de puissance seigneuriale',
      magicitem: {
        type: 'Sceptre',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce sceptre à la tête en collerette fonctionne comme une masse d\'armes magique qui confère un bonus de +3 aux jets d\'attaque et de dégâts effectués avec elle. Le sceptre possède les propriétés associées aux six boutons différents alignés le long de son manche. Il possède également trois autres propriétés, comme décrit ci-dessous.</p>\n<p><strong><em>Six boutons</em></strong>. Vous pouvez appuyer sur l\'un des six boutons du sceptre par une action bonus. L\'effet d\'un bouton dure jusqu\'au moment où vous appuyez sur un bouton différent ou sur le même bouton à nouveau, auquel cas le sceptre retrouve sa forme normale.</p>\n<p>Si vous appuyez sur le <strong>bouton 1</strong>, le sceptre devient une <a href="/liste-objets-magiques/epee-ardente">épée ardente</a>, tandis qu\'une lame enflammée s\'étend depuis l\'extrémité opposée à la tête en collerette du sceptre.</p>\n<p>Si vous appuyez sur le <strong>bouton 2</strong>, la tête en collerette du sceptre se replie pour laisser apparaître deux lames en forme de croissant, ce qui transforme le sceptre en hache d\'armes magique qui confère un bonus de +3 aux jets d\'attaque et de dégâts effectués avec elle.</p>\n<p>Si vous appuyez sur le <strong>bouton 3</strong>, la tête en collerette se replie, une pointe de lance surgit de l\'extrémité supérieure du sceptre et le manche s\'allonge sur une longueur de 1,80 mètre, ce qui transforme l\'objet en une lance magique qui confère un bonus de +3 aux jets d\'attaque et de dégâts effectués avec elle.</p>\n<p>Si vous appuyez sur le <strong>bouton 4</strong>, le sceptre se transforme en une perche d\'escalade d\'une longueur maximale de 15 mètres que vous déterminez. Une pointe située à une extrémité et trois crochets à l\'autre permettent de fixer la perche sur des surfaces aussi solides que le granit. Des barreaux horizontaux de 7,50 centimètres de long, espacés de 30 centimètres les uns des autres, se déploient le long de la perche pour former une échelle. La perche peut supporter jusqu\'à 2 tonnes. Le sceptre retrouve sa forme normale si la perche supporte un poids trop important ou si elle n\'est pas fixée convenablement.</p>\n<p>Si vous appuyez sur le <strong>bouton 5</strong>, le sceptre se transforme en bélier portable et confère à son utilisateur un bonus de +10 aux tests de Force effectués pour briser les portes, les barricades et autres obstacles.</p>\n<p>Si vous appuyez sur le <strong>bouton 6</strong>, le sceptre reprend ou conserve sa forme normale et indique le nord magnétique (rien ne se passe si cette fonction est utilisée dans un endroit où le nord magnétique n\'existe pas). Le sceptre vous indique également la distance approximative qui vous sépare de la surface, que ce soit sous terre ou dans les airs.</p>\n<p><strong><em>Absorption de vie</em></strong>. Quand vous réussissez une attaque au corps à corps contre une créature à l\'aide du sceptre, vous pouvez la forcer à effectuer un jet de sauvegarde de Constitution DD 17. En cas d\'échec, elle subit 4d6 dégâts nécrotiques et vous récupérez un nombre de points de vie égal à la moitié de ces dégâts nécrotiques. Cette propriété n\'est réutilisable qu\'à l\'aube suivante.</p>\n<p><strong><em>Paralysie</em></strong>. Quand vous réussissez une attaque au corps à corps contre une créature à l\'aide du sceptre, vous pouvez la forcer à effectuer un jet de sauvegarde de Force DD 17. En cas d\'échec, elle est <a href="/gerer-la-sante-du-personnage#paralysé"><em>paralysée</em></a> pendant 1 minute. La cible peut retenter le jet de sauvegarde à la fin de chacun de ses tours et mettre fin à l\'effet en cas de réussite. Cette propriété n\'est réutilisable qu\'à l\'aube suivante.</p>\n<p><strong><em>Terreur</em></strong>. En tenant le sceptre en main, vous pouvez utiliser une action pour forcer chaque créature située à 9 mètres ou moins dans votre champ de vision à effectuer un jet de sauvegarde de Sagesse DD 17. En cas d\'échec, une cible est <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> par vous pendant 1 minute. Une cible terrorisée peut retenter le jet de sauvegarde à la fin de chacun de ses tours et mettre fin à l\'effet en cas de réussite. Cette propriété n\'est réutilisable qu\'à l\'aube suivante.</p>',
    link: '/liste-objets-magiques/sceptre-de-puissance-seigneuriale',
    title: 'Sceptre de puissance seigneuriale',
    type: 'Sceptre',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Sceptre de sécurité',
      magicitem: {
        type: 'Sceptre',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Tant que vous tenez ce sceptre en main, vous pouvez utiliser une action pour l\'activer. Le sceptre vous transporte alors instantanément, ainsi qu\'un maximum de 199 autres créatures consentantes situées dans votre champ de vision, vers un espace extraplanaire paradisiaque. Vous décidez à quoi ressemble cet endroit paradisiaque qui peut être un jardin paisible, une jolie clairière, une taverne accueillante, un immense palais, une île tropicale, un fantastique carnaval ou n\'importe quel autre endroit sorti de votre imagination.</p>\n<p>Quelle que soit sa nature, cet endroit paradisiaque contient suffisamment d\'eau et de nourriture pour toutes les créatures présentes. Toutes les autres choses avec lesquelles il est possible d\'interagir à l\'intérieur de l\'espace extraplanaire n\'existent que là-bas. Par exemple, une fleur cueillie dans un jardin paradisiaque disparaît dès qu\'elle en sort.</p>\n<p>Pour chaque heure passée dans l\'endroit paradisiaque, un visiteur récupère des points de vie comme s\'il avait dépensé 1 dé de vie. De plus, les créatures ne vieillissent plus pendant leur séjour là-bas, même si le temps s\'écoule normalement. Les visiteurs peuvent rester dans l\'endroit paradisiaque pendant un maximum de 200 jours divisés par le nombre de créatures présentes (arrondis à l\'inférieur).</p>\n<p>Une fois cette période écoulée ou si vous utilisez une action pour y mettre fin, l\'ensemble des visiteurs réapparaissent à l\'endroit qu\'ils occupaient au moment de l\'activation du sceptre ou dans l\'emplacement inoccupé le plus proche de cet endroit. Le sceptre n\'est réutilisable qu\'au bout de dix jours.</p>',
    link: '/liste-objets-magiques/sceptre-de-securite',
    title: 'Sceptre de sécurité',
    type: 'Sceptre',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Sceptre de suzeraineté',
      magicitem: {
        type: 'Sceptre',
        rarity: 'Rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous pouvez utiliser une action pour présenter le sceptre et exiger l\'obéissance des créatures de votre choix situées à 36 mètres ou moins dans votre champ de vision. Les créatures doivent chacune réussir un jet de sauvegarde de Sagesse DD 15 pour ne pas être <a href="/gerer-la-sante-du-personnage#charmé"><em>charmées</em></a> par vous pendant 8 heures. Une fois charmées de cette façon, les créatures vous considèrent comme un chef fiable. Une cible n\'est plus charmée par ce biais si vous ou vos compagnons lui nuisent ou lui ordonnent d\'accomplir quelque chose de contraire à sa nature. Le sceptre n\'est réutilisable qu\'à l\'aube suivante.</p>',
    link: '/liste-objets-magiques/sceptre-de-suzerainete',
    title: 'Sceptre de suzeraineté',
    type: 'Sceptre',
    subtype: null,
    rarity: 'Rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Sceptre de vigilance',
      magicitem: {
        type: 'Sceptre',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce sceptre à la tête en collerette possède les propriétés suivantes.</p>\n<p><strong><em>Vigilance</em></strong>. Tant que vous tenez le sceptre en main, vous obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des tests de Sagesse (Perception) et des jets d\'initiative.</p>\n<p><strong><em>Sorts</em></strong>. Tant que vous tenez le sceptre en main, vous pouvez utiliser une action pour lancer un des sorts suivants par son biais : <a href="/grimoire/detection-de-la-magie"><em>détection de la magie</em></a>, <a href="/grimoire/detection-du-mal-et-du-bien"><em>détection du mal et du bien</em></a>, <a href="/grimoire/detection-du-poison-et-des-maladies"><em>détection du poison et des maladies</em></a> ou <a href="/grimoire/voir-linvisible"><em>voir l\'invisible</em></a>.</p>\n<p><strong><em>Aura protectrice</em></strong>. Par une action, vous pouvez planter le manche du sceptre dans le sol pour que sa tête diffuse une lumière vive sur un rayon de 18 mètres et une lumière faible sur 18 mètres au-delà. Vous et les créatures amicales envers vous situés dans la zone vivement éclairée bénéficient d\'un bonus de +1 à la CA et aux jets de sauvegarde. Vous et ces mêmes créatures pouvez également percevoir la position d\'éventuelles créatures hostiles et <a href="/gerer-la-sante-du-personnage#invisible"><em>invisibles</em></a> qui se tiennent elles aussi dans la zone vivement éclairée.</p>\n<p>La lumière diffusée par la tête du sceptre s\'éteint et l\'effet prend fin au bout de 10 minutes ou quand une créature utilise une action pour déplanter le sceptre. Il faut attendre l\'aube suivante avant de pouvoir réutiliser cette propriété.</p>',
    link: '/liste-objets-magiques/sceptre-de-vigilance',
    title: 'Sceptre de vigilance',
    type: 'Sceptre',
    subtype: null,
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Sceptre inamovible',
      magicitem: {
        type: 'Sceptre',
        rarity: 'Peu courant'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce sceptre plat en fer est équipé d\'un bouton sur une extrémité. Vous pouvez utiliser une action pour appuyer dessus : il se fixe alors par magie à l\'endroit où il se trouve. Il ne bouge plus tant que vous ou une tierce personne n\'utilisez pas une action pour appuyer de nouveau sur le bouton, même s\'il doit pour cela défier les lois de la gravité. Le sceptre peut soutenir jusqu\'à 4 tonnes. Il se désactive et tombe si on lui fait porter plus de poids. Une créature peut utiliser une action pour faire un test de Force DD 30 afin de déplacer le sceptre. Si elle réussit, il bouge d\'au maximum 3 mètres.</p>',
    link: '/liste-objets-magiques/sceptre-inamovible',
    title: 'Sceptre inamovible',
    type: 'Sceptre',
    subtype: null,
    rarity: 'Peu courant',
    attunement: null
  },
  {
    header: {
      title: 'Solvant universel',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce tube contient un liquide laiteux qui sent fort l\'alcool. Vous pouvez utiliser une action pour déverser le contenu du tube sur une surface à portée. Le liquide dissout instantanément jusqu\'à 30 centimètres carrés de colle avec laquelle il entre en contact, y compris de la <a href="/liste-objets-magiques/colle-universelle"><em>colle universelle</em></a>.</p>',
    link: '/liste-objets-magiques/solvant-universel',
    title: 'Solvant universel',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Sphère d\'annihilation',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Cette sphère noire de 60 centimètres de diamètre est un trou dans le multivers, en lévitation dans l\'espace et stabilisé grâce au champ magique qui l\'enveloppe.</p>\n<p>La sphère oblitère toute matière qui la traverse. Seuls les artefacts ne sont pas détruits. À moins qu\'il ne soit sensible aux dégâts infligés par une <em>sphère d\'annihilation</em>, un artefact passe à travers la sphère sans subir le moindre dégât. Tout autre chose qui entre en contact avec la sphère – mais n\'est pas complètement engloutie et donc oblitérée par elle – subit 4d10 dégâts de force.</p>\n<p>La sphère reste immobile à moins que quelqu\'un ne la contrôle. Si vous vous situez à 18 mètres ou moins d\'une sphère que personne ne contrôle, vous pouvez utiliser une action pour effectuer un test d\'Intelligence (Arcanes) DD 25. En cas de réussite, la sphère lévite dans la direction de votre choix sur une distance maximale égale à 1,50 mètre × votre modificateur d\'Intelligence (1,50 mètre au minimum). En cas d\'échec, la sphère se déplace de 3 mètres vers vous. Quand la sphère entre dans l\'emplacement occupée par une créature, celle-ci soit réussir un jet de sauvegarde de Dextérité DD 13 pour éviter de la toucher et de subir 4d10 dégâts de force.</p>\n<p>Si vous tentez de contrôler une sphère déjà sous le contrôle d\'une autre créature, vous devez effectuer un test d\'Intelligence (Arcanes) opposé au test d\'Intelligence (Arcanes) de cette créature. Celui qui l\'emporte obtient ou garde le contrôle de la sphère et peut la faire léviter normalement.</p>\n<p>Si la sphère entre en contact avec un portail planaire, tel que ceux créés par le sort de <a href="/grimoire/portail"><em>portail</em></a>, ou un espace extradimensionnel, tel que ceux contenus dans un <a href="/liste-objets-magiques/puits-portatif"><em>puits portatif</em></a>, le MJ détermine au hasard ce qu\'il se passe en utilisant la table ci-dessous.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: left;">Résultat</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>01-50</strong></td>\n<td style="text-align: left;">La sphère est détruite.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>51-85</strong></td>\n<td style="text-align: left;">La sphère traverse le portail ou entre dans l\'espace extradimensionnel.</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>86-00</strong></td>\n<td style="text-align: left;">Une faille spatiale envoie chaque créature et objet situés à 54 mètres ou moins de la sphère, y compris la sphère elle-même, vers un plan d\'existence déterminé au hasard.</td>\n</tr>\n</tbody>\n</table></div></div>',
    link: '/liste-objets-magiques/sphere-dannihilation',
    title: 'Sphère d\'annihilation',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Submersible du crabe',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Au premier abord, cet objet ressemble à un tonneau de fer scellé de taille G. Il pèse 250 kilos et dispose d\'un loquet dissimulé qui se remarque seulement suite à un test d\'Intelligence (Investigation) DD 20. Si on le débloque, il ouvre une trappe au sommet du tonneau, ce qui permet à deux créatures de taille M ou inférieure de se glisser à l\'intérieur. Là, dix leviers sont disposés en rangée, tous en position neutre et susceptibles d\'être tirés vers le haut ou le bas. Si on actionne les bons leviers, le submersible se transforme en homard géant.</p>\n<p>Le submersible du crabe est un objet de taille G doté des statistiques suivantes.</p>\n<p><strong>Classe d\'armure</strong>: 20<br>\n<strong>Points de vie</strong>: 200<br>\n<strong>Vitesse</strong>: 9 mètres, nage 9 mètres (ou 0 si les pattes et la queue ne sont pas dépliées)<br>\n<strong>Immunité aux dégâts</strong>: poison, psychiques</p>\n<p>Le submersible a besoin d\'un pilote pour fonctionner comme un véhicule. Tant que la trappe est fermée, le compartiment est étanche: l\'eau et l\'air ne peuvent pas y pénétrer. Le compartiment abrite assez d\'air pour qu\'une créature de taille M y respire pendant 10 heures, cette durée étant à diviser par le nombre de créatures obligées de respirer s\'il y en a plusieurs à l\'intérieur.</p>\n<p>Le submersible flotte sur l\'eau mais peut aussi s\'enfoncer jusqu\'à une profondeur de 270 mètres. Plus bas, le véhicule subit 2d6 points de dégâts contondants par minute à cause de la pression.</p>\n<p>Une créature installée dans le compartiment peut utiliser une action pour tirer deux leviers au maximum, vers le bas ou le haut. Chaque levier revient en position neutre après utilisation. De gauche à droite, chaque levier fonctionne comme indiqué dans la table Leviers du submersible du crabe.</p>\n<div class="table-container">\n<h2 id="leviers-du-submersible-du-crabe">Leviers du submersible du crabe</h2>\n<div class=\'simple-responsive-table\'><div><table><thead><tr><th class="has-text-centered">Levier</th><th>Haut</th><th>Bas</th></tr></thead><tbody><tr><td class="has-text-centered"><strong>1</strong></td>\n      <td>Déploiement de la queue et des pattes, ce qui permet au submersible de marcher et nager.</td>\n      <td>Repliement de la queue et des pattes, ce qui réduit la vitesse du submersible à 0 et l\'empêche de profiter d\'éventuels bonus de vitesse.</td>\n    </tr><tr><td class="has-text-centered"><strong>2</strong></td>\n      <td>Ouverture du volet de la fenêtre avant.</td>\n      <td>Fermeture du volet de la fenêtre avant.</td>\n    </tr><tr><td class="has-text-centered"><strong>3</strong></td>\n      <td>Ouverture des volets des fenêtres latérales (deux de chaque côté).</td>\n      <td>Fermeture des volets des fenêtres latérales (deux de chaque côté).</td>\n    </tr><tr><td class="has-text-centered"><strong>4</strong></td>\n      <td>Deux pinces se déploient de chaque côté du submersible.</td>\n      <td>Les deux pinces se rétractent.</td>\n    </tr><tr><td class="has-text-centered"><strong>5</strong></td>\n      <td colspan="2">Chaque pince dépliée est considérée comme une arme de corps à corps et porte l\'attaque suivante : +8 pour toucher, allonge 1,50 m, une cible. Coup: 7 (2d6) dégâts contondants.</td>\n    </tr><tr><td class="has-text-centered"><strong>6</strong></td>\n      <td>Le submersible avance en marchant ou en nageant.</td>\n      <td>Le submersible recule en marchant ou en nageant.</td>\n    </tr><tr><td class="has-text-centered"><strong>7</strong></td>\n      <td>L\'appareil tourne de 90° sur la gauche.</td>\n      <td>L\'appareil tourne de 90° sur la droite.</td>\n    </tr><tr><td class="has-text-centered"><strong>8</strong></td>\n      <td>Des pièces d\'équipement semblables à des yeux émettent une vive lumière dans un rayon de 9 mètres et une lumière faible dans un rayon de 9 mètres de plus.</td>\n      <td>Les lumières s\'éteignent.</td>\n    </tr><tr><td class="has-text-centered"><strong>9</strong></td>\n      <td>Le submersible s\'enfonce d\'au maximum 6 mètres dans un liquide.</td>\n      <td>Le submersible remonte d\'au maximum 6 mètres dans un liquide.</td>\n    </tr><tr><td class="has-text-centered"><strong>10</strong></td>\n      <td>La trappe arrière se descelle et s\'ouvre.</td>\n      <td>La trappe arrière se ferme et se scelle.</td>\n    </tr></tbody></table></div></div>\n</div>',
    link: '/liste-objets-magiques/submersible-du-crabe',
    title: 'Submersible du crabe',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: null
  },
  {
    header: {
      title: 'Talisman de la sphère',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Lorsque vous effectuez un test d\'Intelligence (Arcanes) pour contrôler une <a href="/liste-objets-magiques/sphere-dannihilation"><em>sphère d\'annihilation</em></a> en tenant ce talisman en main, vous doublez votre bonus de maîtrise pour ce test. En outre, lorsque vous commencez votre tour en contrôlant une <a href="/liste-objets-magiques/sphere-dannihilation"><em>sphère d\'annihilation</em></a>, vous pouvez utiliser une action pour la faire léviter sur une distance de 3 mètres plus 3 mètres supplémentaires × votre modificateur d\'Intelligence.</p>',
    link: '/liste-objets-magiques/talisman-de-la-sphere',
    title: 'Talisman de la sphère',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Talisman du bien ultime',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation avec une créature d\'alignement bon exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce talisman est un puissant symbole du bien. Une créature dont l\'alignement n\'est ni bon ni mauvais subit 6d6 dégâts radiants quand elle le touche. Une créature d\'alignement mauvais subit 8d6 dégâts radiants quand elle le touche. Quand elles le tiennent en main ou portent le talisman sur elles, ces deux types de créature subissent une nouvelle fois les dégâts à la fin de chacun de leurs tours.</p>\n<p>Si vous êtes un clerc ou un paladin d\'alignement bon, le talisman peut faire office de symbole sacré, et vous bénéficiez d\'un bonus de +2 aux jets d\'attaque des sorts tant que vous le portez sur vous ou le tenez en main.</p>\n<p>Le talisman contient 7 charges. Si vous le portez sur vous ou le tenez en main, vous pouvez utiliser une action pour dépenser 1 charge et choisir une créature située à 36 mètres de vous, en contact avec le sol et dans votre champ de vision. Si l\'alignement de la cible est mauvais, une fissure de flammes rugissantes s\'ouvre sous elle. La créature doit réussir un jet de sauvegarde de Dextérité DD 20 pour ne pas trébucher dans la fissure, ce qui aboutirait à sa destruction définitive, sans aucun reste à récupérer. La fissure se referme ensuite en ne laissant aucune trace. Le talisman est détruit et se désagrège en particules de lumière dorée lorsque vous dépensez la dernière charge.</p>',
    link: '/liste-objets-magiques/talisman-du-bien-ultime',
    title: 'Talisman du bien ultime',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation avec une créature d\'alignement bon exigée'
  },
  {
    header: {
      title: 'Talisman du mal ultime',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Légendaire',
        attunement: 'harmonisation avec une créature d\'alignement mauvais exigée'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce talisman est un puissant symbole du mal. Une créature dont l\'alignement n\'est ni bon ni mauvais subit 6d6 dégâts nécrotiques quand elle le touche. Une créature d\'alignement bon subit 8d6 dégâts nécrotiques quand elle le touche. Quand elles tiennent en main ou portent le talisman sur elles, ces deux types de créature subissent une nouvelle fois les dégâts à la fin de chacun de leurs tours.</p>\n<p>Si vous êtes un clerc ou un paladin d\'alignement mauvais, le talisman peut faire office de symbole sacré et vous bénéficiez d\'un bonus de +2 aux jets d\'attaque des sorts tant que vous le portez sur vous ou le tenez en main.</p>\n<p>Le talisman contient 6 charges. Si vous le portez sur vous ou le tenez en main, vous pouvez utiliser une action pour dépenser 1 charge et choisir une créature située à 36 mètres de vous, en contact avec le sol et dans votre champ de vision. Si l\'alignement de la cible est bon, une fissure de flammes rugissantes s\'ouvre sous elle. Elle doit réussir un jet de sauvegarde de Dextérité DD 20 pour ne pas trébucher dans la fissure, ce qui aboutirait à sa destruction définitive, sans aucun reste à récupérer. La fissure se referme ensuite en ne laissant aucune trace. Le talisman est détruit et se désagrège en bave à l\'odeur nauséabonde lorsque vous dépensez la dernière charge.</p>',
    link: '/liste-objets-magiques/talisman-du-mal-ultime',
    title: 'Talisman du mal ultime',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Légendaire',
    attunement: 'harmonisation avec une créature d\'alignement mauvais exigée'
  },
  {
    header: {
      title: 'Tapis volant',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Quand vous prononcez le mot de commande de ce tapis par une action, il flotte dans les airs. Il se déplace en volant selon vos indications vocales tant que vous vous trouvez à 9 mètres ou moins de lui.</p>\n<p>Il existe quatre tailles de tapis. C\'est au MJ de choisir celle de chaque tapis ou de la déterminer au hasard.</p>\n<div class=\'simple-responsive-table\'><div><table>\n<thead>\n<tr>\n<th style="text-align: center;">D100</th>\n<th style="text-align: center;">Taille</th>\n<th style="text-align: center;">Capacité</th>\n<th style="text-align: center;">Vitesse de vol</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align: center;"><strong>01-20</strong></td>\n<td style="text-align: center;">0,9 m × 1,5 m</td>\n<td style="text-align: center;">100 kg</td>\n<td style="text-align: center;">24 m</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>21-55</strong></td>\n<td style="text-align: center;">1,20 m × 1,80 m</td>\n<td style="text-align: center;">200 kg</td>\n<td style="text-align: center;">18 m</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>56-80</strong></td>\n<td style="text-align: center;">1,50 m × 2,10 m</td>\n<td style="text-align: center;">600 kg</td>\n<td style="text-align: center;">12 m</td>\n</tr>\n<tr>\n<td style="text-align: center;"><strong>81-100</strong></td>\n<td style="text-align: center;">1,80 m × 2,70 m</td>\n<td style="text-align: center;">400 kg</td>\n<td style="text-align: center;">9 m</td>\n</tr>\n</tbody>\n</table></div></div>\n<p>Un tapis peut porter deux fois le poids indiqué dans la table mais, s\'il porte plus que sa capacité normale, il se déplace à la moitié de la vitesse indiquée.</p>',
    link: '/liste-objets-magiques/tapis-volant',
    title: 'Tapis volant',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Traité d\'authorité et d\'influence',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce livre contient des exercices d\'interactions sociales basées sur la manipulation et la charme. Ses mots sont imprégnés de magie. Si vous passez 48 heures, lors d\'une période de 6 jours ou moins, à étudier le contenu du traité, à suivre ses indications et faire ses exercices, votre valeur de Charisme ainsi que votre valeur maximale dans cette caractéristique augmentent de 2. La magie du traité disparaît ensuite, mais elle réapparaît au bout d\'un siècle.</p>',
    link: '/liste-objets-magiques/traite-dauthorite-et-dinfluence',
    title: 'Traité d\'authorité et d\'influence',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Traité de compréhension',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce livre contient des exercices intuitifs de sagacité. Ses mots sont imprégnés de magie. Si vous passez 48 heures, lors d\'une période de 6 jours ou moins, à étudier le contenu du traité, à suivre ses indications et faire ses exercices, votre valeur de Sagesse ainsi que votre valeur maximale dans cette caractéristique augmentent de 2. La magie du traité disparaît ensuite, mais elle réapparaît au bout d\'un siècle.</p>',
    link: '/liste-objets-magiques/traite-de-comprehension',
    title: 'Traité de compréhension',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Traité de perspicacité',
      magicitem: {
        type: 'Objet merveilleux',
        rarity: 'Très rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce livre contient des exercices de logique et de mémoire. Ses mots sont imprégnés de magie. Si vous passez 48 heures, lors d\'une période de 6 jours ou moins, à étudier le contenu du traité, à suivre ses indications et faire ses exercices, votre valeur d\'Intelligence ainsi que votre valeur maximale dans cette caractéristique augmentent de 2. La magie du traité disparaît ensuite, mais elle réapparaît au bout d\'un siècle.</p>',
    link: '/liste-objets-magiques/traite-de-perspicacite',
    title: 'Traité de perspicacité',
    type: 'Objet merveilleux',
    subtype: null,
    rarity: 'Très rare',
    attunement: null
  },
  {
    header: {
      title: 'Trident de domination aquatique',
      magicitem: {
        type: 'Arme',
        subtype: 'Trident',
        rarity: 'Peu courant',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Ce trident est une arme magique. Il contient 3 charges. Tant que vous le portez sur vous, vous pouvez utiliser une action et dépenser 1 charge pour lancer <a href="/grimoire/dominer-une-bete"><em>dominer une bête</em></a> (DD du jet de sauvegarde 15) par son biais sur une créature qui sait nager de manière innée et possède une vitesse à la nage. Le trident récupère 1d3 charges dépensées chaque jour, à l\'aube.</p>',
    link: '/liste-objets-magiques/trident-de-domination-aquatique',
    title: 'Trident de domination aquatique',
    type: 'Arme',
    subtype: 'Trident',
    rarity: 'Peu courant',
    attunement: 'harmonisation requise'
  },
  {
    header: {
      title: 'Tueuse de dragons',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 aux jets d\'attaque et de dégâts effectués avec cette arme magique.</p>\n<p>Quand vous touchez un dragon avec elle, il subit 3d6 dégâts supplémentaires du type de l\'arme. Le terme « <em>dragon</em> » utilisé dans le cadre de cette description regroupe toutes les créatures du type dragon, y compris les dragons-tortues et les vouivres.</p>',
    link: '/liste-objets-magiques/tueuse-de-dragons',
    title: 'Tueuse de dragons',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Tueuse de géants',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée ou Hache',
        rarity: 'Rare'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +1 aux jets d\'attaque et de dégâts avec cette arme magique.</p>\n<p>Quand vous touchez un géant avec elle, il subit 2d6 dégâts supplémentaires du type de l\'arme et doit réussir un jet de sauvegarde de Force DD 15 ou tomber <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>. Vis-à-vis de cette arme, « <em>géant</em> » désigne toute créature du type géant, y compris les ettins et les trolls.</p>',
    link: '/liste-objets-magiques/tueuse-de-geants',
    title: 'Tueuse de géants',
    type: 'Arme',
    subtype: 'Épée ou Hache',
    rarity: 'Rare',
    attunement: null
  },
  {
    header: {
      title: 'Vengeresse sacrée',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Légendaire',
        attunement: 'harmonisation requise avec un paladin'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +3 aux jets d\'attaque et de dégâts avec cette arme magique. Quand vous touchez un fiélon ou un mort-vivant avec, il subit 2d10 dégâts radiants supplémentaires.</p>\n<p>Tant que vous tenez l\'arme en main, elle génère une aura de 3 mètres de rayon autour de vous. Vous et toutes les créatures amicales envers vous affectées par l\'aura obtenez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désasavantage"><em>avantage</em></a> lors des jets de sauvegarde contre les sorts et autres effets magiques. Si vous possédez 17 niveaux ou plus dans la classe de paladin, le rayon de l\'aura passe à 9 mètres.</p>',
    link: '/liste-objets-magiques/vengeresse-sacree',
    title: 'Vengeresse sacrée',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Légendaire',
    attunement: 'harmonisation requise avec un paladin'
  },
  {
    header: {
      title: 'Voleuse de vies',
      magicitem: {
        type: 'Arme',
        subtype: 'Épée',
        rarity: 'Très rare',
        attunement: 'harmonisation requise'
      },
      taxonomy: {
        category: [
          'docs',
          'meneur',
          'objets magiques'
        ],
        source: [
          'Cadre de campagne'
        ]
      }
    },
    content: '<p>Vous gagnez un bonus de +2 aux jets d\'attaque et de dégâts avec cette arme magique.</p>\n<p>L\'épée possède 1d8+1 charges. Si vous réussissez un coup critique contre une créature possédant moins de 100 points de vie, elle doit réussir un jet de sauvegarde de Constitution DD 15, sans quoi l\'épée lui arrache sa force vitale et la tue sur-le-champ (les créatures artificielles et les morts-vivants sont immunisés contre ce pouvoir). Si la créature meurt, l\'épée perd une charge. Quand il ne lui en reste plus, elle perd ce pouvoir.</p>',
    link: '/liste-objets-magiques/voleuse-de-vies',
    title: 'Voleuse de vies',
    type: 'Arme',
    subtype: 'Épée',
    rarity: 'Très rare',
    attunement: 'harmonisation requise'
  }
];
