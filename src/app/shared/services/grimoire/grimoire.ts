import { Sort } from 'src/app/models/sort.interface';

export const GRIMOIRE: Sort[] = [
  {
    header: {
      title: 'Agrandir/rétrécir',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (une pincée de limaille de fer)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous agrandissez ou rétrécissez une créature ou un objet situé à portée et dans votre champ de vision pendant toute la durée du sort. Choisissez soit une créature, soit un objet qui n\'est ni porté ni transporté. Si la cible n\'est pas consentante, elle a droit à un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Si elle le réussit, le sort est sans effet. Si la cible est une créature, tout ce qu\'elle porte et tout ce qu\'elle transporte change de taille avec elle. En revanche, si elle lâche un objet, il reprend sa taille normale sur-le-champ.</p>\n<p><strong>Agrandir</strong>. La cible double dans toutes les dimensions, et son poids est multiplié par huit. Cette croissance augmente sa catégorie de taille d\'un cran, de M à G par exemple. Si la cible n\'a pas assez de place pour doubler de volume, elle atteint la taille maximale possible dans l\'espace dont elle dispose. Elle bénéficie d\'un avantage lors des tests de Force et des jets de sauvegarde de Force jusqu\'à la fin du sort. Les armes de la cible grandissent pour s\'adapter à sa nouvelle taille. Tant qu\'elles sont ainsi agrandies, elles infligent 1d4 dégâts de plus.</p>\n<p><strong>Rétrécir</strong>. La cible réduit de moitié dans toutes les dimensions et son poids est divisé par huit. Ce rétrécissement réduit sa catégorie de taille d\'un cran, de M à P par exemple. La cible subit un désavantage lors des tests de Force et des jets de sauvegarde de Force jusqu\'à la fin du sort. Les armes de la cible rétrécissent pour s\'adapter à sa nouvelle taille. Tant qu\'elles sont ainsi réduites, elles infligent 1d4 dégâts de moins (avec un minimum de 1 dégât).</p>',
    link: '/grimoire/agrandir-retrecir',
    title: 'Agrandir/rétrécir',
    level: '2',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (une pincée de limaille de fer)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Aide',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (une minuscule bandelette de tissu blanc)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Le sort renforce vos alliés, qui deviennent plus robustes et plus résolus. Choisissez jusqu\'à trois créatures à portée. Le maximum de points de vie et les points de vie actuels de chacune d\'entre elles augmentent de 5 pendant toute la durée du sort.</p>\n<p><strong>À plus haut niveau</strong>. Quand vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les points de vie de chaque cible augmentent de 5 points supplémentaires pour chaque niveau au-delà du niveau 2.</p>',
    link: '/grimoire/aide',
    title: 'Aide',
    level: '2',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (une minuscule bandelette de tissu blanc)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Alarme',
      spell: {
        casting_time: '1 minute',
        range: '9 mètres',
        components: 'V, S, M (une minuscule clochette et un filament en argent)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Magicien',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous installez une alarme pour vous avertir en cas d\'intrusion. Choisissez une porte, une fenêtre ou une zone à portée qui n\'occupe pas plus d\'espace qu\'un cube de 6 mètres de côté. Tant que le sort fait effet, une alarme vous prévient dès qu\'une créature de taille TP ou supérieure touche la zone protégée ou y pénètre. Au moment où vous lancez le sort, vous pouvez désigner des créatures qui ne déclencheront pas l\'alarme. Vous pouvez aussi choisir si l\'alarme sera audible ou mentale.</p>\n<p>Une alarme mentale vous avertit d\'un tintement dans votre tête tant que vous vous trouvez dans un rayon de 1,5 kilomètre autour de la zone protégée. Ce tintement suffit à vous réveiller si vous êtes endormi.</p>\n<p>Une alarme audible émet le même son qu\'une cloche d\'alerte pendant 10 secondes et retentit dans un rayon de 18 mètres.</p>',
    link: '/grimoire/alarme',
    title: 'Alarme',
    level: '1',
    casting_time: '1 minute',
    range: '9 mètres',
    components: 'V, S, M (une minuscule clochette et un filament en argent)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Allié planaire',
      spell: {
        casting_time: '10 minutes',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous demandez de l\'aide à une entité appartenant à un autre monde. Vous devez connaître cet être, que ce soit un dieu, un primordial, un prince démoniaque ou une autre créature à la puissance cosmique. L\'entité vous envoie un céleste, un élémentaire ou un fiélon qui lui est loyal. Cette créature apparaît dans un emplacement libre à portée. Si vous connaissez le nom d\'une créature spécifique, vous pouvez le mentionner lors de l\'incantation pour demander à ce que ce soit elle que l\'entité vous envoie, bien qu\'elle puisse tout de même vous envoyer un autre émissaire (c\'est au MJ de décider).</p>\n<p>Quand la créature apparaît, elle n\'a aucune obligation de se comporter d\'une manière particulière. Vous pouvez lui demander d\'accomplir un service rémunéré, mais elle n\'est pas obligée d\'accepter. Votre requête peut être très simple (<em>nous faire passer en volant au-dessus de ce précipice</em>, <em>nous aider à livrer un combat</em>...) ou plus complexe (<em>espionner nos ennemis</em>, <em>nous protéger lors de l\'exploration de ce donjon</em>...). Pour négocier un service, vous devez être en mesure de communiquer avec la créature.</p>\n<p>Le paiement peut se faire sous diverses formes. Un céleste peut demander une importante donation en or ou en objets magiques à un temple allié, tandis qu\'un fiélon peut exiger un sacrifice vivant ou un trésor. Certaines créatures monnayent leurs services contre une quête à accomplir de votre côté.</p>\n<p>En règle générale, une tâche qui s\'accomplit en quelques minutes se paie 100  po la minute. Une tâche qui demande plusieurs heures coûte 1000  po de l\'heure, et une tâche effectuée sur plusieurs jours (10  au maximum) vaut 10000  po la journée. Le MJ peut modifier le montant en fonction des circonstances dans lesquelles vous lancez le sort. Si la tâche à accomplir s\'accorde avec l\'éthique de la créature, elle peut réduire son salaire de moitié ou même y renoncer. Les tâches qui ne présentent aucun risque coûtent souvent la moitié du prix indiqué précédemment, tandis que les missions particulièrement dangereuses valent parfois bien plus cher. Une créature accepte rarement une tâche visiblement suicidaire.</p>\n<p>Une fois que la créature a accompli la tâche demandée ou quand la durée de service décidée est arrivée à son terme, elle retourne sur son plan d\'origine après vous avoir fait son rapport, si la tâche l\'exige et qu\'elle est en mesure de le faire.</p>\n<p>Si vous êtes incapable de vous mettre d\'accord avec la créature sur le prix de ses services, elle retourne immédiatement sur son plan natal.</p>\n<p>Une telle créature enrôlée dans votre groupe compte comme un membre à part entière et reçoit sa part de points d\'expérience.</p>',
    link: '/grimoire/allie-planaire',
    title: 'Allié planaire',
    level: '6',
    casting_time: '10 minutes',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Amélioration de caractéristique',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (des poils ou des plumes venant d\'un animal)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature pour lui accorder une amélioration magique. Choisissez l\'un des effets suivants, dont la cible bénéficiera jusqu\'à la fin du sort.</p>\n<p><strong>Endurance de l\'ours</strong>. La cible a l\'avantage lors des tests de Constitution. Elle gagne aussi 2d6 points de vie temporaires qui disparaissent quand le sort se termine.</p>\n<p><strong>Force du taureau</strong>. La cible bénéficie d\'un avantage lors des tests de Force et le poids qu\'elle peut porter est doublé.</p>\n<p><strong>Grâce du chat</strong>. La cible a l\'avantage lors des tests de Dextérité. De plus, elle ne subit pas de dégât quand elle chute de 6 mètres ou moins, à condition qu\'elle ne soit pas neutralisée.</p>\n<p><strong>Splendeur de l\'aigle</strong>. La cible bénéficie d\'un avantage lors des tests de Charisme.</p>\n<p><strong>Ruse du renard</strong>. La cible a l\'avantage lors des tests d\'Intelligence.</p>\n<p><strong>Sagesse du hibou</strong>. La cible a l\'avantage lors des tests de Sagesse.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, vous pouvez prendre une créature de plus pour cible par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/amelioration-de-caracteristique',
    title: 'Amélioration de caractéristique',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (des poils ou des plumes venant d\'un animal)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Amitié avec les animaux',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un peu de nourriture)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Grâce à ce sort, vous convainquez une bête que vous ne lui voulez aucun mal. Choisissez une bête située dans votre champ de vision et à portée. Elle doit vous voir et vous entendre. Le sort échoue si elle possède une Intelligence de 4 ou plus. Dans le cas contraire, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou être <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> par vous pendant toute la durée du sort. Le sort se termine si vous ou l\'un de vos camarades blessez la cible.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous pouvez affecter une bête supplémentaire par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/amitie-avec-les-animaux',
    title: 'Amitié avec les animaux',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un peu de nourriture)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Animation des morts',
      spell: {
        casting_time: '1 minute',
        range: '3 mètres',
        components: 'V, S, M (une goutte de sang, un lambeau de chair et une pincée de poudre d\'os)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort crée un serviteur mort-vivant. Choisissez un tas d\'os ou le cadavre d\'un humanoïde de taille M ou P situé à portée. Votre sort imprègne la cible d\'un ignoble simulacre de vie, la relevant sous forme de mort-vivant. Elle devient un squelette si vous avez lancé le sort sur un tas d\'os, et un zombi si vous avez opté pour un cadavre (le MJ dispose du profil technique de la créature).</p>\n<p>À chacun de vos tours, vous pouvez utiliser une action bonus pour donner un ordre mental à la créature générée via ce sort si elle se trouve dans un rayon de 18 mètres autour de vous (si vous contrôlez plusieurs créatures, vous pouvez donner un ordre à l\'une d\'elles, certaines d\'entre elles ou à toutes à la fois, à condition de transmettre le même ordre à chacune). À vous de décider quelles actions la créature va entreprendre et à quel endroit elle se déplace au cours du tour suivant, mais vous pouvez aussi lui donner un ordre plus générique, comme de garder une salle ou un couloir. En l\'absence d\'ordre, la créature se contente de se défendre contre les créatures hostiles. Une fois qu\'elle a reçu un ordre, elle continue à le suivre jusqu\'à ce qu\'elle ait accompli sa tâche.</p>\n<p>La créature est placée sous votre contrôle pendant 24  heures, après quoi elle cesse d\'obéir aux ordres que vous lui avez donnés. Pour la contrôler pendant 24 heures de plus, il vous faut relancer ce sort sur elle avant la fin de la période de 24 heures pendant laquelle il fait effet. Si vous utilisez ce sort ainsi, il vous permet de réaffirmer votre contrôle sur un maximum de quatre créatures animées grâce à lui plutôt que d\'en animer une nouvelle.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, vous animez ou réaffirmez votre contrôle sur deux créatures de plus par niveau au-delà du niveau 3. Chaque créature doit provenir d\'un tas d\'os ou d\'un cadavre différent.</p>',
    link: '/grimoire/animation-des-morts',
    title: 'Animation des morts',
    level: '3',
    casting_time: '1 minute',
    range: '3 mètres',
    components: 'V, S, M (une goutte de sang, un lambeau de chair et une pincée de poudre d\'os)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Animation des objets',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Les objets prennent vie sur votre ordre. Choisissez jusqu\'à dix objets non magiques à portée que personne ne porte ni ne transporte. Les cibles de taille M comptent comme deux objets, celles de taille G comme quatre et celles de taille TG comme huit. Vous ne pouvez pas animer d\'objet de taille supérieure. Chaque cible s\'anime et devient une créature placée sous votre contrôle jusqu\'à la fin du sort, ou jusqu\'à tomber à 0 point de vie.</p>\n<p>Par une action bonus, vous pouvez donner un ordre mental à toute créature créée via ce sort qui se trouve au maximum à 150 mètres de vous (si vous en contrôlez plusieurs, vous pouvez donner un ordre à l\'une d\'elles, certaines d\'entre elles ou toutes à la fois, à condition de donner le même ordre à toutes). À vous de décider quelles actions la créature va entreprendre et à quel endroit elle se déplace au cours du tour suivant, mais vous pouvez aussi lui donner un ordre plus générique, comme de garder une salle ou un couloir. En l\'absence d\'ordre, la créature se contente de se défendre contre les créatures hostiles. Une fois qu\'elle a reçu un ordre, elle continue à le suivre jusqu\'à ce qu\'elle ait accompli sa tâche.</p>\n<p>Un objet animé est une créature artificielle avec une CA, des points de vie, des attaques, une Force et une Dextérité déterminés par sa taille. Sa Constitution est de 10 tandis que son Intelligence et sa Sagesse sont de 3 et son Charisme de 1. Il a une vitesse de 9 mètres. S\'il est dépourvu de patte ou d\'appendice susceptible de lui permettre de se mouvoir, il gagne à la place la capacité de voler à une vitesse de 9 mètres et peut utiliser le vol stationnaire. Si l\'objet est solidement attaché à une surface ou à un objet de plus grande taille, comme une chaîne vissée à un mur, sa vitesse est de 0. L\'objet possède la vision aveugle dans un rayon de 9 mètres ; au-delà, il est aveugle. Quand l\'objet animé tombe à 0 point de vie, il reprend sa forme initiale et tout dégât en surplus est infligé à celle-ci.</p>\n<p>Si vous ordonnez à un objet animé d\'attaquer, il a droit à une attaque au corps-à-corps unique contre une créature située dans un rayon de 1,50 mètre. Il porte une attaque avec un bonus d\'attaque et des dégâts contondants déterminés en fonction de sa taille. Le MJ peut tout à fait décider qu\'un objet animé inflige des dégâts perforants ou tranchants si sa forme le lui permet.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, vous pouvez animer deux objets supplémentaires par emplacement au-delà du niveau 5.</p>\n<h2 id="profil-technique-des-objets-animes">Profil technique des objets animés</h2>\n<div class=\'simple-responsive-table\'><div><table class="datatable"><thead><tr><th>Taille</th>\n      <th class="text-align-center">PV</th>\n      <th class="text-align-center">CA</th>\n      <th class="text-align-center">Attaque</th>\n      <th class="text-align-center">For</th>\n      <th class="text-align-center">Dex</th>\n    </tr></thead><tbody><tr><td><span class="label"><strong>Taille</strong> : </span><strong>Très petite</strong></td>\n      <td class="text-align-center"><span class="label"><strong>PV</strong> : </span>20</td>\n      <td class="text-align-center"><span class="label"><strong>CA</strong> : </span>18</td>\n      <td class="text-align-center"><span class="label"><strong>Attaque</strong> : </span>+8 pour toucher, 1d4+4 dégâts</td>\n      <td class="text-align-center"><span class="label"><strong>For</strong> : </span>4</td>\n      <td class="text-align-center"><span class="label"><strong>Dex</strong> : </span>18</td>\n    </tr><tr><td><span class="label"><strong>Taille</strong> : </span><strong>Petite</strong></td>\n      <td class="text-align-center"><span class="label"><strong>PV</strong> : </span>25</td>\n      <td class="text-align-center"><span class="label"><strong>CA</strong> : </span>16</td>\n      <td class="text-align-center"><span class="label"><strong>Attaque</strong> : </span>+6 pour toucher, 1d8+2 dégâts</td>\n      <td class="text-align-center"><span class="label"><strong>For</strong> : </span>6</td>\n      <td class="text-align-center"><span class="label"><strong>Dex</strong> : </span>14</td>\n    </tr><tr><td><span class="label"><strong>Taille</strong> : </span><strong>Moyenne</strong></td>\n      <td class="text-align-center"><span class="label"><strong>PV</strong> : </span>40</td>\n      <td class="text-align-center"><span class="label"><strong>CA</strong> : </span>13</td>\n      <td class="text-align-center"><span class="label"><strong>Attaque</strong> : </span>+5 pour toucher, 2d6+1 dégâts</td>\n      <td class="text-align-center"><span class="label"><strong>For</strong> : </span>10</td>\n      <td class="text-align-center"><span class="label"><strong>Dex</strong> : </span>12</td>\n    </tr><tr><td><span class="label"><strong>Taille</strong> : </span><strong>Grande</strong></td>\n      <td class="text-align-center"><span class="label"><strong>PV</strong> : </span>50</td>\n      <td class="text-align-center"><span class="label"><strong>CA</strong> : </span>10</td>\n      <td class="text-align-center"><span class="label"><strong>Attaque</strong> : </span>+6 pour toucher, 2d10+2 dégâts</td>\n      <td class="text-align-center"><span class="label"><strong>For</strong> : </span>14</td>\n      <td class="text-align-center"><span class="label"><strong>Dex</strong> : </span>10</td>\n    </tr><tr><td><span class="label"><strong>Taille</strong> : </span><strong>Très grande</strong></td>\n      <td class="text-align-center"><span class="label"><strong>PV</strong> : </span>80</td>\n      <td class="text-align-center"><span class="label"><strong>CA</strong> : </span>10</td>\n      <td class="text-align-center"><span class="label"><strong>Attaque</strong> : </span>+8 pour toucher, 2d12+4 dégâts</td>\n      <td class="text-align-center"><span class="label"><strong>For</strong> : </span>18</td>\n      <td class="text-align-center"><span class="label"><strong>Dex</strong> : </span>6</td>\n    </tr></tbody></table></div></div>',
    link: '/grimoire/animation-des-objets',
    title: 'Animation des objets',
    level: '5',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Apaisement des émotions',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez de supprimer les émotions fortes au sein d\'un groupe de gens. Chaque humanoïde qui se trouve dans une sphère de 6 mètres de rayon centrée autour d\'un point de votre choix situé à portée doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme. Une créature peut décider de rater volontairement ce jet, sachant que lorsqu\'une créature rate son jet de sauvegarde, vous l\'affectez avec l\'un des deux effets suivants, selon votre choix.</p>\n<ul>\n<li>Vous débarrassez temporairement la cible de tout état <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a> ou <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisé</em></a>. Une fois le sort terminé, l\'état s\'applique de nouveau, à moins que sa durée n\'ait expiré.</li>\n<li>Vous rendez la cible indifférente vis-à-vis des créatures de votre choix, envers lesquelles elle était auparavant hostile. Cette indifférence prend fin si la cible est attaquée ou affectée par un sort néfaste, ou bien si elle voit l\'un de ses amis être ainsi agressé. La cible redevient hostile dès que le sort se termine, à moins que le MJ n\'en décide autrement.</li>\n</ul>',
    link: '/grimoire/apaisement-des-emotions',
    title: 'Apaisement des émotions',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Apparence trompeuse',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort vous permet de modifier l\'apparence d\'autant de créatures que vous voulez, à condition qu\'elles se trouvent à portée et dans votre champ de vision. Vous donnez à chacune d\'entre elles une nouvelle apparence illusoire. Une cible non consentante peut faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme. Si elle le réussit, le sort ne l\'affecte pas.</p>\n<p>Ce sort change l\'apparence physique, mais aussi les vêtements, les armures, les armes et le reste de l\'équipement. Vous pouvez faire croire que chaque créature affectée est plus petite ou plus grande de 30 centimètres maximum qu\'en réalité, lui donner l\'air grosse, maigre ou de corpulence normale. Vous ne pouvez pas changer le type de son corps, et vous devez choisir une forme possédant la même conformation qu\'elle au niveau des membres. En dehors de cela, les détails de l\'illusion sont laissés à votre imagination. Le sort persiste pendant toute sa durée ou jusqu\'à ce que vous utilisiez une action pour le révoquer.</p>\n<p>Les changements apportés par le sort ne résistent pas à un examen physique. Par exemple, si vous l\'utilisez pour ajouter un chapeau à la tenue de la cible, les objets passent au travers et toute personne qui essaie de le toucher ne sentira que de l\'air ou des cheveux et un crâne. Si vous utilisez le sort pour la faire paraître plus mince qu\'en réalité, la main de quelqu\'un qui tente de la toucher se heurtera à son corps alors que, visuellement, elle semble encore dans le vide.</p>\n<p>Une créature peut utiliser son action pour examiner une cible et faire un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> du sort. Si elle le réussit, elle comprend que la cible est déguisée.</p>',
    link: '/grimoire/apparence-trompeuse',
    title: 'Apparence trompeuse',
    level: '5',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Appel de familier',
      spell: {
        casting_time: '1 heure',
        range: '3 mètres',
        components: 'V, S, M (10 po de charbon, d\'encens et d\'herbe à faire brûler dans un brasero en laiton)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous vous attachez les services d\'un familier, un esprit qui prend la forme d\'un animal de votre choix : une chauve-souris, un chat, un crabe, une grenouille (ou un crapaud), un faucon, un lézard, une pieuvre, une chouette, un serpent venimeux, un poisson (un piranha), un rat, un corbeau, un hippocampe, une araignée ou une belette. Le familier apparaît dans un emplacement inoccupé à portée et possède le même profil technique que l\'animal dont il revêt la forme, bien qu\'il soit un céleste, une fée ou un fiélon (à vous de choisir) au lieu d\'une bête.</p>\n<p>Votre familier agit indépendamment de vous, mais il obéit toujours à vos ordres. Lors d\'un combat, il lance son propre dé d\'initiative et agit à son tour. Il ne peut pas attaquer, mais il peut effectuer d\'autres actions.</p>\n<p>Quand le familier tombe à 0 point de vie, il disparaît sans laisser de cadavre derrière lui. Il réapparaît si vous lancez de nouveau ce sort.</p>\n<p>Vous pouvez communiquer par télépathie avec votre familier tant qu\'il se trouve dans un rayon de 30 mètres autour de vous. De plus, vous pouvez dépenser votre action pour percevoir le monde par les yeux et les oreilles de votre familier jusqu\'au début de votre prochain tour. Pendant ce temps, vos yeux et vos oreilles ne fonctionnent plus.</p>\n<p>Vous pouvez renvoyer temporairement votre familier en utilisant une action. Il gagne alors une poche dimensionnelle où il attend que vous le rappeliez. Vous pouvez aussi le renvoyer définitivement. Vous pouvez utiliser une action alors qu\'il est temporairement renvoyé pour le faire réapparaître dans un emplacement inoccupé situé dans un rayon de 9 mètres autour de vous.</p>\n<p>Vous ne pouvez avoir qu\'un seul familier à la fois. Si vous lancez ce sort alors que vous avez déjà un familier, vous attribuez simplement une nouvelle forme à celui que vous possédez déjà : choisissez une des formes de la liste précédente, que votre familier adopte immédiatement.</p>\n<p>Enfin, quand vous lancez un sort avec une portée de « contact », votre familier peut livrer le sort comme si c\'était lui qui le lançait. Il doit se trouver à 30 mètres ou moins de vous et utiliser sa réaction pour transmettre le sort au moment où vous le lancez. Si le sort exige un <a href="/combattre#jets-dattaque">jet d\'attaque</a>, vous utilisez votre propre modificateur d\'attaque lors du jet.</p>',
    link: '/grimoire/appel-de-familier',
    title: 'Appel de familier',
    level: '1',
    casting_time: '1 heure',
    range: '3 mètres',
    components: 'V, S, M (10 po de charbon, d\'encens et d\'herbe à faire brûler dans un brasero en laiton)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Appel de la foudre',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un nuage orageux apparaît sous forme d\'un cylindre de 3 mètres de haut pour 18 mètres de rayon, centré sur un point situé dans votre champ de vision et à 30 mètres directement au-dessus de vous. Le sort échoue si vous ne pouvez voir le point situé à cette hauteur, là où le nuage doit se former (si vous vous trouvez dans une pièce trop petite pour accueillir le nuage, par exemple).</p>\n<p>Quand vous lancez le sort, vous devez choisir un point situé à portée et dans votre champ de vision. Un éclair jaillit du nuage et vient frapper ce point. Chaque créature située dans un rayon de 1,50 mètre autour de ce point doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 3d10 dégâts de foudre, les autres la moitié seulement. À chacun de vos tours jusqu\'à la fin du sort, vous pouvez dépenser votre action pour appeler ainsi la foudre, en visant le même point ou un autre.</p>\n<p>Si, au moment de l\'incantation, vous vous trouvez en extérieur et que les conditions sont déjà orageuses, le sort vous donne le contrôle de l\'orage déjà présent au lieu d\'en créer un nouveau. Dans ce cas, les dégâts du sort augmentent de 1d10.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les dégâts augmentent de 1d10 par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/appel-de-la-foudre',
    title: 'Appel de la foudre',
    level: '3',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Arc enchanté',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un arc)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous enchantez votre arc (ou votre arbalète). Pendant 1 minute, à chaque fois que vous l\'armez, une flèche (ou un carreau) magique apparaît encochée sur sa corde. Personne d\'autre que vous ne peut l\'utiliser et, si vous relâchez la corde sans tirer, la flèche disparaît simplement. Ces projectiles sont magiques et infligent 1d6 dégâts supplémentaires. De plus, vous pouvez utiliser une action bonus afin d\'effectuer une attaque à distance supplémentaire avec l\'arc (ou l\'arbalète).</p>',
    link: '/grimoire/arc-enchant%C3%A9',
    title: 'Arc enchanté',
    level: '5',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un arc)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Arme magique',
      spell: {
        casting_time: '1 action bonus',
        range: 'contact',
        components: 'V, S',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Magicien',
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une arme non magique. Jusqu\'à la fin du sort, elle devient magique et bénéficie d\'un bonus de +1 aux jets d\'attaque et de dégâts.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, le bonus passe à +2, et à +3 si vous utilisez un emplacement de niveau 6 ou plus.</p>',
    link: '/grimoire/arme-magique',
    title: 'Arme magique',
    level: '2',
    casting_time: '1 action bonus',
    range: 'contact',
    components: 'V, S',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Arme sainte',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous brandissez votre arme et l\'investissez du pouvoir de combattre le mal. Jusqu\'à la fin du sort, l\'arme est considérée comme étant une arme magique. Lorsque vous attaquez un mort-vivant ou un fiélon avec cette arme, vous bénéficiez d\'un avantage à vos jets d\'attaque et vous infligez 1d8 dégâts radiants supplémentaires.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 5 ou supérieur, le bonus de dégâts passe à 2d8.</p>',
    link: '/grimoire/arme-sainte',
    title: 'Arme sainte',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Arme spirituelle',
      spell: {
        casting_time: '1 action bonus',
        range: '18 mètres',
        components: 'V, S',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez à portée une arme spectrale flottante qui persiste pendant toute la durée du sort ou jusqu\'à ce que vous le lanciez de nouveau. Lors de l\'incantation, vous pouvez faire une attaque de sort au corps-à-corps contre une créature située dans un rayon de 1,50 mètre autour de l\'arme. L\'attaque inflige des dégâts de force égaux à 1d8 + votre modificateur de caractéristique d\'incantation.</p>\n<p>À votre tour et au prix d\'une action bonus, vous pouvez déplacer l\'arme d\'un maximum de 6 mètres et répéter l\'attaque contre une créature située dans un rayon de 1,50 mètre autour d\'elle.</p>\n<p>L\'arme peut revêtir la forme de votre choix. Les clercs des divinités associées à une arme particulière (tel Thor et son marteau) font en sorte que l\'arme générée ressemble à l\'arme iconique de leur protecteur.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les dégâts augmentent de 1d8 tous les 2 niveaux au-delà du niveau 2.</p>',
    link: '/grimoire/arme-spirituelle',
    title: 'Arme spirituelle',
    level: '2',
    casting_time: '1 action bonus',
    range: '18 mètres',
    components: 'V, S',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Armure du mage',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un bout de cuir tanné)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante qui ne porte pas d\'armure et l\'enveloppez d\'une force magique protectrice jusqu\'à la fin du sort. La CA de base de la cible passe à 13 + son modificateur de Dextérité. Le sort se termine si la cible revêt une armure ou si vous révoquez le sort par une action.</p>',
    link: '/grimoire/armure-du-mage',
    title: 'Armure du mage',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un bout de cuir tanné)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Arrêt du temps',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V',
        duration: 'instantannée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous arrêtez brièvement le cours du temps pour tout le monde sauf vous. Le temps ne s\'écoule plus pour les autres créatures, tandis que vous disposez de 1d4+1  tours d\'affilée, pendant lesquels vous pouvez faire des actions et vous déplacer normalement.</p>\n<p>Ce sort se termine si l\'une des actions que vous effectuez lors de ce laps de temps ou l\'un des effets que vous créez lors de ce laps de temps affecte une créature autre que vous ou un objet porté ou transporté par une créature autre que vous. Le sort se termine également si vous vous éloignez à plus de 300 mètres de l\'endroit où vous l\'avez lancé.</p>',
    link: '/grimoire/arret-du-temps',
    title: 'Arrêt du temps',
    level: '9',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V',
    duration: 'instantannée'
  },
  {
    header: {
      title: 'Aspersion acide',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantannée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous lancez une boule d\'acide. Choisissez une créature à portée, ou deux créatures à portée situées à 1,50 mètre ou moins l\'une de l\'autre. Une cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité, sinon elle subit 1d6 dégâts d\'acide.</p>\n<p>Les dégâts du sort augmentent de 1d6 quand vous atteignez le niveau 5 (2d6), 11 (3d6) et 17 (4d6).</p>',
    link: '/grimoire/aspersion-acide',
    title: 'Aspersion acide',
    level: '0',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantannée'
  },
  {
    header: {
      title: 'Assassin imaginaire',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous puisez dans les cauchemars d\'une créature située à portée et dans votre champ de vision afin de créer une manifestation illusoire de ses pires terreurs, qu\'elle est la seule à voir. La cible doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle le rate, elle est <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> pendant toute la durée du sort. Tant que le sort n\'est pas terminé, la cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse à la fin de chacun de ses tours. Elle subit 4d10 dégâts psychiques à chaque échec. Le sort se termine dès qu\'elle réussit un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou supérieur, les dégâts augmentent de 1d10 par niveau au-delà du niveau 4.</p>',
    link: '/grimoire/assassin-imaginaire',
    title: 'Assassin imaginaire',
    level: '4',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Assistance',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante. Une fois avant la fin du sort, la cible peut lancer 1d4 et ajouter le résultat obtenu au test de caractéristique de son choix. Elle peut lancer le dé avant ou après le test. Le sort se termine alors.</p>',
    link: '/grimoire/assistance',
    title: 'Assistance',
    level: '0',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Augure',
      spell: {
        casting_time: '1 minute',
        range: 'personnelle',
        components: 'V, S, M (bâtonnets, os ou petits objets similaires d\'une valeur minimale de 25 po, portant des marques spéciales)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous lancez des bâtonnets ornés de gemmes ou des os de dragon, tirez des lames de tarot ornementées ou utilisez une autre méthode de divination pour recevoir un présage de la part d\'une entité d\'un autre monde. Ce présage concerne les résultats de la conduite que vous comptez tenir dans les 30 prochaines minutes. C\'est au MJ de choisir l\'un des présages suivants :</p>\n<ul>\n<li>Bonheur pour un résultat positif</li>\n<li>Malheur pour un résultat négatif</li>\n<li>Bonheur et malheur pour un résultat comportant du positif et du négatif</li>\n<li>Rien pour un résultat n\'étant ni positif ni négatif</li>\n</ul>\n<p>Le sort ne tient pas compte d\'une éventuelle modification des circonstances, comme l\'incantation de sorts supplémentaires, ou la perte ou l\'arrivée d\'un compagnon.</p>\n<p>Si vous lancez ce sort à deux reprises ou plus avant un long repos, il y a 25  % de chances par incantation en sus de la première que vous obteniez une prémonition aléatoire au lieu d\'une prémonition fiable. C\'est au MJ de faire ce jet en secret.</p>',
    link: '/grimoire/augure',
    title: 'Augure',
    level: '2',
    casting_time: '1 minute',
    range: 'personnelle',
    components: 'V, S, M (bâtonnets, os ou petits objets similaires d\'une valeur minimale de 25 po, portant des marques spéciales)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Aura de force',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuratiojn'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous désignez jusqu\'à cinq créatures à portée que vous pouvez voir. Vous et les cibles du sort acquérez la résistance aux dégâts d\'acide, de foudre, de feu, de froid et nécrotiques pendant toute la durée du sort. Les créatures ciblées et vous-même bénéficiez également d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> à tous les tests et les jets de sauvegarde de Force.</p>',
    link: '/grimoire/aura-de-force',
    title: 'Aura de force',
    level: '5',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Aura du héros',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 1 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une aura captivante émane de vous dans un rayon de 1,50 mètre. Vous bénéficiez d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> à tous vos tests de Charisme visant les créatures situées dans l\'aura. À la fin du sort, les créatures qui en ont subi l\'influence peuvent faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> d\'Intelligence. En cas de réussite, elles se rendent compte avoir été influencées par magie et elles peuvent, à la discrétion du MJ, en concevoir de l\'hostilité.</p>\n<p>Le rayon d\'action de ce sort double lorsque vous atteignez le niveau 5 (3 mètres), puis le niveau 11 (6 mètres) et enfin au niveau 17 (12 mètres).</p>',
    link: '/grimoire/aura-du-heros',
    title: 'Aura du héros',
    level: '0',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 1 minutes'
  },
  {
    header: {
      title: 'Aura magique de l\'arcaniste',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un petit carré de soie)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous enveloppez la créature ou l\'objet touché d\'une illusion, afin que les sorts de divination révèlent des informations erronées à son propos. La cible du sort doit être une créature consentante ou un objet qui n\'est ni porté ni transporté par une autre créature.</p>\n<p>Lorsque vous lancez le sort, vous choisissez l\'un des effets suivants, ou les deux, qui persistent pendant toute la durée du sort. Si vous lancez ce sort sur la même créature ou le même objet chaque jour pendant 30 jours, en lui attribuant le même effet à chaque fois, l\'illusion persiste jusqu\'à ce que quelqu\'un la dissipe.</p>\n<p><strong>Aura factice</strong>. Vous modifiez la manière dont la cible apparaît vis-à-vis des sorts et effets magiques détectant les auras magiques, comme détection de la magie. Vous pouvez ainsi faire en sorte qu\'un objet magique paraisse dépourvu de magie ou qu\'un objet ordinaire semble magique. Vous pouvez aussi modifier l\'aura magique de la cible de manière à ce qu\'elle paraisse appartenir à l\'école de magie de votre choix. Quand vous conférez cet effet à un objet, vous pouvez faire en sorte que la magie factice se manifeste à toute personne qui manipule l\'objet.</p>\n<p><strong>Masque</strong>. Vous modifiez la manière dont la cible apparaît aux sorts et effets magiques qui détectent les types de créatures, comme le sens divin d\'un paladin ou le déclencheur d\'un sort de <strong>symbole</strong>. Vous choisissez un type de créatures : les autres sorts et effets magiques traitent la cible comme si elle appartenait au type ou à l\'alignement choisi.</p>',
    link: '/grimoire/aura-magique-de-larcaniste',
    title: 'Aura magique de l\'arcaniste',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un petit carré de soie)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Aura sacrée',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (un petit reliquaire d\'une valeur minimum de 1000 po contenant une relique sacrée, comme un bout de la robe d\'un saint ou un morceau de parchemin prélevé sur un texte sacré)',
        duration: 'jusqu\'à 1 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une lumière divine émane de votre personne dans un rayon de 9 mètres et forme un doux halo qui vous enveloppe. Les créatures de votre choix qui se trouvent dans cette zone au moment où vous lancez ce sort émettent une faible lumière dans un rayon de 1,50 mètre. De plus, jusqu\'à la fin du sort, elles ont l\'<a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors des jets de sauvegarde tandis que les autres créatures subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> quand elles effectuent un <a href="/combattre#jets-dattaque">jet d\'attaque</a> contre elles. Quand un fiélon ou un mort-vivant touche une créature affectée avec une attaque au corps-à-corps, l\'aura qui enveloppe la créature flamboie soudain. L\'assaillant doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou se retrouver <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglé</em></a> jusqu\'à la fin du sort.</p>',
    link: '/grimoire/aura-sacree',
    title: 'Aura sacrée',
    level: '8',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (un petit reliquaire d\'une valeur minimum de 1000 po contenant une relique sacrée, comme un bout de la robe d\'un saint ou un morceau de parchemin prélevé sur un texte sacré)',
    duration: 'jusqu\'à 1 minutes'
  },
  {
    header: {
      title: 'Bagou',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Barde',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Jusqu\'à la fin du sort, chaque fois que vous effectuez un test de Charisme, vous pouvez remplacer le nombre obtenu au dé par un 15. De plus, quoi que vous disiez, la magie visant à déterminer si vous dites la vérité vous identifie toujours comme sincère.</p>',
    link: '/grimoire/bagou',
    title: 'Bagou',
    level: '8',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Baies nourricières',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un brin de gui)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un maximum de dix baies apparaissent dans votre main. Elles sont imprégnées de magie pendant une journée. Une créature peut utiliser son action pour manger une baie, ce qui lui rend 1 point de vie et la nourrit pour la journée.</p>\n<p>Les baies perdent leurs propriétés si personne ne les mange dans les 24 heures qui suivent l\'incantation.</p>',
    link: '/grimoire/baies-nourricieres',
    title: 'Baies nourricières',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un brin de gui)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Balisage',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un rayon de lumière frappe une créature de votre choix située à portée. Faites un <a href="/combattre#jets-dattaque">jet d\'attaque</a> de sort à distance contre elle. Si vous le réussissez, elle subit 4d6 dégâts radiants et scintille d\'une faible lumière mystique jusqu\'à la fin de votre prochain tour. D\'ici là et grâce à cette lueur, le prochain <a href="/combattre#jets-dattaque">jet d\'attaque</a> effectué contre elle bénéficie d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a>.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/balisage',
    title: 'Balisage',
    level: '1',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: '1 round'
  },
  {
    header: {
      title: 'Bannissement',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un objet qui répugne à la cible)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Paladin',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez d\'envoyer une créature située dans votre champ de vision dans un autre plan d\'existence. Elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme ou être bannie.</p>\n<p>Si la cible est native du plan d\'existence sur lequel vous vous trouvez, vous l\'exilez dans un demi-plan inoffensif. Elle est <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> tant qu\'elle se trouve là-bas et y reste jusqu\'à la fin du sort. À ce moment, elle réapparaît à l\'endroit qu\'elle a quitté, ou dans l\'emplacement inoccupé le plus proche si son emplacement de départ est occupé.</p>\n<p>Si la cible est originaire d\'un plan d\'existence autre que celui sur lequel vous vous trouvez, une légère détonation accompagne son retour contraint sur son plan d\'origine. Si le sort se termine avant que 1 minute ne se soit écoulée, la cible réapparaît à l\'endroit qu\'elle a quitté, ou dans l\'emplacement inoccupé le plus proche si son emplacement de départ est occupé. Sinon, elle ne revient pas.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou supérieur, vous pouvez viser une créature de plus par niveau au-delà du niveau 4.</p>',
    link: '/grimoire/bannissement',
    title: 'Bannissement',
    level: '4',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un objet qui répugne à la cible)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Barrière de lames',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un mur vertical constitué de lames tournoyantes faites d\'énergie magique et tranchantes comme des rasoirs. Le mur apparaît à portée et persiste pour toute la durée du sort. Vous pouvez créer un mur droit d\'un maximum de 30 mètres de long, 6 mètres de haut et 1,50 mètre d\'épaisseur, ou un mur circulaire d\'un maximum de 18  mètres de diamètre, 6 mètres de haut et 1,50 mètre d\'épaisseur. Le mur offre un abri important aux créatures qui se trouvent derrière lui, et son espace est traité comme un terrain difficile.</p>\n<p>Quand une créature pénètre dans la zone du mur pour la première fois au cours de son tour ou quand elle commence son tour dans cette zone, elle doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle le rate, elle subit 6d10 dégâts tranchants ; si elle le réussit, elle en subit seulement la moitié.</p>',
    link: '/grimoire/barriere-de-lames',
    title: 'Barrière de lames',
    level: '6',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minute'
  },
  {
    header: {
      title: 'Bénédiction',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un peu d\'eau bénite à asperger)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous bénissez jusqu\'à trois créatures de votre choix situées à portée. Quand une cible fait un <a href="/combattre#jets-dattaque">jet d\'attaque</a> ou <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">de sauvegarde</a> avant la fin du sort, elle lance 1d4 et ajoute le résultat obtenu au <a href="/combattre#jets-dattaque">jet d\'attaque</a> ou <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">de sauvegarde</a>.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous pouvez affecter une créature de plus par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/benediction',
    title: 'Bénédiction',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un peu d\'eau bénite à asperger)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Bénédiction héroïque',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous désignez jusqu\'à 5 créatures à portée et que vous pouvez voir. Les cibles et vous-même bénéficiez d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> au <a href="/combattre#jets-dattaque">jet d\'attaque</a> sur la première attaque de chacun de vos tours pour toute la durée du sort.</p>',
    link: '/grimoire/benediction-heroique',
    title: 'Bénédiction héroïque',
    level: '3',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Blessure',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Faites une attaque de sort au corps-à-corps contre une créature située à une distance inférieure ou égale à votre allonge. Si vous la touchez, elle subit 3d10 dégâts nécrotiques.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les dégâts augmentent de 1d10 par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/blessure',
    title: 'Blessure',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Bouche magique',
      spell: {
        casting_time: '1 minute',
        range: '9 mètres',
        components: 'V, S, M (un rayon de miel et de la poussière de jade d\'une valeur de 10  po, que le sort consume)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous implantez un message dans un objet situé à portée. On entend le message dès que les conditions qui le déclenchent sont remplies. Choisissez un objet situé dans votre champ de vision qui n\'est ni porté ni transporté par une autre créature. Prononcez ensuite le message, qui doit comprendre au maximum vingt-cinq mots, mais peut se répéter pendant un maximum de 10 minutes. Enfin, déterminez les circonstances dans lesquelles le message s\'active.</p>\n<p>Quand les conditions de déclenchement sont remplies, une bouche magique apparaît sur l\'objet et énonce le message avec la même voix que vous et au volume où vous l\'avez prononcé. Si l\'objet choisi possède une bouche ou quelque chose qui y ressemble (comme la bouche d\'une statue), la bouche magique apparaît de manière à donner l\'impression que les paroles sortent des lèvres figurées sur l\'objet. Lors de l\'incantation, vous pouvez décider que le sort se termine une fois le message transmis ou qu\'il reste actif et répète le message chaque fois que les conditions de déclenchement sont remplies.</p>\n<p>Ces dernières peuvent être aussi génériques ou spécifiques que vous le désirez, mais elles doivent se baser sur des données visuelles ou audibles, perceptibles dans un rayon de 9 mètres autour de l\'objet. Par exemple, vous pouvez ordonner à la bouche de parler dès qu\'une créature approche à 9 mètres ou moins de l\'objet ou quand une cloche d\'argent retentit dans un rayon de 9 mètres.</p>',
    link: '/grimoire/bouche-magique',
    title: 'Bouche magique',
    level: '2',
    casting_time: '1 minute',
    range: '9 mètres',
    components: 'V, S, M (un rayon de miel et de la poussière de jade d\'une valeur de 10  po, que le sort consume)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Bouclier',
      spell: {
        casting_time: '1 réaction à effectuer lorsque vous êtes touché par une attaque ou un sort de projectile magique',
        range: 'personnelle',
        components: 'V, S',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une barrière invisible faite de force magique apparaît autour de vous et vous protège. Jusqu\'au début de votre prochain tour, vous obtenez un bonus de +5 à la CA, y compris contre l\'attaque qui a déclenché l\'incantation du sort, et vous ne subissez aucun dégât de la part du sort <em>projectile magique</em>.</p>',
    link: '/grimoire/bouclier',
    title: 'Bouclier',
    level: '1',
    casting_time: '1 réaction à effectuer lorsque vous êtes touché par une attaque ou un sort de projectile magique',
    range: 'personnelle',
    components: 'V, S',
    duration: '1 round'
  },
  {
    header: {
      title: 'Bouclier de feu',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (un morceau de phosphore ou une luciole)',
        duration: '10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>De fines volutes de flammes enveloppent votre corps pendant toute la durée du sort, émettant une lumière vive dans un rayon de 3 mètres et une lumière faible dans un rayon additionnel de 3 mètres. Vous pouvez mettre prématurément un terme au sort en utilisant une action.</p>\n<p>Les flammes vous offrent un bouclier chaud ou froid, comme bon vous semble. Le bouclier chaud vous apporte une résistance contre les dégâts de froid, le bouclier froid une résistance contre les dégâts de feu.</p>\n<p>De plus, quand une créature située dans un rayon de 1,50 mètre autour de vous vous touche avec une attaque au corps-à-corps, le bouclier génère une gerbe de flammes. Si le bouclier est chaud, il inflige 2d8 dégâts de feu à l\'assaillant, s\'il est froid, il lui inflige 2d8 dégâts de froid.</p>',
    link: '/grimoire/bouclier-de-feu',
    title: 'Bouclier de feu',
    level: '4',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (un morceau de phosphore ou une luciole)',
    duration: '10 minutes'
  },
  {
    header: {
      title: 'Bouclier de la foi',
      spell: {
        casting_time: '1 action bonus',
        range: '18 mètres',
        components: 'V, S, M (un petit parchemin avec un extrait de texte sacré)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un champ scintillant apparaît autour d\'une créature de votre choix située à portée et lui confère un bonus de +2 à la CA pendant toute la durée du sort.</p>',
    link: '/grimoire/bouclier-de-la-foi',
    title: 'Bouclier de la foi',
    level: '1',
    casting_time: '1 action bonus',
    range: '18 mètres',
    components: 'V, S, M (un petit parchemin avec un extrait de texte sacré)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Bouffée de poison',
      spell: {
        casting_time: '1 action',
        range: '3 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Druide',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tendez la main en direction d\'une créature située à portée et dans votre champ de vision et projetez une bouffée de gaz toxique sortie de votre paume. La créature doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou subir 1d12 dégâts de poison.</p>\n<p>Les dégâts du sort augmentent de 1d12 quand vous atteignez le niveau 5 (2d12), 11 (3d12) et 17 (4d12).</p>',
    link: '/grimoire/bouffee-de-poison',
    title: 'Bouffée de poison',
    level: '0',
    casting_time: '1 action',
    range: '3 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Boule de feu',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S, M (une petite boule de guano de chauve-souris et du soufre)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une traînée luisante part de votre doigt tendu et file vers un point de votre choix situé à portée et dans votre champ de vision, où elle explose dans une gerbe de flammes grondantes. Chaque créature située dans une sphère de 6 mètres de rayon centrée sur ce point doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 8d6 dégâts de feu, les autres la moitié seulement.</p>\n<p>Le feu s\'étend en contournant les angles. Il embrase les objets inflammables de la zone, à moins que quelqu\'un ne les porte ou ne les transporte.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/boule-de-feu',
    title: 'Boule de feu',
    level: '3',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S, M (une petite boule de guano de chauve-souris et du soufre)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Boule de feu à explosion retardée',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S, M (une petite boule de guano de chauve-souris et du soufre)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un rayon de lumière jaune jaillit de votre doigt tendu et se condense pour former une bille luisante en un point de votre choix situé à portée pendant toute la durée du sort. Quand le sort se termine, soit parce que votre concentration se brise, soit parce que vous y mettez volontairement un terme, la bille se dilate dans un grondement sourd et explose en une gerbe de feu qui s\'étend en franchissant les angles éventuels. Toutes les créatures situées dans une sphère de 6 mètres de rayon centrée sur le point où se trouvait la bille doivent faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent un montant de dégâts de feu égal au total de dégâts accumulés (voir plus loin), les autres la moitié seulement.</p>\n<p>À la base, le sort inflige 12d6 dégâts de feu. À la fin de votre tour, si la bille n\'a pas encore explosé, ces dégâts augmentent de 1d6.</p>\n<p>Si quelqu\'un touche la bille avant la fin de l\'intervalle, il doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. S\'il échoue, le sort se termine immédiatement et la bille explose. S\'il réussit, il peut lancer la bille à une distance maximale de 12 mètres. Si elle touche un objet solide ou une créature, le sort se termine et la bille explose.</p>\n<p>Les flammes endommagent les objets qui se trouvent dans la zone et embrasent les objets inflammables qui ne sont ni portés ni transportés.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou supérieur, les dégâts de base augmentent de 1d6 par niveau au-delà du niveau 7.</p>',
    link: '/grimoire/boule-de-feu-a-explosion-retardee',
    title: 'Boule de feu à explosion retardée',
    level: '7',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S, M (une petite boule de guano de chauve-souris et du soufre)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Bourrasque',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (ligne de 18 mètres)',
        components: 'V, S, M (une graine de légume)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une zone de fort vent de 18 mètres de long sur 3 mètres de large souffle depuis votre position dans la direction de votre choix pendant toute la durée du sort. Chaque créature qui débute son tour dans la zone doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force, sans quoi elle est rejetée de 4,50 mètres à l\'opposé de vous, dans la direction du vent.</p>\n<p>Une créature qui se trouve dans la zone doit dépenser 60 centimètres de mouvement pour se rapprocher de vous de 30 centimètres.</p>\n<p>La bourrasque disperse les gaz et les vapeurs et éteint les bougies, les torches et autres flammes nues similaires dans la zone. Les flammes protégées, par une lanterne par exemple, s\'agitent follement et ont 50 % de chance de s\'éteindre.</p>\n<p>Vous pouvez changer la direction dans laquelle souffle la bourrasque au moyen d\'une action bonus à chacun de vos tours jusqu\'à la fin du sort.</p>',
    link: '/grimoire/bourrasque',
    title: 'Bourrasque',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle (ligne de 18 mètres)',
    components: 'V, S, M (une graine de légume)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Briser',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un éclat de mica)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un bruit retentit soudain avec une intensité douloureuse, à partir d\'un point situé à portée. Chaque créature située dans une sphère de 3 mètres de rayon centrée sur ce point doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Les créatures qui le ratent subissent 3d8 dégâts de tonnerre, les autres la moitié seulement. Une créature faite de matière inorganique, comme de la pierre, du cristal ou du métal subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> sur ce <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>\n<p>Un objet non magique que personne ne porte ni ne transporte subit aussi ces dégâts s\'il se trouve dans la zone du sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/briser',
    title: 'Briser',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un éclat de mica)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Brûlure du juste',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Votre arme se met à briller d\'une lumière intense de pure radiance. Elle émet une lumière vive dans un rayon de 4,50 mètres et une lumière faible sur 4,50 mètres supplémentaires. La lumière est semblable à la lumière du soleil.</p>\n<p>À chaque fois que vous blessez une créature avec cette arme pendant la durée du sort, elle émet un violent flash lumineux qui inflige 1d6 dégâts radiants à tous vos adversaires dans un rayon de 1,50 mètre autour de vous et double momentanément le rayon d\'illumination de l\'arme. Les créatures affectées peuvent faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution pour ignorer les dégâts. Les morts-vivants subissent 2d6 points de dégâts et la moitié seulement en cas de <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> réussi.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de sort de niveau 2 ou supérieur, les dégâts augmentent de 1d6 pour chaque niveau au-delà du niveau 1.</p>',
    link: '/grimoire/brulure-du-juste',
    title: 'Brûlure du juste',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Cage de force',
      spell: {
        casting_time: '1 action',
        range: '30 mètres',
        components: 'V, S, M (poussière de rubis d\'une valeur de 1 500 po)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une prison immobile et invisible, en forme de cube et faite de force magique, se forme soudain autour d\'une zone de votre choix située à portée. Ce peut être une cage ou une boîte hermétique, à votre guise.</p>\n<ul>\n<li>Une prison en forme de cage peut faire un maximum de 6 mètres d\'arête et dispose de barreaux de 1 centimètre d\'épaisseur placés à 1 centimètre d\'intervalle.</li>\n<li>Une prison en forme de boîte peut faire un maximum de 3 mètres d\'arête et forme une barrière pleine qui empêche la matière de passer. Elle bloque aussi le passage des sorts lancés vers l\'intérieur ou l\'extérieur.</li>\n</ul>\n<p>Quand vous lancez ce sort, chaque créature qui se trouve entièrement au sein de la zone affectée se retrouve prise au piège. Une créature qui s\'y trouve seulement en partie ou qui s\'avère trop grande pour y tenir est expulsée vers l\'extérieur de la zone jusqu\'à ce qu\'elle la quitte complètement.</p>\n<p>Une créature enfermée dans la cage ne peut pas la quitter par des moyens non-magiques. Si elle tente d\'utiliser la téléportation ou les déplacements interplanaires pour s\'échapper, elle doit d\'abord effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme. Si elle le réussit, elle peut utiliser cette magie pour fuir, sinon elle ne parvient pas à quitter la cage, et l\'utilisation du sort ou de l\'effet est gaspillée. La cage s\'étend aussi sur le plan éthéré, ce qui bloque les déplacements éthérés.</p>\n<p>La <em>dissipation de la magie</em> est sans effet sur ce sort.</p>',
    link: '/grimoire/cage-de-force',
    title: 'Cage de force',
    level: '7',
    casting_time: '1 action',
    range: '30 mètres',
    components: 'V, S, M (poussière de rubis d\'une valeur de 1 500 po)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Caresse du vampire',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Le simple contact de votre main enveloppée d\'ombres peut siphonner la force vitale d\'autrui pour soigner vos propres plaies. Faites une attaque de sort au corps-à-corps contre une créature située à une distance inférieure ou égale à votre allonge. Si vous touchez, elle subit 3d6 dégâts nécrotiques et vous récupérez un total de points de vie égal à la moitié des dégâts infligés. Vous pouvez dépenser votre action à chacun de vos tours pour répéter cette attaque jusqu\'à la fin du sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/caresse-du-vampire',
    title: 'Caresse du vampire',
    level: '3',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Catalepsie',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un petit morceau de linceul)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous placez une créature vivante consentante en état cataleptique qu\'il est impossible de distinguer d\'un véritable état de mort par des moyens normaux.</p>\n<p>Le sujet est <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglé</em></a> et <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconscient</em></a>, incapable de bouger. Il ne ressent aucune blessure ou autre mauvais traitement et aucune réaction corporelle ne se produit, comme si le sujet était réellement mort. Toutefois, les dégâts sont encaissés normalement. Si la cible était malade ou <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonnée</em></a> au moment de l\'incantation, ou si un poison est introduit dans son corps durant l\'action du sort, le poison est retardé pour la durée du sort. Le poison ou la maladie fera à nouveau pleinement effet à la fin du sort.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau supérieur, sa durée augmente et le sort s\'apparente alors à une longue hibernation (la cible ne vieillit plus pendant cette période) : un jour au niveau 4, une semaine au niveau 5, un mois au niveau 6, un an au niveau 7, dix ans au niveau 8 et enfin jusqu\'à un siècle au niveau 9. Lorsqu\'elle sort de catalepsie, la cible subit un niveau d\'épuisement par niveau du sort au-delà du niveau 3 (jusqu\'à un maximum de 5). Au niveau 9, la cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de constitution difficulté 8 + 1 tous les dix ans écoulés lorsqu\'elle sort du sommeil, ou mourir immédiatement.</p>',
    link: '/grimoire/catalepsie',
    title: 'Catalepsie',
    level: '3',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un petit morceau de linceul)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Cécité/Surdité',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous pouvez rendre un ennemi sourd ou aveugle. Choisissez une créature autre que vous qui se situe à portée et dans votre champ de vision. Elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Si elle échoue, elle est soit <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a>, soit <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdie</em></a> (à vous de choisir) pendant toute la durée du sort. Elle a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution à la fin de chacun de ses tours, le sort se terminant si elle le réussit.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, vous pouvez viser une créature de plus par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/cecite-surdite',
    title: 'Cécité/Surdité',
    level: '2',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Cercle de mort',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S, M (la poudre d\'une perle noire broyée d\'une valeur minimale de 500 po)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une sphère d\'énergie négative s\'étend dans un rayon de 18 mètres à partir d\'un point situé à portée. Chaque créature située dans la sphère doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui échouent subissent 8d6 dégâts nécrotiques, les autres la moitié seulement.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, les dégâts augmentent de 2d6 par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/cercle-de-mort',
    title: 'Cercle de mort',
    level: '6',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S, M (la poudre d\'une perle noire broyée d\'une valeur minimale de 500 po)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Cercle de téléportation',
      spell: {
        casting_time: '1 minute',
        range: '3 mètres',
        components: 'V, M (des craies et des encres rares contenant des extraits de pierres précieuses pour une valeur de 50 po, que le sort consume)',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Lorsque vous lancez ce sort, vous tracez un cercle de 3 mètres de diamètre au sol et y inscrivez des symboles qui relient l\'endroit où vous vous trouvez actuellement à un cercle de téléportation permanent de votre choix dont vous connaissez la séquence de symboles et qui se trouve sur le même plan d\'existence que vous. Un portail scintillant s\'ouvre dans le cercle que vous avez tracé et reste ouvert jusqu\'à la fin de votre prochain tour. Toute créature qui franchit ce portail apparaît instantanément dans un rayon de 1,50 mètre autour du cercle de destination ou dans l\'espace inoccupé le plus proche si le reste est occupé.</p>\n<p>Nombre de temples majeurs, de guildes et d\'autres lieux d\'importance possèdent des cercles de téléportation permanents tracés quelque part dans leur enceinte. Chacun de ces cercles utilise une séquence de symboles uniques : une série de runes magiques disposées selon un motif particulier. Lorsque vous apprenez à lancer ce sort, vous apprenez la séquence associée à deux destinations situées sur le plan matériel et déterminées par le MJ. Vous pouvez apprendre d\'autres séquences de symboles au cours de vos aventures. Pour en mémoriser une, vous devez l\'étudier pendant 1 minute.</p>\n<p>Vous pouvez créer un cercle de téléportation permanent en lançant ce sort au même endroit tous les jours pendant un an. Vous n\'avez pas besoin d\'utiliser le cercle pour vous téléporter quand vous lancez ce sort pour cela.</p>',
    link: '/grimoire/cercle-de-teleportation',
    title: 'Cercle de téléportation',
    level: '5',
    casting_time: '1 minute',
    range: '3 mètres',
    components: 'V, M (des craies et des encres rares contenant des extraits de pierres précieuses pour une valeur de 50 po, que le sort consume)',
    duration: '1 round'
  },
  {
    header: {
      title: 'Cercle magique',
      spell: {
        casting_time: '1 minute',
        range: '3 mètres',
        components: 'V, S, M (eau bénite ou poudre d\'argent et de fer d\'une valeur minimale de 100 po, que le sort consume)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Magicien',
          'Paladin',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un cylindre d\'énergie magique de 3 mètres de rayon pour 6 mètres de haut, centré sur un point au sol situé à portée et dans votre champ de vision. Des runes luisantes apparaissent là où le cylindre touche le sol ou une autre surface.</p>\n<p>Choisissez l\'un des types de créatures suivants : célestes, élémentaires, fées, fiélons ou morts-vivants. Le cercle affecte une créature du type choisi de la manière suivante :</p>\n<ul>\n<li>La créature ne peut pas entrer de son plein gré dans le cylindre par des moyens non magiques. Si elle tente d\'utiliser la téléportation ou le voyage extraplanaire pour y pénétrer, elle doit auparavant réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme.</li>\n<li>La créature subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets d\'attaque contre les créatures se trouvant dans le cylindre.</li>\n<li>Les créatures situées dans le cylindre ne peuvent pas être <em>charmées</em>, <em>terrorisées</em> ou <em>possédées</em> par la créature.</li>\n</ul>\n<p>Quand vous lancez ce sort, vous pouvez décider que sa magie agira à l\'envers, empêchant les créatures du type choisi de quitter le cercle et protégeant contre elles les individus situés à l\'extérieur.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, la durée du sort augmente d\'une heure par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/cercle-magique',
    title: 'Cercle magique',
    level: '3',
    casting_time: '1 minute',
    range: '3 mètres',
    components: 'V, S, M (eau bénite ou poudre d\'argent et de fer d\'une valeur minimale de 100 po, que le sort consume)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Chaîne d\'éclairs',
      spell: {
        casting_time: '1 action',
        range: '450 mètres',
        components: 'V, S, M (un éclat d\'ambre, de verre ou de cristal, trois épingles en argent et un morceau de fourrure)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un arc électrique qui file vers une cible de votre choix, située à portée et dans votre champ de vision. Trois éclairs bondissent ensuite de cette cible sur un maximum de trois autres cibles qui doivent toutes se trouver dans un rayon de 9 mètres autour de la première. Une cible peut être une créature ou un objet et ne peut recevoir qu\'un seul éclair.</p>\n<p>Chaque cible doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité et subit 10d8 dégâts de foudre en cas d\'échec, la moitié en cas de réussite.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, un éclair de plus rebondit de la première cible vers une autre pour chaque niveau au-delà du niveau 6.</p>',
    link: '/grimoire/chaine-declairs',
    title: 'Chaîne d\'éclairs',
    level: '6',
    casting_time: '1 action',
    range: '450 mètres',
    components: 'V, S, M (un éclat d\'ambre, de verre ou de cristal, trois épingles en argent et un morceau de fourrure)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Champ antimagie',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (sphère de 3 mètres de rayon)',
        components: 'V, S, M (une pincée de poudre de fer ou de limaille)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Clerc',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une sphère d\'antimagie invisible de 3 mètres de rayon vous entoure. La zone qu\'elle englobe est coupée de l\'énergie magique qui imprègne le multivers. En son sein, il est impossible de lancer un sort, les créatures invoquées disparaissent et même les objets magiques deviennent ordinaires. La sphère reste centrée sur vous et se déplace avec vous jusqu\'à la fin du sort.</p>\n<p>Les sorts et autres effets magiques, en dehors de ceux émanant d\'un artefact ou d\'une divinité, sont supprimés au sein de la sphère et ne peuvent pénétrer son espace. Un emplacement utilisé pour lancer un sort ainsi supprimé est tout de même consommé. L\'effet ne fonctionne pas tant qu\'il est supprimé, mais le temps passé sous suppression est tout de même décompté de sa durée d\'efficacité.</p>\n<p><strong>Effets visant une cible</strong>. Les sorts et autres effets magiques visant une créature ou un objet situé dans la sphère, comme <em>projectile magique</em> ou <em>charme-personne</em>, n\'ont aucun effet sur cette cible.</p>\n<p><strong>Zones de magie</strong>. La zone d\'effet d\'un sort ou d\'un effet magique, comme celle d\'une boule de feu, ne peut pas s\'étendre au sein de la sphère. Si la sphère recouvre une zone de magie existante, l\'effet de cette dernière est supprimé dans la partie recouverte par la sphère. Par exemple, les flammes d\'un mur de feu sont supprimées au sein de la sphère, créant un trou dans le mur si la partie recouverte est assez grande.</p>\n<p><strong>Sorts</strong>. Tout sort ou effet magique actif sur une créature ou un objet est supprimé dès qu\'elle ou il se trouve à l\'intérieur et pendant tout le temps qu\'elle ou il y reste.</p>\n<p><strong>Objets magiques</strong>. Les propriétés et les pouvoirs d\'un objet magique sont supprimés une fois au sein de la sphère. Par exemple, une épée longue +1 située dans la sphère fonctionne comme une épée longue ordinaire.</p>\n<p>Les propriétés et les pouvoirs d\'une arme magique sont supprimés si son utilisateur la manie contre une cible située dans la sphère ou s\'il se trouve dans la sphère. Si une arme ou une munition magique quitte entièrement la sphère (par exemple, si vous tirez une flèche magique ou projetez une lance magique en dehors de la sphère), la suppression de magie cesse d\'affecter l\'objet dès qu\'il quitte la sphère.</p>\n<p><strong>Déplacement magique</strong>. La téléportation et les voyages planaires échouent systématiquement au sein de la sphère, que cette dernière serve de destination ou de point de départ à ce type de déplacement. Un portail menant en un autre lieu, sur un autre monde ou sur un autre plan d\'existence se ferme temporairement tant qu\'il est englobé dans la sphère, de même que l\'ouverture sur un espace extradimensionnel telle celle créée par le sort <em>corde enchantée</em>.</p>\n<p><strong>Créatures et objets</strong>. Une créature ou un objet invoqués ou créés par magie disparaissent temporairement si la sphère les recouvre. Ils réapparaissent instantanément dès que l\'espace qu\'ils occupent ne se trouve plus au sein de la sphère.</p>\n<p><strong>Dissipation de la magie</strong>. Les sorts et les effets magiques comme <em>dissipation de la magie</em> n\'ont aucun effet sur la sphère. De même, les sphères issues de divers sorts de <em>champ antimagie</em> ne s\'annulent pas les unes les autres.</p>',
    link: '/grimoire/champ-antimagie',
    title: 'Champ antimagie',
    level: '8',
    casting_time: '1 action',
    range: 'personnelle (sphère de 3 mètres de rayon)',
    components: 'V, S, M (une pincée de poudre de fer ou de limaille)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Changement de forme',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (un diadème de jade d\'une valeur minimale de 1 500 po, que vous devez coiffer avant de lancer le sort)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Druide',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous prenez la forme d\'une créature différente pendant toute la durée du sort. Vous pouvez revêtir l\'apparence de n\'importe quelle créature dotée d\'un indice de dangerosité inférieur ou égal à votre niveau. En revanche, vous ne pouvez pas vous changer en une créature artificielle ni en mort-vivant, et vous devez avoir vu au moins une fois la créature que vous imitez. Vous vous changez en un spécimen ordinaire de cette créature, sans niveau de classe et sans l\'aptitude incantations.</p>\n<p>Votre profil technique est remplacé par celui de la créature choisie, mais vous conservez votre alignement et vos valeurs d\'Intelligence, de Sagesse et de Charisme. Vous conservez également vos compétences et vos maîtrises de jet de sauvegarde, en plus de gagner celles de la créature. Si elle possède les mêmes maîtrises que vous, mais que son bonus est plus élevé, utilisez-le à la place du vôtre. Vous ne pouvez pas utiliser les actions d\'antre ni les actions légendaires de la créature.</p>\n<p>Vous adoptez les dés de vie et les points de vie de votre nouvelle forme. Quand vous reprenez votre forme initiale, vous revenez au nombre de points de vie qui était le vôtre avant de vous transformer. Si vous reprenez votre forme initiale parce que vous êtes tombé à 0 point de vie, les dégâts en surplus sont déduits de vos points de vie normaux. Tant que ces dégâts ne font pas tomber les points de vie de votre forme initiale à 0, vous n\'êtes pas <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconscient</em></a>.</p>\n<p>Vous conservez vos aptitudes de race, de classe et autre, et vous êtes toujours en mesure de les utiliser, à condition que votre nouvelle forme soit physiquement capable de le faire. Vous ne pouvez pas utiliser vos sens spéciaux (comme la vision dans le noir), à moins que votre nouvelle forme n\'en soit aussi dotée. Vous pouvez parler uniquement si votre nouvelle forme en est normalement capable.</p>\n<p>Quand vous vous transformez, vous choisissez si votre équipement tombe au sol, s\'il fusionne avec votre nouvelle forme ou si cette nouvelle forme le porte sur elle, auquel cas il fonctionne normalement. C\'est au MJ de déterminer si la nouvelle forme peut porter une pièce d\'équipement, en fonction de sa taille et de sa morphologie. Votre équipement ne change pas de forme ni de taille pour s\'accorder à votre nouvelle forme ; si cette dernière ne peut s\'en accommoder, l\'équipement ou certaines pièces d\'équipement tombent au sol ou fusionnent avec votre nouvelle silhouette. L\'équipement fusionné ne génère aucun effet.</p>\n<p>Pendant la durée du sort, vous pouvez utiliser votre action pour prendre une nouvelle forme répondant aux mêmes critères et aux mêmes règles que précédemment, à une exception : si votre nouvelle forme possède plus de points de vie que la précédente, votre nombre de points de vie reste tel qu\'il était.</p>',
    link: '/grimoire/changement-de-forme',
    title: 'Changement de forme',
    level: '9',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (un diadème de jade d\'une valeur minimale de 1 500 po, que vous devez coiffer avant de lancer le sort)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Changement de plan',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un diapason de métal valant au moins 250 po, harmonisé avec un plan d\'existence donné)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous et un maximum de huit autres créatures consentantes vous donnez la main pour former un cercle, et êtes transportés sur un autre plan d\'existence. Vous pouvez spécifier une destination en termes génériques, comme le nom d\'une cité, d\'une région ou d\'un endroit spécifique dans l\'un des plans. Vous apparaissez alors à cet endroit ou à proximité. C\'est au MJ de décider l\'endroit exact de votre arrivée.</p>\n<p>Sinon, si vous connaissez la séquence de glyphes magiques d\'un cercle de téléportation présent sur un autre plan d\'existence, ce sort peut vous conduire dans ce cercle. S\'il est trop étroit pour accueillir toutes les créatures qui voyagent avec vous, les créatures en trop apparaissent dans les emplacements inoccupés les plus proches du cercle.</p>\n<p>Vous pouvez aussi utiliser ce sort pour bannir une créature non consentante sur un autre plan. Choisissez une créature à votre portée et faites une attaque de sort au corps-à-corps contre elle. Si vous touchez, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme ou être transporté en un endroit aléatoire du plan d\'existence que vous nommez. Une fois à cet endroit, c\'est à elle de trouver un moyen de rentrer sur son plan d\'origine.</p>',
    link: '/grimoire/changement-de-plan',
    title: 'Changement de plan',
    level: '7',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un diapason de métal valant au moins 250 po, harmonisé avec un plan d\'existence donné)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Charme-personne',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez de charmer un humanoïde se trouvant à portée et dans votre champ de vision. Il doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, pour lequel il dispose d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> si vous ou vos compagnons êtes actuellement en train de le combattre. S\'il rate son test, il est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a> par vous jusqu\'à la fin du sort ou jusqu\'à ce que vous ou vos compagnons lui fassiez du mal. La créature <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> vous considère comme un ami. Quand le sort se termine, elle sait que vous l\'avez charmée.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous pouvez charmer une créature de plus par niveau au-delà du niveau 1. Toutes les cibles doivent se trouver à 9 mètres ou moins les unes des autres lorsque vous lancez le sort.</p>',
    link: '/grimoire/charme-personne',
    title: 'Charme-personne',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Chauffer le métal',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un bout de fer et une flamme)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez un objet manufacturé en métal, comme une arme métallique ou une armure métallique lourde ou intermédiaire. Il doit être situé à portée et dans votre champ de vision et se met alors à luire d\'un rouge incandescent. Une créature en contact physique avec l\'objet reçoit 2d8 dégâts de feu lorsque vous lancez le sort. Vous pouvez utiliser une action bonus à chacun de vos tours suivants jusqu\'à la fin du sort pour infliger de nouveau ces dégâts.</p>\n<p>Si une créature tient l\'objet qui lui inflige des dégâts ou le porte sur elle, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution, sans quoi elle le lâche, si elle le peut. Si elle le conserve, elle est affectée par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets d\'attaque et des tests de caractéristique jusqu\'au début de votre prochain tour.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/chauffer-le-metal',
    title: 'Chauffer le métal',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un bout de fer et une flamme)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Chien de garde',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un petit sifflet en argent, un éclat d\'os et une ficelle)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invoaction'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez un chien de garde fantomatique dans un emplacement inoccupé situé à portée et dans votre champ de vision. Il reste là pendant toute la durée du sort ou jusqu\'à ce que vous le renvoyiez par une action ou que vous vous éloigniez à plus de 30 mètres de lui.</p>\n<p>Le chien est <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> pour tout le monde sauf pour vous, et il est impossible de le blesser. Il se met à aboyer dès qu\'une créature de taille P ou supérieure arrive à 9 mètres de lui sans prononcer d\'abord le mot de passe que vous avez choisi lors de l\'incantation. Le chien perçoit les créatures <em>invisibles</em> et voit ce qui se passe sur le plan éthéré. Il ignore les illusions.</p>\n<p>Au début de votre tour, le chien tente de mordre une créature qui vous est hostile, située dans un rayon de 1,50 mètre autour de lui. Son bonus d\'attaque est égal à votre modificateur de caractéristique d\'incantation + votre bonus de maîtrise. S\'il touche, il inflige 4d8 dégâts perforants.</p>',
    link: '/grimoire/chien-de-garde',
    title: 'Chien de garde',
    level: '4',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un petit sifflet en argent, un éclat d\'os et une ficelle)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Choc des titans',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous défiez un adversaire à portée. Tant que vous n\'attaquez que cet adversaire, vous bénéficiez d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> à votre première attaque à chacun de vos tours.</p>',
    link: '/grimoire/choc-des-titans',
    title: 'Choc des titans',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Clairvoyance',
      spell: {
        casting_time: '10 minutes',
        range: '1,5 kilomètres',
        components: 'V, S, M (un focaliseur d\'une valeur minimale de 100 po, soit une corne incrustée de pierreries pour l\'ouïe, soit un œil de verre pour la vue)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un organe sensoriel <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> à portée dans un endroit qui vous est familier (un endroit où vous vous êtes déjà rendu ou que vous avez déjà vu) ou dans un endroit évident qui ne vous est pas familier (comme de l\'autre côté d\'une porte, derrière un angle de mur, dans un bosquet...). L\'organe reste là pendant toute la durée du sort. Il est impossible de l\'attaquer ou d\'interagir avec.</p>\n<p>Vous choisissez la vue ou l\'ouïe au moment où vous lancez le sort. Vous pouvez alors utiliser le sens choisi à travers l\'organe comme si vous occupiez son emplacement. Vous pouvez dépenser une action pour passer de la vue à l\'ouïe ou inversement.</p>\n<p>Une créature capable de voir l\'organe sensoriel (en bénéficiant par exemple de voir l\'<a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> ou de <em>vision parfaite</em>) le perçoit comme un orbe lumineux intangible de la taille de votre poing.</p>',
    link: '/grimoire/clairvoyance',
    title: 'Clairvoyance',
    level: '3',
    casting_time: '10 minutes',
    range: '1,5 kilomètres',
    components: 'V, S, M (un focaliseur d\'une valeur minimale de 100 po, soit une corne incrustée de pierreries pour l\'ouïe, soit un œil de verre pour la vue)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Clignotement',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, vous lancez 1d20 à la fin de chacun de vos tours. Sur un 11 ou plus, vous disparaissez de votre plan d\'existence actuel et apparaissez sur le plan éthéré (si vous vous trouviez déjà là, le sort échoue et l\'incantation est gaspillée). Au début de votre tour suivant et quand le sort se termine alors que vous vous trouvez sur le plan éthéré, vous retournez sur un emplacement inoccupé de votre choix que vous pouvez voir dans un rayon de 3 mètres autour de l\'emplacement dont vous avez disparu. S\'il n\'y a pas d\'emplacement disponible dans ce rayon, vous apparaissez dans l\'espace inoccupé le plus proche (choisi au hasard s\'il y en a plusieurs à égale distance). Vous pouvez révoquer ce sort par une action.</p>\n<p>Tant que vous êtes sur le plan éthéré, vous voyez et entendez ce qui se passe sur le plan d\'où vous venez, qui apparaît sous forme d\'ombres grises, mais votre vision ne porte pas au-delà de 18 mètres. Vous pouvez seulement affecter des créatures se trouvant sur le plan éthéré et elles sont les seules à pouvoir vous affecter. Les créatures qui ne se trouvent pas sur ce plan ne peuvent ni vous percevoir, ni interagir avec vous, à moins qu\'elles ne disposent d\'un pouvoir le leur permettant.</p>',
    link: '/grimoire/clignotement',
    title: 'Clignotement',
    level: '3',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Clone',
      spell: {
        casting_time: '1 heure',
        range: 'contact',
        components: 'V, S, M (un diamant valant au moins 1000 po et un cube d\'au moins 2,5 centimètres d\'arête de chair de la créature à cloner, le sort consommant ces deux composantes, ainsi qu\'un réceptacle d\'une valeur minimale de 2000 po qui dispose d\'un couvercle susceptible d\'être scellé, et assez grand pour contenir une créature de taille M, comme une grande urne, un cercueil, un cavité remplie de boue creusée dans la terre ou un récipient de cristal rempli d\'eau salée)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort génère la réplique inerte d\'une créature vivante, pour la protéger de la mort. Le clone se forme au sein d\'un réceptacle scellé et grandit jusqu\'à atteindre sa taille adulte et sa maturité en 120 jours ; cependant, vous pouvez décider que le clone sera une version plus jeune de la créature qu\'il reproduit. Il reste inerte et indéfiniment dans le même état tant que le réceptacle reste scellé.</p>\n<p>Une fois que le clone est arrivé à maturité, si la créature originale meurt, son âme se transfère dans le clone, à condition que cette âme soit libre et désireuse de revenir à la vie. D\'un point de vue physique, le clone est identique à l\'original. De plus, il possède la même personnalité, les mêmes souvenirs et les mêmes capacités, mais il n\'hérite pas de son équipement. Les restes physiques de la créature originale ne disparaissent pas. S\'ils ne sont pas détruits, ils deviennent inertes et ne peuvent pas servir à ramener la créature à la vie puisque son âme se trouve ailleurs.</p>',
    link: '/grimoire/clone',
    title: 'Clone',
    level: '8',
    casting_time: '1 heure',
    range: 'contact',
    components: 'V, S, M (un diamant valant au moins 1000 po et un cube d\'au moins 2,5 centimètres d\'arête de chair de la créature à cloner, le sort consommant ces deux composantes, ainsi qu\'un réceptacle d\'une valeur minimale de 2000 po qui dispose d\'un couvercle susceptible d\'être scellé, et assez grand pour contenir une créature de taille M, comme une grande urne, un cercueil, un cavité remplie de boue creusée dans la terre ou un récipient de cristal rempli d\'eau salée)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Coercition mystique',
      spell: {
        casting_time: '1 minute',
        range: '18 mètres',
        components: 'V',
        duration: '30 jours'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Magicien',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous imposez une coercition magique à une créature située à portée et dans votre champ de vision, l\'obligeant à vous accorder un service ou l\'empêchant de commettre une action ou une suite d\'actions, comme bon vous semble. Si la créature comprend votre langue, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse sans quoi elle est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> par vous pendant toute la durée du sort. Pendant toute cette période, elle subit 5d10 dégâts psychiques chaque fois qu\'elle agit de manière directement opposée à vos instructions, mais jamais plus d\'une fois par jour. Si la créature ne vous comprend pas, ce sort n\'a aucun effet sur elle.</p>\n<p>Vous pouvez lui donner n\'importe quel ordre de votre choix, en dehors de ceux qui la mènent directement à la mort. Le sort se termine immédiatement si jamais vous donnez un ordre suicidaire.</p>\n<p>Vous pouvez mettre prématurément fin au sort en dépensant une action pour le dissiper. Les sorts <em>lever une malédiction</em>, <em>restauration supérieure</em> et <em>souhait</em> mettent aussi fin à ce sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou 8, il dure 1 an. Avec un emplacement de sort de niveau 9, il persiste jusqu\'à ce que quelqu\'un le dissipe avec l\'un des sorts mentionnés précédemment.</p>',
    link: '/grimoire/coercition-mystique',
    title: 'Coercition mystique',
    level: '5',
    casting_time: '1 minute',
    range: '18 mètres',
    components: 'V',
    duration: '30 jours'
  },
  {
    header: {
      title: 'Coffre secret',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un superbe coffre de 90x60x60 centimètres, fait de matériaux rares d\'une valeur minimale de 5000 po et une réplique du coffre de taille TP, faite des mêmes matériaux et valant au moins 50 po)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous dissimulez un coffre et son contenu sur le plan éthéré. Pour cela, vous devez toucher le coffre et la réplique qui sert de composante matérielle au sort. Le coffre peut contenir un maximum de 324 décimètres cubes (90 × 60 × 60 centimètres) de matière non vivante.</p>\n<p>Tant que le coffre reste sur le plan éthéré, vous pouvez utiliser une action pour toucher la réplique et le rappeler à vous. Il apparaît en un emplacement libre au sol, situé dans un rayon de 1,50 mètre autour de vous. Vous pouvez renvoyer le coffre dans le plan éthéré en utilisant une action et en touchant le coffre et sa réplique.</p>\n<p>Au bout de 60 jours, il y a 5  % de chances cumulatifs par jour que les effets du sort se terminent. Ils s\'achèvent aussi si vous lancez de nouveau le sort, si la petite réplique du coffre est détruite ou si vous décidez de mettre un terme au sort en recourant à une action. Si le sort se termine alors que le grand coffre est encore sur le plan éthéré, ce coffre est irrémédiablement perdu.</p>',
    link: '/grimoire/coffre-secret',
    title: 'Coffre secret',
    level: '4',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un superbe coffre de 90x60x60 centimètres, fait de matériaux rares d\'une valeur minimale de 5000 po et une réplique du coffre de taille TP, faite des mêmes matériaux et valant au moins 50 po)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Colère des damnés',
      spell: {
        casting_time: '1 action',
        range: '30 mètres',
        components: 'V, S, M (un peu de cendre et de poussière d\'os)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez la puissance des enfers dans une zone de 6 mètres de rayon autour d\'un point situé à portée et dans votre champ de vision. La surface affectée se fissure en laissant échapper les flammes de l\'enfer, tandis que des dizaines de bras décharnés et de mains griffues émergent du sol et tentent d\'agripper toutes les créatures qui passent à leur portée, dans une cacophonie de plaintes, de suppliques et de cris déchirants. La zone est considérée comme un terrain difficile et toute créature qui y termine son déplacement subit 3d6 dégâts de feu. Une créature qui entre dans la zone ou s\'y déplace doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité ou être immédiatement <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> jusqu\'à son prochain tour.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 4 ou supérieur, les dégâts augmentent de 1d6 par niveau d\'emplacement au-delà du niveau 3.</p>',
    link: '/grimoire/colere-des-damnes',
    title: 'Colère des damnés',
    level: '3',
    casting_time: '1 action',
    range: '30 mètres',
    components: 'V, S, M (un peu de cendre et de poussière d\'os)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Collet magique',
      spell: {
        casting_time: '1 action',
        range: '12 mètres',
        components: 'V, S, M (une ficelle)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un piège qui s\'enroule autour d\'un ou plusieurs membres de l\'individu ciblé et peut le faire chuter ou le ligoter. Le piège affecte une zone de 3 mètres de rayon autour d\'un point que vous désignez à portée. Cette zone doit être placée sur un terrain naturel (pas sur une route ni dans une structure artificielle). La première créature qui traverse la zone piégée doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. En cas de succès, elle est <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>, en cas d\'échec elle est de plus <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a>. Une créature <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a> termine immédiatement son déplacement et perd l\'action en cours. Elle peut se relever normalement avec sa prochaine action. Une créature <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> peut utiliser son action à chaque tour pour faire un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité ou de Force au choix afin de se délivrer. Toutefois, à chaque fois qu\'elle lutte pour échapper aux liens, ceux-ci se resserrent et lui infligent 1d6 dégâts tranchants. Tant qu\'elle n\'essaye pas de se délivrer, elle ne subit pas de dégât.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, le sort affecte une cible supplémentaire par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/collet-magique',
    title: 'Collet magique',
    level: '2',
    casting_time: '1 action',
    range: '12 mètres',
    components: 'V, S, M (une ficelle)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Colonne de flamme',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (une pincée de soufre)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une colonne verticale de feu divin rugissant surgit des cieux et s\'abat à l\'endroit de votre choix. Toute créature située dans un cylindre de 3 mètres de rayon et 12 mètres de haut centré sur le point de votre choix à portée doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 4d6 dégâts de feu et 4d6 dégâts radiants, les autres la moitié seulement.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, les dégâts de feu ou les dégâts radiants (à vous de choisir) augmentent de 1d6 par niveau au-delà du niveau 5.</p>',
    link: '/grimoire/colonne-de-flamme',
    title: 'Colonne de flamme',
    level: '5',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (une pincée de soufre)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Communication avec les animaux',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: '10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous devenez capable de comprendre les bêtes et de communiquer verbalement avec elles pendant toute la durée du sort. Les connaissances et le degré de conscience de nombreuses bêtes sont limités par leur intelligence réduite, mais elles peuvent au moins vous renseigner sur les environs et les monstres aux alentours, ainsi que sur ce qu\'elles perçoivent aujourd\'hui ou ont perçu la veille. Si le MJ accepte, vous pouvez convaincre une bête de vous accorder une petite faveur.</p>',
    link: '/grimoire/communication-avec-les-animaux',
    title: 'Communication avec les animaux',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: '10 minutes'
  },
  {
    header: {
      title: 'Communication avec les morts',
      spell: {
        casting_time: '1 action',
        range: '3 mètres',
        components: 'V, S, M (encens incandescent)',
        duration: '10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous donnez un semblant de vie et d\'intelligence à un cadavre de votre choix situé à portée. Il est alors en mesure de répondre à vos questions. Le cadavre doit encore disposer d\'une bouche et ne doit pas être un mort-vivant. Le sort échoue si le cadavre choisi a déjà été la cible de ce sort au cours des 10 jours précédents.</p>\n<p>Vous pouvez poser jusqu\'à cinq questions avant la fin de la durée du sort. Les connaissances du cadavre se limitent à ce qu\'il savait de son vivant, y compris au niveau des langues qu\'il est capable de parler. Les réponses sont souvent brèves, cryptiques ou répétitives et le cadavre n\'est absolument pas obligé de vous donner une réponse sincère si vous lui êtes hostile ou s\'il vous reconnaît comme étant un ennemi. Ce sort ne ramène pas l\'âme de la cible dans son corps, juste l\'esprit qui l\'animait ; le cadavre ne peut donc pas apprendre de nouvelles informations, ne comprend rien de ce qui s\'est passé après sa mort et est incapable de faire des spéculations sur l\'avenir.</p>',
    link: '/grimoire/communication-avec-les-morts',
    title: 'Communication avec les morts',
    level: '3',
    casting_time: '1 action',
    range: '3 mètres',
    components: 'V, S, M (encens incandescent)',
    duration: '10 minutes'
  },
  {
    header: {
      title: 'Communication avec les plantes',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (9 mètres de rayon)',
        components: 'V, S',
        duration: '10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous imprégnez la végétation située dans un rayon de 9 mètres autour de vous d\'une conscience et d\'une mobilité limitées, ce qui permet aux plantes de communiquer avec vous et de suivre des ordres simples. Vous pouvez interroger les végétaux sur les événements qui se sont déroulés la veille dans la zone du sort et ainsi obtenir des informations sur les créatures qui sont passées, sur les conditions météorologiques et autres.</p>\n<p>Vous pouvez également transformer un terrain rendu difficile à cause de la végétation (comme des buissons ou d\'épais taillis) en terrain ordinaire pendant toute la durée du sort. Vous pouvez également transformer un terrain ordinaire où poussent des plantes en terrain difficile pendant toute la durée du sort, par exemple de manière à ce que des plantes grimpantes et des branches gênent vos poursuivants.</p>\n<p>Les plantes peuvent exécuter d\'autres tâches pour vous, si le MJ donne son accord. Le sort ne leur permet pas de se déraciner ni de se déplacer, mais elles peuvent agiter leurs branches, leurs vrilles et leurs tiges.</p>\n<p>Si une créature végétale se trouve dans la zone, vous pouvez communiquer avec elle comme si vous partagiez un même langage, mais vous ne gagnez pas de capacité magique permettant de l\'influencer.</p>\n<p>Ce sort permet de libérer une créature <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par les plantes nées d\'un sort d\'<em>enchevêtrement</em>.</p>',
    link: '/grimoire/communication-avec-les-plantes',
    title: 'Communication avec les plantes',
    level: '3',
    casting_time: '1 action',
    range: 'personnelle (9 mètres de rayon)',
    components: 'V, S',
    duration: '10 minutes'
  },
  {
    header: {
      title: 'Communion',
      spell: {
        casting_time: '1 minute',
        range: 'personnelle',
        components: 'V, S, M (de l\'encens et une fiole d\'eau bénite ou maudite)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous entrez en contact avec votre divinité ou l\'un de ses représentants et lui posez jusqu\'à trois questions fermées auxquelles la réponse est soit oui, soit non. Vous devez les poser avant la fin du sort et vous recevez une réponse correcte à chacune d\'entre elles.</p>\n<p>Les êtres divins ne sont pas forcément omniscients, il se peut donc que vous obteniez « <em>incertain</em> » comme réponse si votre question porte sur des informations sortant du champ des connaissances de votre divinité. Si une réponse d\'un seul mot risque de se révéler trompeuse ou contraire aux intérêts de la divinité, le MJ peut lui substituer une courte phrase.</p>\n<p>Si vous lancez ce sort à deux reprises ou plus avant un long repos, il y a 25 % de chances (cumulables) que chaque incantation en sus de la première ne reçoive pas de réponse. Le MJ effectue ce jet en secret.</p>',
    link: '/grimoire/communion',
    title: 'Communion',
    level: '5',
    casting_time: '1 minute',
    range: 'personnelle',
    components: 'V, S, M (de l\'encens et une fiole d\'eau bénite ou maudite)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Communion avec la nature',
      spell: {
        casting_time: '1 minute',
        range: 'personnelle',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant un court instant, vous ne faites plus qu\'un avec la nature et obtenez des informations sur le territoire environnant. En extérieur, ce sort vous transmet des informations sur le terrain qui vous entoure dans un rayon de 4,5 kilomètres. Dans une grotte ou un autre environnement naturel souterrain, le rayon d\'action est de 90 mètres. Ce sort ne fonctionne pas là où les constructions ont remplacé la nature, comme en ville ou dans un donjon.</p>\n<p>Vous obtenez instantanément des informations sur un maximum de trois éléments de votre choix portant sur l\'un des sujets suivants dans votre zone.</p>\n<ul>\n<li>Le terrain et les étendues d\'eau.</li>\n<li>Les plantes, les minéraux, les animaux et les peuples majoritaires.</li>\n<li>Les célestes, les fées, les fiélons, les élémentaires ou les morts-vivants dotés d\'une certaine puissance.</li>\n<li>L\'influence émanant des autres plans d\'existence.</li>\n<li>Les constructions.</li>\n</ul>\n<p>Par exemple, vous pouvez apprendre où se trouve un puissant mort-vivant résidant dans la zone, savoir où se trouvent les points d\'eau potable majeurs et où se trouvent les villages les plus proches.</p>',
    link: '/grimoire/communion-avec-la-nature',
    title: 'Communion avec la nature',
    level: '5',
    casting_time: '1 minute',
    range: 'personnelle',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Compagnon animal',
      spell: {
        casting_time: '1 minute',
        range: '12 mètres',
        components: 'V, S, M (un peu de nourriture adaptée à l\'animal)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez de convaincre une bête à portée et dans votre champ de vision de devenir votre compagnon de route et d\'aventure. L\'animal ne doit pas être hostile au moment où vous lancez le sort et vous l\'amadouez avec un peu de nourriture pendant l\'incantation. Le succès du sort est automatique si l\'indice de dangerosité de la bête ne dépasse pas 1/2 et que sa valeur d\'intelligence est inférieure ou égal à 4. Dans le cas contraire, la bête n\'est pas affectée par le sort.</p>\n<p>Si le sort est un succès, vous pouvez communiquer de façon rudimentaire avec votre compagnon et lui donner des ordres simples comme attaquer une cible ou la suivre, rapporter un objet en vue, garder un lieu ou une créature, etc. Cela ne vous demande pas de dépenser une action. De plus, vous pouvez entendre et voir par l\'intermédiaire des oreilles et des yeux de votre compagnon, comme si vous occupiez son emplacement. À votre tour, vous pouvez dépenser une action bonus pour passer de l\'utilisation de ses sens à celle des vôtres et inversement. Tant que vous utilisez ses sens, vous êtes aveugle et sourd à votre propre environnement.</p>\n<p>Lorsque les points de vie d\'un compagnon animal sont égaux à 0, il suit les mêmes règles qu\'un personnage et il peut bénéficier de soins. Après chaque repos court, les points de vie du compagnon animal remontent à la moitié de son maximum s\'ils sont inférieurs à cette valeur. Après chaque repos long, le compagnon récupère l\'intégralité des points de vie perdus.</p>\n<p>Chaque jour, vous pouvez conserver le même compagnon animal sans devoir à nouveau lancer le sort, simplement en sacrifiant l\'emplacement de sort correspondant et en utilisant une action bonus.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, vous pouvez choisir dans la liste ci-dessous un effet supplémentaire par niveau au-delà du niveau 2. Vous ne pouvez pas choisir le même effet plus d\'une fois.</p>\n<ul>\n<li>Lancer le sort sur une bête dont l\'indice de dangerosité est inférieur ou égal à 1.</li>\n<li>Accorder à votre compagnon dont l\'indice de dangerosité est inférieur ou égal à 1/2 une résistance à tous les types de dégâts et un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> en attaque et aux jets de sauvegarde.</li>\n<li>Communiquer par télépathie sans limite de distance avec votre compagnon et obtenir la capacité de le guérir d\'un nombre de points de vie de votre choix en dépensant une action bonus et autant de vos propres points de vie, sans limite de distance.</li>\n<li>Affecter une bête identique supplémentaire. Lorsque vous choisissez d\'autres effets, ce second compagnon en bénéficie aussi.</li>\n</ul>',
    link: '/grimoire/compagnon-animal',
    title: 'Compagnon animal',
    level: '2',
    casting_time: '1 minute',
    range: '12 mètres',
    components: 'V, S, M (un peu de nourriture adaptée à l\'animal)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Compréhension des langues',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (une pincée de suie et de sel)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, vous comprenez le sens littéral de tout langage parlé que vous entendez. Vous comprenez aussi les langues écrites que vous voyez, à condition de toucher la surface sur laquelle les mots ont été tracés. Il vous faut 1 minute pour lire une page de texte.</p>\n<p>Ce sort ne décode pas les messages secrets compris dans un texte ni les glyphes qui ne correspondent pas à un langage écrit, comme un symbole magique.</p>',
    link: '/grimoire/comprehension-des-langues',
    title: 'Compréhension des langues',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (une pincée de suie et de sel)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Compulsion',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Les créatures de votre choix, situées à portée, dans votre champ de vision et en mesure de vous entendre, doivent réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou être affectées par le sort. Une cible qui ne peut être charmée réussit automatiquement ce jet. À chaque tour jusqu\'à la fin du sort, vous pouvez utiliser une action bonus pour désigner une direction (vers laquelle la cible peut se diriger) par rapport à vous. Chaque cible affectée doit alors utiliser son déplacement au mieux pour se diriger dans cette direction à son prochain tour. De plus, elle ne peut pas effectuer d\'action avant de se déplacer. Une fois qu\'elle s\'est ainsi déplacée, elle peut faire un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse pour tenter de mettre un terme à l\'effet du sort.</p>\n<p>Une cible n\'est pas obligée de se rendre au sein d\'une zone à l\'évidence dangereuse, comme un brasier ou une fosse béante, mais elle est prête à provoquer des attaques d\'opportunité pour se déplacer dans la direction indiquée.</p>',
    link: '/grimoire/compulsion',
    title: 'Compulsion',
    level: '4',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Cône de froid',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (cône de 18 mètres)',
        components: 'V, S, M (un petit cône de cristal ou de verre)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une bouffée d\'air froid jaillit de vos mains. Toutes les créatures présentes dans un cône de 18 mètres doivent effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui le ratent subissent 8d8 dégâts de froid, les autres la moitié seulement.</p>\n<p>Une créature qui succombe suite à ce sort se transforme en statue de glace jusqu\'à ce qu\'elle fonde.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du niveau 5.</p>',
    link: '/grimoire/cone-de-froid',
    title: 'Cône de froid',
    level: '5',
    casting_time: '1 action',
    range: 'personnelle (cône de 18 mètres)',
    components: 'V, S, M (un petit cône de cristal ou de verre)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Confusion',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S, M (trois coquilles de noix)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort assaille et pervertit l\'esprit des créatures, génère des hallucinations et provoque des réactions incontrôlées. Toutes les créatures situées dans une sphère de 3 mètres de rayon autour d\'un point de votre choix situé à portée doivent réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou être affectées par ce sort.</p>\n<p>Une cible affectée ne peut pas utiliser de réaction et doit lancer 1d10 au début de chacun de ses tours pour déterminer comment elle se comporte pendant le tour.</p>\n<div class=\'simple-responsive-table\'><div><table class="datatable"><thead><tr><th class="text-align-center">D10</th><th>Comportement</th></tr></thead><tbody><tr><td class="text-align-center"><span class="label"><strong>D10</strong> : </span><strong>1</strong></td>\n      <td><span class="label"><strong>Comportement</strong> : </span>La créature utilise la totalité de son mouvement pour se déplacer dans une direction aléatoire. Pour déterminer cette dernière, lancez un d8 en assignant une direction à chaque face. La créature n\'effectue aucune action pour ce tour.</td>\n    </tr><tr><td class="text-align-center"><span class="label"><strong>D10</strong> : </span><strong>2-6</strong></td>\n      <td><span class="label"><strong>Comportement</strong> : </span>La créature ne bouge pas et n\'entreprend pas la moindre action pour ce tour.</td>\n    </tr><tr><td class="text-align-center"><span class="label"><strong>D10</strong> : </span><strong>7-8</strong></td>\n      <td><span class="label"><strong>Comportement</strong> : </span>La créature utilise son action pour porter une attaque au corps-à-corps contre une créature aléatoire à portée d\'allonge. S\'il n\'y a pas de créature à portée, elle ne fait rien durant le tour.</td>\n    </tr><tr><td class="text-align-center"><span class="label"><strong>D10</strong> : </span><strong>9-10</strong></td>\n      <td><span class="label"><strong>Comportement</strong> : </span>La créature peut agir et se déplacer normalement.</td>\n    </tr></tbody></table></div></div>\n<p>Une créature affectée peut faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse à la fin de chacun de ses tours. En cas de succès, l\'effet se termine pour elle.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou supérieur, le rayon de la sphère augmente de 1,50 mètre par niveau au-delà du niveau 4.</p>',
    link: '/grimoire/confusion',
    title: 'Confusion',
    level: '4',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S, M (trois coquilles de noix)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Contact glacial',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous faites apparaître une main fantomatique et squelettique sur l\'emplacement d\'une créature située à portée. Faites un <a href="/combattre#jets-dattaque">jet d\'attaque</a> de sort à distance contre la créature pour la transir de froid. Si l\'attaque touche, la victime reçoit 1d8 dégâts nécrotiques et ne peut pas récupérer de point de vie avant le début de votre prochain tour. Jusque-là, la main s\'accroche à elle.</p>\n<p>Si votre cible est un mort-vivant, il subit en plus un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets d\'attaque effectués contre vous jusqu\'à la fin de votre prochain tour.</p>\n<p>Les dégâts du sort augmentent de 1d8 quand vous atteignez les niveaux 5 (2d8), 11 (3d8) et 17 (4d8).</p>',
    link: '/grimoire/contact-glacial',
    title: 'Contact glacial',
    level: '0',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: '1 round'
  },
  {
    header: {
      title: 'Contacter un autre plan',
      spell: {
        casting_time: '1 minute',
        range: 'personnelle',
        components: 'V',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous contactez mentalement un demi-dieu, l\'esprit d\'un sage décédé depuis longtemps, ou une autre entité mystérieuse issue d\'un autre plan. Le contact avec cette intelligence extraplanaire met votre esprit à rude épreuve et risque même de le briser. Quand vous lancez ce sort, vous devez effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> d\'intelligence DD 15. En cas d\'échec, vous encaissez 6d6 dégâts psychiques et vous devenez fou jusqu\'à ce que vous ayez bénéficié d\'un repos long. Tant que vous êtes fou, vous ne pouvez pas entreprendre la moindre action, vous ne comprenez pas ce que disent les autres créatures, vous êtes incapable de lire et vous ne bredouillez que des paroles insensées. Une tierce personne peut mettre un terme à cet effet en  vous ciblant avec un sort de <em>restauration supérieure</em>.</p>\n<p>Si vous réussissez votre jet de sauvegarde, vous pouvez poser jusqu\'à cinq questions à l\'entité. Vous devez les poser avant la fin du sort. C\'est le MJ qui répond à chacune d\'entre elles avec un mot, comme « <em>oui</em> », « <em>non</em> », « <em>peut-être</em> », « <em>jamais</em> », « <em>hors sujet</em> » ou « <em>incertain</em> » (si l\'entité ignore la réponse à votre question). Si une réponse limitée à un seul mot risque de se révéler trompeuse, le MJ peut la remplacer par une courte phrase.</p>',
    link: '/grimoire/contacter-un-autre-plan',
    title: 'Contacter un autre plan',
    level: '5',
    casting_time: '1 minute',
    range: 'personnelle',
    components: 'V',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Contagion',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: '7 jours'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Votre simple contact transmet des maladies. Faites une attaque de sort au corps-à-corps contre une créature à portée. Si vous touchez, vous lui inoculez une maladie de votre choix, à sélectionner parmi celles décrites ci-dessous.</p>\n<p>La cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution à la fin de chacun de ses tours. Une fois qu\'elle en a raté trois, la maladie fait effet pendant toute la durée du sort et la créature n\'a plus à faire de <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>. Si elle réussit trois jets de sauvegarde, elle guérit de sa maladie et le sort se termine.</p>\n<p>Comme le sort déclenche une maladie naturelle chez la cible, tout effet qui guérit une maladie ou améliore ses symptômes s\'applique.</p>\n<p><strong>Bouille-crâne</strong>. La créature a soudain l\'esprit enfiévré. Elle souffre d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des tests d\'Intelligence et des jets de sauvegarde d\'Intelligence. De plus, au combat, elle se comporte comme si elle était sous l\'effet d\'un sort de <em>confusion</em>.</p>\n<p><strong>Convulsions</strong>. La créature est agitée de tremblements. Elle subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des tests de Dextérité, des jets de sauvegarde de Dextérité et des jets d\'attaque basés sur la Dextérité.</p>\n<p><strong>Fièvre répugnante</strong>. Une forte fièvre s\'empare de la créature, qui est affectée par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des tests de Force, des jets de sauvegarde de Force et des jets d\'attaque basés sur la Force.</p>\n<p><strong>Mal aveuglant</strong>. La créature est en proie à de violentes douleurs cérébrales et ses yeux deviennent d\'un blanc laiteux. Elle subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des tests de Sagesse et des jets de sauvegarde de Sagesse et elle est <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a>.</p>\n<p><strong>Mort poisseuse</strong>. La créature est affligée de saignements incontrôlables. Elle souffre d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des tests de Constitution et des jets de sauvegarde de Constitution. De plus, elle est <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> jusqu\'à la fin de son prochain tour à chaque fois qu\'elle subit des dégâts.</p>\n<p><strong>Pourriture</strong>. La chair de la créature se met à pourrir. Elle subit un désavantage lors des tests de Charisme et devient vulnérable à tous les dégâts.</p>',
    link: '/grimoire/contagion',
    title: 'Contagion',
    level: '5',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: '7 jours'
  },
  {
    header: {
      title: 'Contamination',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous transmettez une maladie virulente à une créature située à portée et dans votre champ de vision. La cible doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Si elle échoue, elle subit 14d6 dégâts nécrotiques, la moitié seulement si elle réussit. Ces dégâts ne peuvent pas faire passer les points de vie de la cible au-dessous de 1. Si la cible rate son jet de sauvegarde, son total de points de vie maximum est réduit, pendant 1 heure, d\'un montant égal aux dégâts nécrotiques reçus. Tout effet qui guérit les maladies ramène le maximum de points de vie de la cible à la normale sans avoir besoin d\'attendre 1 heure.</p>',
    link: '/grimoire/contamination',
    title: 'Contamination',
    level: '6',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Contingence',
      spell: {
        casting_time: '10 minutes',
        range: 'personnelle',
        components: 'V, S, M (une statuette de vous taillée dans l\'ivoire et ornée de gemmes d\'une valeur minimum de 1 500 po)',
        duration: '10 jours'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez un sort de niveau 5 ou moins que vous êtes en mesure de lancer, qui possède un temps d\'incantation d\'une action, et qui peut vous prendre pour cible. Vous lancez ce sort (que l\'on appelle le sort contingent) lors de l\'incantation de la contingence. Vous dépensez donc les emplacements des deux sorts, mais le contingent ne fait pas effet immédiatement. Il s\'active lorsque certaines conditions sont remplies. Vous devez décrire ces dernières au moment où vous lancez les deux sorts. Par exemple, lors d\'une contingence associée à une <em>respiration aquatique</em>, vous pouvez stipuler que la <em>respiration aquatique</em> doit se déclencher quand vous vous trouvez immergé dans l\'eau ou dans un liquide similaire.</p>\n<p>Le sort contingent prend effet dès que les circonstances sont remplies pour la première fois, que vous le vouliez ou non, ce qui met un terme à la contingence.</p>\n<p>Le sort contingent affecte uniquement votre personne, même s\'il peut normalement affecter d\'autres créatures. Vous ne pouvez utiliser qu\'un seul sort de <em>contingence</em> à la fois. Si vous en lancez un second, les effets du précédent se dissipent. De plus, la contingence prend fin si sa composante matérielle n\'est plus sur votre personne.</p>',
    link: '/grimoire/contingence',
    title: 'Contingence',
    level: '6',
    casting_time: '10 minutes',
    range: 'personnelle',
    components: 'V, S, M (une statuette de vous taillée dans l\'ivoire et ornée de gemmes d\'une valeur minimum de 1 500 po)',
    duration: '10 jours'
  },
  {
    header: {
      title: 'Contresort',
      spell: {
        casting_time: '1 réaction à utiliser quand vous voyez une créature située dans un rayon de 18 mètres autour de vous lancer un sort',
        range: '18 mètres',
        components: 'S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez d\'interrompre une créature en pleine incantation. Si elle essayait de lancer un sort de niveau 3 ou moins, il échoue et reste sans effet. Si le sort est de niveau 4 ou plus, faites un test de caractéristique en utilisant votre caractéristique d\'incantation. Le DD est de 10 + le niveau du sort. Si vous réussissez, le sort de la créature échoue et reste sans effet.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, le sort à interrompre est automatiquement sans effet s\'il est d\'un niveau égal ou inférieur à celui de l\'emplacement de sort utilisé.</p>',
    link: '/grimoire/contresort',
    title: 'Contresort',
    level: '3',
    casting_time: '1 réaction à utiliser quand vous voyez une créature située dans un rayon de 18 mètres autour de vous lancer un sort',
    range: '18 mètres',
    components: 'S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Contrôle de l\'eau',
      spell: {
        casting_time: '1 action',
        range: '90 mètres',
        components: 'V, S, M (une goutte d\'eau et une pincée de poussière)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Jusqu\'à la fin du sort, vous contrôlez toute étendue d\'eau indépendante située dans la zone de votre choix, cette dernière devant tenir dans un cube d\'au maximum 30 mètres d\'arête. Quand vous lancez ce sort, vous pouvez choisir l\'un des effets suivants. À votre tour, vous pouvez utiliser une action pour répéter l\'effet ou en appliquer un nouveau.</p>\n<p><strong>Écarter les eaux</strong>. Vous écartez les eaux de la zone pour y créer un passage. Il traverse toute la zone, les eaux formant une muraille de chaque côté. Le passage demeure jusqu\'à la fin du sort ou jusqu\'à ce que vous optiez pour un effet différent. Dans ces deux cas, l\'eau remplit alors progressivement le passage, au fil du round suivant, jusqu\'à ce que le niveau de l\'eau revienne à la normale.</p>\n<p><strong>Inondation</strong>. Vous faites monter le niveau d\'une étendue d\'eau isolée d\'un maximum de 6 mètres. Si la zone comprend une rive, l\'eau déborde et se répand sur la terre ferme.</p>\n<p>Si vous avez lancé le sort sur une grande étendue d\'eau, vous créez une vague de 6 mètres de haut qui traverse la zone affectée d\'un bout à l\'autre pour se briser une fois arrivée à la fin de la zone. Tous les véhicules de taille TG ou inférieure qui se trouvent sur le chemin de la vague sont emportés jusqu\'au bout de la zone. Tous les véhicules ont 25 % de chances de  chavirer.</p>\n<p>Le niveau de l\'eau reste plus élevé jusqu\'à la fin du sort ou jusqu\'à ce que vous choisissiez un autre effet. Si l\'effet d\'inondation produit une vague, elle se reforme au début de votre prochain tour tant que vous gardez cet effet actif.</p>\n<p><strong>Modifier le cours de l\'eau</strong>. Vous changez l\'itinéraire de l\'eau courante qui traverse la zone et l\'envoyez dans la direction de votre choix, même si elle doit pour cela franchir des obstacles comme passer par-dessus un mur ou couler dans une direction improbable. L\'eau suit vos instructions dans la zone affectée mais, dès qu\'elle en sort, elle reprend un cours normal défini par le terrain qu\'elle parcourt. L\'eau continue de couler là où vous l\'avez choisi jusqu\'à la fin du sort ou jusqu\'à ce que vous décidiez d\'un autre effet.</p>\n<p><strong>Tourbillon</strong>. Cet effet nécessite une étendue d\'eau d\'au moins 15 mètres carrés pour 7,50 mètres de fond et se traduit par la formation d\'un tourbillon au centre de la zone. Il se présente sous forme d\'un vortex de 1,50 mètre de large à sa base pour un maximum de 15 mètres de large au sommet et une hauteur de 7,50 mètres. Toutes les créatures et tous les objets qui se trouvent dans l\'eau et dans un rayon de 7,50 mètres autour du tourbillon sont entraînés vers lui sur 3 mètres. Une créature peut s\'éloigner à la nage si elle réussit un test de Force (Athlétisme) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort.</p>\n<p>Quand une créature entre dans le vortex pour la première fois de son tour ou qu\'elle y commence son tour, elle doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force. Si elle échoue, elle reçoit 2d8 dégâts contondants et se fait emporter par le vortex jusqu\'à la fin du sort. Si elle réussit son jet, elle subit seulement la moitié des dégâts et n\'est pas prise dans le vortex. Une créature emportée par le vortex peut utiliser une action pour tenter de s\'en éloigner comme décrit plus haut, mais elle est affectée par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de son test de Force (Athlétisme). À chaque tour, la première fois qu\'un objet entre dans le vortex, il subit 2d8 dégâts contondants. Ces dégâts se répètent à chaque round passé dans le vortex.</p>',
    link: '/grimoire/controle-de-leau',
    title: 'Contrôle de l\'eau',
    level: '4',
    casting_time: '1 action',
    range: '90 mètres',
    components: 'V, S, M (une goutte d\'eau et une pincée de poussière)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Contrôle du climat',
      spell: {
        casting_time: '10 minutes',
        range: 'personnelle (rayon de 7,5 kilomètres)',
        components: 'V, S, M (encens incandescent et un peu de bois et de terre mélangés dans de l\'eau)',
        duration: 'jusqu\'à 8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous prenez le contrôle de la météo dans un rayon de 7,5  kilomètres autour de vous pendant toute la durée du sort. Vous devez être en extérieur au moment de l\'incantation. Si vous vous rendez dans un endroit d\'où vous ne voyez pas directement le ciel, le sort se termine prématurément.</p>\n<p>Au moment de l\'incantation, vous changez les conditions météorologiques actuelles déterminées par le MJ en fonction du climat et de la saison. Vous pouvez modifier les précipitations, la température et le vent. Il faut 1d4×10 minutes pour que les nouvelles conditions s\'installent. Vous pouvez ensuite les modifier à nouveau. Le temps retourne progressivement à la normale une fois le sort terminé.</p>\n<p>Quand vous modifiez les conditions météorologiques, cherchez les conditions actuelles dans les tables suivantes : vous pouvez les décaler d\'un cran vers le haut ou le bas. Quand vous modifiez le vent, vous pouvez changer sa direction.</p>\n<h2 id="precipitations">Précipitations</h2>\n<div class=\'simple-responsive-table\'><div><table><thead><tr><th class="text-align-center">Étape</th><th>Condition</th></tr></thead><tbody><tr><td class="text-align-center"><strong>1</strong></td><td>Ciel dégagé</td></tr><tr><td class="text-align-center"><strong>2</strong></td><td>Quelques nuages</td></tr><tr><td class="text-align-center"><strong>3</strong></td><td>Ciel couvert ou brume au sol</td></tr><tr><td class="text-align-center"><strong>4</strong></td><td>Pluie, grêle ou neige</td></tr><tr><td class="text-align-center"><strong>5</strong></td><td>Pluies torrentielles, forte grêle ou blizzard</td></tr></tbody></table></div></div>\n<h2 id="temperature">Température</h2>\n<div class=\'simple-responsive-table\'><div><table><thead><tr><th class="text-align-center">Étape</th><th>Condition</th></tr></thead><tbody><tr><td class="text-align-center"><strong>1</strong></td><td>Chaleur insoutenable</td></tr><tr><td class="text-align-center"><strong>2</strong></td><td>Forte chaleur</td></tr><tr><td class="text-align-center"><strong>3</strong></td><td>Tiède</td></tr><tr><td class="text-align-center"><strong>4</strong></td><td>Frais</td></tr><tr><td class="text-align-center"><strong>5</strong></td><td>Grand froid</td></tr><tr><td class="text-align-center"><strong>6</strong></td><td>Froid polaire</td></tr></tbody></table></div></div>\n<h2 id="vent">Vent</h2>\n<div class=\'simple-responsive-table\'><div><table><thead><tr><th class="text-align-center">Étape</th><th>Condition</th></tr></thead><tbody><tr><td class="text-align-center"><strong>1</strong></td><td>Temps calme</td></tr><tr><td class="text-align-center"><strong>2</strong></td><td>Vent modéré</td></tr><tr><td class="text-align-center"><strong>3</strong></td><td>Vent fort</td></tr><tr><td class="text-align-center"><strong>4</strong></td><td>Grand vent</td></tr><tr><td class="text-align-center"><strong>5</strong></td><td>Tempête</td></tr></tbody></table></div></div>',
    link: '/grimoire/controle-du-climat',
    title: 'Contrôle du climat',
    level: '8',
    casting_time: '10 minutes',
    range: 'personnelle (rayon de 7,5 kilomètres)',
    components: 'V, S, M (encens incandescent et un peu de bois et de terre mélangés dans de l\'eau)',
    duration: 'jusqu\'à 8 heures'
  },
  {
    header: {
      title: 'Convocations instantanées',
      spell: {
        casting_time: '1 minute',
        range: 'contact',
        components: 'V, S, M (un saphir d\'une valeur de 1000 po)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez un objet pesant 5 kilogrammes ou moins et dont la dimension la plus longue est de 1,80 mètre ou moins. Le sort laisse une marque invisible sur la surface de l\'objet et inscrit le nom de l\'objet sur le saphir que vous utilisez comme composante matérielle. Chaque fois que vous lancez ce sort, vous devez utiliser un saphir différent.</p>\n<p>Ensuite, vous pouvez utiliser une action quand vous le désirez pour prononcer le nom de l\'objet et broyer le saphir. L\'objet apparaît immédiatement dans votre main, en dépit des distances physique et planaire, et le sort se termine.</p>\n<p>Si l\'objet est actuellement porté ou transporté par quelqu\'un d\'autre, il n\'arrive pas jusqu\'à vous quand vous broyez le saphir, mais vous apprenez qui est la créature qui détient l\'objet et vous savez à peu près où elle se trouve à ce moment-là.</p>\n<p><em>Dissipation de la magie</em> ou un effet similaire appliqué sur le saphir met un terme à l\'effet du sort.</p>',
    link: '/grimoire/convocations-instantanees',
    title: 'Convocations instantanées',
    level: '6',
    casting_time: '1 minute',
    range: 'contact',
    components: 'V, S, M (un saphir d\'une valeur de 1000 po)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Coquille antivie',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (3 mètres de rayon)',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une barrière scintillante se déploie depuis votre personne, jusqu\'à englober une zone d\'un rayon de 3  mètres. Elle se déplace avec vous, reste centrée sur vous et repousse les créatures autres que les morts-vivants et les créatures artificielles. Cette barrière persiste pendant toute la durée du sort.</p>\n<p>La barrière empêche les créatures affectées de la franchir ou de passer un membre au travers. Une créature affectée peut lancer des sorts ou porter des attaques à distance ou via une arme à allonge, tout cela franchissant la barrière.</p>\n<p>Si vous vous déplacez de telle manière qu\'une créature affectée est contrainte de traverser la barrière, le sort se termine.</p>',
    link: '/grimoire/coquille-antivie',
    title: 'Coquille antivie',
    level: '5',
    casting_time: '1 action',
    range: 'personnelle (3 mètres de rayon)',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Corde enchantée',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (extrait de maïs en poudre et boucle de parchemin torsadé)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une longueur de corde d\'au maximum 18 mètres. L\'une de ses extrémités s\'élève alors dans les airs, jusqu\'à ce que toute la corde se dresse perpendiculairement au sol. Une entrée invisible s\'ouvre à l\'extrémité supérieure de la corde et débouche sur un espace extradimensionnel qui persiste jusqu\'à la fin du sort.</p>\n<p>On peut atteindre cet espace extradimensionnel en grimpant jusqu\'au sommet de la corde. Il peut accueillir un maximum de huit créatures de taille M ou inférieure. On peut ensuite tirer la corde dans l\'espace extradimensionnel, afin que personne ne la voie en dehors de l\'abri.</p>\n<p>Les attaques et les sorts ne peuvent traverser l\'entrée de l\'espace extradimensionnel ni depuis l\'intérieur, ni depuis l\'extérieur. En revanche, les créatures qui se trouvent à l\'intérieur peuvent regarder dehors grâce à une fenêtre de 90 centimètres sur 1,50 mètre centrée sur la corde.</p>\n<p>Tout ce qui se trouve dans l\'espace extradimensionnel tombe à l\'extérieur quand le sort se termine.</p>',
    link: '/grimoire/corde-enchantee',
    title: 'Corde enchantée',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (extrait de maïs en poudre et boucle de parchemin torsadé)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Couleurs dansantes',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (cône de 4,50 mètres)',
        components: 'V, S, M (une poignée de poudre ou de sable, colorée en rouge, jaune et bleu)',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un éventail de lumières colorées éblouissantes jaillit de votre main. Lancez 6d10. Le total représente le nombre de points de vie de créatures que le sort affecte. Les créatures situées dans un cône de 4,50 mètres, prenant votre personne comme point d\'origine, sont affectées dans l\'ordre croissant de leurs points de vie actuels (en ignorant les créatures <em>inconscientes</em> et les créatures <em>aveuglées</em>).</p>\n<p>Chaque créature affectée, en commençant par celle qui possède actuellement le moins de points de vie, est <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> jusqu\'à la fin du sort. Soustrayez du total obtenu le nombre de points de vie actuel de chaque créature affectée avant de passer à la suivante, en choisissant chaque fois celle qui possède le moins de points de vie. Pour qu\'une créature soit affectée, elle doit posséder un nombre de points de vie actuels inférieur ou égal au total restant.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, lancez 2d10 supplémentaires par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/couleurs-dansantes',
    title: 'Couleurs dansantes',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle (cône de 4,50 mètres)',
    components: 'V, S, M (une poignée de poudre ou de sable, colorée en rouge, jaune et bleu)',
    duration: '1 round'
  },
  {
    header: {
      title: 'Création',
      spell: {
        casting_time: '1 minute',
        range: '9 mètres',
        components: 'V, S, M (un petit bout de matière de même type que l\'objet que vous voulez créer)',
        duration: 'spéciale'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tirez des bribes de matière ombreuse du plan de l\'ombre pour créer à portée des objets inertes en matière végétale : du tissu, de la corde, du bois ou des objets similaires. Ce sort permet aussi de créer des objets minéraux comme de la pierre, du cristal ou du métal. L\'objet créé ne doit pas être plus grand qu\'un cube de 1,50  mètre d\'arête et doit impérativement être d\'une forme et d\'un matériau que vous avez déjà vus.</p>\n<p>La durée du sort dépend du matériau choisi pour façonner l\'objet. S\'il est fait de plusieurs matières, c\'est la durée la plus courte qui s\'applique.</p>\n<div class=\'simple-responsive-table\'><div><table class="datatable"><thead><tr><th>Matériau</th><th class="text-align-center">Durée</th></tr></thead><tbody><tr><td><span class="label"><strong>Matériau</strong> : </span><strong>Matière végétale</strong></td>\n      <td class="text-align-center"><span class="label"><strong>Durée</strong> : </span>1 jour</td>\n    </tr><tr><td><span class="label"><strong>Matériau</strong> : </span><strong>Pierre ou cristal</strong></td>\n      <td class="text-align-center"><span class="label"><strong>Durée</strong> : </span>12 heures</td>\n    </tr><tr><td><span class="label"><strong>Matériau</strong> : </span><strong>Métaux précieux</strong></td>\n      <td class="text-align-center"><span class="label"><strong>Durée</strong> : </span>1 heure</td>\n    </tr><tr><td><span class="label"><strong>Matériau</strong> : </span><strong>Gemmes</strong></td>\n      <td class="text-align-center"><span class="label"><strong>Durée</strong> : </span>10 minutes</td>\n    </tr><tr><td><span class="label"><strong>Matériau</strong> : </span><strong>Adamantium ou mithral</strong></td>\n      <td class="text-align-center"><span class="label"><strong>Durée</strong> : </span>1 minute</td>\n    </tr></tbody></table></div></div>\n<p>Si vous utilisez les matériaux créés via ce sort comme composantes matérielles pour un autre sort, ce dernier échoue.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, l\'arête du cube augmente de 1,50 mètre par niveau au-delà du niveau 5.</p>',
    link: '/grimoire/creation',
    title: 'Création',
    level: '5',
    casting_time: '1 minute',
    range: '9 mètres',
    components: 'V, S, M (un petit bout de matière de même type que l\'objet que vous voulez créer)',
    duration: 'spéciale'
  },
  {
    header: {
      title: 'Création de mort-vivant',
      spell: {
        casting_time: '1 minute',
        range: '3 mètres',
        components: 'V, S, M (un pot d\'argile rempli de poussière tombale, un pot d\'argile rempli d\'eau saumâtre et un onyx noir d\'une valeur de 150 po par cadavre)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort se lance uniquement de nuit. Choisissez jusqu\'à trois cadavres de créatures humanoïdes de taille M ou P situés à portée. Chacun se change en goule placée sous votre contrôle. (Le MJ dispose du profil technique de ces créatures).</p>\n<p>À chacun de vos tours, vous pouvez utiliser une action bonus pour contrôler mentalement les créatures que vous avez animées avec ce sort si elles se trouvent dans un rayon de 36 mètres (si vous en contrôlez plusieurs, vous pouvez en commander une ou plusieurs à la fois, à condition de donner le même ordre à toutes). Vous pouvez décider de l\'action que la créature va entreprendre et de l\'endroit où elle va se rendre lors de son prochain tour, ou donner des consignes plus génériques, comme de garder une salle ou un couloir. En l\'absence d\'ordre de votre part, la créature se contente de se défendre contre les créatures hostiles. Dès qu\'une créature a reçu un ordre, elle s\'y conforme jusqu\'à avoir accompli sa tâche.</p>\n<p>La créature reste sous votre contrôle pendant 24 heures, après quoi elle cesse d\'obéir aux ordres que vous lui avez donnés. Pour la maintenir sous votre contrôle pendant 24 heures de plus, vous devez lui relancer ce sort avant que les 24 heures de contrôle en cours ne se soient écoulées. Cette nouvelle utilisation du sort vous permet de réaffirmer votre contrôle sur un maximum de trois créatures que vous avez déjà animées via ce sort au lieu d\'en animer de nouvelles.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, vous pouvez animer ou maintenir votre contrôle sur quatre goules. Quand vous le lancez à partir d\'un emplacement de niveau 8, vous pouvez animer ou maintenir votre contrôle sur cinq goules ou deux blêmes ou deux nécrophages. Quand vous le lancez à partir d\'un emplacement de niveau 9, vous pouvez animer ou maintenir votre contrôle sur six goules ou trois blêmes ou trois nécrophages ou deux momies.</p>',
    link: '/grimoire/creation-de-mort-vivant',
    title: 'Création de mort-vivant',
    level: '6',
    casting_time: '1 minute',
    range: '3 mètres',
    components: 'V, S, M (un pot d\'argile rempli de poussière tombale, un pot d\'argile rempli d\'eau saumâtre et un onyx noir d\'une valeur de 150 po par cadavre)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Création de nourriture et d\'eau',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez 25 kilogrammes de nourriture et 120 litres d\'eau, soit par terre, soit dans des récipients installés à portée. Cela suffit à nourrir et abreuver un maximum de quinze humanoïdes ou de cinq montures pendant 24 heures. Les vivres sont fades mais nourrissants. Ils se gâtent si personne ne les a mangés dans les 24 heures suivant leur création. L\'eau est claire et ne croupit pas.</p>',
    link: '/grimoire/creation-de-nourriture-et-deau',
    title: 'Création de nourriture et d\'eau',
    level: '3',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Création ou destruction d\'eau',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (une goutte d\'eau pour créer de l\'eau ou quelques grains de sable pour en détruire)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez ou détruisez de l\'eau.</p>\n<p><strong>Création d\'eau</strong>. Vous créez jusqu\'à 40 litres d\'eau potable qui apparaissent à portée, dans un récipient ouvert. Sinon, l\'eau peut tomber en pluie dans un cube de 9 mètres d\'arête à portée, éteignant toutes les flammes à nu dans la zone.</p>\n<p><strong>Destruction d\'eau</strong>. Vous détruisez jusqu\'à 40 litres d\'eau situés à portée dans un récipient ouvert. Sinon, vous pouvez dissiper le brouillard dans un cube de 9 mètres d\'arête situé à portée.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous créez ou détruisez 40 litres d\'eau de plus, ou bien l\'arête du cube affecté augmente de 1,50 mètre par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/creation-ou-destruction-deau',
    title: 'Création ou destruction d\'eau',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (une goutte d\'eau pour créer de l\'eau ou quelques grains de sable pour en détruire)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Croissance d\'épines',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S, M (sept épines acérées ou sept brindilles taillées en pointe)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Dans une zone de 6 mètres de rayon centrée sur un point à portée, le sol se met à se déformer et donne naissance à un tapis de pointes et d\'épines. La zone se mue en terrain difficile pendant toute la durée du sort. Quand une créature entre dans la zone ou s\'y déplace, elle reçoit 2d4 dégâts perforants par tranche de 1,50 mètre parcouru.</p>\n<p>La transformation du sol est camouflée, de manière à ce que le terrain ait l\'air naturel. Une créature dans l\'incapacité de voir la zone au moment de l\'incantation doit réussir un test de Sagesse (Perception) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort pour remarquer que le terrain est dangereux avant d\'y entrer.</p>',
    link: '/grimoire/croissance-depines',
    title: 'Croissance d\'épines',
    level: '2',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S, M (sept épines acérées ou sept brindilles taillées en pointe)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Croissance végétale',
      spell: {
        casting_time: '1 action ou 8 heures',
        range: '45 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort décuple la vitalité des plantes d\'une zone donnée. Le sort a deux modes d\'utilisation, l\'un apportant des bénéfices immédiats, l\'autre sur le long terme.</p>\n<p><strong>Si vous lancez ce sort en une action, choisissez un point à portée</strong>. Toutes les plantes ordinaires situées dans un rayon de 30 mètres autour de ce point deviennent particulièrement touffues et la végétation s\'épaissit. Une créature qui se déplace dans cette zone doit dépenser 1,20 mètre de déplacement pour parcourir 30 centimètres.</p>\n<p>Vous pouvez exclure une ou plusieurs portions, de n\'importe quelle taille, de la zone affectée par le sort.</p>\n<p><strong>Si vous lancez le sort sur une période de huit heures, vous enrichissez la terre</strong>. Toute la végétation dans un rayon de 800 mètres autour d\'un point de votre choix situé à portée devient luxuriante pendant un an. Elle donne deux fois plus de nourriture que la normale lors de la récolte.</p>',
    link: '/grimoire/croissance-vegetale',
    title: 'Croissance végétale',
    level: '3',
    casting_time: '1 action ou 8 heures',
    range: '45 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Danse irrésistible',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez une créature située à portée et dans votre champ de vision. La cible entame une danse comique, se mettant à taper du pied et à caracoler sur place. Les créatures qui ne peuvent être <em>charmées</em> sont immunisées contre ce sort.</p>\n<p>Une fois que la créature s\'est mise à danser, elle doit dépenser la totalité de son déplacement pour danser sans quitter son espace. De plus, elle souffre d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets de sauvegarde de Dextérité et des jets d\'attaque. Tant que la cible est affectée par ce sort, les autres créatures bénéficient d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors de leurs jets d\'attaque contre elle. Une créature en train de danser peut utiliser son action pour effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse et reprendre le contrôle de son corps. Si elle réussit, le sort se termine.</p>',
    link: '/grimoire/danse-irresistible',
    title: 'Danse irrésistible',
    level: '6',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Déblocage',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez un objet situé à portée et dans votre champ de vision. Ce peut être une porte, une boîte, un coffre, des menottes, un cadenas ou un autre objet disposant d\'un système de fermeture ordinaire ou magique.</p>\n<p>Une cible fermée par une serrure ordinaire, coincée ou bloquée par une barre se déverrouille ou se débloque. Si l\'objet a plusieurs serrures, le sort en ouvre une seule. Si vous visez une cible fermée par un <em>verrou magique</em>, ce dernier est supprimé pendant 10 minutes, au cours desquelles on peut ouvrir et fermer la cible normalement.</p>\n<p>Quand vous lancez le sort, un cliquetis émane de l\'objet et retentit si fort qu\'on l\'entend dans un rayon de 90 mètres.</p>',
    link: '/grimoire/deblocage',
    title: 'Déblocage',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Déguisement',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous faites en sorte que votre personne (y compris vos vêtements, votre armure, vos armes et les autres objets en votre possession) prenne une apparence différente jusqu\'à la fin du sort ou jusqu\'à ce que vous utilisiez une action pour y mettre un terme. Vous pouvez passer pour une personne de 30 centimètres de plus ou de moins, sembler gros, maigre ou entre les deux. Vous ne pouvez pas changer de morphologie, vous devez choisir une forme possédant la même conformation que vous au niveau des membres. En dehors de cela, les détails de l\'illusion sont laissés à votre imagination.</p>\n<p>Les changements qu\'apporte le sort ne résistent pas à un examen physique. Par exemple, si vous l\'utilisez pour ajouter un chapeau à votre tenue, les objets passent au travers et toute personne qui essaie de le toucher ne sentira que de l\'air, ou des cheveux et un crâne. Si vous utilisez le sort pour paraître plus mince qu\'en réalité, la main de quelqu\'un qui tente de vous toucher se heurtera à vous alors que, visuellement, elle semble encore dans le vide.</p>\n<p>Pour percer votre déguisement à jour, une créature peut dépenser une action pour vous examiner. Elle doit alors réussir un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> du sort.</p>',
    link: '/grimoire/deguisement',
    title: 'Déguisement',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Demi-plan',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'S',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une porte floue sur une surface plate et solide située à portée et dans votre champ de vision. Elle est assez large pour laisser passer sans mal des créatures de taille M. Quand quelqu\'un ouvre la porte, elle donne sur un demi-plan ressemblant à une pièce vide de 9 mètres de côté (dans toutes les dimensions) faite de bois ou de pierre. La porte disparaît quand le sort se termine et les créatures et les objets encore dans le demi-plan y restent piégés, car elle s\'efface aussi de leur côté.</p>\n<p>Vous pouvez créer un nouveau demi-plan pour chaque incantation du sort ou relier la porte à un demi-plan que vous avez précédemment créé via ce sort. De plus, si vous connaissez la nature et le contenu d\'un demi-plan qu\'une autre créature a créé grâce à ce sort, vous pouvez lui relier votre propre porte.</p>',
    link: '/grimoire/demi-plan',
    title: 'Demi-plan',
    level: '8',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'S',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Déplacer la terre',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (une lame de fer et un petit sac contenant un mélange de terres : de l\'argile, du terreau et du sable)',
        duration: 'jusqu\'à 2 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez une zone de terrain à portée d\'au maximum 12 mètres de côté. Vous pouvez remodeler la terre, le sable ou l\'argile qu\'elle comporte comme bon vous semble pendant toute la durée du sort. Vous pouvez augmenter ou diminuer l\'altitude de la zone, creuser ou combler une tranchée, ériger ou abattre un mur, ou former un pilier. L\'amplitude de ces modifications ne peut pas excéder la moitié de la dimension la plus importante de la zone affectée. Donc, si vous modifiez une zone de 12 mètres de côté, vous pouvez créer un pilier de 6 mètres de haut au maximum, modifier l\'altitude de la zone de 6 mètres au plus, creuser une tranchée d\'un maximum de 6 mètres de profondeur, etc. Il faut 10 minutes pour finaliser ces modifications.</p>\n<p>Au bout de chaque période de 10 minutes passées à vous concentrer sur le sort, vous pouvez choisir une nouvelle zone de terrain à modifier. Comme les transformations se produisent lentement, il est bien rare qu\'une créature se retrouve piégée ou blessée à cause des mouvements du terrain.</p>\n<p>Ce sort est incapable de manipuler la pierre naturelle et les constructions de pierre. La roche et les structures s\'adaptent au nouvel agencement du terrain. Si vos modifications déstabilisent une structure, elle peut très bien s\'effondrer.</p>\n<p>De même, le sort n\'affecte pas directement la croissance des plantes. La terre déplacée emporte les végétaux avec elle.</p>',
    link: '/grimoire/deplacer-la-terre',
    title: 'Déplacer la terre',
    level: '6',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (une lame de fer et un petit sac contenant un mélange de terres : de l\'argile, du terreau et du sable)',
    duration: 'jusqu\'à 2 heures'
  },
  {
    header: {
      title: 'Désintégration',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (de la magnétite et une pincée de poussière)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un mince rayon de lumière verte jaillit de votre doigt pointé vers une cible située dans votre champ de vision et à portée. La cible peut être une créature, un objet ou une création de force magique, comme une barrière issue d\'un <em>mur de force</em>.</p>\n<p>Une créature visée par ce sort doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle le rate, elle subit 10d6+40 dégâts de force. Si ces dégâts la réduisent à 0 point de vie, elle est désintégrée.</p>\n<p>Une créature désintégrée est réduite à l\'état de fine poussière grise, tout comme tous les objets qu\'elle porte et transporte, à l\'exception des objets magiques. Pour ressusciter une créature ainsi désintégrée, il faut impérativement recourir à une <em>résurrection suprême</em> ou un <em>souhait</em>.</p>\n<p>Ce sort désintègre automatiquement les objets non magiques de taille G ou inférieure et les créations magiques de force. Si la cible est un objet de taille TG ou supérieure, le sort désintègre un cube de 3 mètres d\'arête au sein de l\'objet. Ce sort reste sans effet sur les objets magiques.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, les dégâts augmentent de 3d6 par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/desintegration',
    title: 'Désintégration',
    level: '6',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (de la magnétite et une pincée de poussière)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Dessication',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (une goutte d\'eau)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous désignez une cible vivante à portée du sort et tant que vous vous concentrez, l\'eau contenue dans son corps s\'écoule par ses yeux, sa bouche, ses oreilles ou les pores de sa peau. Au début de chacun de ses tours, la cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou subir 2d6 dégâts nécrotiques. Une sauvegarde réussie réduit ces dégâts de moitié.</p>\n<p>Les morts-vivants, les créatures artificielles et les élémentaires sont immunisés à ce sort.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 3 ou supérieur, vous pouvez affecter une cible supplémentaire par niveau d\'emplacement au-delà du niveau 2.</p>',
    link: '/grimoire/dessication',
    title: 'Dessication',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (une goutte d\'eau)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Détection de la magie',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration',
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, vous percevez la présence de magie dans un rayon de 9 mètres autour de vous. Si vous percevez ainsi la magie, vous pouvez utiliser votre action pour discerner une faible aura autour d\'une créature ou d\'un objet visible dans la zone et imprégné de magie. Vous découvrez aussi à quelle école appartient cette magie, le cas échéant.</p>\n<p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p>',
    link: '/grimoire/detection-de-la-magie',
    title: 'Détection de la magie',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Détection des pensées',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (une pièce de cuivre)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, vous parvenez à lire les pensées de certaines créatures. Quand vous lancez ce sort, puis en tant qu\'action à votre tour jusqu\'à la fin du sort, vous pouvez focaliser vos pensées sur une créature située à moins de 9 mètres dans votre champ de vision. Si elle dispose d\'une Intelligence de 3 ou moins ou ne parle aucune langue, elle n\'est pas affectée.</p>\n<p>Au départ, vous découvrez les pensées superficielles de la créature, c\'est-à-dire ce qu\'elle a à l\'esprit à ce moment-là. Par une action, vous pouvez porter votre attention sur les pensées d\'une autre créature ou tenter de vous enfoncer plus profondément dans l\'esprit de celle que vous sondez actuellement. Dans ce cas, cette créature doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle réussit, le sort se termine. Sinon, vous avez un aperçu de son mode de raisonnement (le cas échéant), de son état émotionnel ou de ce qui occupe une place importante dans son esprit (par exemple, quelque chose qui l\'inquiète fortement, qu\'elle aime, qu\'elle déteste...). Dans les deux cas, la cible sait que vous sondez son esprit et, à moins que vous ne tourniez votre attention vers une autre créature, votre cible peut utiliser son action à son tour pour faire un test d\'Intelligence opposé au vôtre. Si elle réussit, le sort se termine.</p>\n<p>Les questions directement posées à l\'oral à une cible orientent naturellement le cours de ses pensées, ce sort est donc particulièrement utile lors d\'un interrogatoire.</p>\n<p>Vous pouvez aussi utiliser ce sort pour détecter la présence de créatures intelligentes que vous ne voyez pas. Vous pouvez chercher les pensées qui se trouvent dans un rayon de 9 mètres autour de vous au moment où vous lancez ce sort ou bien par une action tandis que le sort est actif. Le sort peut franchir des obstacles, mais il est arrêté par 60 centimètres de roche, 2,5 centimètres de métal autre que le plomb ou une mince feuille de plomb. Vous ne pouvez pas repérer les créatures dotées d\'une Intelligence de 3 ou moins, ni celles qui ne parlent aucune langue.</p>\n<p>Une fois que vous avez ainsi détecté la présence d\'une créature, vous pouvez lire ses pensées pendant le reste de la durée du sort, comme expliqué plus haut, même si vous ne la voyez pas, mais elle doit tout de même se trouver à portée.</p>',
    link: '/grimoire/detection-des-pensees',
    title: 'Détection des pensées',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (une pièce de cuivre)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Détection du mal et du bien',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, vous savez s\'il y a une aberration, un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant dans un rayon de 9 mètres autour de vous et vous savez précisément où il se trouve. De même, vous savez si un lieu ou un objet situé dans un rayon de 9 mètres a été consacré ou profané.</p>\n<p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p>',
    link: '/grimoire/detection-du-mal-et-du-bien',
    title: 'Détection du mal et du bien',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Détection du poison et des maladies',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (un brin d\'if)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration',
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, vous percevez la présence de poisons, de créatures venimeuses et de maladies dans un rayon de 9 mètres autour de vous. Vous déterminez également leur emplacement et identifiez à chaque fois le type de poison, de créature ou de maladie concerné.</p>\n<p>Le sort ignore la plupart des obstacles, mais il ne peut pas franchir 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince feuille de plomb, ni 1 mètre de bois ou de terre.</p>',
    link: '/grimoire/detection-du-poison-et-des-maladies',
    title: 'Détection du poison et des maladies',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (un brin d\'if)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Disque flottant',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (une goutte de mercure)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort crée un plan de force circulaire horizontal d\'un mètre de diamètre pour 2,5 centimètres d\'épaisseur. Il flotte à un mètre du sol dans un espace inoccupé de votre choix situé à portée et dans votre champ de vision. Le disque persiste pendant toute la durée du sort et peut accueillir jusqu\'à 250 kilogrammes. Si on pose plus de poids dessus, le sort se termine et tout ce qui se trouvait sur le disque tombe au sol.</p>\n<p>Le disque reste immobile tant que vous vous tenez à moins de 6 mètres. Si vous vous en éloignez, il vous suit de manière à rester dans un rayon de 6 mètres autour de vous. Il peut se déplacer sur un terrain irrégulier, monter ou descendre des escaliers, des pentes, etc. Mais il ne peut pas franchir une différence de niveau de 3 mètres ou plus. Par exemple, il ne peut pas passer au-dessus d\'une fosse de 3 mètres de profondeur ni la quitter s\'il a été formé au fond.</p>\n<p>Si vous vous éloignez à plus de 30 mètres du disque (typiquement parce qu\'il ne peut pas contourner un obstacle pour vous suivre), le sort se termine.</p>',
    link: '/grimoire/disque-flottant',
    title: 'Disque flottant',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (une goutte de mercure)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Dissipation de la magie',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Paladin',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez une créature, un objet ou un effet magique à portée. Tout sort de niveau 3 ou inférieur qui l\'affecte se termine. Si la cible est affectée par un sort de niveau 4 ou plus, faites un test de caractéristique en utilisant votre caractéristique d\'incantation. Le DD est de 10 + niveau du sort. Ce dernier se termine si vous réussissez votre test.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, vous mettez automatiquement un terme à un sort affectant la cible quand le niveau de ce sort est égal ou inférieur au niveau de l\'emplacement de sort que vous utilisez.</p>',
    link: '/grimoire/dissipation-de-la-magie',
    title: 'Dissipation de la magie',
    level: '3',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Dissipation du mal et du bien',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (eau bénite ou poudre d\'argent et de fer)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une énergie scintillante vous entoure et vous protège contre les fées, les morts-vivants et les créatures originaires d\'un autre plan que le plan matériel. Pendant toute la durée du sort, les célestes, les élémentaires, les fées, les fiélons et les morts-vivants subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de leurs attaques contre vous.</p>\n<p>Vous pouvez terminer le sort plus tôt en utilisant l\'une des fonctions spéciales suivantes.</p>\n<p><strong>Annulation d\'enchantement</strong>. Vous utilisez votre action pour toucher une créature à votre portée qui se trouve <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a>, <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> ou possédée par un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant. Cette créature n\'est alors plus <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a>, <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> ni possédée par ces créatures.</p>\n<p><strong>Renvoi</strong>. Vous utilisez votre action pour faire une attaque de sort au corps-à-corps contre un céleste, un élémentaire, une fée, un fiélon ou un mort-vivant situé à une distance inférieure ou égale à votre allonge. Si vous touchez la créature, vous tentez de la renvoyer sur son plan natal. Elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme ou retourner sur son plan natal (si elle ne s\'y trouve pas déjà). Si un mort-vivant ne se trouve pas sur son plan natal, il est renvoyé dans les plans inférieurs, tandis qu\'une fée sera expulsée sur son plan d\'origine.</p>',
    link: '/grimoire/dissipation-du-mal-et-du-bien',
    title: 'Dissipation du mal et du bien',
    level: '5',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (eau bénite ou poudre d\'argent et de fer)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Divination',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (de l\'encens et une offrande sacrificielle adaptée à votre religion, l\'ensemble valant au moins 25 po, et le sort consume les deux)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Grâce à votre magie et à une offrande, vous entrez en contact avec un dieu ou l\'un de ses serviteurs. Vous lui posez une unique question à propos d\'un objectif, d\'un événement ou d\'une activité qui doit se dérouler dans les 7 jours à venir. Le MJ vous donne une réponse sincère, pouvant être une courte phrase, des vers cryptiques ou un présage.</p>\n<p>Le sort ne tient pas compte d\'une éventuelle modification des circonstances susceptible de bouleverser l\'issue des événements, comme l\'incantation de sorts supplémentaires ou la perte ou l\'arrivée d\'un compagnon.</p>\n<p>Si vous lancez ce sort à deux reprises ou plus avant un long repos, il y a 25  % de chances par incantation en sus de la première que vous obteniez une prémonition aléatoire au lieu d\'une prémonition fiable. C\'est au MJ de faire ce jet en secret.</p>',
    link: '/grimoire/divination',
    title: 'Divination',
    level: '4',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (de l\'encens et une offrande sacrificielle adaptée à votre religion, l\'ensemble valant au moins 25 po, et le sort consume les deux)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Doigt de mort',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous envoyez de l\'énergie négative dans le corps d\'une créature située à portée et dans votre champ de vision, ce qui lui inflige des douleurs déchirantes. La cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Si elle échoue, elle subit 7d8+30 dégâts nécrotiques, la moitié seulement si elle réussit.</p>\n<p>Si ce sort achève un humanoïde, ce dernier se relève au début de votre prochain tour sous forme de zombi à jamais sous votre contrôle. Il suit vos ordres verbaux au mieux de ses capacités.</p>',
    link: '/grimoire/doigt-de-mort',
    title: 'Doigt de mort',
    level: '7',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Dominer un humanoïde',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez d\'envoûter un humanoïde situé à portée et dans votre champ de vision. Il doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi il est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a> par vous pendant toute la durée du sort. Il dispose d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> si vous ou des créatures amicales envers vous êtes en train de le combattre.</p>\n<p>Tant que l\'humanoïde est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a>, vous entretenez un lien télépathique avec lui qui persiste tant que vous vous trouvez sur le même plan d\'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d\'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme «  <em>attaque cette créature</em>  », «  <em>cours jusque là-bas</em>  » ou «  <em>va chercher cet objet</em>  ». Si elle ne reçoit pas de nouvelle instruction de votre part une fois l\'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p>\n<p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu\'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé. Pendant cette période, vous pouvez aussi lui faire exécuter une réaction, mais vous devez pour cela également dépenser votre propre réaction.</p>\n<p>À chaque fois que la cible subit des dégâts, elle a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6, la durée devient « <em>concentration, jusqu\'à 10 minutes</em> ». Si vous lancez ce sort en utilisant un emplacement de niveau 7, la durée devient « <em>concentration, jusqu\'à 1 heure</em>  ». Si vous lancez ce sort en utilisant un emplacement de niveau 8, la durée devient « <em>concentration, jusqu\'à 8 heures</em> ».</p>',
    link: '/grimoire/dominer-un-humanoide',
    title: 'Dominer un humanoïde',
    level: '5',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Dominer un monstre',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez d\'envoûter une créature située à portée et dans votre champ de vision. Elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> par vous pendant toute la durée du sort. Elle dispose d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> si vous ou des créatures amicales envers vous êtes en train de la combattre.</p>\n<p>Tant que la créature est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a>, vous entretenez un lien télépathique avec elle qui persiste tant que vous vous trouvez sur le même plan d\'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d\'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme «  <em>attaque cette créature</em>  », «  <em>cours jusque là-bas</em>  » ou « <em>va chercher cet objet</em> ». Si elle ne reçoit pas de nouvelle instruction de votre part une fois l\'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p>\n<p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu\'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé. Pendant cette période, vous pouvez aussi lui faire exécuter une réaction, mais vous devez pour cela également dépenser votre propre réaction.</p>\n<p>À chaque fois que la cible subit des dégâts, elle a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 9, la durée devient « <em>concentration, jusqu\'à 8 heures</em> ».</p>',
    link: '/grimoire/dominer-un-monstre',
    title: 'Dominer un monstre',
    level: '8',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Dominer une bête',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez d\'envoûter une bête située à portée et dans votre champ de vision. Elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> par vous pendant toute la durée du sort. Elle dispose d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> si vous ou des créatures amicales envers vous êtes en train de la combattre.</p>\n<p>Tant que la bête est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a>, vous entretenez un lien télépathique avec elle qui persiste tant que vous vous trouvez sur le même plan d\'existence. Vous pouvez utiliser ce lien télépathique pour donner des ordres à cette créature tant que vous êtes conscient (ce qui ne vous demande pas d\'action). Elle fait de son mieux pour vous obéir. Vous pouvez lui donner un ordre simple et générique, comme «  <em>attaque cette créature</em>  », «  <em>cours jusque là-bas</em>  » ou « <em>va chercher cet objet</em> ». Si elle ne reçoit pas de nouvelle instruction de votre part une fois l\'ordre exécuté, elle se contente de se défendre et de se préserver au mieux.</p>\n<p>Vous pouvez utiliser votre action pour prendre le contrôle total de votre cible et la diriger de façon précise. Jusqu\'à la fin de votre prochain tour, elle exécute seulement les actions que vous choisissez et ne fait rien que vous ne lui ayez autorisé. Pendant cette période, vous pouvez aussi lui faire exécuter une réaction, mais vous devez pour cela également dépenser votre propre réaction.</p>\n<p>À chaque fois que la cible subit des dégâts, elle a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse contre le sort. Si elle le réussit, le sort prend fin.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5, la durée devient « <em>concentration, jusqu\'à 10 minutes</em> ». Si vous lancez ce sort en utilisant un emplacement de niveau 6, la durée devient « <em>concentration, jusqu\'à 1 heure</em> ». Si vous lancez ce sort en utilisant un emplacement de niveau 7, la durée devient « <em>concentration, jusqu\'à 8 heures</em> ».</p>',
    link: '/grimoire/dominer-une-bete',
    title: 'Dominer une bête',
    level: '4',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Doux repos',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une pincée de sel et une pièce de cuivre à poser sur chaque œil du cadavre et qui doivent rester en place pendant toute la durée du sort)',
        duration: '10 jours'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc',
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez un cadavre ou des restes. Pendant toute la durée du sort, la cible est protégée contre la décomposition et ne peut pas se transformer en mort-vivant.</p>\n<p>Le sort rallonge aussi la période pendant laquelle on peut rappeler la cible d\'entre les morts, car les jours passés sous l\'influence de ce sort ne sont pas décomptés de la période pendant laquelle on peut utiliser des sorts comme <em>rappel à la vie</em>.</p>',
    link: '/grimoire/doux-repos',
    title: 'Doux repos',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une pincée de sel et une pièce de cuivre à poser sur chaque œil du cadavre et qui doivent rester en place pendant toute la durée du sort)',
    duration: '10 jours'
  },
  {
    header: {
      title: 'Druidisme',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez l\'un des effets suivants à portée après quelques murmures adressés aux esprits de la nature.</p>\n<ul>\n<li>Vous créez un effet sensoriel réduit et inoffensif qui annonce le temps qu\'il fera là où vous vous trouvez pendant les 24 heures à venir. Cet effet peut prendre la forme d\'un orbe doré si le temps va rester dégagé, d\'un nuage s\'il va pleuvoir, de flocons pour une averse de neige etc. L\'effet persiste pendant 1 round.</li>\n<li>Vous faites éclore une fleur ou un bourgeon ou germer une graine.</li>\n<li>Vous créez un effet sensoriel instantané, réduit et inoffensif, comme des feuilles qui tombent, une bourrasque, le bruit que ferait un petit animal ou une légère odeur de moufette. L\'effet doit être contenu dans un cube d\'au maximum 1,50 mètre d\'arête.</li>\n<li>Vous allumez ou éteignez instantanément une chandelle, une torche ou un petit feu de camp.</li>\n</ul>',
    link: '/grimoire/druidisme',
    title: 'Druidisme',
    level: '0',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Éclair',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (ligne de 30 mètres)',
        components: 'V, S, M (un peu de fourrure et une baguette en ambre, en cristal ou en verre)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un éclair formant une ligne de 30 mètres de long pour 1,50 mètre de large jaillit de votre personne et file dans la direction de votre choix. Chaque créature située sur la ligne doit réaliser un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 8d6 dégâts de foudre, les autres la moitié seulement.</p>\n<p>La foudre embrase les objets inflammables de la zone qui ne sont ni portés ni transportés par une créature.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/eclair',
    title: 'Éclair',
    level: '3',
    casting_time: '1 action',
    range: 'personnelle (ligne de 30 mètres)',
    components: 'V, S, M (un peu de fourrure et une baguette en ambre, en cristal ou en verre)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Éclat de bois',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (une écharde de bois)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous jetez un éclat de bois qui prend la forme d\'une véritable javeline et part en direction de votre cible. Vous devez réussir une attaque de sort à distance pour toucher votre cible. En cas de réussite, l\'éclat de bois inflige 1d6 dégâts perforants. La zone de critique de l\'attaque est de 18-20. L\'éclat de bois est considéré comme une arme magique.</p>\n<p>Vous pouvez lancer un éclat de bois supplémentaire lorsque vous atteignez les niveaux 5, 11 et 17. Ces éclats peuvent viser différentes cibles à portée du sort.</p>',
    link: '/grimoire/eclat-de-bois',
    title: 'Éclat de bois',
    level: '0',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (une écharde de bois)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Éclat du soleil',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S, M (du feu et un éclat d\'héliotrope)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La chaude lumière du soleil illumine une zone de 18 mètres de rayon centrée sur un point de votre choix situé à portée. Chaque créature présente dans cette lumière doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui échouent subissent 12d6 dégâts radiants et sont <em>aveuglées</em> pendant 1 minute. Les autres subissent seulement la moitié des dégâts et ne sont pas <em>aveuglées</em> par le sort. Les vases et les morts-vivants sont affectés par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de ce <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>\n<p>Une créature <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> par le sort fait un autre jet de Constitution à la fin de chacun de ses tours. Dès qu\'elle réussit, sa cécité disparaît.</p>\n<p>Ce sort dissipe toutes les ténèbres issues d\'un sort présentes dans la zone.</p>',
    link: '/grimoire/eclat-du-soleil',
    title: 'Éclat du soleil',
    level: '8',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S, M (du feu et un éclat d\'héliotrope)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Embruns prismatiques',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (cône de 18 mètres)',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Huit rayons de lumière multicolores jaillissent de votre main. Chacun a une couleur différente et possède des pouvoirs et objectifs distincts. Chaque créature présente dans un cône de 18 mètres doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Lancez 1d8 par cible pour savoir quelle couleur l\'affecte.</p>\n<ol>\n<li><strong><em>Rouge</em></strong>. La cible subit 10d6 dégâts de feu si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</li>\n<li><strong><em>Orange</em></strong>. La cible subit 10d6 dégâts d\'acide si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</li>\n<li><strong><em>Jaune</em></strong>. La cible subit 10d6 dégâts de foudre si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</li>\n<li><strong><em>Vert</em></strong>. La cible subit 10d6 dégâts de poison si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</li>\n<li><strong><em>Bleu</em></strong>. La cible subit 10d6 dégâts de froid si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit.</li>\n<li><strong><em>Indigo</em></strong>. Si la cible rate son jet de sauvegarde, elle est entravée et doit alors faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution à la fin de chacun de ses tours. Si elle en réussit trois, le sort se termine, si elle en rate trois, elle se change définitivement en pierre et est pétrifiée. Les succès et les échecs n\'ont pas à être consécutifs : tenez le compte dans chaque catégorie jusqu\'à ce que l\'une d\'elles arrive à trois.</li>\n<li><strong><em>Violet</em></strong>. La cible est aveuglée si elle rate son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>. Elle doit alors faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse au début de votre prochain tour. Si elle le réussit, elle recouvre la vue ; si elle le rate, elle est emportée sur un autre plan d\'existence choisi par le MJ et recouvre aussi la vue. (En général, une créature qui ne se trouve pas sur son propre plan d\'existence est bannie là-bas tandis que les autres créatures sont envoyées sur le plan astral ou éthéré.)</li>\n<li><strong><em>Spécial</em></strong>. Deux rayons viennent frapper la cible. Relancez deux fois le dé en le relançant à chaque fois que vous obtenez un 8.</li>\n</ol>',
    link: '/grimoire/embruns-prismatiques',
    title: 'Embruns prismatiques',
    level: '7',
    casting_time: '1 action',
    range: 'personnelle (cône de 18 mètres)',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Emprisonnement',
      spell: {
        casting_time: '1 minute',
        range: '9 mètres',
        components: 'V, S, M (un portrait sur un vélin ou une statuette sculptée à l\'effigie de la cible et une composante spéciale qui varie en fonction de la version du sort choisie et vaut au moins 500 po par dé de vie de la cible)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez des entraves magiques pour immobiliser une créature située à portée et dans votre champ de vision. La cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou se retrouver emprisonnée par le sort. Si elle réussit, elle est immunisée contre ce sort si vous le lancez de nouveau. Tant que la créature est affectée par le sort, elle n\'a pas besoin de respirer, de manger, ni de boire et ne vieillit plus. Les sorts de divination ne parviennent plus à la localiser ni à la percevoir.</p>\n<p>Vous devez opter pour l\'une des formes d\'emprisonnement suivantes quand vous lancez le sort.</p>\n<p><strong>Confinement minimal</strong>. La cible rétrécit jusqu\'à ne plus faire que 2,5 centimètres de haut et se retrouve emprisonnée dans une gemme ou un objet similaire. La lumière traverse la gemme normalement (ce qui permet à la cible de voir l\'extérieur et aux autres créatures de regarder dedans) mais rien d\'autre ne peut traverser sa paroi, pas même les méthodes de téléportation ni les voyages planaires. Il est impossible de tailler la gemme ou de la briser tant que le sort fait effet. La composante spéciale de cette version du sort est une grande gemme transparente comme un corindon, un diamant ou un rubis.</p>\n<p><strong>Enchaîné</strong>. La cible est retenue par de lourdes chaînes fermement ancrées au sol. Elle est entravée jusqu\'à ce que le sort se termine et, jusque-là, elle ne peut pas se déplacer ni être déplacée par quelque moyen que ce soit. La composante spéciale de cette version du sort est une fine chaîne faite de métal précieux.</p>\n<p><strong>Enseveli</strong>. La cible est ensevelie dans les profondeurs de la terre, dans une sphère de force magique tout juste assez grande pour la contenir. Rien ne peut traverser cette sphère et les créatures ne peuvent pas recourir au voyage planaire pour y entrer ou en sortir. La composante spéciale de cette version du sort est un petit orbe en mithral.</p>\n<p><strong>Prison isolée</strong>. Le sort transporte la cible dans un minuscule demi-plan protégé contre la téléportation et les voyages planaires. Ce demi-plan peut-être un labyrinthe, une cage, une tour ou une structure confinée similaire de votre choix. La composante spéciale de cette version du sort est une représentation miniature de la prison, faite de jade.</p>\n<p><strong>Sommeil</strong>. La cible s\'endort et il est impossible de la réveiller. La composante spéciale de cette version du sort est un bouquet d\'herbes soporifiques très rares.</p>\n<p><strong>Mettre fin au sort</strong>. Lors de l\'incantation et quelle que soit la version du sort, vous pouvez préciser une condition spéciale qui met fin au sort et libère la cible. Cette condition peut être aussi spécifique ou aussi élaborée que vous le désirez, mais le MJ doit confirmer que cette condition est réalisable et a une chance d\'être remplie. Elle peut se baser sur le nom de la créature, son identité ou sa divinité, mais elle doit sinon reposer sur des actions ou des qualités observables et non sur des éléments intangibles comme le niveau, la classe ou les points de vie.</p>\n<p><em>Dissipation de la magie</em> peut mettre fin au sort à condition d\'être lancée depuis un emplacement de sort de niveau 9 en visant la prison ou la composante matérielle spéciale utilisée pour lancer le sort.</p>\n<p>Vous pouvez utiliser une composante spéciale pour créer une prison à la fois seulement. Si vous relancez ce sort en utilisant la même composante, la cible de la première incantation est libérée sur-le-champ.</p>',
    link: '/grimoire/emprisonnement',
    title: 'Emprisonnement',
    level: '9',
    casting_time: '1 minute',
    range: '9 mètres',
    components: 'V, S, M (un portrait sur un vélin ou une statuette sculptée à l\'effigie de la cible et une composante spéciale qui varie en fonction de la version du sort choisie et vaut au moins 500 po par dé de vie de la cible)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Enchevêtrement',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Des herbes et des lianes entremêlées jaillissent du sol dans un carré de 6 mètres de côté centré sur un point de votre choix à portée. Pendant toute la durée du sort, les végétaux transforment la zone en terrain difficile.</p>\n<p>Une créature qui se trouve dans la zone affectée lorsque vous lancez le sort doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force, sans quoi elle reste <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> dans les plantes jusqu\'à ce que le sort se termine. Une créature <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> peut utiliser une action pour faire un test de Force contre le DD du sort. Si elle réussit, elle se libère.</p>\n<p>Quand le sort se termine, les plantes invoquées flétrissent.</p>',
    link: '/grimoire/enchevetrement',
    title: 'Enchevêtrement',
    level: '1',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Entrave planaire',
      spell: {
        casting_time: '1 heure',
        range: '18 mètres',
        components: 'V, S, M (un bijou d\'une valeur minimale de 1000 po, que le sort consume)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Grâce à ce sort, vous vous attachez de force les services d\'un céleste, d\'un élémentaire, d\'une fée ou d\'un fiélon. La créature doit se trouver à portée pendant toute la durée du sort. (En général, elle est d\'abord invoquée au centre d\'un cercle magique inversé où elle reste piégée le temps de l\'incantation.) La cible doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme à la fin de l\'incantation. Si elle échoue, elle est contrainte de vous servir pendant toute la durée du sort. Si elle a été invoquée ou créée via un autre sort, la durée de ce dernier se prolonge jusqu\'à égaler celle de l\'entrave planaire.</p>\n<p>La créature liée doit suivre vos instructions au mieux de ses capacités. Vous pouvez lui demander de vous accompagner lors d\'une aventure, de protéger un lieu ou de transmettre un message. La créature suit vos instructions à la lettre mais, si elle est hostile envers vous, elle peut tout à fait interpréter vos paroles de manière à satisfaire ses propres objectifs. Si la créature a exécuté vos instructions avant la fin du sort, elle revient vers vous pour vous en informer si elle se trouve sur le même plan d\'existence que vous. Si vous êtes sur un autre plan, elle se rend là où vous l\'avez liée et y reste jusqu\'à la fin du sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau supérieur, la durée augmente : 10 jours au niveau 6, 30 au niveau 7, 180 au niveau 8 et 1 an et 1 jour au niveau 9.</p>',
    link: '/grimoire/entrave-planaire',
    title: 'Entrave planaire',
    level: '5',
    casting_time: '1 heure',
    range: '18 mètres',
    components: 'V, S, M (un bijou d\'une valeur minimale de 1000 po, que le sort consume)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Envoi de message',
      spell: {
        casting_time: '1 action',
        range: 'illimitée',
        components: 'V, S, M (un petit bout de fil de cuivre)',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous envoyez un court message d\'au maximum vingt-cinq mots à une créature qui vous est familière. Elle entend le message dans son esprit, sait que c\'est vous qui le lui avez envoyé si elle vous connaît, et peut vous répondre immédiatement de la même manière. Le sort permet aux créatures dotées d\'une Intelligence supérieure ou égale à 1 de comprendre le sens de votre message.</p>\n<p>Vous pouvez envoyer votre message à n\'importe quelle distance, et même sur un autre plan d\'existence, mais il y a 5 % de chances, si la cible est sur un autre plan, que le message ne lui parvienne pas.</p>',
    link: '/grimoire/envoi-de-message',
    title: 'Envoi de message',
    level: '3',
    casting_time: '1 action',
    range: 'illimitée',
    components: 'V, S, M (un petit bout de fil de cuivre)',
    duration: '1 round'
  },
  {
    header: {
      title: 'Envoûtement',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous entonnez une suite de paroles envoûtantes qui obligent les créatures de votre choix qui vous entendent et sont situées à portée et dans votre champ de vision à effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Une créature qui ne peut pas être <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> réussit automatiquement ce <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>. Si vous ou vos compagnons vous battez contre une de ces créatures, elle dispose d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>. Si la créature rate son jet, elle subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des tests de Sagesse (Perception) destinés à percevoir une créature autre que vous jusqu\'à ce que le sort se termine ou jusqu\'à ce qu\'elle ne puisse plus vous entendre. Le sort se termine si vous êtes <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisé</em></a> ou dans l\'incapacité de parler.</p>',
    link: '/grimoire/envoutement',
    title: 'Envoûtement',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Épargner les mourants',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature vivante à 0 point de vie, ce qui la stabilise. Ce sort n\'a aucun effet sur les morts-vivants et les créatures artificielles.</p>',
    link: '/grimoire/epargner-les-mourants',
    title: 'Épargner les mourants',
    level: '0',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Épée du juste',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Votre épée devient une épée de justice pour toute la durée du sort. Elle bénéficie donc d\'un bonus de +3 aux jets d\'attaque et aux dégâts, inflige 2d10 dégâts radiants supplémentaires contre les fiélons et les morts-vivants, et crée une aura de 3 mètres de rayon octroyant à vos alliés qui s\'y trouvent un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> aux jets de sauvegarde contre les sorts et effets magiques. De plus, lorsque l\'épée de justice blesse pour la première fois un fiélon ayant un nombre de DV inférieur ou égal au vôtre, celui-ci doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme sous peine de disparaître aussitôt et d\'être contraint de retourner à son plan d\'origine.</p>',
    link: '/grimoire/epee-du-juste',
    title: 'Épée du juste',
    level: '5',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Épée magique',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (une épée en platine miniature avec le pommeau et la poignée en cuivre et zinc, d\'une valeur de 250 po)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un plan de force en forme d\'épée qui plane à portée et persiste pendant toute la durée du sort.</p>\n<p>Dès que l\'épée apparaît, vous faites une attaque de sort au corps-à-corps contre une cible de votre choix située dans un rayon de 1,50 mètre autour de l\'épée. Si l\'épée touche, la cible subit 3d10 dégâts de force. Tant que le sort n\'est pas terminé, vous pouvez dépenser une action bonus à chacun de vos tours pour déplacer l\'épée d\'un maximum de 6 mètres afin de la conduire à un endroit situé dans votre champ de vision, puis répéter l\'attaque contre la même cible ou une autre.</p>',
    link: '/grimoire/epee-magique',
    title: 'Épée magique',
    level: '7',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (une épée en platine miniature avec le pommeau et la poignée en cuivre et zinc, d\'une valeur de 250 po)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Esprit faible',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S, M (une poignée de sphères en argile, en cristal, en verre ou minérales)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous vous attaquez à l\'esprit d\'une créature située à portée et dans votre champ de vision en essayant de briser son intellect et sa personnalité. La cible subit 4d6 dégâts psychiques et doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> d\'Intelligence.</p>\n<p>Si la cible rate son jet, son Intelligence et son Charisme tombent à 1. Elle ne peut plus lancer de sort, activer d\'objet magique, comprendre une langue ni communiquer de manière intelligible. En revanche, elle est toujours capable de reconnaître ses amis, de les suivre et même de les protéger.</p>\n<p>La créature peut refaire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> tous les 30 jours. Le sort se termine dès qu\'elle réussit. On peut aussi mettre un terme à ce sort grâce à l\'un des sorts suivants : <em>restauration supérieure</em>, <em>guérison</em> ou <em>souhait</em>.</p>',
    link: '/grimoire/esprit-faible',
    title: 'Esprit faible',
    level: '8',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S, M (une poignée de sphères en argile, en cristal, en verre ou minérales)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Esprit impénétrable',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante et, jusqu\'à la fin du sort, vous l\'immunisez contre les dégâts psychiques, les effets percevant les émotions ou révélant les pensées, les sorts de divination et l\'état <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a>. Ce sort déjoue même les <em>souhaits</em> et les sorts et effets de même puissance qui cherchent à affecter l\'esprit de la cible ou à obtenir des informations à son propos.</p>',
    link: '/grimoire/esprit-impenetrable',
    title: 'Esprit impénétrable',
    level: '8',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Esprits gardiens',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (4,5 mètres de rayon)',
        components: 'V, S, M (un symbole sacré)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous appelez des esprits qui vous protègent. Ils volettent autour de vous dans un rayon de 4,50 mètres pendant toute la durée du sort. Si vous êtes Bon ou Neutre, ils ont une apparence angélique ou féerique (à vous de choisir). Si vous êtes Mauvais, ils ont une apparence fiélone.</p>\n<p>Quand vous lancez le sort, vous pouvez désigner autant de créatures que vous le voulez afin qu\'il ne les affecte pas. Une créature affectée voit sa vitesse réduite de moitié dans la zone et, quand elle y entre pour la première fois de son tour ou quand elle y commence son tour, elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle échoue, elle subit 3d8 dégâts radiants (si vous êtes Bon ou Neutre) ou 3d8 dégâts nécrotiques (si vous êtes Mauvais). Si elle réussit son jet de sauvegarde, elle subit seulement la moitié de ces dégâts.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/esprits-gardiens',
    title: 'Esprits gardiens',
    level: '3',
    casting_time: '1 action',
    range: 'personnelle (4,5 mètres de rayon)',
    components: 'V, S, M (un symbole sacré)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Étrangeté',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous puisez dans les peurs les plus profondes d\'un groupe de créatures et créez des êtres illusoires dans leurs esprits, qu\'elles sont les seules à voir. Chaque créature située dans une sphère de 9 mètres de rayon centrée sur un point de votre choix situé à portée doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou être <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> pendant toute la durée du sort. Les illusions se basent sur les peurs enfouies en chaque cible et transforment leurs pires cauchemars en menace implacable. À la fin de chacun de ses tours, une créature <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle échoue, elle subit 4d10 dégâts psychiques. Si elle réussit, le sort se termine pour elle.</p>',
    link: '/grimoire/etrangete',
    title: 'Étrangeté',
    level: '9',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Éveil',
      spell: {
        casting_time: '8 heures',
        range: 'contact',
        components: 'V, S, M (une agate d\'une valeur minimale de 1000 po, que le sort consomme)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une fois que vous avez passé la durée de l\'incantation à tracer des sentiers magiques dans une pierre précieuse, vous touchez un animal ou une plante de taille TG ou inférieure qui doivent être dépourvus de toute valeur d\'Intelligence ou posséder une Intelligence de 3 ou moins. La cible reçoit alors une Intelligence de 10 et la possibilité de parler un langage que vous connaissez. Si la cible est une plante, elle peut se déplacer à l\'aide de ses branches, de ses racines, de ses lianes, de ses vrilles ou autre et gagne des sens similaires à ceux d\'un humain. C\'est au MJ de choisir les caractéristiques appropriées à la plante éveillée, en lui appliquant par exemple le profil d\'un buisson ou d\'un arbre éveillé.</p>\n<p>La bête ou la plante éveillée est considérée <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> par vous pendant 30 jours ou jusqu\'à ce que vous ou l\'un de vos compagnons la blessiez. Une fois que cet effet se termine, la créature éveillée décide seule si elle reste amicale envers vous, selon la façon dont vous l\'avez traitée lorsqu\'elle était <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a>.</p>',
    link: '/grimoire/eveil',
    title: 'Éveil',
    level: '5',
    casting_time: '8 heures',
    range: 'contact',
    components: 'V, S, M (une agate d\'une valeur minimale de 1000 po, que le sort consomme)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Excavation',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (une cuillère)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un passage de 1,50 mètre de côté et de 15 mètres de profondeur dans la pierre ou la terre (de la roche ou un mur) et dans le bois, mais pas dans le métal. Le passage créé est permanent et l\'effet du sort ne peut être dissipé. Plusieurs incantations du sort permettent de former des tunnels souterrains ne nécessitant pas d\'étaiement. Vous pouvez orienter le tunnel dans la direction de votre choix.</p>',
    link: '/grimoire/excavation',
    title: 'Excavation',
    level: '8',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (une cuillère)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Expiation du juste',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La prochaine fois que vous réussissez une attaque de corps-à-corps pendant la durée du sort, vous lancez un ordre de repentir sur la créature que vous frappez. Sur cette attaque, elle subit 3d8 dégâts psychiques, écrasée par le poids de ses péchés et la culpabilité. En outre, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou être <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> jusqu\'à la fin de son prochain tour et subir un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> à tous ses tests de Sagesse pour une minute.</p>',
    link: '/grimoire/expiation-du-juste',
    title: 'Expiation du juste',
    level: '4',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Explosion occulte',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un éclair d\'énergie crépitante file vers une créature à portée. Faites un <a href="/combattre#jets-dattaque">jet d\'attaque</a> de sort à distance contre la cible. Si vous réussissez, elle subit 1d10 dégâts de force.</p>\n<p>Le sort crée des rayons supplémentaires quand vous atteignez certains niveaux : deux rayons au niveau 5, trois au niveau 11 et quatre au niveau 17. Vous pouvez diriger tous les rayons sur une même cible ou les répartir entre plusieurs. Faites un <a href="/combattre#jets-dattaque">jet d\'attaque</a> distinct pour chacun.</p>',
    link: '/grimoire/explosion-occulte',
    title: 'Explosion occulte',
    level: '0',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Fabrication',
      spell: {
        casting_time: '10 minutes',
        range: '36 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous convertissez des matériaux bruts en produits finis faits de la même matière. Par exemple, vous pouvez fabriquer un pont de bois à partir de souches d\'arbres, une corde à base d\'un tas de chanvre, et des habits à partir de lin ou de laine.</p>\n<p>Choisissez des matériaux bruts situés à portée et dans votre champ de vision. Vous pouvez fabriquer un objet de taille G ou inférieure (contenu dans un cube de 3 mètres de côté ou dans huit cubes reliés de 1,50 mètre de côté), à condition d\'avoir assez de matière première. Toutefois, si vous travaillez avec du métal, de la pierre ou une autre substance minérale, l\'objet fabriqué ne doit pas dépasser la taille M (donc tenir dans un cube de 1,50 mètre de côté). La qualité de l\'objet fabriqué dépend de celle des matières premières.</p>\n<p>Il est impossible de créer ou de transmuter des créatures ou des objets magiques à l\'aide de ce sort. Vous ne pouvez pas non plus y recourir pour fabriquer des objets demandant un haut degré d\'expertise, comme des bijoux, des armes, du verre ou une armure, à moins que vous n\'ayez la maîtrise des outils d\'artisan nécessaires à l\'élaboration de tels objets.</p>',
    link: '/grimoire/fabrication',
    title: 'Fabrication',
    level: '4',
    casting_time: '10 minutes',
    range: '36 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Façonnage de la pierre',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (argile molle, à façonner pour lui donner approximativement la forme de l\'objet de pierre désiré)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez un objet de pierre de taille M ou inférieure ou une section de pierre d\'un maximum de 1,50 mètre dans toutes les dimensions et lui donnez la forme que vous désirez. Vous pouvez, par exemple, façonner un gros caillou de manière à en faire une arme, une idole ou un coffre, ou bien creuser un étroit passage dans un mur, à condition que ce dernier ne fasse pas plus de 1,50 mètre d\'épaisseur. Vous pouvez façonner une porte de pierre ou son chambranle pour la sceller. L\'objet créé peut avoir au maximum deux charnières et un loquet, mais il est impossible de créer des mécanismes plus complexes.</p>',
    link: '/grimoire/faconnage-de-la-pierre',
    title: 'Façonnage de la pierre',
    level: '4',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (argile molle, à façonner pour lui donner approximativement la forme de l\'objet de pierre désiré)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Faveur divine',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vos prières vous imprègnent d\'une aura radieuse. Jusqu\'à la fin du sort, les attaques que vous portez avec une arme infligent 1d4 dégâts radiants supplémentaires en cas de coup au but.</p>',
    link: '/grimoire/faveur-divine',
    title: 'Faveur divine',
    level: '1',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Festin des héros',
      spell: {
        casting_time: '10 minutes',
        range: '9 mètres',
        components: 'V, S, M (un bol incrusté de gemmes d\'une valeur minimale de 1000 po, que le sort consume)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous matérialisez un grand festin, comprenant des boissons et des mets de grande qualité. Il faut 1 heure pour terminer le festin, qui disparaît au bout de cette durée. Ses effets bénéfiques se manifestent uniquement une fois cette heure écoulée. Douze créatures au maximum peuvent se joindre à vous lors de ce repas.</p>\n<p>Une créature qui participe au festin en retire plusieurs bénéfices. Elle est guérie de toutes les maladies et de tous les poisons qui l\'affectaient, elle est immunisée contre le poison et l\'état <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisé</em></a>, et elle obtient un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors de tous ses jets de sauvegarde de Sagesse. Son maximum de points de vie augmente de 2d10 et elle gagne le même nombre de points de vie. Ces bénéfices persistent pendant 24 heures.</p>',
    link: '/grimoire/festin-des-heros',
    title: 'Festin des héros',
    level: '6',
    casting_time: '10 minutes',
    range: '9 mètres',
    components: 'V, S, M (un bol incrusté de gemmes d\'une valeur minimale de 1000 po, que le sort consume)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Flamboiement funeste',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (morceau d\'onyx)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une explosion de flammes noires jaillit de votre corps et blesse les créatures située à moins de 1,50 mètre de vous. Chaque créature dans la zone doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité, ou subir 2d6 dégâts nécrotiques et être <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> jusqu\'à votre prochain tour. En cas de réussite, elle ne subit que la moitié des dégâts et n\'est pas <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a>.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sorts de niveau 2 ou supérieur, les dégâts augmentent de 1d6 pour chaque emplacement au-delà du niveau 1.</p>',
    link: '/grimoire/flamboiement-funeste',
    title: 'Flamboiement funeste',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (morceau d\'onyx)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Flamme éternelle',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (poussière de rubis d\'une valeur de 50 po, que le sort consume)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une flamme à la luminosité égale à celle d\'une torche embrase soudain l\'objet que vous touchez. L\'effet du sort ressemble à une flamme ordinaire, mais ne dégage pas de chaleur et ne consomme pas d\'oxygène. On peut couvrir ou cacher la flamme éternelle, mais pas l\'étouffer ni l\'éteindre avec de l\'eau.</p>',
    link: '/grimoire/flamme-eternelle',
    title: 'Flamme éternelle',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (poussière de rubis d\'une valeur de 50 po, que le sort consume)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Flamme sacrée',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une lumière flamboyante s\'abat sur une créature située à portée et dans votre champ de vision. La cible doit réussir un jet de Dextérité ou subir 1d8 dégâts radiants. Même si elle se trouve derrière un abri, la cible ne bénéficie pas d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>\n<p>Les dégâts du sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), 11 (3d8) et 17 (4d8).</p>',
    link: '/grimoire/flamme-sacree',
    title: 'Flamme sacrée',
    level: '0',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Fléau',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (une goutte de sang)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Clerc'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Trois créatures de votre choix au maximum, toutes situées à portée et dans votre champ de vision, sont contraintes d\'effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme. Dès qu\'une cible qui a raté ce jet effectue un <a href="/combattre#jets-dattaque">jet d\'attaque</a> ou <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">de sauvegarde</a> alors que le sort n\'est pas terminé, elle doit lancer 1d4 et soustraire le résultat obtenu de son <a href="/combattre#jets-dattaque">jet d\'attaque</a> ou <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">de sauvegarde</a>.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous pouvez viser une créature de plus par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/fleau',
    title: 'Fléau',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (une goutte de sang)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Fléau d\'insectes',
      spell: {
        casting_time: '1 action',
        range: '90 mètres',
        components: 'V, S, M (un peu de sucre en poudre, quelques graines de céréales et une tache de graisse)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un essaim de sauterelles carnivores forme une sphère de 6 mètres de rayon centrée sur un point de votre choix situé à portée. La sphère s\'étend en contournant les angles et persiste pendant toute la durée du sort. La visibilité est réduite dans la zone affectée. L\'intérieur de la sphère devient un terrain difficile.</p>\n<p>Quand la sphère d\'insectes apparaît, chaque créature prise à l\'intérieur doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Une créature subit 4d10 dégâts perforants si elle rate son jet, la moitié seulement si elle le réussit. Une créature doit effectuer le même jet quand elle entre dans la sphère pour la première fois de son tour ou quand elle y termine son tour.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, les dégâts augmentent de 1d10 par niveau au-delà du niveau 5.</p>',
    link: '/grimoire/fleau-dinsectes',
    title: 'Fléau d\'insectes',
    level: '5',
    casting_time: '1 action',
    range: '90 mètres',
    components: 'V, S, M (un peu de sucre en poudre, quelques graines de céréales et une tache de graisse)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Flèche acide',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S, M (poudre de feuille de rhubarbe et estomac de vipère)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une flèche d\'un vert chatoyant file vers une cible située à portée et explose en une gerbe d\'acide. Faites une attaque de sort à distance contre la cible. Si vous touchez, la cible reçoit 4d4 dégâts d\'acide immédiatement et 2d4 dégâts d\'acide à la fin de son prochain tour. Si vous ne touchez pas, l\'acide éclabousse la cible et lui inflige la moitié des dégâts initiaux, mais aucun à la fin de son prochain tour.</p>\n<p><strong>À plus haut niveau</strong>. Quand vous utilisez ce sort via un emplacement de niveau 3 ou supérieur, les dégâts initiaux et secondaires augmentent de 1d4 par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/fleche-acide',
    title: 'Flèche acide',
    level: '2',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S, M (poudre de feuille de rhubarbe et estomac de vipère)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Flétrissement',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>L\'énergie nécromantique inonde une créature de votre choix située à portée et dans votre champ de vision, et draine ses fluides corporels et sa vitalité. La cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Si elle échoue, elle reçoit 8d8 dégâts nécrotiques, la moitié seulement si elle réussit son jet. Ce sort n\'a aucun effet sur les morts-vivants ou les créatures artificielles.</p>\n<p>Si vous visez une créature végétale ou une plante magique, elle subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> et le sort lui inflige le maximum de dégâts possible. Si vous visez une plante non magique qui n\'est pas une créature, comme un arbre ou un buisson, elle n\'a pas droit au moindre jet de sauvegarde, mais se flétrit et meurt.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du niveau 4.</p>',
    link: '/grimoire/fletrissement',
    title: 'Flétrissement',
    level: '4',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Flou',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Votre corps devient flou, il ondule et vacille comme une flamme aux yeux d\'autrui. Pendant toute la durée du sort, les créatures subissent un désavantage lorsqu\'elles font un <a href="/combattre#jets-dattaque">jet d\'attaque</a> contre vous. Un attaquant est immunisé contre cet effet s\'il ne se repose pas sur sa vue, s\'il dispose de vision aveugle, par exemple, ou s\'il peut percer les illusions à jour avec vision parfaite.</p>',
    link: '/grimoire/flou',
    title: 'Flou',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Forme éthérée',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous pénétrez dans la région frontalière du plan éthéré, dans une zone où il chevauche votre plan actuel. Vous restez sur la frontière éthérée pendant toute la durée du sort ou jusqu\'à ce que vous utilisiez une action pour y mettre fin. Pendant cette période, vous pouvez vous déplacer dans n\'importe quelle direction. Si vous optez pour un déplacement vers le haut ou le bas, le prix du mouvement est doublé, chaque mètre de déplacement vous coûtant 1 mètre supplémentaire. Vous voyez et entendez ce qui se passe sur le plan d\'où vous venez, mais tout y est gris et vous ne voyez plus rien au-delà de 18 mètres.</p>\n<p>Une fois sur le plan éthéré, vous pouvez affecter uniquement des créatures situées sur ce plan, et elles sont les seules à pouvoir vous affecter. Celles qui ne se trouvent pas sur ce plan ne vous perçoivent pas et sont incapables d\'interagir avec vous, à moins qu\'un pouvoir spécial ou magique ne le leur permette.</p>\n<p>Les objets et effets qui ne se trouvent pas sur le plan éthéré n\'ont aucune incidence sur vous, ce qui vous permet de traverser des objets que vous apercevez sur le plan d\'où vous venez.</p>\n<p>Quand le sort se termine, vous retournez immédiatement sur le plan d\'où vous venez, à l\'endroit que vous occupez actuellement. Si vous occupez le même emplacement qu\'un objet solide ou une créature lorsque cela se produit, vous êtes immédiatement projeté dans l\'espace inoccupé le plus proche susceptible de vous accueillir et subissez 6 points de dégâts de force par mètre de distance de cette projection.</p>\n<p>Ce sort n\'a aucun effet si vous le lancez alors que vous vous trouvez sur le plan éthéré ou sur un plan non limitrophe, comme les plans extérieurs.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 8 ou supérieur, vous pouvez affecter jusqu\'à trois créatures consentantes (vous y compris) par niveau au-delà du niveau 7. Toutes ces créatures doivent se trouver dans un rayon de 3 mètres autour de vous quand vous lancez le sort.</p>',
    link: '/grimoire/forme-etheree',
    title: 'Forme éthérée',
    level: '7',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 8 heures'
  },
  {
    header: {
      title: 'Forme gazeuse',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un morceau de gaze et une volute de fumée)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante et la transformez, ainsi que tous les objets qu\'elle porte et qu\'elle transporte, en nuage brumeux pour toute la durée du sort. Ce dernier se termine si la créature tombe à 0 point de vie. Le sort n\'affecte pas les créatures intangibles.</p>\n<p>Sous cette forme, la cible n\'a plus qu\'un seul mode de déplacement : le vol, à une vitesse de 3 mètres. Elle peut entrer dans l\'espace d\'une autre créature et l\'occuper. Elle est résistante aux dégâts non magiques et elle bénéficie d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors des jets de sauvegarde de Force, de Dextérité et de Constitution. Elle peut passer à travers de petits trous, de minces ouvertures et même de simples fissures. En revanche, les liquides équivalent pour elle à des surfaces solides. Elle ne peut pas tomber et continue de flotter dans les airs même si elle est <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> ou <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a>.</p>\n<p>Sous forme de nuage brumeux, la cible ne peut pas parler ni manipuler d\'objet. Il lui est impossible de lâcher les objets qu\'elle portait et qu\'elle transportait, et personne ne peut les utiliser ni interagir avec eux. Elle ne peut pas attaquer ni lancer de sort.</p>',
    link: '/grimoire/forme-gazeuse',
    title: 'Forme gazeuse',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un morceau de gaze et une volute de fumée)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Formes animales',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 24 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Votre magie transforme vos alliés en animaux. Choisissez autant de créatures consentantes à portée et dans votre champ de vision que vous désirez. Vous transformez chacune d\'entre elles en bête de taille G ou inférieure dotée d\'un indice de dangerosité inférieur ou égal à 4. Lors de vos tours suivants, vous pouvez dépenser votre action pour transformer les créatures affectées en d\'autres bêtes.</p>\n<p>La transformation persiste pour chaque cible pendant toute la durée du sort ou jusqu\'à ce que la cible tombe à 0 point de vie ou meure. Vous pouvez attribuer une forme différente à chaque cible. La cible remplace son profil technique par celui de l\'animal choisi, bien qu\'elle conserve son alignement, son Intelligence, sa Sagesse et son Charisme. La cible adopte les points de vie de sa nouvelle forme et, quand elle reprend son apparence normale, elle se retrouve avec le même nombre de points de vie que celui qu\'elle avait avant sa transformation. Si elle recouvre sa forme initiale suite à un passage à 0 point de vie, les dégâts en excès sont reportés sur les points de vie de sa forme initiale. Tant que ces dégâts en excès ne réduisent pas les points de vie de la forme normale de la cible à 0, elle ne tombe pas <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconsciente</em></a>. Les actions de la créature transformée sont limitées par la nature de sa nouvelle apparence, et elle ne peut ni parler ni lancer de sort.</p>\n<p>L\'équipement de la cible fusionne avec sa nouvelle forme, mais elle ne peut pas activer ni manier la moindre pièce d\'équipement et n\'obtient pas les bénéfices qui en découlent habituellement.</p>',
    link: '/grimoire/formes-animales',
    title: 'Formes animales',
    level: '8',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 24 heure'
  },
  {
    header: {
      title: 'Fou rire',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (de minuscules tartes et une plume à agiter dans les airs)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une créature de votre choix située à portée et dans votre champ de vision trouve soudain tout ce qui l\'entoure d\'une drôlerie hilarante et succombe à un fou rire irrépressible dès que ce sort l\'affecte. Elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou se retrouver <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>, <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> et incapable de se relever pendant toute la durée du sort. Ce sort n\'affecte pas les créatures dotées d\'une Intelligence de 4 ou moins.</p>\n<p>À la fin de chacun de ses tours et à chaque fois qu\'elle subit des dégâts, la cible a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Elle bénéficie d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors de ce jet si ce sont des dégâts qui l\'ont provoqué. Si le jet est réussi, le sort se termine.</p>',
    link: '/grimoire/fou-rire',
    title: 'Fou rire',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (de minuscules tartes et une plume à agiter dans les airs)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Frappe du juste',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La prochaine fois que vous réussissez une attaque de corps-à-corps pendant la durée du sort, votre arme frappe votre cible avec l\'énergie de la justice sacrée. La cible subit 2d6 dégâts supplémentaires et un effet secondaire. Le type de dégâts supplémentaires infligés et la nature de l\'effet dépendent du type de dégâts infligés par votre arme (par exemple, tranchant pour une épée, contondant pour un marteau) :</p>\n<ul>\n<li><strong>Contondant</strong> : dégâts de tonnerre et <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force ou <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdi</em></a> pendant 1 round et <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>.</li>\n<li><strong>Perçant</strong> : dégâts psychiques et <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou <em>effrayé</em> pendant 1 round.</li>\n<li><strong>Tranchant</strong> : dégâts radiants et <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme ou aveuglé pendant 1 round.</li>\n</ul>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous infligez 1d6 points de dégât par niveau d\'emplacement de sort au-dessus du niveau 1.</p>',
    link: '/grimoire/frappe-du-juste',
    title: 'Frappe du juste',
    level: '1',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Frappe lumineuse',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La prochaine attaque avec une arme de corps-à-corps ou à distance qui vous permet de toucher une créature avant la fin de ce sort voit votre arme briller soudain d\'une lumière astrale et infliger 2d6 dégâts radiants additionnels à votre cible, qui devient visible si elle était invisible et se met à émettre une faible lumière dans un rayon de 1,50 mètre jusqu\'à la fin du sort. Elle ne peut plus devenir invisible pendant toute cette durée.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les dégâts augmentent de 1d6 par emplacement de sort au-dessus du niveau 2.</p>',
    link: '/grimoire/frappe-lumineuse',
    title: 'Frappe lumineuse',
    level: '2',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Fusion dans la pierre',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous entrez dans un objet ou une surface de pierre assez grande pour contenir entièrement votre corps, votre personne et votre équipement fusionnant avec la pierre pendant toute la durée du sort. Vous utilisez votre déplacement pour entrer dans la pierre en un point que vous êtes en mesure de toucher. Il ne reste alors rien de visible ni de détectable indiquant votre présence pour des sens non-magiques.</p>\n<p>Tant que vous êtes fusionné avec la pierre, vous ne voyez pas ce qui se passe à l\'extérieur et vous êtes affecté par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des tests de Sagesse (Perception) destinés à entendre les sons qui retentissent à l\'extérieur de la pierre. Vous restez conscient du temps qui passe et vous pouvez lancer des sorts à portée personnelle. Vous pouvez utiliser votre déplacement pour quitter la pierre par l\'endroit par où vous y êtes entré, ce qui met fin au sort. En dehors de cela, vous êtes dans l\'incapacité de vous déplacer.</p>\n<p>Vous n\'êtes pas blessé si la pierre subit des dégâts mineurs mais, si elle est partiellement détruite ou change de forme (au point que vous ne tenez plus entièrement à l\'intérieur), elle vous expulse et vous subissez 6d6 dégâts contondants. Si la pierre est complètement détruite (ou transmutée en une substance différente), elle vous expulse et vous subissez 50 dégâts contondants. Si vous vous faites expulser de la pierre, vous vous retrouvez <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a> dans l\'emplacement inoccupé le plus proche de celui par lequel vous êtes entré dans la roche.</p>',
    link: '/grimoire/fusion-dans-la-pierre',
    title: 'Fusion dans la pierre',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Gardien de la foi',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un gardien spectral de taille G apparaît et flotte dans un emplacement inoccupé de votre choix situé dans votre champ de vision et à portée. Il occupe alors cet emplacement, mais sa silhouette reste indistincte, à l\'exception de son arme luisante et de son bouclier frappé du symbole de votre divinité.</p>\n<p>Toute créature hostile envers vous qui entre dans un emplacement situé dans un rayon de 3 mètres autour du gardien pour la première fois de son tour doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle échoue, elle subit 20 dégâts radiant, la moitié seulement si elle réussit. Le gardien disparaît dès qu\'il a infligé un total de 60 dégâts.</p>',
    link: '/grimoire/gardien-de-la-foi',
    title: 'Gardien de la foi',
    level: '4',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Geyser d\'énergie',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S, M (une petite poire remplie d\'air)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un geyser d\'énergie jaillit du sol d\'un endroit que vous spécifiez dans la portée du sort. Vous choisissez acide, foudre, feu, froid, poison ou tonnerre comme type d\'énergie pour le geyser. Chaque créature située dans le cylindre de 1,50 mètre de diamètre et de 6 mètres de haut doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité, sans quoi elle subit 3d8 dégâts du type préalablement déterminé. Si le jet est réussi, les dégâts sont réduits de moitié.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 2 ou supérieur, les dégâts sont augmentés de 1d8 par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/geyser-denergie',
    title: 'Geyser d\'énergie',
    level: '1',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S, M (une petite poire remplie d\'air)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Globe d\'invulnérabilité',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (3 mètres)',
        components: 'V, S, M (une perle de verre ou de cristal qui explose à la fin du sort)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une barrière immobile scintille légèrement dans un rayon de 3 mètres autour de vous et persiste pendant toute la durée du sort.</p>\n<p>Tout sort de niveau 5 ou inférieur lancé depuis l\'extérieur de la barrière se trouve dans l\'incapacité d\'affecter les créatures et les objets se trouvant à l\'intérieur, même si le lanceur de sort utilise un emplacement de niveau supérieur. Le sort peut très bien viser les créatures et les objets situés au sein de la barrière, mais il n\'a aucun effet sur eux. De même, la zone protégée par la barrière est exclue de la zone affectée par les sorts de ces niveaux.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, la barrière bloque les sorts d\'un niveau de plus par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/globe-dinvulnerabilite',
    title: 'Globe d\'invulnérabilité',
    level: '6',
    casting_time: '1 action',
    range: 'personnelle (3 mètres)',
    components: 'V, S, M (une perle de verre ou de cristal qui explose à la fin du sort)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Glyphe de protection',
      spell: {
        casting_time: '1 heure',
        range: 'contact',
        components: 'V, S, M (encens et poudre de diamant d\'une valeur minimale de 200  po, que le sort consume)',
        duration: 'jusqu\'à dissipation ou déclenchement'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Lorsque vous lancez ce sort, vous inscrivez un glyphe capable de blesser autrui, soit sur une surface quelconque comme une table, le sol ou un mur, soit dans un objet que l\'on peut refermer pour dissimuler l\'inscription, comme un livre, un parchemin ou un coffre au trésor. Si vous optez pour une surface, le glyphe peut couvrir une zone de 3 mètres de diamètre au maximum. Si vous choisissez un objet, il ne faut plus le déplacer par la suite : si quelqu\'un le déplace à plus de 3 mètres de l\'endroit où vous avez jeté ce sort, le glyphe se brise et le sort se termine sans avoir été déclenché.</p>\n<p>Le glyphe est presque invisible. Pour le discerner, il faut réussir un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort.</p>\n<p>Lors de l\'incantation, c\'est à vous de décider de ce qui déclenchera le sort. Pour les glyphes tracés sur une surface quelconque, les déclencheurs les plus courants consistent à toucher le glyphe ou se tenir dessus, à déplacer un objet recouvrant le glyphe, à s\'approcher à une certaine distance du glyphe ou encore à manipuler l\'objet sur lequel le glyphe est tracé. Pour les glyphes inscrits dans un objet, on trouve parmi les déclencheurs les plus répandus le fait d\'ouvrir l\'objet, de s\'en approcher à une certaine distance ou de voir ou de lire le glyphe. Le sort se termine dès que le glyphe se déclenche.</p>\n<p>Vous pouvez affiner le déclencheur, de façon à ce que le sort s\'active sous certaines conditions ou en fonction de certaines caractéristiques physiques (comme le poids ou la taille), selon un type de créatures (pour un glyphe destiné aux aberrations ou aux elfes noirs par exemple) ou selon l\'alignement. Vous pouvez aussi définir des conditions pour que certaines créatures ne déclenchent pas le glyphe, en prononçant un mot de passe, par exemple.</p>\n<p>Lorsque vous dessinez le glyphe, vous devez choisir entre des runes explosives ou un glyphe à sort.</p>\n<p><strong>Glyphe à sort</strong>. Vous pouvez stocker un sort de niveau 3 ou inférieur dans le glyphe en le lançant lors de l\'incantation du glyphe. Ce sort doit viser une créature unique ou une zone. Le sort stocké n\'a aucun effet immédiat quand il est lancé ainsi. Il se lance quand quelqu\'un déclenche le glyphe. Si le sort affecte une cible, il vise celle qui a déclenché le glyphe. S\'il affecte une zone, cette dernière est centrée sur la créature qui a déclenché le glyphe. Si le sort invoque des créatures hostiles ou crée des objets néfastes ou des pièges, ils apparaissent aussi près de l\'intrus que possible et s\'en prennent à lui. Si le sort nécessite de la concentration, il persiste jusqu\'à la fin de sa durée maximale.</p>\n<p><strong>Runes explosives</strong>. Quand le glyphe se déclenche, il explose dans une sphère de 6 mètres de rayon centrée sur lui. La sphère s\'étend en contournant les angles si besoin. Chaque créature de la zone doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Une créature reçoit 5d8 dégâts d\'acide, de froid, de feu, de foudre ou de tonnerre si elle rate son jet (à vous de choisir le type de dégâts lors de l\'incantation), la moitié seulement si elle le réussit.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les dégâts des runes explosives augmentent de 1d8 par niveau au-delà du niveau 3. Si vous créez un glyphe à sort, vous pouvez stocker un sort d\'un niveau égal ou inférieur à celui employé pour lancer le glyphe.</p>',
    link: '/grimoire/glyphe-de-protection',
    title: 'Glyphe de protection',
    level: '3',
    casting_time: '1 heure',
    range: 'contact',
    components: 'V, S, M (encens et poudre de diamant d\'une valeur minimale de 200  po, que le sort consume)',
    duration: 'jusqu\'à dissipation ou déclenchement'
  },
  {
    header: {
      title: 'Gourdin magique',
      spell: {
        casting_time: '1 action bonus',
        range: 'contact',
        components: 'V, S, M (du gui, une feuille de trèfle et un bâton ou un gourdin)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La puissance du monde naturel imprègne le bois du bâton ou du gourdin que vous tenez. Pendant toute la durée du sort, vous pouvez utiliser votre caractéristique d\'incantation au lieu de votre Force pour effectuer les jets d\'attaque et de dégâts au corps-à-corps avec cette arme. Le dé de dégâts de l\'arme devient un d8. L\'arme devient magique si elle ne l\'était pas déjà. Le sort se termine si vous le lancez de nouveau ou si vous lâchez votre arme.</p>',
    link: '/grimoire/gourdin-magique',
    title: 'Gourdin magique',
    level: '0',
    casting_time: '1 action bonus',
    range: 'contact',
    components: 'V, S, M (du gui, une feuille de trèfle et un bâton ou un gourdin)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Graisse',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (de la couenne de porc ou du beurre)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une couche de graisse particulièrement glissante recouvre le sol dans une zone de 3 mètres de côté centrée sur un point situé à portée et le change en terrain difficile pour toute la durée du sort.</p>\n<p>Lorsque la graisse apparaît, chaque créature qui se trouve dans la zone affectée doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité ou tomber <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>. Une créature qui entre dans la zone ou y termine son tour doit aussi réussir ce jet sous peine de se retrouver <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>.</p>',
    link: '/grimoire/graisse',
    title: 'Graisse',
    level: '1',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (de la couenne de porc ou du beurre)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Grande foulée',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une pincée de poussière)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Magicien',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature dont la vitesse augmente de 3 mètres jusqu\'à la fin du sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous pouvez affecter une créature de plus par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/grande-foulee',
    title: 'Grande foulée',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une pincée de poussière)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Guérison',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez une créature située à portée et dans votre champ de vision. Une bouffée d\'énergie positive la traverse et lui rend 70 points de vie. Ce sort annule aussi les états <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglé</em></a> et <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdi</em></a>, ainsi que toutes les maladies qui l\'affectent. Ce sort n\'a aucun effet sur les créatures artificielles et les morts-vivants.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, la quantité de soins prodigués augmente de 10 points par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/guerison',
    title: 'Guérison',
    level: '6',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Guérison de groupe',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un flot d\'énergie curative émane de vous et enveloppe les créatures blessées qui vous entourent. Vous rendez jusqu\'à 700 points de vie, divisés comme bon vous semble entre autant de créatures situées à portée et dans votre champ de vision que vous le souhaitez. Le sort débarrasse aussi les créatures qu\'il guérit de leurs maladies et des états <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdi</em></a> ou <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglé</em></a>. Ce sort n\'a aucun effet sur les morts-vivants et sur les créatures artificielles.</p>',
    link: '/grimoire/guerison-de-groupe',
    title: 'Guérison de groupe',
    level: '9',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Harmonique miraculeuse',
      spell: {
        casting_time: '1 action',
        range: '12 mètres',
        components: 'V, S, M (un verre en cristal d\'une valeur de 500 po)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Barde'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous effleurez le bord d\'un verre, et le corps de vos alliés à portée et capables entendre le son produit se met à résonner avec l\'énergie positive. Vous-même et chaque créature affectée récupérez 10 points de vie et annulez un niveau d\'épuisement au début de chacun de vos tours. Enfin, le sort met un terme aux effets de réduction des points de vie maximum provoqué par certaines créatures (momie, spectre, vampire, etc.) ainsi qu\'aux états <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a> et <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifié</em></a>.</p>',
    link: '/grimoire/harmonique-miraculeuse',
    title: 'Harmonique miraculeuse',
    level: '9',
    casting_time: '1 action',
    range: '12 mètres',
    components: 'V, S, M (un verre en cristal d\'une valeur de 500 po)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Hâte',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un copeau de racine de réglisse)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez une créature consentante située à portée et dans votre champ de vision. Jusqu\'à la fin du sort, la cible voit sa vitesse doubler, bénéficie d\'un bonus de +2 à la CA, a l\'<a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors des jets de sauvegarde de Dextérité et dispose d\'une action de plus par tour. Cette action est uniquement réservée aux actions suivantes : <a href="/combattre#attaquer"><em>attaquer</em></a> (permet seulement une unique attaque), <a href="/combattre#se-précipiter"><em>se précipiter</em></a>, <a href="/combattre#se-désengager"><em>se désengager</em></a>, <a href="/combattre#se-cacher"><em>se cacher</em></a> ou <em>utiliser un objet</em>.</p>\n<p>Quand le sort se termine, la cible ne peut pas se déplacer ni effectuer une action avant que son prochain tour ne se soit écoulé, car une vague de léthargie déferle sur elle.</p>',
    link: '/grimoire/hate',
    title: 'Hâte',
    level: '3',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un copeau de racine de réglisse)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Héroïsme',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous imprégnez de courage une créature consentante que vous touchez. Jusqu\'à la fin du sort, elle est immunisée contre l\'état <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisé</em></a> et, au début de chacun de ses tours, elle gagne un nombre de points de vie temporaires égal à votre modificateur de caractéristique d\'incantation. Quand le sort se termine, la cible perd les éventuels points de vie temporaires restants issus de ce sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous pouvez affecter une créature de plus par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/heroisme',
    title: 'Héroïsme',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Identification',
      spell: {
        casting_time: '1 minute',
        range: 'contact',
        components: 'V, S, M (une perle d\'une valeur minimale de 100 po et une plume de hibou)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous choisissez un objet avec lequel vous devez rester en contact pendant toute l\'incantation du sort. Si c\'est un objet magique ou un objet imprégné de magie, vous apprenez immédiatement quelles sont ses propriétés et comment vous en servir. Vous savez aussi s\'il faut s\'harmoniser avec lui pour l\'utiliser et combien de charges il possède, le cas échéant. Vous savez si des sorts affectent l\'objet et quel est leur nom. Si l\'objet a été créé grâce à un sort, vous apprenez quel sort lui a donné naissance.</p>\n<p>Si, à la place, vous touchez une créature pendant toute l\'incantation, vous découvrez quels sorts l\'affectent présentement, le cas échéant.</p>',
    link: '/grimoire/identification',
    title: 'Identification',
    level: '1',
    casting_time: '1 minute',
    range: 'contact',
    components: 'V, S, M (une perle d\'une valeur minimale de 100 po et une plume de hibou)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Illusion mineure',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'S, M (un morceau de toison)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez à portée un son ou une image représentant un objet. L\'illusion persiste pendant toute la durée du sort, et se dissipe si vous révoquez le sort par une action ou si vous lancez de nouveau ce sort.</p>\n<p>Si vous créez un son, son volume peut aller du simple murmure au hurlement. Ce peut être votre voix, celle de quelqu\'un d\'autre, le rugissement d\'un lion, un battement de tambours ou tout autre son de votre choix. Ce bruit persiste sans faiblir pendant toute la durée du sort, à moins que vous ne préfériez émettre des sons distincts à différents moments pendant la durée du sort.</p>\n<p>Si vous créez une image (comme une chaise, des empreintes boueuses ou un petit coffre), elle doit tenir dans un cube de 1,50 mètre d\'arête. L\'image ne s\'accompagne pas de son, de lumière, d\'odeur, ni d\'autre effet sensoriel. Une interaction physique avec l\'image révèle immédiatement qu\'elle n\'est qu\'une illusion, car les objets la traversent.</p>\n<p>Si une créature utilise son action pour examiner le son ou l\'image, elle comprend qu\'il s\'agit d\'une illusion si elle réussit un test d\'Intelligence (Investigation) opposé au DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort. Si une créature perce l\'illusion à jour, celle-ci perd toute substance pour elle.</p>',
    link: '/grimoire/illusion-mineure',
    title: 'Illusion mineure',
    level: '0',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'S, M (un morceau de toison)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Illusion programmée',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un morceau de toison et de la poussière de jade d\'une valeur de 25 po)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une illusion représentant un objet, une créature ou un autre phénomène visible à portée. Elle s\'active une fois les conditions spécifiques remplies ; en attendant, elle est imperceptible. L\'illusion doit tenir dans un cube de 9 mètres d\'arête. Vous décidez de son comportement et des sons qu\'elle émet au moment où vous lancez le sort. Ce comportement programmé peut durer un maximum de 5 minutes.</p>\n<p>Quand les conditions spécifiées se présentent, l\'illusion apparaît et se comporte comme vous l\'avez décidé. Sa représentation finie, elle disparaît et reste en hibernation pendant 10 minutes. Ensuite, elle peut se réactiver de nouveau.</p>\n<p>Les conditions de déclenchement peuvent être aussi génériques ou détaillées que vous le souhaitez, mais elles doivent toujours se baser sur des éléments visuels ou audibles se produisant dans un rayon de 9 mètres autour de la zone du sort. Par exemple, vous pouvez créer une illusion de vous-même qui apparaît pour avertir d\'autres gens quand ils tentent d\'ouvrir une porte piégée, ou vous pouvez programmer votre illusion pour qu\'elle se déclenche seulement quand une créature prononce le mot de passe correct.</p>\n<p>Les interactions physiques révèlent que l\'image n\'est qu\'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l\'image, elle comprend que c\'est une illusion, à condition de réussir un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort. Si une créature perce l\'illusion à jour, elle voit à travers l\'image et les sons produits par l\'illusion sonnent creux à ses oreilles.</p>',
    link: '/grimoire/illusion-programmee',
    title: 'Illusion programmée',
    level: '6',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un morceau de toison et de la poussière de jade d\'une valeur de 25 po)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Image majeure',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un morceau de toison)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez l\'image d\'un objet, d\'une créature ou d\'un phénomène visible pas plus grand qu\'un cube de 6 mètres d\'arête. L\'image apparaît en un point situé à portée et dans votre champ de vision et persiste pendant toute la durée du sort. Elle a l\'air absolument réelle et s\'accompagne des sons, des odeurs et de la température appropriés pour la chose qu\'elle représente. En revanche, elle ne dégage pas assez de chaleur ou de froid pour blesser quelqu\'un, ne génère pas de son assez puissant pour provoquer des dégâts de tonnerre pour qu\'une créature soit <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdie</em></a>, et n\'émet pas une odeur assez puissante pour écœurer une créature (comme le fait la puanteur du troglodyte).</p>\n<p>Tant que vous êtes à portée de l\'illusion, vous pouvez utiliser votre action pour déplacer l\'image vers un autre point situé à portée. Quand l\'image bouge, vous pouvez modifier son apparence de manière à ce que ses mouvements paraissent naturels. Par exemple, si vous créez l\'image d\'une créature et la déplacez, vous pouvez modifier l\'image pour donner l\'impression que la créature marche. De même, vous pouvez modifier les sons que l\'image émet, à tel point que vous pouvez lui faire tenir une conversation, par exemple.</p>\n<p>Les interactions physiques avec l\'image révèlent qu\'elle n\'est qu\'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l\'image, elle comprend que c\'est une illusion à condition de réussir un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort. Si une créature perce l\'illusion à jour, elle voit à travers l\'image et ne perçoit plus que faiblement ses autres propriétés sensorielles.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, le sort persiste jusqu\'à dissipation, sans que vous ayez besoin de vous concentrer.</p>',
    link: '/grimoire/image-majeure',
    title: 'Image majeure',
    level: '3',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un morceau de toison)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Image miroir',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Trois répliques illusoires de votre personne apparaissent dans votre emplacement. Jusqu\'à la fin du sort, ces répliques se déplacent en même temps que vous et imitent toutes vos actions, changeant de position de manière à ce qu\'il soit impossible de savoir quelles versions de vous sont des images et quelle version est réelle. Vous pouvez utiliser une action pour révoquer les répliques illusoires.</p>\n<p>Pendant toute la durée du sort, chaque fois qu\'une créature vous prend pour cible d\'une attaque, vous devez lancer 1d20 pour savoir si l\'attaque touche votre personne ou l\'un de vos doubles. Si vous avez trois répliques, vous devez obtenir 6 ou plus pour que l\'attaque touche une réplique. Si vous n\'en avez plus que deux, vous devez faire 8 ou plus, et si vous n\'en avez plus qu\'une, vous devez faire 11 ou plus.</p>\n<p>Chaque réplique possède une CA de 10 + votre modificateur de Dextérité. Si l\'attaque touche une réplique, elle la détruit. Le seul moyen de détruire une réplique est de l\'atteindre avec une attaque, car elle ignore tous les autres effets et dégâts. Le sort se termine si les trois répliques sont détruites.</p>\n<p>Une créature n\'est pas affectée par ce sort si elle ne voit pas, si elle se sert d\'un mode de perception autre que la vue (comme la vision aveugle) ou encore si elle perçoit les illusions comme telles, avec vision parfaite, par exemple.</p>',
    link: '/grimoire/image-miroir',
    title: 'Image miroir',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Image projetée',
      spell: {
        casting_time: '1 action',
        range: '750 kilomètres',
        components: 'V, S, M (une petite réplique de votre personne construite avec des matériaux valant au moins 5 po)',
        duration: 'jusqu\'à 1 jour'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un double illusoire de votre personne qui persiste pendant toute la durée du sort. Ce double peut apparaître à n\'importe quel endroit à portée, peu importent les obstacles interposés, à condition que vous l\'ayez déjà vu auparavant. D\'un point de vue visuel et auditif, l\'illusion vous est tout à fait semblable ; en revanche, elle est intangible. Si elle subit le moindre dégât, elle disparaît et le sort se termine.</p>\n<p>Vous pouvez utiliser votre action pour déplacer votre illusion jusqu\'au double de votre vitesse, lui faire exécuter des gestes, la faire parler et se comporter comme bon vous semble. Elle imite vos manières à la perfection.</p>\n<p>Vous pouvez entendre et voir par l\'intermédiaire des oreilles et des yeux de votre double, comme si vous occupiez son emplacement. À votre tour, vous pouvez dépenser une action bonus pour passer de l\'utilisation de ses sens à celle des vôtres et inversement. Tant que vous utilisez ses sens, vous êtes aveugle et sourd à votre propre environnement.</p>\n<p>Les interactions physiques révèlent que l\'image n\'est qu\'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l\'image, elle comprend que c\'est une illusion, à condition de réussir un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort. Si une créature perce l\'illusion à jour, elle voit à travers l\'image et les sons produits par l\'illusion sonnent creux à ses oreilles.</p>',
    link: '/grimoire/image-projetee',
    title: 'Image projetée',
    level: '7',
    casting_time: '1 action',
    range: '750 kilomètres',
    components: 'V, S, M (une petite réplique de votre personne construite avec des matériaux valant au moins 5 po)',
    duration: 'jusqu\'à 1 jour'
  },
  {
    header: {
      title: 'Image silencieuse',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un morceau de toison)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez l\'image d\'un objet, d\'une créature ou d\'un phénomène visible tenant dans un cube de 4,50 mètres de côté. L\'image apparaît en un point situé à portée et persiste pendant toute la durée du sort. L\'image comporte seulement des composantes visuelles, elle ne s\'accompagne pas d\'odeur, de son, ni d\'autre effet sensoriel.</p>\n<p>Vous pouvez utiliser votre action pour déplacer l\'image vers un autre point à portée. Pendant qu\'elle se déplace, vous pouvez modifier son apparence pour donner l\'impression d\'un mouvement naturel. Par exemple, si vous créez l\'image d\'une créature et que vous la déplacez, vous pouvez modifier l\'image pour donner l\'impression que la créature est en train de marcher.</p>\n<p>Les interactions physiques révèlent que l\'image n\'est qu\'une illusion, car les objets la traversent. Si une créature utilise son action pour examiner l\'image, elle comprend que c\'est une illusion à condition de réussir un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort. Si une créature perce l\'illusion à jour, elle voit à travers l\'image.</p>',
    link: '/grimoire/image-silencieuse',
    title: 'Image silencieuse',
    level: '1',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un morceau de toison)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Immobiliser un humanoïde',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un petit morceau de fer bien droit)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez un humanoïde situé à portée et dans votre champ de vision. Il doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi il est <a href="/gerer-la-sante-du-personnage#paralysé"><em>paralysé</em></a> pour toute la durée du sort. À la fin de chacun de ses tours, la cible a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle le réussit, le sort se termine.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, vous pouvez viser un humanoïde de plus par niveau au-delà du niveau 2. Les humanoïdes visés doivent se trouver à 9 mètres ou moins les uns des autres au moment où vous lancez le sort.</p>',
    link: '/grimoire/immobiliser-un-humanoide',
    title: 'Immobiliser un humanoïde',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un petit morceau de fer bien droit)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Immobiliser un monstre',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S, M (un petit morceau de fer bien droit)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez une créature située à portée et dans votre champ de vision. Elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle est <a href="/gerer-la-sante-du-personnage#paralysé"><em>paralysée</em></a> pour toute la durée du sort. Ce sort est sans effet sur les morts-vivants. À la fin de chacun de ses tours, la cible a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle le réussit, le sort se termine.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, vous pouvez viser une créature de plus par niveau au-delà du niveau 5. Les créatures visées doivent se trouver à 9 mètres ou moins les unes des autres au moment où vous lancez le sort.</p>',
    link: '/grimoire/immobiliser-un-monstre',
    title: 'Immobiliser un monstre',
    level: '5',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S, M (un petit morceau de fer bien droit)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Injonction',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous lancez un ordre d\'un mot à une créature située à portée et dans votre champ de vision. Elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle exécute votre ordre à son prochain tour. Le sort reste sans effet si la cible est un mort-vivant, si elle ne comprend pas votre langue ou si votre ordre la met directement en danger.</p>\n<p>Voici quelques ordres typiques et leurs effets. Vous pouvez donner un ordre différent de ceux présentés ici mais, dans ce cas, c\'est au MJ de décider comment la victime se comporte. Le sort se termine si elle se trouve dans l\'incapacité d\'obéir à l\'ordre reçu.</p>\n<p><strong>Approche</strong>. La cible s\'approche de vous en empruntant l\'itinéraire le plus court et le plus direct. Elle termine son tour dès qu\'elle arrive dans un rayon de 1,50 mètre autour de vous.</p>\n<p><strong>Arrête</strong>. La cible ne bouge pas et n\'entreprend aucune action. Une créature en vol reste dans les airs, à condition qu\'elle soit en mesure de le faire. Si elle est obligée de se déplacer pour rester en vol, elle parcourt la distance minimum requise pour ce faire.</p>\n<p><strong>Fuis</strong>. La cible passe son tour à s\'éloigner de vous par la méthode la plus rapide à sa disposition.</p>\n<p><strong>Lâche</strong>. La cible lâche ce qu\'elle tient et son tour se termine.</p>\n<p><strong>Rampe</strong>. La cible se laisse tomber <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a> et termine son tour.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous pouvez affecter une créature de plus par niveau au-delà du niveau 1. Ces créatures doivent toutes se trouver à 9 mètres ou moins les unes des autres lorsque vous lancez le sort.</p>',
    link: '/grimoire/injonction',
    title: 'Injonction',
    level: '1',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V',
    duration: '1 round'
  },
  {
    header: {
      title: 'Insecte géant',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous transformez un maximum de dix mille-pattes, trois araignées, cinq guêpes ou un scorpion situés à portée en version géante de leur forme naturelle pendant toute la durée du sort. Un mille-pattes devient donc un mille-pattes géant, une araignée une araignée géante, une guêpe une guêpe géante et un scorpion un scorpion géant.</p>\n<p>Chaque créature obéit à vos ordres verbaux et, lors d\'un combat, agit à chaque round à votre tour. C\'est le MJ qui dispose du profil technique de ces créatures et gère leurs actions et leurs déplacements.</p>\n<p>Une créature reste sous sa forme géante pendant toute la durée du sort, jusqu\'à ce qu\'elle tombe à 0 point de vie ou jusqu\'à ce que vous utilisiez une action pour révoquer l\'effet du sort sur elle.</p>\n<p>Le MJ peut vous autoriser à choisir une cible différente. Par exemple, si vous transformez une abeille, sa version géante peut disposer du même profil technique qu\'une guêpe géante.</p>',
    link: '/grimoire/insecte-geant',
    title: 'Insecte géant',
    level: '4',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Instrument fantomatique',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un archet et un morceau d\'os)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une manifestation illusoire d\'un instrument de musique fantomatique près d\'une créature de votre choix à portée. Cet instrument fantomatique est visible uniquement de cette créature et la suit dans tous ses déplacements, même si elle n\'est plus visible ou plus à portée du sort. L\'instrument produit une musique uniquement audible par la cible, qui provoque chez elle une peine et une douleur effroyables. Au début de chacun de ses tours, la créature doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou subir 2d4 dégâts psychiques et être <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> jusqu\'à son prochain tour. En cas de réussite, les dégâts sont annulés et le sort prend fin. Les créatures dont l\'Intelligence est inférieure à 3 sont immunisées à ce sort, celles autres qu\'humanoïdes ou géants obtiennent un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> à leur <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 2 ou supérieur, vous pouvez cibler une créature de plus par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/instrument-fantomatique',
    title: 'Instrument fantomatique',
    level: '1',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un archet et un morceau d\'os)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Interdiction',
      spell: {
        casting_time: '10 minutes',
        range: 'contact',
        components: 'V, S, M (un peu d\'eau bénite, un encens rare et un rubis en poudre d\'une valeur minimale de 1000 po)',
        duration: '1 jour'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un sceau empêchant les déplacements magiques dans une zone de 60 mètres de côté au sol et d\'une hauteur de 9 mètres. Pendant toute la durée du sort, les créatures ne peuvent pas se téléporter dans la zone ni y entrer via un portail comme celui issu du sort du même nom. Le sort protège la zone contre tous les modes de déplacement planaire et empêche donc les créatures d\'y entrer en passant par le plan astral, le plan éthéré, la féerie, le plan de l\'ombre ou en utilisant un sort de changement de plan.</p>\n<p>De plus, le sort blesse les créatures des types choisis lors de son incantation. Choisissez un ou plusieurs de ces types : célestes, élémentaires, fées, fiélons, morts-vivants. Quand une créature d\'un type choisi pénètre dans la zone pour la première fois de son tour ou y débute son tour, elle subit 5d10 dégâts radiants ou nécrotiques (à vous de choisir quand vous lancez le sort).</p>\n<p>Vous pouvez décider d\'un mot de passe lors de l\'incantation du sort. Si une créature le prononce en entrant dans la zone, elle ne subit pas de dégât.</p>\n<p>La zone d\'effet de ce sort ne peut pas se superposer à celle d\'un autre sort d\'<em>interdiction</em>. Si vous lancez <em>interdiction</em> tous les jours pendant 30 jours au même endroit, le sort persiste jusqu\'à dissipation et les composantes matérielles sont consommées lors de la dernière incantation.</p>',
    link: '/grimoire/interdiction',
    title: 'Interdiction',
    level: '6',
    casting_time: '10 minutes',
    range: 'contact',
    components: 'V, S, M (un peu d\'eau bénite, un encens rare et un rubis en poudre d\'une valeur minimale de 1000 po)',
    duration: '1 jour'
  },
  {
    header: {
      title: 'Inversion de la gravité',
      spell: {
        casting_time: '1 action',
        range: '30 mètres',
        components: 'V, S, M (de la magnétite et de la limaille de fer)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort inverse la gravité dans un cylindre de 15 mètres de rayon et de 30 mètres de haut centré sur un point de votre choix à portée. Toutes les créatures et tous les objets qui ne sont pas ancrés au sol, d\'une manière ou d\'une autre, tombent vers le haut jusqu\'à atteindre le sommet de la zone affectée par le sort. Une créature peut faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité pour s\'accrocher à un objet fixe situé à sa portée, afin d\'éviter la chute.</p>\n<p>Si un objet solide (comme un plafond) se trouve sur la trajectoire de la chute, les créatures et les objets le percutent comme lors d\'une chute ordinaire vers le bas. Si un objet ou une créature atteint le sommet de la zone affectée sans heurter quoi que ce soit, il reste là, à osciller légèrement, pendant toute la durée du sort.</p>\n<p>Une fois la durée du sort écoulée, les objets et les créatures affectés retombent au sol.</p>',
    link: '/grimoire/inversion-de-la-gravite',
    title: 'Inversion de la gravité',
    level: '7',
    casting_time: '1 action',
    range: '30 mètres',
    components: 'V, S, M (de la magnétite et de la limaille de fer)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Invisibilité',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un cil enrobé de gomme arabique)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La créature que vous touchez devient <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> jusqu\'à la fin du sort. Tout ce qu\'elle porte et transporte reste <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> tant qu\'elle le garde sur elle. Le sort se termine si la cible attaque ou lance un sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, vous pouvez viser une créature de plus par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/invisibilite',
    title: 'Invisibilité',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un cil enrobé de gomme arabique)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Invisibilité supérieure',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous devenez <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> jusqu\'à ce que le sort se termine, ou vous pouvez accorder cet effet à une créature consentante que vous touchez. Tout ce que porte la cible devient <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> tant que les objets restent sur sa personne.</p>',
    link: '/grimoire/invisibilite-superieure',
    title: 'Invisibilité supérieure',
    level: '4',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Invoquer des animaux',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez des esprits féeriques qui prennent la forme d\'animaux et apparaissent dans des espaces inoccupés situés à portée et dans votre champ de vision. Choisissez l\'une des options suivantes pour déterminer quelles créatures apparaissent.</p>\n<ul>\n<li>Une bête dont l\'indice de dangerosité est inférieur ou égal à 2.</li>\n<li>Deux bêtes dont l\'indice de dangerosité est inférieur ou égal à 1.</li>\n<li>Quatre bêtes dont l\'indice de dangerosité est inférieur ou égal à 1⁄2.</li>\n<li>Huit bêtes dont l\'indice de dangerosité est inférieur ou égal à 1⁄4.</li>\n</ul>\n<p>Chacune de ces bêtes est aussi considérée comme une fée et disparaît dès qu\'elle tombe à 0 point de vie ou quand le sort se termine.</p>\n<p>Les créatures invoquées se montrent amicales envers vous et vos compagnons. Déterminez une initiative pour les créatures invoquées, elles forment un groupe qui dispose de ses propres tours de jeu. Les animaux obéissent aux ordres verbaux que vous leur donnez (sans que cela vous demande d\'utiliser une action). En l\'absence d\'ordre, ils se défendent contre les créatures hostiles, mais n\'entreprennent pas d\'autre action.</p>\n<p>C\'est le MJ qui dispose du profil technique des créatures.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant certains emplacements de niveau supérieur, vous choisissez l\'une des options d\'invocation décrites précédemment et faites apparaître plus de créatures : deux fois plus pour un emplacement de niveau 5, trois fois plus pour un emplacement de niveau 7 et quatre fois plus pour un emplacement de niveau 9.</p>',
    link: '/grimoire/invoquer-des-animaux',
    title: 'Invoquer des animaux',
    level: '3',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Invoquer des élémentaires mineurs',
      spell: {
        casting_time: '1 minute',
        range: '27 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez des élémentaires qui apparaissent dans des espaces inoccupés situés à portée et dans votre champ de vision. Choisissez l\'une des options suivantes pour déterminer quelles créatures apparaissent.</p>\n<ul>\n<li>Un élémentaire dont l\'indice de dangerosité est inférieur ou égal à 2.</li>\n<li>Deux élémentaires dont l\'indice de dangerosité est inférieur ou égal à 1.</li>\n<li>Quatre élémentaires dont l\'indice de dangerosité est inférieur ou égal à 1⁄2.</li>\n<li>Huit élémentaires dont l\'indice de dangerosité est inférieur ou égal à 1⁄4.</li>\n</ul>\n<p>Un élémentaire ainsi invoqué disparaît dès qu\'il tombe à 0 point de vie ou quand le sort se termine.</p>\n<p>Les créatures invoquées se montrent amicales envers vous et vos compagnons. Déterminez une initiative pour les créatures invoquées, elles forment un groupe qui dispose de ses propres tours de jeu. Les élémentaires obéissent aux ordres verbaux que vous leur donnez (sans que cela vous demande d\'utiliser une action). En l\'absence d\'ordre, ils se défendent contre les créatures hostiles, mais n\'entreprennent pas d\'autre action.</p>\n<p>C\'est le MJ qui dispose du profil technique des créatures.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant certains emplacements de niveau supérieur, vous choisissez l\'une des options d\'invocation décrites précédemment et faites apparaître plus de créatures : deux fois plus pour un emplacement de niveau 6 et trois fois plus pour un emplacement de niveau 8.</p>',
    link: '/grimoire/invoquer-des-elementaires-mineurs',
    title: 'Invoquer des élémentaires mineurs',
    level: '4',
    casting_time: '1 minute',
    range: '27 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Invoquer des êtres des bois',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (une baie de houx par créature invoquée)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez des créatures féeriques qui apparaissent dans des cases inoccupées situées à portée et dans votre champ de vision. Choisissez l\'une des options suivantes pour déterminer quelles créatures apparaissent.</p>\n<ul>\n<li>Une créature féerique dont l\'indice de dangerosité est inférieur ou égal à 2.</li>\n<li>Deux créatures féeriques dont l\'indice de dangerosité est inférieur ou égal à 1.</li>\n<li>Quatre créatures féeriques dont l\'indice de dangerosité est inférieur ou égal à 1⁄2.</li>\n<li>Huit créatures féeriques dont l\'indice de dangerosité est inférieur ou égal à 1⁄4.</li>\n</ul>\n<p>Une créature invoquée disparaît dès qu\'elle tombe à 0 point de vie ou quand le sort se termine.</p>\n<p>Les créatures invoquées se montrent amicales envers vous et vos compagnons. Déterminez une initiative pour les créatures invoquées, elles forment un groupe qui dispose de ses propres tours de jeu.. Les créatures féeriques obéissent aux ordres verbaux que vous leur donnez (sans que cela vous demande d\'utiliser une action). En l\'absence d\'ordre, elles se défendent contre les créatures hostiles, mais n\'entreprennent pas d\'autre action.</p>\n<p>C\'est le MJ qui dispose du profil technique des créatures.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant certains emplacements de niveau supérieur, vous choisissez l\'une des options d\'invocation décrites précédemment et faites apparaître plus de créatures : deux fois plus pour un emplacement de niveau 6, et trois fois plus pour un emplacement de niveau 8.</p>',
    link: '/grimoire/invoquer-des-etres-des-bois',
    title: 'Invoquer des êtres des bois',
    level: '4',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (une baie de houx par créature invoquée)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Invoquer un céleste',
      spell: {
        casting_time: '1 minute',
        range: '27 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez un céleste doté d\'un indice de dangerosité inférieur ou égal à 4. Il apparaît dans une case inoccupée située à portée et dans votre champ de vision. Le céleste disparaît dès qu\'il tombe à 0 point de vie ou quand le sort se termine.</p>\n<p>Le céleste se montre amical envers vous et vos compagnons. Déterminez son initiative, sachant qu\'il dispose de ses propres tours de jeu. Il obéit aux ordres verbaux que vous lui donnez (sans que cela vous demande d\'utiliser une action), tant qu\'ils ne vont pas à l\'encontre de son alignement. En l\'absence d\'ordre, il se défend contre les créatures hostiles, mais n\'entreprend pas d\'autre action.</p>\n<p>C\'est le MJ qui dispose du profil technique du céleste.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 9, vous invoquez un céleste doté d\'un indice de dangerosité inférieur ou égal à 5.</p>',
    link: '/grimoire/invoquer-un-celeste',
    title: 'Invoquer un céleste',
    level: '7',
    casting_time: '1 minute',
    range: '27 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Invoquer un élémentaire',
      spell: {
        casting_time: '1 minute',
        range: '27 mètres',
        components: 'V, S, M (encens à brûler pour l\'air, argile molle pour la terre, soufre et phosphore pour le feu, ou sable et eau pour l\'eau)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Druide',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez un serviteur élémentaire. Choisissez une zone d\'air, de terre, de feu ou d\'eau occupant un cube de 3 mètres d\'arête situé à portée. Un élémentaire doté d\'un indice de dangerosité inférieur ou égal à 5 et adapté à la zone que vous avez choisie apparaît dans un espace inoccupé situé dans un rayon de 3 mètres autour d\'elle. Par exemple, un élémentaire du feu jaillit d\'un brasier tandis qu\'un élémentaire de la terre sort du sol. L\'élémentaire disparaît dès qu\'il tombe à 0 point de vie ou quand le sort se termine.</p>\n<p>L\'élémentaire se montre amical envers vous et vos compagnons. Déterminez son initiative, sachant qu\'il dispose de ses propres tours de jeu. Il obéit aux ordres verbaux que vous lui donnez (sans que cela vous demande d\'utiliser une action). En l\'absence d\'ordre, il se défend contre les créatures hostiles, mais n\'entreprend pas d\'autre action.</p>\n<p>Si votre concentration se brise, l\'élémentaire ne disparaît pas, mais il échappe à votre contrôle et devient hostile envers vous et vos compagnons. Il peut aller jusqu\'à vous attaquer. Vous ne pouvez pas renvoyer un élémentaire qui est hors de contrôle, il disparaît simplement 1 heure après que vous l\'avez invoqué.</p>\n<p>C\'est le MJ qui dispose du profil technique de l\'élémentaire.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, l\'indice de dangerosité de l\'élémentaire augmente de 1 par niveau au-delà du niveau 5.</p>',
    link: '/grimoire/invoquer-un-elementaire',
    title: 'Invoquer un élémentaire',
    level: '5',
    casting_time: '1 minute',
    range: '27 mètres',
    components: 'V, S, M (encens à brûler pour l\'air, argile molle pour la terre, soufre et phosphore pour le feu, ou sable et eau pour l\'eau)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Invoquer une fée',
      spell: {
        casting_time: '1 minute',
        range: '27 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Druide',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez une créature féerique, ou un esprit féerique qui revêt l\'apparence d\'une bête, dotée d\'un indice de dangerosité inférieur ou égal à 6. La créature apparaît dans une case inoccupée située à portée et dans votre champ de vision. Elle disparaît dès qu\'elle tombe à 0 point de vie ou quand le sort se termine.</p>\n<p>La créature féerique se montre amicale envers vous et vos compagnons. Lancez l\'initiative pour elle, sachant qu\'elle dispose de ses propres tours de jeu. Elle obéit aux ordres verbaux que vous lui donnez (sans que cela vous demande d\'utiliser une action), tant qu\'ils ne vont pas à l\'encontre de son alignement. En l\'absence d\'ordre, elle se défend contre les créatures hostiles, mais n\'entreprend pas d\'autre action.</p>\n<p>Si votre concentration se brise, la créature féerique ne disparaît pas, mais elle échappe à votre contrôle et devient hostile envers vous et vos compagnons. Elle peut aller jusqu\'à vous attaquer. Vous ne pouvez pas renvoyer une créature féerique qui est hors de contrôle, elle disparaît simplement 1 heure après que vous l\'avez invoquée.</p>\n<p>C\'est le MJ qui dispose du profil technique de la créature féerique.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, l\'indice de dangerosité de l\'élémentaire augmente de 1 par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/invoquer-une-fee',
    title: 'Invoquer une fée',
    level: '6',
    casting_time: '1 minute',
    range: '27 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Jeter une malédiction',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature qui doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle est maudite pour toute la durée du sort. À vous de choisir la nature de cette malédiction parmi les options suivantes au moment de l\'incantation.</p>\n<ul>\n<li>Choisissez une caractéristique. Tant que la cible est maudite, elle est affectée par un désavantage lors des tests et des jets de sauvegarde basés sur cette caractéristique.</li>\n<li>Tant que la cible est maudite, elle subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de ses jets d\'attaque contre vous.</li>\n<li>Tant que la cible est maudite, elle doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse au début de chacun de ses tours. Si elle le rate, elle gaspille son action du tour et ne fait rien.</li>\n<li>Tant que la cible est maudite, vos sorts et vos attaques à son encontre lui infligent 1d8 dégâts nécrotiques supplémentaires.</li>\n</ul>\n<p>Le sort <em>lever une malédiction</em> met un terme à cet effet. Si le MJ est d\'accord, vous pouvez choisir un autre effet de malédiction, mais il ne doit pas être plus puissant que ceux proposés ici. C\'est au MJ de décider s\'il accepte ou non le nouvel effet de malédiction.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, le sort fait effet tant que vous vous concentrez, sans dépasser un maximum de 10 minutes. Si vous utilisez un emplacement de niveau 5 ou supérieur, la durée est de 8 heures, tandis qu\'elle passe à 24 heures si vous utilisez un emplacement de sort de niveau 7 ou plus. Si vous utilisez un emplacement de niveau 9, le sort persiste jusqu\'à ce qu\'il soit dissipé. L\'utilisation d\'un emplacement de niveau 5 ou plus vous dispense de vous concentrer.</p>',
    link: '/grimoire/jeter-une-malediction',
    title: 'Jeter une malédiction',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Jugement dernier',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une sphère de 9 mètres de rayon centrée sur un point visible de votre choix à portée. Toute créature située dans la sphère doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme ou subir 4d8 points de dégâts radiants. Si la créature est une créature céleste, un fiélon ou un mort-vivant les dégâts sont doublées et la créature est <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> pour 1 round. En cas de réussite, la cible subit seulement la moitié des dégâts et n\'est pas <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a>.</p>',
    link: '/grimoire/jugement-dernier',
    title: 'Jugement dernier',
    level: '5',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Labyrinthe',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous bannissez une créature située à portée et dans votre champ de vision dans un demi-plan labyrinthique. La cible y reste pendant toute la durée du sort, ou jusqu\'à ce qu\'elle s\'échappe du dédale.</p>\n<p>Elle peut utiliser une action pour tenter de s\'évader. Pour cela, elle effectue un test d\'Intelligence DD 20. Si elle le réussit, elle s\'échappe et le sort se termine (les minotaures et les démons goristros réussissent automatiquement).</p>\n<p>Quand le sort se termine, la cible réapparaît à l\'emplacement qu\'elle a quitté ou, s\'il est occupé, dans l\'emplacement libre le plus proche.</p>',
    link: '/grimoire/labyrinthe',
    title: 'Labyrinthe',
    level: '8',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Lame de feu',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V, S, M (feuille de sumac)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez une lame enflammée dans votre main libre. Au niveau de la taille et de la forme, elle ressemble à un cimeterre et persiste pendant toute la durée du sort. Si vous la lâchez, elle disparaît, mais vous pouvez l\'invoquer de nouveau par une action bonus.</p>\n<p>Vous pouvez utiliser votre action pour faire une attaque de sort au corps-à-corps avec la lame enflammée. Si vous touchez la cible, cette dernière subit 3d6 dégâts de feu.</p>\n<p>La lame enflammée émet une vive lumière dans un rayon de 3 mètres et une faible lumière dans un rayon de 3 mètres de plus.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les dégâts augmentent de 1d6 tous les deux niveaux au-delà du niveau 2.</p>',
    link: '/grimoire/lame-de-feu',
    title: 'Lame de feu',
    level: '2',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V, S, M (feuille de sumac)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Lance du juste',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La lumière ambiante se concentre dans votre main et prend la forme d\'un rayon en forme de lance. Vous devez réussir une <em>attaque au corps-à-corps</em> pour frapper la cible. La lance de lumière inflige 3d8 dégâts radiants. De plus, la créature touchée se retrouve <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a>. Elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution à chacun de ses tours suivants jusqu\'à réussite pour ne plus être <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a>.</p>',
    link: '/grimoire/lance-du-juste',
    title: 'Lance du juste',
    level: '3',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Langues',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, M (un modèle réduit de ziggourat en argile)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort permet à la créature que vous touchez de comprendre toutes les langues parlées qu\'elle entend. De plus, quand elle parle, toute créature qui maîtrise au moins une langue et l\'entend comprend ce qu\'elle dit.</p>',
    link: '/grimoire/langues',
    title: 'Langues',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, M (un modèle réduit de ziggourat en argile)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Légende',
      spell: {
        casting_time: '10 minutes',
        range: 'personnelle',
        components: 'V, S, M (de l\'encens d\'une valeur minimale de 250 po que le sort consume et quatre bandelettes d\'ivoire valant au moins 50 po chaque)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Nommez ou décrivez une personne, un lieu ou un objet. Le sort porte à votre connaissance un bref résumé des connaissances essentielles se rapportant à la chose nommée. Ces connaissances peuvent se présenter sous la forme d\'histoires actuelles, de contes oubliés ou même d\'un savoir secret qui n\'a jamais été révélé. Si la chose que vous nommez n\'est pas digne de figurer dans une légende, vous n\'obtenez aucune information. Plus vous possédez d\'informations sur cette chose, plus celles que vous recevez via le sort sont précises et détaillées.</p>\n<p>Les informations obtenues sont exactes, mais susceptibles de se présenter dans un langage figuré. Par exemple, si vous avez une mystérieuse hache en main, le sort peut vous donner les renseignements suivants : « <em>Malheur au malfaisant qui pose la main sur cette hache, car même son manche peut entailler la main des mécréants. Seul un véritable enfant de la pierre, un être qui aime Gorom et en est aimé en retour, pourra éveiller la véritable puissance de cette hache, à condition de prononcer le mot sacré Rudnogg.</em> »</p>',
    link: '/grimoire/legende',
    title: 'Légende',
    level: '5',
    casting_time: '10 minutes',
    range: 'personnelle',
    components: 'V, S, M (de l\'encens d\'une valeur minimale de 250 po que le sort consume et quatre bandelettes d\'ivoire valant au moins 50 po chaque)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Léger comme une plume',
      spell: {
        casting_time: '1 réaction, que vous effectuez quand vous-même ou une créature située dans un rayon de 18 mètres tombe soudain',
        range: '18 mètres',
        components: 'V, M (une petite plume ou un peu de duvet)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez jusqu\'à cinq créatures à portée en train de chuter. La vitesse de chute de chacune passe à 18 mètres par round jusqu\'à la fin du sort. Si une créature atterrit avant la fin du sort, elle ne subit pas de dégât de chute et se reçoit sur ses pieds, le sort se terminant alors pour elle.</p>',
    link: '/grimoire/leger-comme-une-plume',
    title: 'Léger comme une plume',
    level: '1',
    casting_time: '1 réaction, que vous effectuez quand vous-même ou une créature située dans un rayon de 18 mètres tombe soudain',
    range: '18 mètres',
    components: 'V, M (une petite plume ou un peu de duvet)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Lenteur',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (une goutte de mélasse)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous modifiez le cours du temps autour d\'un maximum de six créatures de votre choix situées dans un cube de 12 mètres d\'arête situé à portée. Chaque cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi le sort l\'affecte pendant toute sa durée.</p>\n<p>Une cible affectée voit sa vitesse réduite de moitié. De plus, elle subit un malus de -2 à la CA et aux jets de sauvegarde de Dextérité et ne peut plus utiliser de réaction. À son tour, elle peut utiliser une action ou une action bonus, mais pas les deux. Elle ne peut pas faire plus d\'une attaque au corps-à-corps ou à distance à son tour, quels que soient ses aptitudes et ses objets magiques.</p>\n<p>Si la créature affectée tente de lancer un sort doté d\'un temps d\'incantation de 1 action, lancez 1d20. Sur un résultat de 11 ou plus, le sort agit seulement au prochain tour de la créature, qui doit utiliser son action de ce tour pour terminer l\'incantation. Si elle en est incapable, le sort est n\'a aucun effet.</p>\n<p>Une créature affectée par ce sort fait un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse à la fin de chacun de ses tours. Si elle le réussit, le sort se termine pour elle.</p>',
    link: '/grimoire/lenteur',
    title: 'Lenteur',
    level: '3',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (une goutte de mélasse)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Lever une malédiction',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Magicien',
          'Paladin',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>À votre contact, toutes les malédictions qui affectent une créature ou un objet disparaissent. Si l\'objet est un objet magique maudit, la malédiction persiste, mais le sort rompt l\'harmonisation entre l\'objet et son détenteur, ce qui permet à ce dernier de l\'ôter ou de s\'en débarrasser.</p>',
    link: '/grimoire/lever-une-malediction',
    title: 'Lever une malédiction',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Lévitation',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (soit une petite boucle de cuir, soit un bout de fil de métal doré formant la silhouette d\'une cuillère au long manche)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une créature ou un objet situé à portée et dans votre champ de vision s\'élève à la verticale à une hauteur de 6 mètres et reste suspendu là pendant toute la durée du sort. Ce dernier peut soulever une cible d\'au maximum 250 kilogrammes. Si la créature visée n\'est pas consentante, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution pour éviter d\'être affectée par le sort.</p>\n<p>La cible peut se déplacer uniquement en se propulsant ou en se tractant, en prenant appui sur un objet fixe ou une surface à proximité (comme un mur ou un plafond). Elle se meut alors comme si elle était en pleine escalade. Quand vient votre tour, vous pouvez modifier l\'altitude de la cible d\'un maximum de 6 mètres dans la direction de votre choix. Si vous êtes la cible, vous pouvez monter ou descendre lors de votre déplacement. En dehors de cela, vous devez dépenser une action pour déplacer la cible qui doit rester à portée du sort.</p>\n<p>Si la cible est encore en l\'air quand le sort se termine, elle flotte délicatement jusqu\'au sol.</p>',
    link: '/grimoire/levitation',
    title: 'Lévitation',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (soit une petite boucle de cuir, soit un bout de fil de métal doré formant la silhouette d\'une cuillère au long manche)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Liane chasseresse',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez une liane mobile dotée de sarments flexibles et vous la contrôlez pendant toute la durée du sort. Sa vitesse de déplacement est de 1,50 mètre et son allonge est de 3 mètres. La liane se détend subitement lorsque qu\'un adversaire passe à sa portée. La victime doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force ou subir 1d6+7 dégâts contondants et être entravée. À son tour, la cible peut effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force pour se libérer en utilisant une action bonus. La liane a le profil suivant : CA 15, points de vie 30, Force 20 (+5), résistance au feu et au froid, immunité à la foudre.</p>',
    link: '/grimoire/liane-chasseresse',
    title: 'Liane chasseresse',
    level: '4',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Liberté de mouvement',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un lien de cuir enroulé autour d\'un bras ou d\'un appendice similaire)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante. Pendant toute la durée du sort, ses déplacements ne sont pas affectés par un terrain difficile, tandis que les sorts et autres effets magiques ne peuvent ni réduire sa vitesse, ni provoquer l\'état <a href="/gerer-la-sante-du-personnage#paralysé"><em>paralysé</em></a> ou <em>entravé.</em></p>\n<p>La cible peut également dépenser 1,50 mètre de déplacement pour échapper automatiquement à des liens non magiques, comme des menottes ou la prise d\'une créature qui l\'empoigne. Enfin, sous l\'eau, elle ne subit pas de malus aux déplacements ni aux attaques.</p>',
    link: '/grimoire/liberte-de-mouvement',
    title: 'Liberté de mouvement',
    level: '4',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un lien de cuir enroulé autour d\'un bras ou d\'un appendice similaire)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Lien de protection',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une paire d\'anneaux de platine valant chacun au moins 50  po, que la cible et vous devez porter pendant toute la durée)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort protège une créature consentante et crée un lien mystique entre vous et votre cible jusqu\'à la fin du sort. Tant que la cible se trouve dans un rayon de 18 mètres autour de vous, elle bénéficie d\'un bonus de +1 à la CA et aux jets de sauvegarde et devient résistante à tous les types de dégâts. En revanche, à chaque fois qu\'elle subit des dégâts, vous subissez exactement les mêmes.</p>\n<p>Le sort se termine si vous tombez à 0 point de vie ou si votre cible et vous êtes séparés de plus 18 mètres. Il se termine aussi si vous le lancez de nouveau le sort. Vous pouvez également révoquer le sort par une action.</p>',
    link: '/grimoire/lien-de-protection',
    title: 'Lien de protection',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une paire d\'anneaux de platine valant chacun au moins 50  po, que la cible et vous devez porter pendant toute la durée)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Lien télépathique',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (bouts de coquille d\'œuf issus de deux espèces de créatures différentes)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous forgez un lien télépathique entre un maximum de huit créatures consentantes situées à portée. Elles sont alors psychiquement liées les unes aux autres pendant la durée du sort. Ce sort n\'affecte pas les créatures dotées d\'une Intelligence de 2 ou moins.</p>\n<p>Jusqu\'à la fin du sort, les cibles peuvent communiquer entre elles par télépathie via le lien créé, qu\'elles partagent un même langage ou non. Cette communication fonctionne quelle que soit la distance qui les sépare, mais ne s\'étend pas aux autres plans d\'existence.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en dépensant un emplacement de sort de niveau 6, la durée passe à 12 heures. Au niveau 7, vous pouvez transmettre des images, sons et autres perceptions sensorielles aux créatures ciblées. Enfin, au niveau 8, la portée devient illimitée tant que vous êtes sur le même plan et que vous connaissez les créatures ciblées.</p>',
    link: '/grimoire/lien-telepathique',
    title: 'Lien télépathique',
    level: '5',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (bouts de coquille d\'œuf issus de deux espèces de créatures différentes)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Localiser des animaux ou des plantes',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (des poils de chien de chasse)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Décrivez ou nommez un type spécifique de bêtes ou de plantes. Vous vous concentrez sur la voix de la nature qui vous entoure et découvrez dans quelle direction et à quelle distance se trouve le spécimen le plus proche, s\'il y en a, dans un rayon de 7,5 kilomètres.</p>',
    link: '/grimoire/localiser-des-animaux-ou-des-plantes',
    title: 'Localiser des animaux ou des plantes',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (des poils de chien de chasse)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Localiser un objet',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (une branche fourchue)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Magicien',
          'Ombrelame',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Décrivez ou nommez un objet qui vous est familier. Vous sentez dans quelle direction il se trouve, à condition qu\'il soit dans un rayon de 300 mètres. S\'il se déplace, vous savez dans quelle direction.</p>\n<p>Le sort permet de localiser un objet spécifique de votre connaissance à condition que vous l\'ayez vu de près, c\'est-à-dire vous être trouvé à moins de 9 mètres de lui une fois dans votre vie. Sinon, le sort peut localiser l\'objet d\'un type donné le plus proche, comme un type d\'appareil, de bijou, de meuble, d\'outil ou d\'arme.</p>\n<p>Le sort ne parvient pas à localiser l\'objet si une couche de plomb, aussi mince soit-elle, bloque une trajectoire directe entre vous et l\'objet.</p>',
    link: '/grimoire/localiser-un-objet',
    title: 'Localiser un objet',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (une branche fourchue)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Localiser une créature',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (des poils de chien de chasse)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Magicien',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Décrivez ou nommez une créature qui vous est familière. Vous sentez dans quelle direction elle se trouve, à condition qu\'elle soit dans un rayon de 300 mètres. Si elle se déplace, vous savez dans quelle direction.</p>\n<p>Le sort permet de localiser une créature spécifique de votre connaissance ou la créature la plus proche du même type (comme un humain ou une licorne), mais pour cela, vous devez avoir déjà vu une telle créature de près, c\'est-à-dire vous être trouvé à moins de 9 mètres d\'elle au moins une fois dans votre vie. Si la créature que vous décrivez ou nommez se trouve actuellement sous une forme différente, sous l\'effet d\'un sort de <em>métamorphose</em>, par exemple, ce sort est incapable de la localiser.</p>\n<p>Le sort ne parvient pas à localiser la créature si le chemin qui vous relie directement est coupé par une étendue d\'eau courante d\'au moins 3 mètres de large.</p>',
    link: '/grimoire/localiser-une-creature',
    title: 'Localiser une créature',
    level: '4',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (des poils de chien de chasse)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Lueur d\'espoir',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort offre espoir et robustesse. Choisissez autant de créatures consentantes à portée que vous le désirez. Pendant toute la durée du sort, elles bénéficient d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors des jets de sauvegarde de Sagesse et des jets de sauvegarde contre la mort. De plus, elles récupèrent le maximum de points de vie possible dès qu\'elles reçoivent des soins.</p>',
    link: '/grimoire/lueur-despoir',
    title: 'Lueur d\'espoir',
    level: '3',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Lueurs féériques',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Tous les objets contenus dans un cube de 6 mètres d\'arête situé à portée sont auréolés d\'une lumière bleue, verte ou violette (à vous de choisir). Les créatures qui se trouvent dans la zone au moment de l\'incantation sont aussi entourées de lumière, à moins de réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Pendant toute la durée du sort, les créatures et les objets affectés émettent une faible luminosité dans un rayon de 3 mètres.</p>\n<p>Un assaillant a l\'<a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du <a href="/combattre#jets-dattaque">jet d\'attaque</a> contre une cible affectée s\'il peut la voir. Les créatures et les objets affectés ne peuvent pas bénéficier de l\'état <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a>.</p>',
    link: '/grimoire/lueurs-feeriques',
    title: 'Lueurs féériques',
    level: '1',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Lumière',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, M (une luciole ou de la mousse phosphorescente)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez un objet qui ne fait pas plus de 3 mètres dans chaque dimension. Jusqu\'à la fin du sort, il émet une vive lumière dans un rayon de 6 mètres et une faible lumière dans un rayon additionnel de 6 mètres. Vous pouvez colorer cette lumière comme vous le souhaitez. Il suffit de recouvrir complètement l\'objet avec quelque chose d\'opaque pour bloquer la lumière. Le sort se termine si vous le lancez de nouveau ou si vous le révoquez en dépensant une action.</p>\n<p>Si vous visez un objet porté ou transporté par une créature hostile, cette dernière doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité pour éviter les effets du sort.</p>',
    link: '/grimoire/lumiere',
    title: 'Lumière',
    level: '0',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, M (une luciole ou de la mousse phosphorescente)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Lumière du jour',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une sphère de lumière de 18 mètres de rayon s\'étend depuis un point de votre choix situé à portée. Elle émet une lumière vive dans ce rayon et une lumière faible dans un rayon additionnel de 18 mètres.</p>\n<p>Si le point que vous avez choisi est un objet en votre possession ou un objet qui n\'est ni porté ni transporté par autrui, la lumière irradie de l\'objet et se déplace avec lui. Il suffit de recouvrir complètement l\'objet affecté avec un objet opaque, comme un bol ou un heaume, pour bloquer la lumière.</p>\n<p>Si une partie de la zone affectée par ce sort chevauche une zone de ténèbres issue d\'un sort de niveau 3 ou moins, elle dissipe le sort en question.</p>',
    link: '/grimoire/lumiere-du-jour',
    title: 'Lumière du jour',
    level: '3',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Lumières dansantes',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un bout de phosphore ou d\'orme, ou un ver luisant)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez jusqu\'à quatre lumières de la taille d\'une torche qui apparaissent à portée. Elles ressemblent à des lanternes, des torches ou des orbes luisants qui flottent dans les airs pendant toute la durée du sort. Vous pouvez aussi les combiner pour obtenir une forme brillante vaguement humanoïde de taille M. Quelle que soit l\'option choisie, chaque source lumineuse offre une lumière faible dans un rayon de 3 mètres.</p>\n<p>À votre tour et par une action bonus, vous pouvez déplacer les lumières sur un maximum de 18 mètres pour les installer ailleurs, mais toujours à portée. Une lumière créée via ce sort doit toujours se trouver à 6 mètres ou moins d\'une autre émanant du même sort. Elle s\'éteint si elle passe hors de portée.</p>',
    link: '/grimoire/lumieres-dansantes',
    title: 'Lumières dansantes',
    level: '0',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un bout de phosphore ou d\'orme, ou un ver luisant)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Main du mage',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une main spectrale flottante apparaît à portée, en un point de votre choix. Elle persiste pendant toute la durée du sort ou jusqu\'à ce que vous révoquiez le sort par une action. La main disparaît si elle s\'éloigne à plus de 9 mètres de vous ou si vous relancez le sort.</p>\n<p>Vous pouvez utiliser votre action pour contrôler la main et vous en servir pour manipuler un objet, ouvrir une porte ou un récipient qui ne sont pas verrouillés, placer un objet dans un récipient ouvert ou l\'en sortir, ou bien verser le contenu d\'une flasque. Vous pouvez déplacer la main d\'un maximum de 9 mètres à chaque fois que vous l\'utilisez.</p>\n<p>La main ne peut pas attaquer, activer un objet magique, ni transporter plus de 5 kilogrammes.</p>',
    link: '/grimoire/main-du-mage',
    title: 'Main du mage',
    level: '0',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Main magique',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (une coquille d\'œuf et un gant en peau de serpent)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une main de force luisante et translucide, de taille G, dans un espace inoccupé situé à portée et dans votre champ de vision. La main existe pendant toute la durée du sort, se déplace sur votre ordre et imite les mouvements de votre propre main.</p>\n<p>La main est un objet doté d\'une CA de 20 et d\'un nombre de points de vie égal à votre maximum de points de vie. Si elle tombe à 0 point de vie, le sort se dissipe. La main possède une Force de 26 (+8) et une Dextérité de 10 (+0). Elle n\'occupe pas la case où elle se trouve.</p>\n<p>Lorsque vous lancez le sort, puis via une action bonus lors de vos tours ultérieurs, vous pouvez déplacer la main sur une distance maximale de 18 mètres et lui faire appliquer l\'un des effets suivants.</p>\n<p><strong>Main agrippeuse</strong>. La main tente d\'empoigner une créature de taille TG ou inférieure qui se trouve dans un rayon de 1,50 mètre. Utilisez la valeur de Force de la main pour résoudre le test d\'empoignade. Si la cible est de taille M ou inférieure, vous bénéficiez d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du test. Tant que la cible est <a href="/gerer-la-sante-du-personnage#empoigné"><em>empoignée</em></a> par la main, vous pouvez utiliser une action bonus pour que la main la broie. Dans ce cas, la cible subit un total de dégâts contondants égal à 2d6 + votre modificateur de caractéristique d\'incantation.</p>\n<p><strong>Main interposée</strong>. La main s\'interpose entre vous et une créature de votre choix jusqu\'à ce que vous lui donniez un autre ordre. Elle se déplace de manière à toujours rester entre vous et la cible désignée et vous offre un abri partiel contre elle. La cible ne peut pas franchir la zone occupée par la main si sa valeur de Force est inférieure ou égale à celle de la main. Si elle est supérieure, elle peut se déplacer dans votre direction en traversant la zone de la main, mais cette zone est considérée pour elle comme un terrain difficile.</p>\n<p><strong>Main percutante</strong>. La main tente de bousculer une créature située dans un rayon de 1,50 mètre dans la direction de votre choix. Faites un test avec la Force de la main opposé au test de Force (Athlétisme) de la cible. Si cette dernière est de taille M ou inférieur, vous bénéficiez d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du test. Si vous l\'emportez, la main pousse la cible sur 1,50 mètre plus 1,50 mètre multiplié par votre modificateur de caractéristique d\'incantation. La main se déplace de manière à rester à moins de 1,50 mètre de la cible.</p>\n<p><strong>Poing serré</strong>. La main frappe une créature ou un objet situé dans un rayon de 1,50 mètre autour d\'elle. Faites une attaque de sort de contact pour la main en utilisant vos propres bonus d\'attaque. Si elle touche, la cible subit 4d8 dégâts de force.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, les dégâts de l\'option poing serré augmentent de 2d8 et ceux de la main agrippeuse de 2d6 par niveau au-delà du niveau  5.</p>',
    link: '/grimoire/main-magique',
    title: 'Main magique',
    level: '5',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (une coquille d\'œuf et un gant en peau de serpent)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Mains brûlantes',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (cône de 4,50 mètres)',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Alors que vous vous tenez les doigts écartés en éventail et les pouces l\'un contre l\'autre, une mince nappe de feu s\'étend depuis vos mains tendues. Chaque créature située dans un cône de 4,50 mètres doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent reçoivent 3d6 dégâts de feu, les autres la moitié seulement.</p>\n<p>Le feu embrase tous les objets inflammables de la zone, à moins que quelqu\'un ne les porte ou ne les transporte.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/mains-brulantes',
    title: 'Mains brûlantes',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle (cône de 4,50 mètres)',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Manoir somptueux',
      spell: {
        casting_time: '1 minute',
        range: '90 mètres',
        components: 'V, S, M (un portrait miniature gravé dans de l\'ivoire, un bout de marbre poli et une minuscule cuillère en argent, chaque objet devant valoir au minimum 5 po)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez une demeure extraplanaire à portée qui persiste pendant toute la durée du sort. À vous de choisir où se situe sa seule entrée. Cette dernière scintille légèrement et mesure 1,50 mètre de large pour 3 mètres de haut. Vous et toutes les créatures que vous désignez lors de l\'incantation êtes libres d\'entrer et de sortir de cette demeure extraplanaire, tant que son portail reste ouvert. Vous pouvez l\'ouvrir ou le fermer si vous vous tenez à 9 mètres ou moins de lui. Quand le portail est fermé, il est invisible.</p>\n<p>Un splendide vestibule s\'ouvre derrière le portail et dessert de nombreuses pièces. Les lieux sont propres et l\'atmosphère tiède et agréable.</p>\n<p>Vous pouvez disposer le plan des lieux comme bon vous semble, mais l\'espace occupé ne peut pas excéder cinquante cubes mesurant chacun 3 mètres d\'arête. L\'endroit est meublé et décoré selon vos souhaits et contient assez de nourriture pour un banquet de neuf plats destiné à une centaine de convives au maximum. Une équipe de cent serviteurs translucides s\'occupent de tous ceux qui pénètrent dans la demeure. À vous de décider de l\'apparence visuelle de ces domestiques et de leur tenue. Ils obéissent aveuglément à tous vos ordres. Chacun est en mesure d\'accomplir n\'importe quelle tâche à la portée d\'un serviteur humain ordinaire, mais les domestiques ne peuvent ni attaquer ni effectuer une action visant à nuire directement à une autre créature. Ils peuvent donc aller chercher des affaires, faire le ménage, raccommoder et plier les habits, allumer la cheminée, servir les plats et la boisson, etc. Ils peuvent se rendre partout dans la demeure, mais sont incapables de la quitter. Les meubles et autres objets créés à l\'aide de ce sort se dissipent en volutes de fumée s\'ils sont amenés à l\'extérieur de la demeure. Quand le sort se termine, toutes les créatures qui se trouvent dans l\'espace extradimensionnel sont expulsées dans les emplacements libres les plus proches de l\'entrée.</p>',
    link: '/grimoire/manoir-somptueux',
    title: 'Manoir somptueux',
    level: '7',
    casting_time: '1 minute',
    range: '90 mètres',
    components: 'V, S, M (un portrait miniature gravé dans de l\'ivoire, un bout de marbre poli et une minuscule cuillère en argent, chaque objet devant valoir au minimum 5 po)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Manteau de givre',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (un peu d\'eau)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous vous recouvrez d\'une enveloppe de givre. Vous bénéficiez d\'une résistance aux dégâts contre la prochaine attaque réussie contre vous, tandis que la créature qui vous a attaqué subit la moitié des dégâts de son attaque sous forme de dégâts de froid. Ensuite, le sort cesse de faire effet.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, le sort fait effet sur une attaque supplémentaire par niveau au-dessus du premier.</p>',
    link: '/grimoire/manteau-de-givre',
    title: 'Manteau de givre',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (un peu d\'eau)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Marche sur l\'eau',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un bout de liège)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Rôdeur'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort permet de se déplacer sur n\'importe quelle surface liquide (comme de l\'eau, de l\'acide, de la boue, de la neige, des sables mouvants ou de la lave) comme s\'il s\'agissait d\'un sol ferme et inoffensif (ceci dit, les créatures qui marchent sur la lave subissent tout de même les dégâts liés à la chaleur dégagée). Vous pouvez accorder cette capacité pendant toute la durée du sort à un maximum de dix créatures consentantes situées à portée et dans votre champ de vision.</p>\n<p>Si vous prenez pour cible une créature immergée dans un liquide, le sort la ramène à la surface du liquide à une vitesse de 18 mètres par round.</p>',
    link: '/grimoire/marche-sur-leau',
    title: 'Marche sur l\'eau',
    level: '3',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un bout de liège)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Marche sur le vent',
      spell: {
        casting_time: '1 minute',
        range: '9 mètres',
        components: 'V, S, M (du feu et de l\'eau bénite)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous et un maximum de dix créatures consentantes, situées à portée et dans votre champ de vision, prenez une forme gazeuse pendant toute la durée du sort et ressemblez à des volutes de nuages. Sous cette forme, une créature affectée a une vitesse de vol de 90 mètres et une résistance aux dégâts des armes non magiques. Elle est limitée dans ses actions : elle peut juste <a href="/combattre#se-précipiter"><em>se précipiter</em></a> ou reprendre sa forme normale. Il lui faut 1 minute pour reprendre sa forme normale et, pendant toute cette période, elle est <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> et incapable de bouger. Elle peut de nouveau se muer en nuage tant que le sort n\'est pas terminé, cette nouvelle transformation lui demandant aussi 1 minute.</p>\n<p>Si une créature est sous forme de nuage et en plein vol quand le sort se termine, elle descend de 18 mètres par round pendant 1 minute, jusqu\'à ce qu\'elle atterrisse, en parfaite sécurité. Si elle n\'arrive pas à atterrir avant la fin de cette minute, elle tombe sur la distance qui lui reste à parcourir.</p>',
    link: '/grimoire/marche-sur-le-vent',
    title: 'Marche sur le vent',
    level: '6',
    casting_time: '1 minute',
    range: '9 mètres',
    components: 'V, S, M (du feu et de l\'eau bénite)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Marque du chasseur',
      spell: {
        casting_time: '1 action bonus',
        range: '27 mètres',
        components: 'V',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous choisissez une créature située dans votre champ de vision et à portée et lui apposez une marque mystique la désignant comme votre proie. Jusqu\'à la fin du sort, vous lui infligez 1d6 dégâts supplémentaires à chaque fois que vous réussissez à lui infliger des dégâts avec une arme et vous avez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> sur les éventuels tests de Sagesse (Perception) ou Sagesse (Survie) que vous faites pour la retrouver. Si la cible tombe à 0 point de vie avant que ce sort se termine, vous pouvez utiliser une action bonus lors d\'un tour ultérieur pour marquer une nouvelle créature.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou 4, vous pouvez vous concentrer sur le sort pendant 8 heures. Si vous utilisez un emplacement de niveau 5 ou supérieur, vous pouvez maintenir votre concentration sur le sort jusqu\'à 24 heures.</p>',
    link: '/grimoire/marque-du-chasseur',
    title: 'Marque du chasseur',
    level: '1',
    casting_time: '1 action bonus',
    range: '27 mètres',
    components: 'V',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Mauvais œil',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant la durée du sort, vos yeux deviennent deux trous noirs regorgeant d\'un pouvoir terrifiant. Une créature de votre choix, située dans votre champ de vision et dans un rayon de 18 mètres doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou se voir affectée par l\'un des effets suivants, choisi par vos soins, pendant toute la durée du sort. À chacun de vos tours jusqu\'à ce que le sort se termine, vous pouvez utiliser votre action pour viser une autre créature, mais vous ne pouvez pas reprendre pour cible une créature ayant déjà réussi un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> contre l\'incantation de mauvais œil en cours.</p>\n<p><strong>Nauséeux</strong>. La cible est affectée par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets d\'attaque et des tests de caractéristique. Elle a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse à la fin de chacun de ses tours. L\'effet se termine si elle le réussit.</p>\n<p><strong>Endormi</strong>. La cible tombe <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconsciente</em></a>. Elle se réveille si elle subit le moindre dégât ou si une tierce personne utilise une action pour la réveiller en la secouant.</p>\n<p><strong>Paniqué</strong>. Vous terrorisez la cible. À chacun de ses tours, la cible <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> doit utiliser l\'action se précipiter et s\'éloigner de vous via l\'itinéraire le plus rapide et le plus sûr, à moins qu\'elle n\'ait nulle part où aller. Cet effet se termine si la cible gagne un emplacement situé à au moins 18 mètres de vous et d\'où elle ne vous voit plus.</p>',
    link: '/grimoire/mauvais-oeil',
    title: 'Mauvais œil',
    level: '6',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Message',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un petit bout de fil de cuivre)',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous pointez du doigt une créature à portée et murmurez un message. La cible (et elle seule) l\'entend et peut répondre dans un murmure que vous êtes le seul à entendre.</p>\n<p>Vous pouvez lancer ce sort au travers d\'un objet solide si vous connaissez bien la cible et savez qu\'elle se trouve de l\'autre côté de cet obstacle. Le sort est bloqué par un silence magique, 30 centimètres de pierre, 2,5 centimètres de métal ordinaire, une mince couche de plomb ou 90 centimètres de bois. Le sort n\'a pas besoin de voyager en ligne directe, il peut contourner les angles et franchir les ouvertures.</p>',
    link: '/grimoire/message',
    title: 'Message',
    level: '0',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un petit bout de fil de cuivre)',
    duration: '1 round'
  },
  {
    header: {
      title: 'Messager animal',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un peu de nourriture)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Grâce à ce sort, vous chargez un animal de délivrer un message pour vous. Choisissez une bête de taille TP située à portée et dans votre champ de vision, comme un écureuil, un geai ou une chauve-souris. Vous lui précisez l\'endroit où se rendre (où vous devez vous être déjà rendu vous-même auparavant) et donnez une description générale du destinataire, comme « <em>un homme ou une femme vêtus de l\'uniforme de la garde de la ville</em> » ou « <em>un nain roux avec un chapeau pointu</em> ». Vous prononcez ensuite votre message, de vingt-cinq mots au maximum. La bête chargée du message fait alors route vers la destination indiquée pendant toute la durée du sort. Elle parcourt environ 75 kilomètres par 24 heures si elle vole, ou environ 35 kilomètres dans le cas contraire.</p>\n<p>Quand elle arrive sur place, elle transmet votre message à la créature que vous avez décrite, imitant le son de votre voix. Le messager parle uniquement à une créature correspondant à la description que vous lui avez donnée. S\'il n\'atteint pas sa destination avant la fin du sort, le message est perdu et l\'animal retourne là où vous avez lancé le sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, la durée du sort augmente de 48 heures par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/messager-animal',
    title: 'Messager animal',
    level: '2',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un peu de nourriture)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Métamorphose',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un cocon de chenille)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort change la forme d\'une créature située à portée et dans votre champ de vision. Une créature non consentante doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse pour éviter cet effet. Le sort n\'a aucun effet sur un métamorphe ou une créature à 0 point de vie.</p>\n<p>La transformation persiste pendant toute la durée du sort ou jusqu\'à ce que la cible tombe à 0 point de vie ou meure. Vous pouvez donner comme nouvelle forme celle de n\'importe quelle bête dont l\'indice de dangerosité est égal ou inférieur à celui de la cible (ou à son niveau, si elle n\'a pas d\'indice de dangerosité). Le profil technique de la cible, y compris ses valeurs de caractéristique mentales, est remplacé par celui de la bête choisie. Elle conserve en revanche son alignement et sa personnalité.</p>\n<p>La cible possède les points de vie correspondant à sa nouvelle forme. Quand elle reprend sa forme initiale, elle se retrouve avec le nombre de points de vie qui était le sien avant la transformation. Si elle reprend sa forme initiale parce qu\'elle est tombée à 0 point de vie, les éventuels dégâts en excès sont déduits des points de vie de sa forme d\'origine. Tant que les dégâts en excès ne réduisent pas les points de vie normaux de la créature à 0, elle n\'est pas <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconsciente</em></a>.</p>\n<p>La nouvelle forme de la créature limite les actions qu\'elle peut entreprendre et elle ne peut ni parler, ni lancer de sorts, ni effectuer une action qui nécessite de parler ou de se servir de ses mains.</p>\n<p>L\'équipement de la cible fusionne avec sa nouvelle forme, mais elle ne peut pas activer, utiliser ni manier la moindre pièce d\'équipement et ne peut pas non plus bénéficier de ses effets.</p>',
    link: '/grimoire/metamorphose',
    title: 'Métamorphose',
    level: '4',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un cocon de chenille)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Métamorphose suprême',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (une goutte de mercure, une cuillerée de gomme arabique et une volute de fumée)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Barde',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Choisissez une créature ou un objet non magique situés à portée et dans votre champ de vision. Vous transformez la créature en une autre créature, la créature en un objet ou l\'objet en une créature (cet objet ne doit pas être porté ni transporté par autrui). La transformation persiste pendant toute la durée du sort ou jusqu\'à ce que la cible tombe à 0 point de vie ou meure. Si vous vous concentrez sur ce sort pendant toute sa durée, la transformation persiste jusqu\'à dissipation.</p>\n<p>Ce sort n\'a aucun effet sur un métamorphe ou une créature tombée à 0 point de vie. Si la cible n\'est pas consentante, elle peut faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle le réussit, le sort ne l\'affecte pas.</p>\n<p><strong>Créature en créature</strong>. Si vous changez une créature en créature d\'un autre type, vous pouvez lui attribuer la forme de votre choix, à condition qu\'elle corresponde à une créature dotée d\'un indice de dangerosité égal ou inférieur au sien (ou à son niveau si la cible n\'a pas d\'indice de dangerosité). Le profil technique de la cible (y compris ses caractéristiques mentales) est remplacé par celui de sa nouvelle forme, mais elle conserve son alignement et sa personnalité.</p>\n<p>La cible adopte les points de vie de sa nouvelle forme. Quand elle reprend son apparence initiale, elle se retrouve avec le même nombre de points de vie que celui qui était le sien avant sa transformation. Si elle reprend sa véritable forme parce qu\'elle est tombée à 0 point de vie, les dégâts en excès sont transférés sur sa forme initiale. Tant que ces dégâts en excès ne font pas tomber sa forme d\'origine à 0 point de vie, la cible n\'est pas <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconsciente</em></a>.</p>\n<p>La nouvelle forme de la créature limite ses actions. Elle ne peut pas parler, lancer de sorts, ni effectuer une action nécessitant des mains ou la parole, à moins que sa nouvelle forme ne soit à même d\'accomplir ces actes.</p>\n<p>L\'équipement de la cible fusionne avec sa nouvelle forme. La créature est donc dans l\'incapacité d\'activer, utiliser, ou manier son équipement ou de bénéficier de ses effets.</p>\n<p><strong>Objet en créature</strong>. Vous pouvez changer un objet en créature, à condition que la taille de la créature ne dépasse pas celle de l\'objet et que son indice de dangerosité soit de 9 ou moins. La créature est amicale envers vous et vos compagnons. Elle agit à chacun de vos tours. C\'est à vous de décider des actions qu\'elle entreprend et de ses déplacements, mais c\'est le MJ qui dispose de son profil technique et résout ses actions et ses déplacements.</p>\n<p>Si le sort devient permanent, vous ne contrôlez plus la créature, mais elle peut rester amicale envers vous selon la manière dont vous l\'avez traitée.</p>\n<p><strong>Créature en objet</strong>. Si vous transformez une créature en objet, tous les objets qu\'elle porte et transporte se métamorphosent avec elle. Le profil technique de l\'objet remplace celui de la créature qui, une fois revenue à sa forme d\'origine à la fin du sort, n\'a aucun souvenir de la période pendant laquelle elle a été métamorphosée.</p>',
    link: '/grimoire/metamorphose-supreme',
    title: 'Métamorphose suprême',
    level: '9',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (une goutte de mercure, une cuillerée de gomme arabique et une volute de fumée)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Mirage',
      spell: {
        casting_time: '10 minutes',
        range: 'vision',
        components: 'V, S',
        duration: '10 jours'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous donnez à un terrain d\'au maximum 2,5 kilomètres carrés la même apparence visuelle, sonore, olfactive et générale qu\'un autre type de terrain. En revanche, sa forme globale ne change pas. Vous pouvez maquiller un champ ou une route pour lui donner l\'air d\'un marais, d\'une colline, d\'une crevasse ou d\'un autre terrain difficile ou impraticable. Vous pouvez faire passer une mare pour une prairie herbeuse, un précipice pour une pente douce ou un goulet rocailleux pour une route aussi large que lisse. Vous pouvez aussi modifier l\'apparence des structures ou en ajouter là où n\'y en a pas. En revanche, le sort est incapable de déguiser, dissimuler ou ajouter des créatures.</p>\n<p>L\'illusion comprend des composantes auditives, visuelles, tactiles et olfactives, elle peut donc changer un sol dégagé en terrain difficile (ou inversement) ou gêner les déplacements dans la zone. Tout élément de terrain illusoire (comme une pierre ou une brindille) disparaît dès qu\'il quitte la zone d\'effet du sort.</p>\n<p>Les créatures dotées de vision parfaite distinguent le véritable terrain derrière l\'illusion, mais les autres composantes restent en place ; elles savent donc qu\'elles ont affaire à une illusion, mais peuvent toujours interagir physiquement avec celle-ci.</p>',
    link: '/grimoire/mirage',
    title: 'Mirage',
    level: '7',
    casting_time: '10 minutes',
    range: 'vision',
    components: 'V, S',
    duration: '10 jours'
  },
  {
    header: {
      title: 'Modification de mémoire',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez de remodeler les souvenirs d\'autrui. Une créature située dans votre champ de vision doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si vous combattez cette créature, elle a l\'<a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du jet. Si elle échoue, elle est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> par vous pendant toute la durée du sort. Elle est alors <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> et n\'a plus conscience de ce qui l\'entoure, mais elle vous entend toujours. Le sort se termine si elle subit le moindre dégât ou si elle est la cible d\'un autre sort, auquel cas ses souvenirs restent tous intacts.</p>\n<p>Tant que le sort persiste, vous pouvez influer sur les souvenirs de la cible liés à un événement qui s\'est déroulé dans les 24 heures précédentes et qui n\'a pas duré plus de 10 minutes. Vous pouvez éliminer définitivement tout souvenir de cet événement, permettre à la cible de s\'en souvenir parfaitement dans les moindres détails, modifier les détails dont elle se souvient ou créer un souvenir décrivant un tout autre événement.</p>\n<p>Vous devez parler à votre cible pour décrire comment ses souvenirs sont affectés et, pour que les nouveaux souvenirs s\'implantent dans sa mémoire, elle doit être à même de comprendre votre langue. Son esprit se charge de combler les manques dans votre description. Si le sort se termine avant que vous ayez fini de décrire les souvenirs modifiés, la mémoire de la cible ne subit aucune modification. Sinon, elle tient compte des modifications qui lui ont été apportées dès que le sort se termine.</p>\n<p>Les souvenirs modifiés ne changent pas forcément l\'attitude de la créature, surtout s\'ils entrent en contradiction avec ses penchants naturels, son alignement ou ses croyances. Un souvenir modifié illogique sera ignoré : par exemple, si la cible se souvient combien elle a aimé se baigner dans de l\'acide, elle prendra cela pour un mauvais rêve. Le MJ peut estimer qu\'un souvenir est modifié de manière tellement insensée qu\'il n\'affecte pas la cible de manière significative.</p>\n<p>Un sort <em>lever une malédiction</em> ou <em>restauration supérieure</em> permet à la cible de retrouver ses véritables souvenirs.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, vous pouvez modifier les souvenirs d\'un événement remontant à 7 jours (niveau 6), 30 jours (niveau 7), 1 an (niveau 8) ou issus de n\'importe quelle période du passé de la cible (niveau 9).</p>',
    link: '/grimoire/modification-de-memoire',
    title: 'Modification de mémoire',
    level: '5',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Modifier son apparence',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous revêtez une forme différente. Quand vous lancez ce sort, choisissez l\'une des options suivantes, dont les effets dureront aussi longtemps que le sort. Tant qu\'il est actif, vous pouvez utiliser une action pour mettre un terme à une option afin de bénéficier d\'une autre.</p>\n<p><strong>Adaptation aquatique</strong>. Vous adaptez votre corps à un environnement aquatique, générant des branchies et des palmures entre vos doigts. Vous pouvez respirer sous l\'eau et gagnez une vitesse de nage égale à votre vitesse de marche.</p>\n<p><strong>Armes naturelles</strong>. Vous acquérez des griffes, des crocs, des épines, des cornes ou une autre arme naturelle de votre choix. Vos attaques à mains nues infligent 1d6 dégâts contondants, perforants ou tranchants, comme il sied à l\'arme naturelle que vous avez choisie et vous maîtrisez automatiquement les attaques à mains nues. Enfin, votre arme naturelle est de nature magique et vous disposez d\'un bonus de +1 aux jets d\'attaque et de dégâts quand vous l\'utilisez.</p>\n<p><strong>Changer d\'apparence</strong>. Vous modifiez votre apparence et choisissez votre taille, votre poids, vos traits, le son de votre voix, la longueur de vos cheveux, votre pigmentation, et toute caractéristique distinctive désirée. Vous pouvez vous faire passer pour un membre d\'une autre race, mais vos caractéristiques ne changent pas. Vous ne pouvez pas vous faire passer pour une créature d\'une catégorie de taille différente de la vôtre, et votre silhouette générale doit rester la même (par exemple, si vous êtes un bipède, vous ne pouvez pas utiliser ce sort pour prendre l\'apparence d\'un quadrupède). À tout moment lors de la durée du sort, vous pouvez dépenser une action pour modifier de nouveau votre apparence de cette manière.</p>',
    link: '/grimoire/modifier-son-apparence',
    title: 'Modifier son apparence',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Monture fantôme',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une créature équine de taille G quasi réelle apparaît dans un emplacement au sol de votre choix situé à portée. À vous de décider de l\'apparence de la créature, mais elle est systématiquement équipée d\'une selle, d\'un mors et d\'une bride. Toutes les pièces d\'équipement nées de ce sort disparaissent dans une volute de fumée si quelqu\'un les emporte à plus de 3 mètres de la monture.</p>\n<p>Pendant toute la durée du sort, vous et une créature de votre choix pouvez chevaucher la monture. Cette dernière possède le même profil technique qu\'un cheval de selle, excepté sa vitesse, de 30 mètres. En 1 heure, elle peut parcourir 15 kilomètres, ou 20 kilomètres au galop. Quand le sort se termine, la monture s\'estompe progressivement, ce qui laisse 1 minute au  cavalier pour mettre pied à terre. Le sort se termine si vous utilisez une action pour le révoquer ou si la monture subit le moindre dégât.</p>',
    link: '/grimoire/monture-fantome',
    title: 'Monture fantôme',
    level: '3',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Moquerie cruelle',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ombrelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous lancez une bordée d\'insultes empreintes d\'un subtil enchantement à une créature située à portée et dans votre champ de vision. Tant qu\'elle vous entend (elle n\'a pas besoin de vous comprendre), elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle subit 1d4 dégâts psychiques et subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> sur le prochain <a href="/combattre#jets-dattaque">jet d\'attaque</a> qu\'elle effectue avant la fin de son prochain tour.</p>\n<p>Les dégâts du sort augmentent de 1d4 quand vous atteignez le niveau 5 (2d4), le niveau 11 (3d4) et le niveau  17 (4d4).</p>',
    link: '/grimoire/moquerie-cruelle',
    title: 'Moquerie cruelle',
    level: '0',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Mot de guérison',
      spell: {
        casting_time: '1 action bonus',
        range: '18 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une créature de votre choix située à portée et dans votre champ de vision récupère un nombre de points de vie égal à 1d4 + votre modificateur de caractéristique d\'incantation. Ce sort n\'a aucun effet sur les créatures artificielles et les morts-vivants.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les soins augmentent de 1d4 par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/mot-de-guerison',
    title: 'Mot de guérison',
    level: '1',
    casting_time: '1 action bonus',
    range: '18 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Mot de guérison de groupe',
      spell: {
        casting_time: '1 action bonus',
        range: '18 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous prononcez des paroles curatives qui rendent un nombre de points de vie égal à 1d4 + votre modificateur de caractéristique d\'incantation à un maximum de six créatures de votre choix situées à portée et dans votre champ de vision. Ce sort reste sans effet sur les morts-vivants et les créatures artificielles.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, les soins augmentent de 1d4 par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/mot-de-guerison-de-groupe',
    title: 'Mot de guérison de groupe',
    level: '3',
    casting_time: '1 action bonus',
    range: '18 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Mot de pouvoir étourdissant',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous prononcez un mot de pouvoir capable de submerger l\'esprit d\'une créature située à portée et dans votre champ de vision. Elle en est abasourdie. Si elle possède 150 points de vie ou moins, elle est <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a>, sinon le sort est sans effet.</p>\n<p>Une cible <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> a droit à un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution à la fin de chacun de ses tours. L\'effet d\'étourdissement se termine dès qu\'elle en réussit un.</p>',
    link: '/grimoire/mot-de-pouvoir-etourdissant',
    title: 'Mot de pouvoir étourdissant',
    level: '8',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Mot de pouvoir mortel',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous prononcez un mot de pouvoir capable d\'obliger une créature située à portée et dans votre champ de vision à mourir instantanément. Si la créature choisie a 100 points de vie ou moins, elle meurt, sinon le sort n\'a aucun effet.</p>',
    link: '/grimoire/mot-de-pouvoir-mortel',
    title: 'Mot de pouvoir mortel',
    level: '9',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Mot de retour',
      spell: {
        casting_time: '1 action',
        range: '1,5 mètre',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous et un maximum de cinq créatures consentantes situées dans un rayon de 1,50 mètre autour de vous vous téléportez immédiatement dans un sanctuaire précédemment choisi. Vous – et les créatures qui se téléportent éventuellement avec vous – apparaissez dans l\'emplacement inoccupé le plus proche de l\'endroit que vous avez désigné lorsque vous avez préparé votre sanctuaire (voir plus bas). Si vous lancez ce sort sans avoir préparé un sanctuaire au préalable, il n\'a aucun effet.</p>\n<p>Pour désigner un sanctuaire, vous devez lancer ce sort en un lieu dédié à votre divinité, comme un temple, ou entretenant des liens étroits avec elle. Si vous tentez de lancer ainsi le sort dans une zone qui n\'est pas dédiée à votre divinité, il n\'a aucun effet.</p>',
    link: '/grimoire/mot-de-retour',
    title: 'Mot de retour',
    level: '6',
    casting_time: '1 action',
    range: '1,5 mètre',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Motif hypnotique',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'S, M (un bâtonnet d\'encens incandescent ou une fiole de cristal remplie d\'une matière phosphorescente)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tissez dans les airs un motif aux couleurs mouvantes dans un cube de 9 mètres d\'arête situé à portée. Le motif apparaît pendant un bref instant avant de s\'évanouir. Chaque créature qui se trouve dans la zone et voit le motif doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Celles qui échouent sont charmées pendant la durée du sort. Tant qu\'une créature est <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a> par ce sort, elle est <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> et a une vitesse de 0.</p>\n<p>Le sort se termine pour une créature donnée si elle subit le moindre dégât ou si quelqu\'un d\'autre utilise son action pour la secouer et la sortir de sa torpeur.</p>',
    link: '/grimoire/motif-hypnotique',
    title: 'Motif hypnotique',
    level: '3',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'S, M (un bâtonnet d\'encens incandescent ou une fiole de cristal remplie d\'une matière phosphorescente)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Mur d\'épines',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (une poignée d\'épines)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un mur fait de buissons souples et robustes, enchevêtrés et hérissés d\'épines acérées. Il apparaît à portée sur une surface solide et persiste pendant toute la durée du sort. Vous pouvez créer un mur de 18 mètres de long, 3 mètres de haut et 1,50 mètre d\'épaisseur, ou le disposer en un cercle de 6 mètres de diamètre pour une hauteur maximum de 6 mètres et une épaisseur de 1,50 mètre. Le mur bloque le champ de vision.</p>\n<p>Quand le mur apparaît, chaque créature située dans sa zone doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 7d8 dégâts perforants, les autres la moitié seulement.</p>\n<p>Une créature peut traverser le mur, mais lentement et dans la douleur. Elle doit dépenser 1,20 mètre de déplacement pour avancer de 30 centimètres au sein du mur. De plus, quand elle entre dans le mur pour la première fois de son tour ou quand elle y termine son tour, elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Elle subit 7d8 dégâts tranchants si elle rate son jet, la moitié si elle le réussit.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, les deux types de dégâts augmentent chacun de 1d8 par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/mur-depines',
    title: 'Mur d\'épines',
    level: '6',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (une poignée d\'épines)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Mur de feu',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un éclat de phosphore)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un mur de feu sur une surface solide située à portée. Il peut faire un maximum de 18 mètres de long, 6 mètres de haut et 30 centimètres d\'épaisseur, ou prendre une forme circulaire de 6 mètres de diamètre pour 6 mètres de haut et 30 centimètres d\'épaisseur. Le mur est opaque et persiste toute la durée du sort.</p>\n<p>Quand le mur apparaît, chaque créature présente dans sa zone d\'effet doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent reçoivent 5d8 dégâts de feu, les autres la moitié seulement.</p>\n<p>Une face du mur (celle de votre choix) inflige 5d8 dégâts de feu à chaque créature qui termine son tour à 3 mètres d\'elle ou moins ou au sein du mur. Une créature qui pénètre dans le mur pour la première fois de son tour ou y termine son tour subit les mêmes dégâts. L\'autre face du mur n\'inflige pas de dégâts.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du niveau 4.</p>',
    link: '/grimoire/mur-de-feu',
    title: 'Mur de feu',
    level: '4',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un éclat de phosphore)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Mur de force',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (une pincée de poudre de gemme translucide)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un mur de force invisible se matérialise soudain en un point de votre choix situé à portée. Il s\'oriente comme bon vous semble, comme une barrière horizontale, verticale ou inclinée. Il peut flotter librement ou reposer sur une surface solide. Vous pouvez lui donner une forme de dôme hémisphérique ou de sphère d\'un rayon maximal de 3 mètres ou en faire une surface plane composée de dix panneaux de 3 mètres sur 3. Chaque panneau doit être contigu à un autre. Quelle que soit sa forme, le mur fait 0,5 centimètre d\'épaisseur et persiste pendant toute la durée du sort. Si le mur passe par l\'emplacement d\'une créature lorsqu\'il apparaît, il l\'expulse d\'un côté ou de l\'autre (à vous de choisir).</p>\n<p>Aucun élément ne peut franchir physiquement le mur, qui est immunisé contre tous les dégâts et résiste à toute dissipation de la magie. En revanche, on peut le détruire instantanément avec une <em>désintégration</em>. Le mur s\'étend également sur le plan éthéré, ce qui empêche de le franchir sous forme éthérée.</p>',
    link: '/grimoire/mur-de-force',
    title: 'Mur de force',
    level: '5',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (une pincée de poudre de gemme translucide)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Mur de glace',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un éclat de quartz)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un mur de glace sur une surface solide à portée. Vous pouvez lui donner une forme de dôme hémisphérique ou de sphère d\'un rayon maximal de 3 mètres ou en faire une surface plane composée de dix panneaux de 3 mètres d\'arête. Chaque panneau doit être contigu à un autre. Quelle que soit sa forme, le mur fait 30 centimètres d\'épaisseur et persiste pendant toute la durée du sort. Si le mur passe par l\'emplacement d\'une créature lorsqu\'il apparaît, il l\'expulse d\'un côté ou de l\'autre et elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle échoue, elle subit 10d6 dégâts de froid, la moitié seulement si elle réussit.</p>\n<p>Le mur est un objet que l\'on peut endommager, et on peut donc y ouvrir des brèches. Il a une CA de 12 et 30 points de vie par section de 3 mètres de côté. Il est vulnérable aux dégâts de feu. Si une section de 3 mètres de côté tombe à 0 point de vie, elle est détruite et laisse juste une zone d\'air glacé à l\'emplacement où se trouvait le pan de mur. Quand une créature se déplace dans cette zone frigorifique pour la première fois de son tour, elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Si elle échoue, elle subit 5d6 dégâts de froid, la moitié seulement si elle réussit.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, les dégâts que le mur inflige en apparaissant augmentent de 2d6 et les dégâts provoqués par un passage dans la zone d\'air glacé augmentent de 1d6 par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/mur-de-glace',
    title: 'Mur de glace',
    level: '6',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un éclat de quartz)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Mur de pierre',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un petit bloc de granite)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un mur de pierre non magique qui se matérialise en un point de votre choix à portée. Il fait 15 centimètres d\'épaisseur et se compose de dix panneaux de 3 mètres sur 3. Chaque panneau doit être contigu à un autre. Sinon, vous pouvez opter pour des panneaux de 3 mètres sur 6 de seulement 7,5 centimètres d\'épaisseur.</p>\n<p>Si le mur passe par l\'emplacement d\'une créature lorsqu\'il apparaît, il l\'expulse d\'un côté ou de l\'autre (à vous de choisir). Si une créature est placée de telle manière qu\'elle devrait se retrouver entourée de toutes parts par le mur (ou par le mur et une autre surface solide), elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle le réussit, elle peut utiliser sa réaction pour se déplacer à sa vitesse au maximum afin de ne plus être encerclée par le mur.</p>\n<p>Le mur peut prendre la forme que vous désirez, mais il ne peut pas occuper le même emplacement qu\'une créature ou un objet. Il n\'est pas forcément vertical et n\'a pas besoin de reposer sur des fondations solides. En revanche, il doit impérativement fusionner avec de la pierre existante lui servant de soutien solide. Vous pouvez donc utiliser ce sort pour jeter un pont au-dessus d\'un fossé ou créer une rampe.</p>\n<p>Si vous créez une longueur de plus de 6 mètres, vous devez réduire de moitié la taille de chaque panneau pour créer des supports. Vous pouvez façonner la silhouette générale du mur pour le doter de créneaux, de remparts et autres.</p>\n<p>Le mur est un objet de pierre que l\'on peut endommager et on peut donc y ouvrir des brèches. Chaque panneau a une CA de 15 et 30 points de vie par section de 2,5 centimètres d\'épaisseur. Si un panneau tombe à 0 point de vie, il est détruit, ce qui peut entraîner l\'effondrement des panneaux adjacents, au choix du MJ.</p>\n<p>Si vous restez concentré sur le sort pendant toute sa durée, le mur devient une structure permanente et ne peut plus être dissipé, sinon il disparaît à la fin du sort.</p>',
    link: '/grimoire/mur-de-pierre',
    title: 'Mur de pierre',
    level: '5',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un petit bloc de granite)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Mur de vent',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (un petit éventail et une plume exotique)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un mur de vent fort se lève soudain depuis le sol en un point de votre choix à portée. Vous pouvez lui faire couvrir jusqu\'à 15 mètres de long, 4,50 mètres de haut et 30 centimètres d\'épaisseur. Vous pouvez lui donner la forme que vous voulez tant qu\'il dessine un chemin continu au sol. Ce mur persiste pendant toute la durée du sort.</p>\n<p>Quand le mur apparaît, chaque créature située dans sa zone doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force. Les créatures qui échouent subissent 3d8 dégâts contondants, les autres la moitié seulement.</p>\n<p>Le vent fort maintient la brume, la fumée et les autres gaz à l\'écart. Les créatures et objets volants de taille P ou inférieure ne peuvent pas traverser le mur. Les matériaux libres et légers s\'envolent si on les apporte dans le mur. Les flèches, les carreaux et autres projectiles ordinaires visant une cible située derrière le mur sont systématiquement détournés vers le haut et ratent automatiquement leur cible. (Ce phénomène n\'affecte pas les rochers que lancent les géants ou les engins de siège, ni les projectiles similaires.) Les créatures sous forme gazeuse ne peuvent pas franchir le mur.</p>',
    link: '/grimoire/mur-de-vent',
    title: 'Mur de vent',
    level: '3',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (un petit éventail et une plume exotique)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Mur prismatique',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: '10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un plan de lumière scintillante multicolore forme un mur opaque vertical centré sur un point situé à portée et dans votre champ de vision. Ce mur fait au maximum 27 mètres de long, 9 mètres de haut et 2,5 centimètres d\'épaisseur. Sinon, vous pouvez façonner le mur de manière à ce qu\'il forme une sphère d\'au maximum 9 mètres de diamètre centrée sur un point de votre choix situé à portée. Le mur reste en place pendant toute la durée du sort. Si vous positionnez le mur de manière à ce qu\'il passe par un emplacement occupé par une créature, le sort échoue : votre action et l\'emplacement du sort sont gaspillés.</p>\n<p>Le mur émet une lumière vive dans un rayon de 30  mètres et une lumière faible dans un rayon de 30 mètres de plus. Vous et les créatures que vous désignez au moment de l\'incantation pouvez traverser le mur et rester à côté sans conséquence. Si une créature qui voit le mur s\'en approche à 6 mètres ou moins, ou qu\'elle démarre son tour dans ce périmètre, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou être <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> pendant 1 minute.</p>\n<p>Le mur se compose de sept couches, chacune d\'une couleur différente. Quand une créature tente de franchir le mur ou d\'y enfoncer la main, elle avance d\'une couche à la fois, jusqu\'à les franchir toutes. À chaque fois qu\'elle traverse ou touche une couche, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité, sans quoi elle est affectée par les propriétés de la couche indiquées plus bas.</p>\n<p>On peut détruire le mur, également couche par couche, du rouge au violet, en appliquant une méthode spécifique à chaque couche. Une fois une couche détruite, elle ne se répare pas jusqu\'à la fin du sort. Un sceptre d\'annulation détruit un <em>mur prismatique</em>, mais un <em>champ d\'antimagie</em> en est incapable.</p>\n<p><strong>1. Rouge</strong>. La cible subit 10d6 dégâts de feu si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit. Tant que cette couche est en place, les attaques à distance non magiques ne peuvent pas traverser le mur. On peut la détruire en lui infligeant 25 dégâts de froid.</p>\n<p><strong>2. Orange</strong>. La cible subit 10d6 dégâts d\'acide si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit. Tant que cette couche est en place, les attaques à distance magiques ne peuvent pas traverser le mur. On peut détruire cette couche avec un vent fort.</p>\n<p><strong>3. Jaune</strong>. La cible subit 10d6 dégâts de foudre si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit. On peut détruire cette couche en lui infligeant au moins 60 dégâts de force.</p>\n<p><strong>4. Vert</strong>. La cible subit 10d6 dégâts de poison si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit. On peut détruire cette couche grâce à un sort de <em>passe-muraille</em> ou un autre sort d\'un niveau égal ou supérieur capable d\'ouvrir un portail dans une surface solide.</p>\n<p><strong>5. Bleu</strong>. La cible subit 10d6 dégâts de froid si elle rate son jet de sauvegarde, la moitié seulement si elle le réussit. On peut détruire cette couche en lui infligeant 25 dégâts de feu.</p>\n<p><strong>6. Indigo</strong>. Si la cible rate son jet de sauvegarde, elle est <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> et doit alors faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution à la fin de chacun de ses tours. Si elle en réussit trois, cet effet se termine  ; si elle en rate trois, elle se change définitivement en pierre et elle est <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifiée</em></a>. Les succès et les échecs n\'ont pas à être consécutifs : tenez le compte dans chaque catégorie jusqu\'à ce que l\'une d\'elles arrive à trois.</p>\n<p>Tant que cette couche est en place, il est impossible de lancer un sort à travers le mur. On peut détruire la couche grâce à la vive lumière d\'un sort de <em>lumière du jour</em> ou d\'un sort similaire de niveau égal ou supérieur.</p>\n<p><strong>7. Violet</strong>. La cible est <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> si elle rate son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>. Elle doit alors faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse au début de votre prochain tour. Si elle le réussit, elle recouvre la vue, si elle le rate, elle est emportée sur un autre plan d\'existence choisi par le MJ et recouvre aussi la vue. (En général, une créature qui ne se trouve pas sur son propre plan d\'existence est bannie là-bas, tandis que les autres créatures sont envoyées sur le plan astral ou éthéré.) On peut détruire cette couche avec une <em>dissipation de la magie</em> ou un sort similaire de niveau identique ou supérieur, capable de mettre un terme à un sort ou à un effet magique.</p>',
    link: '/grimoire/mur-prismatique',
    title: 'Mur prismatique',
    level: '9',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: '10 minutes'
  },
  {
    header: {
      title: 'Nappe de brouillard',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une sphère de brouillard de 6 mètres de rayon centrée sur un point à portée. La sphère s\'étend en contournant les angles et, dans la zone qu\'elle occupe, la visibilité est nulle. Le brouillard persiste pendant toute la durée du sort ou jusqu\'à ce qu\'un vent modéré ou plus violent (soufflant au moins à 15 kilomètres par heure) le disperse.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, le rayon de la sphère augmente de 6 mètres par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/nappe-de-brouillard',
    title: 'Nappe de brouillard',
    level: '1',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Nimbe de bienfaisance',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un nimbe blanc et scintillant d\'énergie sacrée vous entoure pour la durée du sort. Au moment de l\'incantation, les créatures vivantes situées à 3 mètres ou moins de vous récupèrent autant de points de vie que leur bonus de maîtrise, sans dépasser leur maximum. De plus, toutes bénéficient d\'une résistance aux dégâts nécrotiques pour toute la durée du sort. Les morts-vivants présents dans cette zone au début de leur tour subissent 1d6 points de dégâts radiants.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sorts de niveau 5 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 4.</p>',
    link: '/grimoire/nimbe-de-bienfaisance',
    title: 'Nimbe de bienfaisance',
    level: '4',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Non-détection',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une pincée de poussière de diamant d\'une valeur de 25 po, que le sort consume une fois saupoudrée sur la cible)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Magicien',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pour toute la durée du sort, vous dissimulez la cible que vous touchez aux yeux de la magie de divination. Vous pouvez prendre pour cible une créature consentante, un endroit ou un objet ne mesurant pas plus de 3 mètres dans chaque dimension. La magie de divination ne peut plus viser votre cible et les organes de scrutation magiques ne la perçoivent plus.</p>',
    link: '/grimoire/non-detection',
    title: 'Non-détection',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une pincée de poussière de diamant d\'une valeur de 25 po, que le sort consume une fois saupoudrée sur la cible)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Nuage incendiaire',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un nuage de fumée ondoyant constellé de braises rougeoyantes apparaît sous la forme d\'une sphère de 6  mètres de rayon centrée sur un point à portée. Le nuage se répand en contournant les angles si nécessaire et la visibilité est nulle à l\'intérieur. Le nuage persiste pendant toute la durée du sort ou jusqu\'à ce qu\'un vent fort ou modéré (au moins 15 km/h) le disperse.</p>\n<p>Quand le nuage apparaît, chaque créature se trouvant à l\'intérieur doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 10d8 dégâts de feu, les autres la moitié seulement. Une créature doit aussi effectuer ce jet quand elle entre dans la zone affectée pour la première fois du tour ou lorsqu\'elle y finit son tour.</p>\n<p>Le nuage s\'éloigne de vous sur 3 mètres dans la direction de votre choix au début de chacun de vos tours.</p>',
    link: '/grimoire/nuage-incendiaire',
    title: 'Nuage incendiaire',
    level: '8',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Nuage mortel',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une sphère de 6 mètres de rayon faite d\'un brouillard verdâtre toxique. Il est centré sur un point de votre choix situé à portée. Le brouillard s\'étend en contournant les coins au besoin. Il persiste pendant toute la durée du sort ou jusqu\'à ce qu\'un vent fort le disperse et mette un terme au sort. La visibilité est nulle dans sa zone d\'effet.</p>\n<p>Quand une créature entre dans la zone du sort pour la première fois de son tour ou qu\'elle y débute son tour, elle doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Elle subit 5d8 dégâts de poison si elle rate son jet et seulement la moitié si elle le réussit. Le brouillard affecte même les créatures qui retiennent leur souffle ou qui n\'ont pas besoin de respirer.</p>\n<p>Le brouillard s\'éloigne de vous sur une distance de 3  mètres au début de chacun de vos tours, rampant à la surface du sol. Comme ses vapeurs sont plus lourdes que l\'air, il s\'enfonce dans les replis du terrain et s\'infiltre même dans les ouvertures.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du niveau 5.</p>',
    link: '/grimoire/nuage-mortel',
    title: 'Nuage mortel',
    level: '5',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Nuage puant',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S, M (un œuf pourri ou des feuilles de chou pourri)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une sphère d\'un gaz jaunâtre et nauséabond de 6 mètres de rayon centrée sur un point à portée. Le nuage se répand en contournant les angles et la visibilité est nulle dans toute sa zone. Le nuage persiste dans la zone affectée pendant toute la durée du sort.</p>\n<p>Chaque créature entièrement englobée dans le nuage au début de son tour doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution contre le poison. Celles qui échouent passent toutes leurs actions du tour à vomir. Les créatures qui ne respirent pas et celles qui sont immunisées contre le poison réussissent automatiquement ce jet.</p>\n<p>Un vent modéré (au moins 15 km/h) disperse le nuage après 4 rounds. Un vent fort (au moins 30 km/h) le disperse au bout de seulement 1 round.</p>',
    link: '/grimoire/nuage-puant',
    title: 'Nuage puant',
    level: '3',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S, M (un œuf pourri ou des feuilles de chou pourri)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Nuée de météores',
      spell: {
        casting_time: '1 action',
        range: '1,5 kilomètre',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Des orbes de feu flamboyants s\'abattent au sol en quatre points de votre choix situés à portée et dans votre champ de vision. Chaque créature située dans la sphère de 12 mètres de rayon centrée sur chacun de ces points doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Les sphères s\'étendent en contournant les angles. Une créature qui rate son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> subit 20d6 dégâts de feu et 20d6 dégâts contondants, les autres la moitié seulement. Une créature qui se trouve prise dans deux sphères à la fois ne subit qu\'une seule fois les dégâts des météores.</p>\n<p>Le sort abîme et embrase les objets inflammables de la zone s\'ils ne sont pas portés ou transportés.</p>',
    link: '/grimoire/nuee-de-meteores',
    title: 'Nuée de météores',
    level: '9',
    casting_time: '1 action',
    range: '1,5 kilomètre',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Nuée de projectiles',
      spell: {
        casting_time: '1 action bonus',
        range: 'selon l\'arme utilisée',
        components: 'V, S, M (un projectile)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous utilisez votre action pour lancer une arme ou tirer un projectile et une action bonus pour lancer le sort. Le projectile se dédouble de nombreuses fois et affecte toutes les créatures dans une zone de 6 mètres de rayon autour de votre cible initiale, dans la limite de la portée habituelle de l\'arme utilisée. Faites un seul <a href="/combattre#jets-dattaque">jet d\'attaque</a> à distance, chaque créature dans la zone subit automatiquement les dégâts habituels de l\'arme. Celles dont votre attaque permet d\'atteindre ou de dépasser la CA subissent le double des dégâts. Vous ajoutez normalement votre modificateur de Dextérité aux dégâts et de magie si votre arc ou vos flèches sont magiques. Dans tous les cas, les dégât sont magiques (du type approprié aux projectiles).</p>',
    link: '/grimoire/nuee-de-projectiles',
    title: 'Nuée de projectiles',
    level: '5',
    casting_time: '1 action bonus',
    range: 'selon l\'arme utilisée',
    components: 'V, S, M (un projectile)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Œil magique',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (des poils de chauve-souris)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un œil magique invisible à portée, qui flotte dans les airs pendant toute la durée du sort. Il vous envoie mentalement des informations visuelles grâce à sa vision normale et dans le noir dans un rayon de 9 mètres. Il peut regarder dans toutes les directions.</p>\n<p>Par une action, vous pouvez déplacer l\'œil d\'un maximum de 9 mètres dans la direction de votre choix. Il peut s\'éloigner de vous sur une distance illimitée, mais il ne peut pas entrer dans un autre plan d\'existence. Une barrière solide l\'empêche de passer, mais il peut se glisser à travers une ouverture d\'au minimum 2,5 centimètres de diamètre.</p>',
    link: '/grimoire/oeil-magique',
    title: 'Œil magique',
    level: '4',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (des poils de chauve-souris)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Offrande inéluctable',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une créature vivante à portée et dans votre champ de vision doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse sous peine de se sentir soudainement obligée de vous donner ce qu\'elle tient au moment où vous lancez le sort. Dès son tour, la cible se rapproche aussi près que possible de vous et vous tend l\'objet. Pour toute la durée du sort, la cible fait en sorte de protéger l\'objet qu\'elle doit vous donner et ne peut donc pas s\'en servir pour attaquer ni pour se défendre et subit par ailleurs d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> sur ses jets d\'attaques.</p>\n<p>Le sort prend fin si vous ou vos alliés blessez la cible ou lui lancez un sort néfaste, ou si vous vous trouvez au-delà de la portée du sort.</p>',
    link: '/grimoire/offrande-ineluctable',
    title: 'Offrande inéluctable',
    level: '2',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Ombres imaginaires',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un morceau de charbon)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous désignez une cible à portée et dans votre champ de vision. Vous créez des images fantasmagoriques cauchemardesques dans son esprit. La victime doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> d\'Intelligence. En cas d\'échec, elle perçoit des silhouettes d\'ombres qui l\'assaillent, ce qui lui inflige un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> à toutes ses actions pendant la durée du sort.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 5 ou supérieur, le sort persiste jusqu\'à la fin de sa durée normale sans nécessiter de concentration.</p>',
    link: '/grimoire/ombres-imaginaires',
    title: 'Ombres imaginaires',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un morceau de charbon)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Panacée',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (3 mètres de rayon)',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous libérez une vague d\'énergie purificatrice qui met instantanément fin aux maladies, poisons et états spéciaux suivants qui affectent vos alliés situés dans la zone : <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdi</em></a>, <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglé</em></a>, <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a>, <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonné</em></a>, <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdi</em></a>, <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisé</em></a>, <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifié</em></a> et <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisé</em></a>. Elle annule également les effets de sommeil et les effets du sort <em>esprit faible</em>.</p>',
    link: '/grimoire/panacee',
    title: 'Panacée',
    level: '4',
    casting_time: '1 action',
    range: 'personnelle (3 mètres de rayon)',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Parole divine',
      spell: {
        casting_time: '1 action bonus',
        range: '9 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous prononcez une parole divine, empreinte de la puissance qui a façonné le monde à l\'aube de la création. Choisissez autant de créatures situées à portée et dans votre champ de vision que vous le désirez. Chacune de celles qui vous entendent doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme, ou souffrir d\'un des effets suivants, selon son total actuel de points de vie.</p>\n<ul>\n<li>50 points de vie ou moins : <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdie</em></a> pour 1 minute.</li>\n<li>40 points de vie ou moins : <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> et <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdie</em></a> pour 10 minutes.</li>\n<li>30 points de vie ou moins : <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a>, <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdie</em></a> et <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> pour 1 heure.</li>\n<li>20 points de vie ou moins : morte sur-le-champ.</li>\n</ul>\n<p>Quels que soient ses points de vie, si un céleste, un élémentaire, une fée ou un fiélon rate son jet de sauvegarde, il est immédiatement renvoyé sur son plan natal (s\'il ne s\'y trouve pas déjà). Il ne peut pas revenir sur votre propre plan pendant les 24 heures qui suivent, à moins d\'user d\'un <em>souhait</em>.</p>',
    link: '/grimoire/parole-divine',
    title: 'Parole divine',
    level: '7',
    casting_time: '1 action bonus',
    range: '9 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Pas brumeux',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous êtes brièvement entouré d\'une brume argentée et vous vous téléportez sur un maximum de 9 mètres jusqu\'à un emplacement inoccupé situé dans votre champ de vision.</p>',
    link: '/grimoire/pas-brumeux',
    title: 'Pas brumeux',
    level: '2',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Passage dimensionnel',
      spell: {
        casting_time: '1 action',
        range: '150 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous désignez un point sur une surface à portée dans votre champ de vision et créez une ouverture circulaire de 1,50 mètre de diamètre entourée de runes rayonnantes. Avant la fin du sort, par une action bonus, vous désignez un deuxième point sur une autre surface située à 150 mètres ou moins de la première pour créer une seconde ouverture faisant le lien avec la première et formant un passage extra-dimensionnelle bidirectionnel. Les surfaces ne doivent pas forcément avoir la même inclinaison mais doivent être planes et solides (ex: sol, mur ou plafond) et ne pas comporter de métal.</p>\n<p>Toute créature ou objet solide entrant par une ouverture ressort instantanément par l\'autre, perpendiculairement à l\'ouverture et en conservant sa vitesse. Il est ainsi possible de lancer un objet ou de tirer un projectile par l\'ouverture, de ramasser un objet de l\'autre côté, de laisser tomber un objet lourd par une ouverture dans le sol pour qu\'il retombe de l\'autre côté, de sauter au travers pour accéder de l\'autre côté sur un passage en hauteur, etc.</p>\n<p>Les ouvertures ne laissent pas passer les matières liquides ou gazeuses sauf si elles sont contenues (des flots d\'eau ou de lave ne peuvent pas passer au travers, mais une bouteille, une fiole ou un seau d\'eau oui). Les sorts et les énergies ne peuvent pas franchir le passage, toutefois la lumière non magique passe au travers ce qui permet de voir de l\'autre côté. Si la surface désignée ne peut accueillir l\'ouverture, le sort est perdu ou s\'arrête. Chacune des ouvertures n\'a pas d\'épaisseur et n\'a qu\'une seule face correspondant avec l\'autre.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 7 ou supérieur, le diamètre de l\'ouverture augmente de 1,50 mètre par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/passage-dimensionnel',
    title: 'Passage dimensionnel',
    level: '6',
    casting_time: '1 action',
    range: '150 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Passage par les arbres',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous êtes soudain capable d\'entrer dans un arbre et de passer de son sein à celui d\'un autre arbre de la même espèce situé dans un rayon de 150 mètres. Ces deux arbres doivent être vivants et au moins de la même taille que vous. Vous devez dépenser 1,50 mètre de déplacement pour entrer dans un arbre. Vous apprenez alors instantanément où se trouvent tous les autres arbres de la même espèce dans un rayon de 150 mètres et vous pouvez gagner l\'un d\'eux ou ressortir par l\'arbre dans lequel vous êtes entré, ce mouvement faisant partie de votre déplacement de 1,50 mètre. Vous apparaissez à l\'endroit de votre choix dans un rayon de 1,50 mètre autour de l\'arbre dans lequel vous êtes arrivé en dépensant de nouveau 1,50 mètre de déplacement. S\'il ne vous reste pas de distance de déplacement à dépenser, vous apparaissez dans un rayon de 1,50 mètre autour de l\'arbre par lequel vous êtes entré.</p>\n<p>Vous pouvez utiliser cette capacité de transport une fois par round pendant toute la durée du sort. Vous devez terminer chaque tour en dehors d\'un arbre.</p>',
    link: '/grimoire/passage-par-les-arbres',
    title: 'Passage par les arbres',
    level: '5',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Passage sans trace',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (cendres d\'une feuille de gui et une brindille d\'épicéa)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une aura d\'ombre et de silence émane de vous et enveloppe vos compagnons, vous dissimulant aux sens d\'autrui. Pendant toute la durée du sort, chaque créature que vous choisissez et qui se trouve dans un rayon de 9 mètres (vous y compris) bénéficie d\'un bonus de +10 aux tests de Dextérité (Discrétion) et il devient impossible de suivre sa piste à moins de recourir à des méthodes magiques. Une créature qui profite de ce bonus ne laisse derrière elle aucune trace ni aucun autre indice de son passage.</p>',
    link: '/grimoire/passage-sans-trace',
    title: 'Passage sans trace',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (cendres d\'une feuille de gui et une brindille d\'épicéa)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Passe-muraille',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (une pincée de graines de sésame)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un passage apparaît en un point de votre choix situé à portée et dans votre champ de vision sur une surface de bois, de plâtre ou de pierre (comme un mur, un sol ou un plafond). Il persiste pendant toute la durée du sort. À vous de décider des dimensions de l\'ouverture qui peut faire, au maximum, 1,50 mètre de large pour 2,50 mètres de haut et 6 mètres de profondeur. L\'apparition du passage ne crée aucune faiblesse dans la structure qui l\'entoure.</p>\n<p>Quand l\'ouverture disparaît, les créatures et les objets qui s\'y trouvaient encore sont expulsés en toute sécurité dans l\'emplacement inoccupé le plus proche de la surface sur laquelle vous avez lancé le sort.</p>',
    link: '/grimoire/passe-muraille',
    title: 'Passe-muraille',
    level: '5',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (une pincée de graines de sésame)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Pattes d\'araignée',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une goutte de bitume et une araignée)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Jusqu\'à la fin du sort, une créature consentante que vous touchez devient capable de se déplacer sur les surfaces verticales, et même au plafond la tête en bas, tout en gardant les mains libres. La cible bénéficie aussi d\'une vitesse d\'escalade égale à sa vitesse de marche.</p>',
    link: '/grimoire/pattes-daraignee',
    title: 'Pattes d\'araignée',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une goutte de bitume et une araignée)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Peau d\'écorce',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une poignée d\'écorce de chêne)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante. Pendant toute la durée du sort, sa peau prend la consistance et l\'apparence de l\'écorce, et sa CA ne peut pas descendre au-dessous de 16, quelle que soit l\'armure qu\'elle porte.</p>',
    link: '/grimoire/peau-decorce',
    title: 'Peau d\'écorce',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une poignée d\'écorce de chêne)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Peau de pierre',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (poussière de diamant d\'une valeur de 100 po, que le sort consume)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort modifie la chair d\'une créature consentante pour la rendre aussi dure que de la pierre. Jusqu\'à la fin du sort, la cible est résistante aux dégâts non magiques contondants, perforants et tranchants.</p>',
    link: '/grimoire/peau-de-pierre',
    title: 'Peau de pierre',
    level: '4',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (poussière de diamant d\'une valeur de 100 po, que le sort consume)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Petite hutte',
      spell: {
        casting_time: '1 minute',
        range: 'personnelle (hémisphère de 3 mètres de rayon)',
        components: 'V, S, M (une petite perle de cristal)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un dôme de force immobile, de 3 mètres de rayon, apparaît soudain autour et au-dessus de vous. Il reste stationnaire pendant toute la durée du sort. Ce dernier se termine si vous quittez sa zone.</p>\n<p>Le dôme peut abriter un maximum de neuf créatures de taille M ou inférieure, en plus de vous. Le sort échoue si la zone comprend une créature de taille supérieure ou plus de dix créatures. Les créatures et les objets qui se trouvent à l\'intérieur du dôme lors de l\'incantation peuvent en sortir et y rentrer librement ; en revanche, les autres créatures sont incapables de franchir ses limites. Les sorts et autres effets magiques ne peuvent pas s\'étendre au-delà de la limite du dôme ni être lancés à travers. L\'atmosphère au sein du dôme est agréable et sèche, quelles que soient les conditions météorologiques à l\'extérieur.</p>\n<p>Tant que le sort n\'est pas terminé, vous pouvez faire en sorte que l\'intérieur du dôme soit faiblement éclairé ou plongé dans le noir. Vu de l\'extérieur, le dôme est opaque, de la couleur que vous désirez, mais vu de l\'intérieur, il est transparent.</p>',
    link: '/grimoire/petite-hutte',
    title: 'Petite hutte',
    level: '3',
    casting_time: '1 minute',
    range: 'personnelle (hémisphère de 3 mètres de rayon)',
    components: 'V, S, M (une petite perle de cristal)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Pétrification',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (une pincée de chaux, de l\'eau et de la terre)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tentez de changer en pierre une créature située à portée et dans votre champ de vision. Si le corps de la cible est fait de chair, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou se retrouver <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a>, car sa chair se met à durcir.</p>\n<p>Une créature <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par ce sort doit effectuer un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution à la fin de chacun de ses tours. Si elle en réussit trois, le sort se termine. Si elle en rate trois, elle se change en pierre et se retrouve <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifiée</em></a> pendant toute la durée du sort. Il est inutile que les succès et les échecs soient consécutifs, notez juste leur nombre jusqu\'à ce que la cible arrive à en accumuler trois d\'une sorte ou de l\'autre.</p>\n<p>Si quelqu\'un brise le corps physique de la cible alors qu\'elle est <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifiée</em></a>, les difformités subies sont conservées par sa forme d\'origine quand elle la retrouve.</p>\n<p>Si vous maintenez votre concentration sur ce sort jusqu\'à la fin de la durée maximale, la cible est définitivement changée en pierre jusqu\'à ce que quelqu\'un dissipe l\'effet.</p>',
    link: '/grimoire/petrification',
    title: 'Pétrification',
    level: '6',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (une pincée de chaux, de l\'eau et de la terre)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Peur',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (cône de 9 mètres)',
        components: 'V, S, M (une plume blanche ou un cœur de poule)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous projetez une image fantasmagorique des pires terreurs d\'une créature. Chaque créature située dans un cône de 9 mètres doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou lâcher tout ce qu\'elle tient en main et être <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> pendant toute la durée du sort.</p>\n<p>Tant qu\'une créature est <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> par ce sort, elle est obligée d\'utiliser l\'action se précipiter à chacun de ses tours et de s\'éloigner de vous par l\'itinéraire le plus sûr, à moins qu\'elle n\'ait nulle part où aller. Si elle termine son tour en un endroit où vous ne figurez plus dans son champ de vision, elle peut faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle le réussit, le sort se termine pour elle.</p>',
    link: '/grimoire/peur',
    title: 'Peur',
    level: '3',
    casting_time: '1 action',
    range: 'personnelle (cône de 9 mètres)',
    components: 'V, S, M (une plume blanche ou un cœur de poule)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Pluie de projectiles',
      spell: {
        casting_time: '1 action bonus',
        range: 'selon l\'arme utilisée',
        components: 'V, S, M (un projectile)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous utilisez votre action pour lancer une arme ou tirer un projectile et une action bonus pour lancer le sort. Le projectile se dédouble de nombreuses fois et affecte toutes les créatures dans une zone de 3 mètres de rayon autour de votre cible initiale, dans la limite de la portée habituelle de l\'arme utilisée. Faites un seul test d\'attaque à distance, chaque créature dans la zone subit les dégâts habituels de votre attaque, la moitié seulement si le résultat du test d\'attaque n\'a pas atteint la CA de la créature. Vous ajoutez normalement votre modificateur de Dextérité aux dégâts et de magie si votre arc ou vos flèches sont magiques. Dans tous les cas, les dégâts sont magiques (du type approprié aux projectiles).</p>',
    link: '/grimoire/pluie-de-projectiles',
    title: 'Pluie de projectiles',
    level: '3',
    casting_time: '1 action bonus',
    range: 'selon l\'arme utilisée',
    components: 'V, S, M (un projectile)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Poigne électrique',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La foudre jaillit de votre main et bondit sur la créature que vous tentez de toucher. Faites une attaque de sort au corps-à-corps contre la cible. Vous bénéficiez d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors du <a href="/combattre#jets-dattaque">jet d\'attaque</a> si votre cible porte une armure métallique. Si vous touchez la cible, elle subit 1d8 dégâts de foudre et ne peut pas effectuer de réaction avant le début de son prochain tour.</p>\n<p>Les dégâts du sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), 11 (3d8) et 17 (4d8).</p>',
    link: '/grimoire/poigne-electrique',
    title: 'Poigne électrique',
    level: '0',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Poison naturel',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une arme de votre choix exsude une substance poisseuse et venimeuse. À la première attaque que vous réussissez avec cette arme, la victime doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou subir 2d6 dégât de poison et être <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonnée</em></a>. En cas de succès, elle subit seulement la moitié des dégâts et elle n\'est pas <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonnée</em></a>.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/poison-naturel',
    title: 'Poison naturel',
    level: '1',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Portail',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un diamant d\'une valeur minimale de 5000 po)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez un portail reliant un espace inoccupé, situé à portée et dans votre champ de vision, à un autre plan d\'existence. Ce portail se présente sous la forme d\'une ouverture circulaire de 1,50 à 6 mètres de diamètre, à votre guise. Vous pouvez orienter le portail dans la direction de votre choix et il persiste pendant toute la durée du sort.</p>\n<p>Le portail a une face avant et une face arrière sur chaque plan où il apparaît. Pour voyager grâce au portail, il faut impérativement le franchir en passant par l\'avant. Tout ce qui le traverse ainsi apparaît instantanément sur l\'autre plan, dans l\'espace inoccupé le plus proche du portail.</p>\n<p>Les divinités et autres dirigeants planaires peuvent empêcher un portail né de ce sort de s\'ouvrir en leur présence ou en n\'importe quel point de leur domaine.</p>\n<p>Quand vous lancez ce sort, vous pouvez prononcer le nom d\'une créature spécifique (sachant que les pseudonymes, les titres et les surnoms ne fonctionnent pas). Si cette créature se trouve sur un autre plan que celui sur lequel vous vous trouvez, le portail s\'ouvre dans ses environs immédiats et attire la créature en son sein. Elle réapparaît de votre côté du portail, dans l\'espace inoccupé le plus proche. Cela ne vous donne aucun contrôle sur la créature, qui agit librement, comme le MJ le désire. Elle peut s\'en aller, vous attaquer ou vous aider.</p>',
    link: '/grimoire/portail',
    title: 'Portail',
    level: '9',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un diamant d\'une valeur minimale de 5000 po)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Porte dimensionnelle',
      spell: {
        casting_time: '1 action',
        range: '150 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous vous téléportez depuis votre position actuelle vers n\'importe quel emplacement désiré situé à portée. Vous arrivez exactement à l\'endroit voulu. Ce peut être un endroit que vous voyez, que vous visualisez ou que vous pouvez décrire en donnant sa distance et sa direction, par exemple « <em>60 mètres plus bas en ligne droite</em> » ou « <em>en montant au nord-ouest à un angle de 45 degrés sur 90 mètres</em> ».</p>\n<p>Vous pouvez amener des objets avec vous, tant que leur poids ne dépasse pas la charge que vous êtes capable de porter. Vous pouvez également emmener avec vous une créature consentante de votre taille ou d\'une taille inférieure, qui peut transporter du matériel dans la limite de ses capacités. Elle doit se trouver dans un rayon de 1,50 mètre autour de vous quand vous lancez le sort.</p>\n<p>Si vous deviez arriver dans un emplacement déjà occupé par un objet ou une créature, vous et la créature qui voyage avec vous subissez chacun 4d6 dégâts de force tandis que le sort s\'avère incapable de vous téléporter.</p>',
    link: '/grimoire/porte-dimensionnelle',
    title: 'Porte dimensionnelle',
    level: '4',
    casting_time: '1 action',
    range: '150 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Porte-bonheur',
      spell: {
        casting_time: '1 action',
        range: 'personnel',
        components: 'V, S, M (objet porte-bonheur)',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous agrippez votre objet porte-bonheur (gri-gri, talisman, amulette, etc.) et, jusqu\'à la fin de votre prochain tour, vous bénéficiez d\'une résistance aux dégâts élémentaires (acide, feu, froid, foudre).</p>',
    link: '/grimoire/porte-bonheur',
    title: 'Porte-bonheur',
    level: '0',
    casting_time: '1 action',
    range: 'personnel',
    components: 'V, S, M (objet porte-bonheur)',
    duration: '1 round'
  },
  {
    header: {
      title: 'Possession',
      spell: {
        casting_time: '1 minute',
        range: 'personnelle',
        components: 'V, S, M (une gemme, un cristal, un reliquaire ou un autre réceptacle ornemental d\'une valeur minimale de 500 po)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Votre corps tombe en catatonie tandis que votre âme le quitte et pénètre dans le réceptacle utilisé comme composante de sort. Tant qu\'elle se trouve là, vous percevez votre environnement comme si votre corps occupait le même espace que le réceptacle. En revanche, vous ne pouvez pas bouger ni utiliser de réaction. Vous ne pouvez accomplir qu\'une action : projeter votre âme dans un rayon de 30 mètres au maximum autour du réceptacle, soit pour retourner dans votre corps (ce qui met fin au sort), soit pour prendre possession d\'un autre corps humanoïde.</p>\n<p>Vous pouvez tenter de prendre possession de n\'importe quel humanoïde situé dans votre champ de vision et dans un rayon de 30 mètres (sachant que les créatures protégées par une <em>protection contre le mal et le bien</em> ou par un <em>cercle magique</em> sont immunisées contre la possession). La cible doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme. Si elle échoue, votre âme s\'installe dans son corps et la sienne est prisonnière du réceptacle. Si elle réussit son test, elle résiste à votre tentative de possession et vous ne pouvez plus essayer de la posséder pendant 24 heures.</p>\n<p>Une fois que vous avez pris possession du corps d\'une autre créature, vous le contrôlez totalement. Votre profil technique est remplacé par celui de cette créature, bien que vous conserviez votre alignement et vos valeurs d\'Intelligence, de Sagesse et de Charisme. Vous conservez aussi vos aptitudes de classe. Si votre cible possède des niveaux de classe, vous n\'avez pas accès aux aptitudes correspondantes.</p>\n<p>Pendant ce temps, l\'âme de la créature possédée perçoit ce qui se passe autour du réceptacle grâce à ses propres sens, mais elle ne peut pas se déplacer ni effectuer la moindre action.</p>\n<p>Tant que vous possédez le corps d\'autrui, vous pouvez utiliser votre action pour le quitter et regagner le réceptacle s\'il se trouve à 30 mètres de vous ou moins. L\'âme de votre hôte retourne alors dans son propre corps. Si le corps de l\'hôte périt alors que vous l\'occupez, l\'hôte meurt et vous devez faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme contre votre propre DD d\'incantation. Si vous réussissez, vous regagnez le réceptacle, à condition qu\'il se trouve dans un rayon de 30 mètres. Sinon, vous mourez.</p>\n<p>Si le réceptacle est détruit ou que le sort se termine, votre âme regagne immédiatement votre corps, à moins qu\'il ne se trouve à plus de 30 mètres d\'elle ou qu\'il ait succombé, auquel cas vous périssez. Si l\'âme d\'une autre créature occupe le réceptacle au moment où il est détruit, cette âme retourne immédiatement dans son corps, à condition qu\'il se trouve dans un rayon de 30 mètres et soit encore en vie. Sinon, elle meurt.</p>\n<p>Le réceptacle est détruit quand le sort se termine.</p>',
    link: '/grimoire/possession',
    title: 'Possession',
    level: '6',
    casting_time: '1 minute',
    range: 'personnelle',
    components: 'V, S, M (une gemme, un cristal, un reliquaire ou un autre réceptacle ornemental d\'une valeur minimale de 500 po)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Prémonition',
      spell: {
        casting_time: '1 minute',
        range: 'contact',
        components: 'V, S, M (une plume d\'oiseau chanteur)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante et lui conférez une aptitude limitée à voir dans le futur immédiat. Pendant toute la durée du sort, elle ne peut pas être <a href="/gerer-la-sante-du-personnage#surpris"><em>surprise</em></a> et elle a l\'<a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> sur les jets d\'attaque, les tests de caractéristique et les jets de sauvegarde. De plus, les autres créatures sont affectées par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de leurs jets d\'attaque contre elle pendant toute la durée du sort.</p>\n<p>Le sort se termine immédiatement si vous le lancez de nouveau avant la fin de sa durée.</p>',
    link: '/grimoire/premonition',
    title: 'Prémonition',
    level: '9',
    casting_time: '1 minute',
    range: 'contact',
    components: 'V, S, M (une plume d\'oiseau chanteur)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Prestidigitation',
      spell: {
        casting_time: '1 action',
        range: '3 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort est un tour de magie basique que les novices utilisent pour s\'entraîner. Vous l\'utilisez pour créer à portée l\'un des effets magiques suivants :</p>\n<ul>\n<li>Vous créez un effet sensoriel immédiat et inoffensif, comme une pluie d\'étincelles, un coup de vent, de faibles notes de musique ou une odeur étrange.</li>\n<li>Vous allumez ou éteignez instantanément une chandelle, une torche ou un petit feu de camp.</li>\n<li>Vous nettoyez ou salissez instantanément un objet ne faisant pas plus de 30 décimètres cubes.</li>\n<li>Vous refroidissez, réchauffez ou aromatisez jusqu\'à 30 décimètres cubes de matière non vivante pendant 1 heure.</li>\n<li>Vous faites apparaître une couleur, une petite marque ou un symbole sur un objet ou une surface pendant 1 heure.</li>\n<li>Vous créez un colifichet non magique ou une image illusoire tenant dans votre main, qui persiste jusqu\'à la fin de votre prochain tour.</li>\n</ul>\n<p>Si vous lancez le sort à plusieurs reprises, vous ne pouvez pas avoir plus de trois effets non instantanés actifs à la fois. Vous pouvez révoquer un tel effet par une action.</p>',
    link: '/grimoire/prestidigitation',
    title: 'Prestidigitation',
    level: '0',
    casting_time: '1 action',
    range: '3 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Prière de soins',
      spell: {
        casting_time: '10 minutes',
        range: '9 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un maximum de six créatures de votre choix, situées à portée et dans votre champ de vision, récupèrent chacune un nombre de points de vie égal à 2d8 + votre modificateur de caractéristique d\'incantation. Ce sort n\'a aucun effet sur les morts-vivants et les créatures artificielles.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les soins augmentent de 1d8 par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/priere-de-soins',
    title: 'Prière de soins',
    level: '2',
    casting_time: '10 minutes',
    range: '9 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Produire une flamme',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S',
        duration: '10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une flamme vacillante apparaît dans votre main. Elle y reste pendant toute la durée du sort et ne vous blesse pas, pas plus qu\'elle n\'endommage votre équipement. La flamme émet une lumière vive dans un rayon de 3 mètres et une lumière faible dans un rayon additionnel de 3 mètres. Le sort se termine si vous le révoquez par une action ou si vous le lancez de nouveau.</p>\n<p>Vous pouvez attaquer avec la flamme, mais cela met fin au sort. Pour cela, quand vous lancez le sort, ou par une action lors d\'un tour ultérieur, vous lancez la flamme sur une créature située dans un rayon de 9 mètres. Faites une attaque de sort à distance. Si vous touchez, la cible subit 1d8 dégâts de feu.</p>\n<p>Les dégâts de ce sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8), le niveau 11 (3d8) et le niveau 17 (4d8).</p>',
    link: '/grimoire/produire-une-flamme',
    title: 'Produire une flamme',
    level: '0',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S',
    duration: '10 minutes'
  },
  {
    header: {
      title: 'Projectile magique',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez trois fléchettes faites d\'énergie magique brillante. Chacune touche une créature de votre choix, située à portée et dans votre champ de vision. Une fléchette inflige 1d4+1 dégâts de force à la cible. Toutes les fléchettes frappent leur cible en même temps, sachant que vous pouvez toutes les diriger contre une seule et même créature ou les répartir entre plusieurs.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, le sort crée une fléchette de plus par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/projectile-magique',
    title: 'Projectile magique',
    level: '1',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Projectile toxique',
      spell: {
        casting_time: '1 action bonus',
        range: 'selon l\'arme utilisée',
        components: 'V, S, M (un projectile)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous utilisez votre action pour lancer une arme ou tirer un projectile et une action bonus pour lancer le sort. À son impact, le projectile explose en un nuage toxique de 3 mètres de diamètre, centré sur votre cible. Si vous touchez votre cible, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou subir 4d6 dégâts de poison (en remplacement des dégâts habituels) et être <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonnée</em></a> pendant 1 minute. En cas de réussite, elle divise les dégâts par deux et n\'est pas <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonnée</em></a>. Toutes les créatures dans la zone d\'effet, y compris la cible initiale si vous l\'avez manquée, subissent 2d6 dégâts de poison (la moitié si la sauvegarde est réussie) et, en cas de <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> raté, elles sont <em>empoisonnées</em> pendant seulement 1 round.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 4 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/projectile-toxique',
    title: 'Projectile toxique',
    level: '3',
    casting_time: '1 action bonus',
    range: 'selon l\'arme utilisée',
    components: 'V, S, M (un projectile)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Projection astrale',
      spell: {
        casting_time: '1 heure',
        range: '3 mètres',
        components: 'V, S, M (un zircon jaune d\'une valeur minimale de 1000  po et un lingot d\'argent gravé d\'une valeur minimale de 100 po par créature ; le sort consomme ces composantes)',
        duration: 'spéciale'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Clerc',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous et un maximum de huit créatures consentantes à portée projetez vos corps astraux sur le plan astral (si vous vous trouvez déjà sur ce plan, le sort échoue et l\'incantation est gâchée). Les corps physiques que vous laissez derrière vous sont <em>inconscients</em>, en état d\'animation suspendue. Ils n\'ont pas besoin de nourriture ni d\'air et ne vieillissent pas.</p>\n<p>Votre corps astral ressemble fort à votre corps physique, jusqu\'à reproduire son profil technique et dupliquer ses possessions. La principale différence, c\'est le cordon argenté qui sort entre vos omoplates et se prolonge derrière vous, disparaissant du champ de vision après une trentaine de centimètres. C\'est lui qui vous relie à votre corps physique. Tant que ce lien est intact, vous pourrez rentrer chez vous, mais s\'il est coupé (ce qui se produit seulement si un effet le précise), votre âme est soudain séparée de votre corps et vous mourez sur-le-champ.</p>\n<p>Votre forme astrale se déplace librement sur le plan astral et peut traverser les portails menant à d\'autres plans. Si vous pénétrez sur un nouveau plan ou si vous retournez sur le plan où vous étiez lorsque vous avez lancé ce sort, votre corps et vos possessions physiques sont transportés le long du cordon argenté, ce qui vous permet de réintégrer votre corps dès que vous arrivez sur le nouveau plan. Votre forme astrale est une incarnation distincte : les dégâts et autres effets s\'appliquant sur elle n\'ont aucun effet sur votre corps physique et ne vous affectent plus dès que vous le regagnez.</p>\n<p>Le sort se termine pour vous et vos compagnons dès que vous utilisez une action pour y mettre fin. À ce moment, les créatures affectées regagnent leurs corps physiques, qui se réveillent.</p>\n<p>Le sort peut se terminer plus tôt pour vous ou pour l\'un de vos camarades. Si quelqu\'un réussit une <em>dissipation de la magie</em> contre le corps astral ou physique d\'une créature affectée, le sort se termine pour elle seule. Il en va de même si la forme astrale ou le corps physique d\'une créature affectée tombe à 0 point de vie. Si le sort se termine alors que le cordon argenté est intact, celui-ci ramène la forme astrale dans le corps physique, mettant un terme à l\'état d\'animation suspendue.</p>\n<p>Si vous êtes prématurément renvoyé dans votre corps physique, vos compagnons restent sous forme astrale et doivent se débrouiller seuls pour regagner leur corps physique, en général en se laissant tomber à 0 point de vie.</p>',
    link: '/grimoire/projection-astrale',
    title: 'Projection astrale',
    level: '9',
    casting_time: '1 heure',
    range: '3 mètres',
    components: 'V, S, M (un zircon jaune d\'une valeur minimale de 1000  po et un lingot d\'argent gravé d\'une valeur minimale de 100 po par créature ; le sort consomme ces composantes)',
    duration: 'spéciale'
  },
  {
    header: {
      title: 'Protection contre la mort',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature et lui donnez une protection relative contre la mort. Quand elle devrait tomber à 0 point de vie pour la première fois suite à des dégâts, elle tombe à la place à 1 point de vie et le sort se termine.</p>\n<p>Si le sort est encore actif quand la cible est soumise à un effet qui devrait la tuer sur-le-champ sans lui infliger de dégâts, l\'effet est annulé contre cette cible et le sort se termine.</p>',
    link: '/grimoire/protection-contre-la-mort',
    title: 'Protection contre la mort',
    level: '4',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Protection contre le mal et le bien',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (eau bénite ou poudre de fer et d\'argent, que le sort consume)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Magicien',
          'Paladin',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Jusqu\'à la fin du sort, une créature consentante que vous touchez est protégée contre certains types de créatures : les aberrations, les célestes, les élémentaires, les fées, les fiélons et les morts-vivants.</p>\n<p>Cette protection se traduit par plusieurs bénéfices. Les créatures des types précédemment nommés subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets d\'attaque contre la cible, et cette dernière ne peut être <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a>, <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> ou possédée par elles. Si la cible est déjà sous l\'effet d\'un tel état spécial émanant d\'une telle créature, elle obtient un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors d\'un éventuel nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> contre l\'effet en question.</p>',
    link: '/grimoire/protection-contre-le-mal-et-le-bien',
    title: 'Protection contre le mal et le bien',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (eau bénite ou poudre de fer et d\'argent, que le sort consume)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Protection contre le poison',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature. Si elle est <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonnée</em></a>, vous neutralisez ce poison. Si elle est victime de plusieurs poisons, vous en neutralisez un dont vous avez détecté la présence ou un au hasard.</p>\n<p>Pendant toute la durée du sort, la cible bénéficie d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors des jets de sauvegarde contre le poison et se montre résistante aux dégâts de poison.</p>',
    link: '/grimoire/protection-contre-le-poison',
    title: 'Protection contre le poison',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Protection contre les énergies',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, la créature consentante que vous touchez devient résistante à un type de dégâts de votre choix : acide, feu, froid, foudre ou tonnerre.</p>',
    link: '/grimoire/protection-contre-les-energies',
    title: 'Protection contre les énergies',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Protections et sceaux',
      spell: {
        casting_time: '10 minutes',
        range: 'contact',
        components: 'V, S, M (encens incandescent, petite dose de soufre et d\'huile, cordelette avec des nœuds, petite dose de sang d\'ombre des roches et petit sceptre en argent d\'une valeur minimale de 10 po)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez un sceau protégeant une zone au sol de 225 mètres carrés (soit une zone de 15 mètres de côté, soit une centaine de zones de 1,50 mètre de côté, soit vingt-cinq zones de 3 mètres de côté). La zone protégée fait au maximum 6 mètres de haut et prend la forme de votre choix. Vous pouvez protéger ainsi plusieurs étages d\'une place forte en répartissant la zone affectée entre eux tant que vous pouvez relier toutes les zones contiguës en marchant lorsque vous lancez le sort.</p>\n<p>Lors de l\'incantation, vous pouvez définir quels individus ne seront pas affectés par un ou tous les effets du sort. Vous pouvez aussi choisir un mot de passe qui immunise celui qui le prononce à haute voix contre ces effets.</p>\n<p><em>Protections et sceaux</em> produit les effets suivants dans la zone protégée.</p>\n<p><strong>Couloirs</strong>. Le brouillard envahit tous les couloirs, où la visibilité est alors nulle. De plus, à chaque intersection ou embranchement laissant un choix de direction, il y a 50 % de chances que les créatures autres que vous soient persuadées d\'aller dans la direction opposée à celle qu\'elles ont choisie.</p>\n<p><strong>Escaliers</strong>. Des toiles d\'araignées, comme le sort du même nom, emplissent tous les escaliers de la zone protégée, du sol au plafond. Tant que <em>protections et sceaux</em> persiste, ces fils réapparaissent en 10 minutes si quelqu\'un les brûle ou les arrache.</p>\n<p><strong>Portes</strong>. Toutes les portes de la zone protégée sont fermées par magie, comme scellées avec un <em>verrou magique</em>. De plus, vous pouvez recouvrir jusqu\'à dix portes d\'une illusion (comme la fonction d\'objet illusoire du sort <em>illusion mineure</em>), afin de les faire passer pour une section de mur ordinaire.</p>\n<p><strong>Autres effets de sort</strong>. Vous pouvez placer l\'un des effets suivants, au choix, dans la zone protégée par le sort.</p>\n<ul>\n<li>Placer <em>lumières dansantes</em> dans quatre couloirs. Vous pouvez choisir un programme très simple que les lumières suivront pendant toute la durée de <em>protections et sceaux</em>.</li>\n<li>Placer une <em>bouche magique</em> en deux endroits.</li>\n<li>Placer un <em>nuage puant</em> en deux endroits. Les vapeurs apparaissent à l\'endroit de votre choix. Tant que protections et sceaux persiste, elles réapparaissent au bout de 10 minutes si le vent les disperse.</li>\n<li>Placer une <em>bourrasque</em> constante dans un couloir ou une pièce.</li>\n<li>Placer une <em>suggestion</em> en un endroit. Choisissez une zone d\'au maximum 1,50 mètre de côté : toute créature qui y pénètre ou la traverse reçoit une suggestion mentale.</li>\n</ul>\n<p>Toute la zone protégée émet une aura magique. Si quelqu\'un lance avec succès une <em>dissipation de la magie</em> sur un effet spécifique, il élimine seulement cet effet.</p>\n<p>Vous pouvez protéger une structure en permanence si vous lancez ce sort tous les jours pendant un an.</p>',
    link: '/grimoire/protections-et-sceaux',
    title: 'Protections et sceaux',
    level: '6',
    casting_time: '10 minutes',
    range: 'contact',
    components: 'V, S, M (encens incandescent, petite dose de soufre et d\'huile, cordelette avec des nœuds, petite dose de sang d\'ombre des roches et petit sceptre en argent d\'une valeur minimale de 10 po)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Purification de la nourriture et de l\'eau',
      spell: {
        casting_time: '1 action',
        range: '3 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Toute la nourriture et les boissons non magiques présentes dans une sphère d\'un rayon de 1,50 mètre centrée autour d\'un point de votre choix situé à portée sont purifiées et débarrassées de tout poison et maladie.</p>',
    link: '/grimoire/purification-de-la-nourriture-et-de-leau',
    title: 'Purification de la nourriture et de l\'eau',
    level: '1',
    casting_time: '1 action',
    range: '3 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Putréfaction',
      spell: {
        casting_time: '1 action',
        range: '30 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une créature à portée et que vous pouvez voir subit votre malédiction. Dès que vous lui infligez une blessure, cette plaie se répand petit à petit à l\'ensemble de son corps, qui prend une teinte violacée. Les plaies s\'infectent et suppurent. Jusqu\'à la fin du sort, la cible subit 1d4 points de dégâts nécrotique au début de son tour et obtient un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> sur ses jets de Constitution. Les dégâts cessent si la cible quitte la portée du sort.</p>\n<p>Si la cible décède pendant qu\'elle est sous l\'effet du sort, son corps éclate et affecte les créatures situées à 1,50 mètre ou moins d\'elle. Les nouvelles cibles affectées doivent réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou de Dextérité pour éviter d\'être affecté par le sort.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de niveau 3, les victimes subissent 2d4 dégâts. Les dégâts passent à 3d4 au niveau 5, 4d4 au niveau 6 et 5d4 au niveau 9.</p>',
    link: '/grimoire/putrefaction',
    title: 'Putréfaction',
    level: '1',
    casting_time: '1 action',
    range: '30 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Rappel à la vie',
      spell: {
        casting_time: '1 heure',
        range: 'contact',
        components: 'V, S, M (un diamant d\'une valeur minimale de 500 po, que le sort consume)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature décédée et la ramenez à la vie, à condition que son trépas ne remonte pas à plus de 10 jours. Si l\'âme de la créature est désireuse de rejoindre son corps et libre de le faire, le défunt revient à la vie avec 1 point de vie.</p>\n<p>Ce sort neutralise également les poisons et soigne les maladies non-magiques qui affectaient la créature au moment de sa mort. En revanche, il ne la débarrasse pas des maladies magiques, des malédictions et des effets similaires. Si on ne supprime pas ces effets sur le cadavre avant de lancer le sort, ils affectent de nouveau la créature ressuscitée. Ce sort est incapable de ramener un mort-vivant à la vie.</p>\n<p>Ce sort referme les plaies mortelles, mais ne restaure pas les parties manquantes du corps. Si la créature est privée d\'un organe ou d\'un morceau indispensable à sa survie, comme sa tête, le sort échoue automatiquement.</p>\n<p>Le retour d\'entre les morts est une rude épreuve qui se traduit par un malus de -4 aux jets d\'attaque et de sauvegarde ainsi qu\'aux tests de caractéristique. À chaque fois que la cible termine un repos long, ce malus se réduit de 1 jusqu\'à disparaître.</p>',
    link: '/grimoire/rappel-a-la-vie',
    title: 'Rappel à la vie',
    level: '5',
    casting_time: '1 heure',
    range: 'contact',
    components: 'V, S, M (un diamant d\'une valeur minimale de 500 po, que le sort consume)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Rayon affaiblissant',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un rayon noir fait d\'énergie débilitante jaillit de votre doigt en direction d\'une créature à portée. Faites une attaque de sort à distance contre la cible. Si vous la touchez, la créature inflige seulement la moitié des dégâts habituels lorsqu\'elle attaque avec une arme basée sur la Force.</p>\n<p>La cible a droit à un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution contre le sort à la fin de chacun de ses tours. Le sort se termine si elle réussit.</p>',
    link: '/grimoire/rayon-affaiblissant',
    title: 'Rayon affaiblissant',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Rayon ardent',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez trois rayons de feu et les projetez sur des cibles à portée. Vous pouvez les diriger contre une même cible ou contre des cibles différentes. Faites une attaque de sort à distance pour chaque rayon. Si vous touchez, la cible reçoit 2d6 dégâts.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, vous créez un rayon de plus par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/rayon-ardent',
    title: 'Rayon ardent',
    level: '2',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Rayon de givre',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un rayon de lumière d\'un blanc bleuté file vers une créature à portée. Faites une attaque de sort à distance contre la cible. Si vous la touchez, elle subit 1d8 dégâts de froid et sa vitesse est réduite de 3 mètres jusqu\'au début de votre prochain tour.</p>\n<p>Les dégâts du sort augmentent de 1d8 quand vous atteignez le niveau 5 (2d8),11 (3d8) et 17 (4d8).</p>',
    link: '/grimoire/rayon-de-givre',
    title: 'Rayon de givre',
    level: '0',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Rayon de lune',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S, M (quelques graines de lierre, peu importe l\'espèce, et un éclat de feldspath opalescent)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un pâle rayon de lune brille dans un cylindre de 1,50 mètre de rayon pour 12 mètres de haut centré sur un point à portée. Une faible lumière emplit le cylindre jusqu\'à la fin du sort.</p>\n<p>Quand une créature entre dans la zone du sort pour la première fois de son tour ou qu\'elle y commence son tour, elle est enveloppée de flammes fantomatiques qui provoquent de violentes douleurs, et doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Si elle échoue, elle subit 2d10 dégâts radiants, la moitié seulement si elle réussit.</p>\n<p>Les métamorphes subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de ce jet. Si l\'un d\'eux le rate, il reprend aussitôt son apparence d\'origine et ne peut plus changer de forme tant qu\'il n\'a pas quitté la zone de lumière du sort.</p>\n<p>Une fois que vous avez lancé ce sort, à chacun de vos tours, vous pouvez utiliser une action pour déplacer le rayon de lumière de 18 mètres au maximum dans la direction de votre choix.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les dégâts augmentent de 1d10 par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/rayon-de-lune',
    title: 'Rayon de lune',
    level: '2',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S, M (quelques graines de lierre, peu importe l\'espèce, et un éclat de feldspath opalescent)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Rayon de soleil',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (ligne de 18 mètres)',
        components: 'V, S, M (une loupe)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un rayon de vive lumière jaillit de votre main sur une ligne de 18 mètres de long pour 1,50 mètre de large. Chaque créature située sur cette ligne doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui échouent subissent 6d8 dégâts radiants et sont <em>aveuglées</em> jusqu\'à la fin de votre prochain tour. Les autres subissent seulement la moitié des dégâts et ne sont pas <em>aveuglées</em>. Les vases et les morts-vivants sont affectés par un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de ce <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>\n<p>Vous pouvez créer une nouvelle ligne de lumière en dépensant votre action à n\'importe quel tour jusqu\'à la fin du sort.</p>\n<p>Pendant toute la durée du sort, une boule de lumière brille dans votre main. Elle émet une lumière vive dans un rayon de 9 mètres et une lumière faible dans un rayon de 9 mètres supplémentaires. Cette lumière est de la même nature que la lumière du soleil.</p>',
    link: '/grimoire/rayon-de-soleil',
    title: 'Rayon de soleil',
    level: '6',
    casting_time: '1 action',
    range: 'personnelle (ligne de 18 mètres)',
    components: 'V, S, M (une loupe)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Régénération',
      spell: {
        casting_time: '1 minute',
        range: 'contact',
        components: 'V, S, M (un moulin à prières et de l\'eau bénite)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature et stimulez ses capacités de guérison naturelle. La cible récupère 4d8+15 points de vie. Pendant toute la durée du sort, elle récupère en plus 1 point de vie au début de chacun de ses tours (c\'est-à-dire 10 points de vie par minute).</p>\n<p>Si la cible a des membres sectionnés (des doigts, des jambes, une queue, etc.), ils repoussent au bout de 2 minutes. Si vous disposez de la partie amputée et la maintenez contre le moignon, le sort ressoude instantanément le membre au moignon.</p>',
    link: '/grimoire/regeneration',
    title: 'Régénération',
    level: '7',
    casting_time: '1 minute',
    range: 'contact',
    components: 'V, S, M (un moulin à prières et de l\'eau bénite)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Réincarnation',
      spell: {
        casting_time: '1 heure',
        range: 'contact',
        components: 'V, S, M (huiles et onguents rares d\'une valeur minimale de 1000 po, que le sort consume)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez un humanoïde mort ou un morceau du cadavre d\'une telle créature. Si la créature est morte depuis 10 jours ou moins, le sort lui fabrique un nouveau corps adulte et y appelle son âme. Le sort échoue si l\'âme n\'est pas libre de gagner ce corps ou si elle ne le désire pas.</p>\n<p>La magie façonne un nouveau corps pour accueillir l\'âme, ce qui risque de modifier la race de la créature. Le MJ lance 1d100 et consulte la table suivante pour déterminer quel sera le corps de la créature ramenée à la vie ou il en choisit un.</p>\n<div class=\'simple-responsive-table\'><div><table><thead><tr><th class="text-align-center">D100</th><th>Race</th></tr></thead><tbody><tr><td class="text-align-center"><strong>01-03</strong></td><td>sangdragon</td></tr><tr><td class="text-align-center"><strong>04-09</strong></td><td>nain des collines</td></tr><tr><td class="text-align-center"><strong>10-15</strong></td><td>nain des montagnes</td></tr><tr><td class="text-align-center"><strong>16-19</strong></td><td>nain des profondeurs</td></tr><tr><td class="text-align-center"><strong>20-24</strong></td><td>elfe de sang</td></tr><tr><td class="text-align-center"><strong>25-28</strong></td><td>elfe d\'aether</td></tr><tr><td class="text-align-center"><strong>29-32</strong></td><td>elfe de fer</td></tr><tr><td class="text-align-center"><strong>33-39</strong></td><td>elfe des bois</td></tr><tr><td class="text-align-center"><strong>40-44</strong></td><td>gnome des roches</td></tr><tr><td class="text-align-center"><strong>45-47</strong></td><td>demi-elfe</td></tr><tr><td class="text-align-center"><strong>48-49</strong></td><td>demi-ogre</td></tr><tr><td class="text-align-center"><strong>50-52</strong></td><td>demi-orc</td></tr><tr><td class="text-align-center"><strong>53-59</strong></td><td>halfelin pied-léger</td></tr><tr><td class="text-align-center"><strong>60-66</strong></td><td>halfelin grand sabot</td></tr><tr><td class="text-align-center"><strong>67-86</strong></td><td>humain</td></tr><tr><td class="text-align-center"><strong>87-89</strong></td><td>homme serpent</td></tr><tr><td class="text-align-center"><strong>90-92</strong></td><td>félys</td></tr><tr><td class="text-align-center"><strong>93-96</strong></td><td>aasimar</td></tr><tr><td class="text-align-center"><strong>97-100</strong></td><td>tieffelin</td></tr></tbody></table></div></div>\n<p>La créature réincarnée se souvient de son ancienne vie et de ses expériences passées. Elle conserve les capacités dont elle disposait sous sa forme d\'origine, mais échange sa race précédente contre la nouvelle et modifie ses traits raciaux en conséquence.</p>',
    link: '/grimoire/reincarnation',
    title: 'Réincarnation',
    level: '5',
    casting_time: '1 heure',
    range: 'contact',
    components: 'V, S, M (huiles et onguents rares d\'une valeur minimale de 1000 po, que le sort consume)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Réparation',
      spell: {
        casting_time: '1 minute',
        range: 'contact',
        components: 'V, S, M (deux magnétites)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort répare un objet cassé ou déchiré en un seul point, comme un maillon de chaîne cassé, deux moitiés d\'une clef brisée, une cape déchirée ou une outre de vin qui fuit. Pour cela, vous devez toucher l\'objet et la cassure ou la déchirure ne doit pas mesurer plus de 30 centimètres dans chaque dimension. Le problème se répare et il n\'en reste plus trace.</p>\n<p>Le sort permet de réparer un objet magique ou une créature artificielle, mais pas de restaurer sa magie.</p>',
    link: '/grimoire/reparation',
    title: 'Réparation',
    level: '0',
    casting_time: '1 minute',
    range: 'contact',
    components: 'V, S, M (deux magnétites)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Repli expéditif',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort vous permet de vous déplacer à une vitesse incroyable. Vous pouvez utiliser l\'action <a href="/combattre#se-précipiter"><em>se précipiter</em></a> quand vous le lancez, puis par une action bonus à chacun de vos tours jusqu\'à ce que le sort se termine.</p>',
    link: '/grimoire/repli-expeditif',
    title: 'Repli expéditif',
    level: '1',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Représailles infernales',
      spell: {
        casting_time: '1 réaction en réponse aux dégâts que vous inflige une créature située dans votre champ de vision et dans un rayon de 18 mètres autour de vous',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Il vous suffit de pointer le doigt vers la créature qui vient de vous blesser pour qu\'elle soit un instant enveloppée d\'un linceul de flammes infernales. Elle doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle échoue, elle subit 2d10 dégâts de feu, sinon la moitié seulement.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les dégâts augmentent de 1d10 par emplacement de sort au-dessus du 1er.</p>',
    link: '/grimoire/represailles-infernales',
    title: 'Représailles infernales',
    level: '1',
    casting_time: '1 réaction en réponse aux dégâts que vous inflige une créature située dans votre champ de vision et dans un rayon de 18 mètres autour de vous',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Répulsion/attirance',
      spell: {
        casting_time: '1 heure',
        range: '18 mètres',
        components: 'V, S, M (un cristal d\'alun trempé dans le vinaigre pour répulsion ou une goutte de miel pour attirance)',
        duration: '10 jours'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Druide',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort attire ou refoule les créatures de votre choix. Vous choisissez un objet ou une créature de taille TG ou inférieure situés à portée ou une zone pas plus grande qu\'un cube de 60 mètres de côté. Ensuite, vous décrivez une catégorie de créatures intelligentes, comme les dragons rouges, les gobelins ou les vampires. La cible est alors baignée d\'une aura qui attire ou refoule ces créatures pendant toute la durée du sort. Vous devez choisir la répulsion ou l\'attirance comme effet de l\'aura.</p>\n<p><strong>Attirance</strong>. L\'enchantement génère chez la créature une envie irrépressible de s\'approcher de la cible dès qu\'elle se trouve à 18 mètres ou moins d\'elle ou dès qu\'elle la voit. Quand la créature voit la cible ou se trouve dans un rayon de 18 mètres autour d\'elle, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi, à chacun de ses tours, elle se déplace de manière à entrer dans la zone désirée ou à arriver à portée de la cible. Une fois là, la créature ne peut plus s\'éloigner de sa propre initiative.</p>\n<p>Si la cible blesse ou fait du mal à la créature affectée, cette dernière a droit à un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse pour mettre un terme à l\'effet, comme décrit plus bas.</p>\n<p><strong>Répulsion</strong>. L\'enchantement génère chez les créatures de la catégorie choisie un intense besoin de quitter les lieux et d\'éviter la cible. Quand une telle créature voit la cible ou se trouve dans un rayon de 18 mètres autour d\'elle, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou se retrouver <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a>. Elle reste dans cet état tant qu\'elle voit la cible ou se trouve à 18 mètres ou moins d\'elle. Tant que la cible l\'effraie, la créature doit impérativement utiliser son déplacement pour gagner l\'endroit sûr le plus proche, c\'est-à-dire un endroit d\'où elle ne verra plus la cible. Si la créature s\'éloigne à plus de 18 mètres de la cible et ne la voit plus, elle n\'est plus <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a>, mais elle le redevient si la cible apparaît de nouveau en vue ou si elle s\'approche à 18 mètres ou moins d\'elle.</p>\n<p><strong>Mettre un terme à l\'effet</strong>. Si une créature affectée termine son tour alors qu\'elle ne se trouve pas à 18 mètres ou moins de la cible ou qu\'elle ne peut pas la voir, elle a droit à un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle le réussit, la cible n\'exerce plus d\'effet sur elle et elle comprend que le sentiment d\'attirance ou de répulsion qu\'elle ressentait était d\'origine magique. De plus, une créature affectée par le sort a droit à un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse toutes les 24 heures tant que le sort persiste.</p>\n<p>Une créature qui réussit son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> contre l\'effet est immunisée contre lui pendant 1 minute, après quoi, il peut de nouveau l\'affecter.</p>',
    link: '/grimoire/repulsion-attirance',
    title: 'Répulsion/attirance',
    level: '8',
    casting_time: '1 heure',
    range: '18 mètres',
    components: 'V, S, M (un cristal d\'alun trempé dans le vinaigre pour répulsion ou une goutte de miel pour attirance)',
    duration: '10 jours'
  },
  {
    header: {
      title: 'Résistance',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une cape miniature)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante. Une fois avant la fin du sort, elle peut lancer 1d4 et ajouter le résultat obtenu à un unique <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de son choix. Elle peut lancer le dé avant ou après avoir fait son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>. Le sort se termine alors.</p>',
    link: '/grimoire/resistance',
    title: 'Résistance',
    level: '0',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une cape miniature)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Respiration aquatique',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un petit roseau ou un brin de paille)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Grâce à ce sort, un maximum de dix créatures situées à portée et dans votre champ de vision deviennent capables de respirer sous l\'eau jusqu\'à la fin du sort. Les créatures affectées conservent en plus leur mode de respiration normal.</p>',
    link: '/grimoire/respiration-aquatique',
    title: 'Respiration aquatique',
    level: '3',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un petit roseau ou un brin de paille)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Restauration inférieure',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature et mettez fin à une maladie ou à un état spécial qui l\'affectait, parmi <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglé</em></a>, <a href="/gerer-la-sante-du-personnage#assourdi"><em>assourdi</em></a>, <a href="/gerer-la-sante-du-personnage#paralysé"><em>paralysé</em></a> ou <a href="/gerer-la-sante-du-personnage#empoisonné"><em>empoisonné</em></a>.</p>',
    link: '/grimoire/restauration-inferieure',
    title: 'Restauration inférieure',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Restauration supérieure',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (poussière de diamant d\'une valeur minimale de 100 po, que le sort consume)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous imprégnez la créature que vous touchez d\'énergie positive, afin de la débarrasser d\'un effet débilitant. Vous pouvez ainsi réduire le niveau d\'épuisement de la cible d\'un cran ou mettre un terme à l\'un des effets suivants l\'affectant.</p>\n<ul>\n<li>L\'état <a href="/gerer-la-sante-du-personnage#charmé"><em>charmé</em></a> ou <a href="/gerer-la-sante-du-personnage#pétrifié"><em>pétrifié</em></a>.</li>\n<li>Une malédiction, y compris l\'harmonisation entre la cible et un objet magique maudit.</li>\n<li>Une réduction sur l\'une des valeurs de caractéristique de la cible.</li>\n<li>Un effet réduisant le maximum de points de vie de la cible.</li>\n</ul>',
    link: '/grimoire/restauration-superieure',
    title: 'Restauration supérieure',
    level: '5',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (poussière de diamant d\'une valeur minimale de 100 po, que le sort consume)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Résurrection',
      spell: {
        casting_time: '1 heure',
        range: 'contact',
        components: 'V, S, M (un diamant d\'une valeur minimale de 1000 po, que le sort consume)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez le cadavre d\'une créature décédée depuis 100 ans au maximum, qui n\'est pas morte de vieillesse et qui n\'est pas un mort-vivant. Si son âme est libre et consentante, la cible ressuscite avec tous ses points de vie.</p>\n<p>Ce sort neutralise les poisons et maladies ordinaires qui affectaient éventuellement la cible à sa mort, mais il ne guérit pas les maladies magiques, les malédictions et autres effets de même type. Il faut en débarrasser la cible avant de la ressusciter, sans quoi ils l\'affligent de nouveau dès qu\'elle revient à la vie.</p>\n<p>Ce sort referme les blessures mortelles et restaure les parties de corps éventuellement manquantes.</p>\n<p>Le retour d\'entre les morts est une rude épreuve qui se traduit par un malus de -4 aux jets d\'attaque et de sauvegarde ainsi qu\'aux tests de caractéristique. À chaque fois que la cible termine un repos long, ce malus se réduit de 1 jusqu\'à disparaître.</p>\n<p>Si ce sort est destiné à une créature décédée depuis un an ou plus, son incantation est extrêmement éprouvante. Après cela, vous ne pouvez plus lancer de sort et vous souffrez d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets d\'attaque et de sauvegarde et des tests de caractéristique jusqu\'à ce que vous ayez terminé un repos long.</p>',
    link: '/grimoire/resurrection',
    title: 'Résurrection',
    level: '7',
    casting_time: '1 heure',
    range: 'contact',
    components: 'V, S, M (un diamant d\'une valeur minimale de 1000 po, que le sort consume)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Résurrection suprême',
      spell: {
        casting_time: '1 heure',
        range: 'contact',
        components: 'V, S, M (un peu d\'eau bénite à asperger et des diamants d\'une valeur minimale de 25000 po, que le sort consume)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature décédée depuis 200 ans au maximum, de n\'importe quelle cause sauf de vieillesse. Si son âme est libre et consentante, elle revient à la vie avec tous ses points de vie.</p>\n<p>Le sort referme toutes les plaies, neutralise tous les poisons, guérit toutes les maladies et lève toutes les malédictions qui affectaient éventuellement la cible à sa mort. Il remplace les organes et les membres abîmés ou manquants. Il peut même fournir un nouveau corps à la cible si l\'original n\'existe plus, mais dans ce cas, vous devez prononcer le nom de la créature à ressusciter. Elle apparaît alors dans un emplacement inoccupé de votre choix dans un rayon de 3 mètres autour de vous.</p>',
    link: '/grimoire/resurrection-supreme',
    title: 'Résurrection suprême',
    level: '9',
    casting_time: '1 heure',
    range: 'contact',
    components: 'V, S, M (un peu d\'eau bénite à asperger et des diamants d\'une valeur minimale de 25000 po, que le sort consume)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Rêve',
      spell: {
        casting_time: '1 minute',
        range: 'spéciale',
        components: 'V, S, M (une poignée de sable, une goutte d\'encre et une plume d\'écrivain prélevée sur un oiseau endormi)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort façonne les rêves d\'une créature. Choisissez comme cible une créature de votre connaissance. Elle doit se trouver sur le même plan d\'existence que vous. Il est impossible de contacter via ce sort une créature qui ne dort pas, tel un elfe. Vous entrez dans un état de transe et servez de messager, à moins que vous ne confiiez ce rôle à une autre créature consentante. Pendant la transe, le messager est conscient de son environnement, mais il ne peut pas entreprendre d\'action ni se déplacer.</p>\n<p>Si la cible est endormie, le messager apparaît dans son rêve et peut discuter avec elle tant qu\'elle est endormie, pendant toute la durée du sort. Le messager peut aussi modeler l\'environnement onirique, en créant des objets, un paysage et d\'autres images. Il peut sortir de sa transe quand bon lui semble, mettant alors un terme prématuré au sort. La cible se souvient parfaitement de son rêve quand elle se réveille. Si la cible est éveillée quand vous lancez le sort, le messager le sait et peut sortir de sa transe (et mettre un terme au sort) ou attendre qu\'elle s\'endorme, car il apparaîtra dans ses rêves à ce moment.</p>\n<p>Vous pouvez affubler le messager d\'une apparence que la cible trouvera monstrueuse et terrifiante. Dans ce cas, le message qu\'il transmet ne peut excéder dix mots et la cible est obligée d\'effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle échoue, les échos de cette monstruosité fantasmagorique génèrent un cauchemar qui dure pendant tout le sommeil de la cible et l\'empêche de bénéficier de sa période de repos. De plus, quand elle se réveille, elle subit 3d6 dégâts psychiques.</p>\n<p>Si vous êtes en possession d\'un élément corporel de la cible, comme une mèche de cheveux, des rognures d\'ongles ou autre, elle subit un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors de son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>',
    link: '/grimoire/reve',
    title: 'Rêve',
    level: '5',
    casting_time: '1 minute',
    range: 'spéciale',
    components: 'V, S, M (une poignée de sable, une goutte d\'encre et une plume d\'écrivain prélevée sur un oiseau endormi)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Revigorer',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (diamant d\'une valeur de 300 po, que le sort consume)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Clerc',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature morte au cours de la minute précédente. Elle revient à la vie avec 1 point de vie. Ce sort ne ramène pas à la vie les créatures mortes de vieillesse et ne restaure pas les parties manquantes du corps.</p>',
    link: '/grimoire/revigorer',
    title: 'Revigorer',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (diamant d\'une valeur de 300 po, que le sort consume)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Sanctification',
      spell: {
        casting_time: '24 heures',
        range: 'contact',
        components: 'V, S, M (herbes, huiles et encens d\'une valeur minimale de 1000 po, que le sort consume)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez un point et imprégnez la zone qui l\'entoure de puissance bénie (ou impie). Cette zone possède un rayon maximal de 18 mètres, sachant que le sort échoue si cette zone chevauche une autre zone déjà sous l\'effet d\'un sort de <em>sanctification</em>. La zone affectée est soumise aux effets suivants.</p>\n<p>Premièrement, les célestes, les élémentaires, les fées, les fiélons et les morts-vivants ne peuvent entrer dans la zone. Les créatures qui se trouvent dans la zone ne peuvent être <em>charmées</em>, <em>terrorisées</em> ou possédées par l\'une de ces créatures. Une créature déjà <a href="/gerer-la-sante-du-personnage#charmé"><em>charmée</em></a>, <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> ou possédée par l\'une de ces créatures ne l\'est plus dès qu\'elle pénètre dans la zone. Vous pouvez décider qu\'un ou plusieurs des types de créatures mentionnés ne seront pas affectés par cet effet.</p>\n<p>Deuxièmement, vous pouvez apposer un effet supplémentaire sur la zone. Choisissez l\'un des effets de la liste suivante ou optez pour un autre que propose votre MJ. Certains effets s\'appliquent aux créatures de la zone. Dans ce cas, vous pouvez préciser s\'ils affectent toutes les créatures, uniquement celles qui obéissent à une divinité ou à un chef particulier, ou seulement celles d\'un type donné, comme les orcs ou les trolls. Quand une créature susceptible d\'être affectée pénètre dans la zone d\'effet du sort pour la première fois de son tour ou quand elle y commence son tour, elle peut effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme. Si elle le réussit, elle ignore l\'effet supplémentaire jusqu\'à ce qu\'elle quitte la zone.</p>\n<p><strong>Courage</strong>. Les créatures affectées ne peuvent être <em>terrorisées</em> tant qu\'elles se trouvent dans la zone.</p>\n<p><strong>Interférence extradimensionnelle</strong>. Les créatures affectées ne peuvent pas se déplacer ni voyager en usant de téléportation, ni de moyens extradimensionnels ou interplanaires.</p>\n<p><strong>Langues</strong>. Les créatures affectées peuvent communiquer avec n\'importe quelle créature de la zone, même si elles ne partagent pas le même langage.</p>\n<p><strong>Lumière du jour</strong>. Une vive lumière emplit la zone. Les ténèbres magiques issues d\'un sort de niveau inférieur à celui de l\'emplacement que vous avez utilisé pour lancer sanctification ne peuvent étouffer cette lumière.</p>\n<p><strong>Protection contres les énergies</strong>. Les créatures affectées situées dans la zone gagnent une résistance contre un type de dégâts de votre choix, à l\'exception des dégâts contondants, perforants et tranchants.</p>\n<p><strong>Repos éternel</strong>. Les cadavres inhumés dans la zone ne peuvent pas se changer en morts-vivants.</p>\n<p><strong>Ténèbres</strong>. Les ténèbres s\'abattent sur la zone. La lumière normale est incapable d\'illuminer les lieux, tout comme les lumières magiques issues d\'un sort de niveau inférieur à celui de l\'emplacement que vous avez utilisé pour lancer sanctification.</p>\n<p><strong>Vulnérabilité à l\'énergie</strong>. Les créatures affectées situées dans la zone sont affligées d\'une vulnérabilité à un type de dégâts de votre choix, à l\'exception des dégâts contondants, perforants et tranchants.</p>\n<p><strong>Silence</strong>. Aucun son n\'émane de l\'intérieur de la zone et aucun son ne peut y pénétrer.</p>\n<p><strong>Terreur</strong>. Les créatures affectées sont <em>terrorisées</em> tant qu\'elles se trouvent dans la zone.</p>',
    link: '/grimoire/sanctification',
    title: 'Sanctification',
    level: '5',
    casting_time: '24 heures',
    range: 'contact',
    components: 'V, S, M (herbes, huiles et encens d\'une valeur minimale de 1000 po, que le sort consume)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Sanctuaire',
      spell: {
        casting_time: '1 action bonus',
        range: '9 mètres',
        components: 'V, S, M (un petit miroir en argent)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous protégez une créature à portée contre les attaques. Jusqu\'à la fin du sort, toute créature qui vise la cible avec une attaque ou un sort néfaste doit d\'abord effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Si elle le rate, elle doit choisir une nouvelle cible, sans quoi l\'attaque ou le sort est perdu. Ce sort ne protège pas la cible contre les effets de zone, comme l\'explosion d\'une <em>boule de feu</em>.</p>\n<p>Ce sort se termine si la créature protégée attaque ou lance un sort affectant une créature ennemie.</p>',
    link: '/grimoire/sanctuaire',
    title: 'Sanctuaire',
    level: '1',
    casting_time: '1 action bonus',
    range: '9 mètres',
    components: 'V, S, M (un petit miroir en argent)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Sanctuaire privé',
      spell: {
        casting_time: '10 minutes',
        range: '36 mètres',
        components: 'V, S, M (une mince feuille de plomb, un morceau de verre opaque, un bout de coton ou de tissu et de la chrysolite en poudre)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous sécurisez par magie une zone à portée. Il s\'agit d\'un cube de 1,50 mètre à 30 mètres d\'arête. Le sort persiste pendant toute sa durée ou jusqu\'à ce que vous utilisiez une action pour le révoquer.</p>\n<p>Vous décidez de la sécurité offerte par le sort au moment de l\'incantation en choisissant une ou plusieurs propriétés parmi les suivantes.</p>\n<ul>\n<li>Les sons ne peuvent pas franchir la barrière qui délimite la zone protégée.</li>\n<li>La barrière délimitant la zone protégée est sombre et brumeuse, ce qui empêche de voir au travers (même avec la vision dans le noir).</li>\n<li>Les organes sensoriels créés via un sort de divination ne peuvent pas apparaître au sein de la zone protégée ni traverser la barrière qui délimite son périmètre.</li>\n<li>Les sorts de divination ne peuvent pas prendre les créatures de la zone pour cible.</li>\n<li>Rien ne peut se téléporter à l\'intérieur ou à l\'extérieur de la zone protégée.</li>\n<li>Les voyages planaires sont bloqués au sein de la zone protégée.</li>\n</ul>\n<p>Si on lance ce sort tous les jours au même endroit pendant un an, ses effets deviennent permanents.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou supérieur, vous pouvez augmenter la taille du cube de 30 mètres par niveau au-delà du niveau 4. Ainsi, avec un emplacement de niveau 5, vous pouvez protéger une zone de 60 mètres de côté.</p>',
    link: '/grimoire/sanctuaire-prive',
    title: 'Sanctuaire privé',
    level: '4',
    casting_time: '10 minutes',
    range: '36 mètres',
    components: 'V, S, M (une mince feuille de plomb, un morceau de verre opaque, un bout de coton ou de tissu et de la chrysolite en poudre)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Sang du démon',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une fiole d\'un mélange de sang et d\'acide)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous contaminez le sang d\'une créature vivante que vous touchez. Vous effectuez une attaque de sort au contact. Si elle est réussie, le sang de la cible devient corrosif, lui infligeant 1d6 dégâts d\'acide à chacun de vos tours. Si la cible réussit un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution, les dégâts sont ignorés pour ce tour.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de sort de niveau 2 ou supérieur, les dégâts augmentent de 1d6 pour chaque niveau au-delà du niveau 1.</p>',
    link: '/grimoire/sang-du-demon',
    title: 'Sang du démon',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une fiole d\'un mélange de sang et d\'acide)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Saut',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une patte arrière de sauterelle)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature et triplez sa distance de saut jusqu\'à ce que le sort se termine.</p>',
    link: '/grimoire/saut',
    title: 'Saut',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une patte arrière de sauterelle)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Scrutation',
      spell: {
        casting_time: '10 minutes',
        range: 'personnelle',
        components: 'V, S, M (un focaliseur d\'une valeur minimale de 1000  po comme une boule de cristal, un miroir en argent ou un bénitier rempli d\'eau bénite)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous voyez et entendez une créature donnée de votre choix, à condition qu\'elle se trouve sur le même plan d\'existence que vous. La cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, modifié par le degré de connaissance que vous avez d\'elle et le type de lien physique que vous avez établi avec elle. Si la cible sait que vous lancez ce sort, elle peut rater volontairement son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> si elle veut que vous l\'observiez.</p>\n<div class=\'simple-responsive-table\'><div><table><thead><tr><th>Connaissance</th><th class="text-align-center">Modificateur du jet de sauvegarde</th></tr></thead><tbody><tr><td><strong>Deuxième main</strong> (vous avez entendu parler de la cible)</td>\n      <td class="text-align-center">+5</td>\n    </tr><tr><td><strong>Première main</strong> (vous avez rencontré la cible)</td>\n      <td class="text-align-center">0</td>\n    </tr><tr><td><strong>Familière</strong> (vous connaissez bien la cible)</td>\n      <td class="text-align-center">-5</td>\n    </tr></tbody><thead><tr><th>Lien</th><th class="text-align-center">Modificateur du jet de sauvegarde</th></tr></thead><tbody><tr><td><strong>Représentation ou portrait</strong></td>\n      <td class="text-align-center">-2</td>\n    </tr><tr><td><strong>Possession ou vêtement</strong></td>\n      <td class="text-align-center">-4</td>\n    </tr><tr><td><strong>Partie du corps, cheveux, ongles, etc.</strong></td>\n      <td class="text-align-center">-10</td>\n    </tr></tbody></table></div></div>\n<p>Si la cible réussit son jet de sauvegarde, elle n\'est pas affectée et vous ne pouvez plus utiliser ce sort sur elle pendant 24 heures.</p>\n<p>Si elle rate son jet, le sort crée un organe sensoriel <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> dans un rayon de 3 mètres autour d\'elle. Vous voyez et entendez à travers cet organe comme si vous vous trouviez à sa place. L\'organe sensoriel se déplace avec la cible et reste dans un rayon de 3 mètres autour d\'elle pendant toute la durée du sort. Une créature capable de voir les objets invisibles perçoit l\'organe sensoriel comme un orbe lumineux de la taille de votre poing.</p>\n<p>Au lieu de prendre une créature pour cible, vous pouvez choisir un lieu que vous avez déjà vu. L\'organe sensoriel apparaît alors à cet endroit et n\'en bouge pas.</p>',
    link: '/grimoire/scrutation',
    title: 'Scrutation',
    level: '5',
    casting_time: '10 minutes',
    range: 'personnelle',
    components: 'V, S, M (un focaliseur d\'une valeur minimale de 1000  po comme une boule de cristal, un miroir en argent ou un bénitier rempli d\'eau bénite)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Séquestration',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une poudre de diamant, d\'émeraude, de rubis et de saphir d\'une valeur minimum de 5 000 po, que le sort consume)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Grâce à ce sort, vous pouvez dissimuler une créature consentante ou un objet qui sera invisible à tout moyen de détection pendant toute la durée du sort. Quand vous lancez le sort et touchez la cible, elle devient invisible et ne peut plus être la cible de sorts de divination. De plus, les organes sensoriels de scrutation issus d\'un sort de divination ne la perçoivent plus.</p>\n<p>Si la cible est une créature, elle entre en état d\'animation suspendue. Le temps ne s\'écoule plus pour elle et elle ne vieillit plus.</p>\n<p>Vous pouvez décider d\'une condition qui mettra un terme prématuré au sort. Ce peut être ce que vous voulez, mais ce doit être visible ou se produire dans un rayon de 1,5 kilomètre autour de la cible. Par exemple, « <em>au bout de 1000 ans</em> » ou « <em>quand la tarasque se réveillera</em> ». Ce sort se termine également si la cible subit le moindre dégât.</p>',
    link: '/grimoire/sequestration',
    title: 'Séquestration',
    level: '7',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une poudre de diamant, d\'émeraude, de rubis et de saphir d\'une valeur minimum de 5 000 po, que le sort consume)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Serviteur invisible',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un bout de ficelle et un morceau de bois)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort crée une force invisible, dépourvue de forme et d\'intellect, mais capable d\'accomplir des tâches simples sur votre ordre jusqu\'à la fin du sort. Le serviteur se matérialise au sol, dans un emplacement inoccupé situé à portée. Il a une CA de 10, 1 pv, une Force de 2 et il est incapable d\'attaquer. S\'il tombe à 0 point de vie, le sort se termine.</p>\n<p>Une fois à chacun de vos tours, vous pouvez utiliser une action bonus pour ordonner mentalement à votre serviteur de se déplacer d\'un maximum de 4,50 mètres et d\'interagir avec un objet. Le serviteur peut accomplir des tâches simples à la portée d\'un domestique humain, comme aller chercher des affaires, faire le ménage, repriser, plier les habits, allumer la cheminée, servir les plats et la boisson, etc. Une fois que vous avez donné votre ordre, il fait de son mieux pour y obéir jusqu\'à ce qu\'il ait terminé. Il attend alors l\'ordre suivant.</p>\n<p>Si vous ordonnez à votre serviteur d\'accomplir une tâche qui l\'éloigne à plus de 18 mètres de vous, le sort se termine.</p>',
    link: '/grimoire/serviteur-invisible',
    title: 'Serviteur invisible',
    level: '1',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un bout de ficelle et un morceau de bois)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Silence',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Rôdeur'
        ],
        spell_tag: [
          'concentration',
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, aucun son ne peut se créer au sein d\'une sphère de 6 mètres de rayon centrée sur un point de votre choix à portée, ni la traverser. Une créature ou un objet entièrement contenu dans la sphère sont immunisés contre les dégâts de tonnerre, et les créatures entièrement contenues dans la sphère sont <em>assourdies</em>. Il est impossible de lancer un sort à composante verbale depuis la sphère.</p>',
    link: '/grimoire/silence',
    title: 'Silence',
    level: '2',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Simulacre',
      spell: {
        casting_time: '12 heures',
        range: 'contact',
        components: 'V, S, M (de la neige ou de la glace en quantité suffisante pour faire une reproduction grandeur nature de la créature à dupliquer  ; des cheveux, des rognures d\'ongles ou un autre échantillon de la créature à dupliquer, à placer dans la neige ou la glace, et de la poudre de rubis d\'une valeur minimale de 1500 po que le sort consume, à saupoudrer sur le double)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous façonnez un double illusoire d\'une bête ou d\'un humanoïde à portée pendant toute la durée de l\'incantation. Le double est une créature partiellement réelle, faite de neige ou de glace, qui peut accomplir des actions et qui est affectée par les éléments extérieurs comme une créature normale. Il ressemble en tout point à l\'original, mais il n\'a que la moitié de son maximum de points de vie et n\'a pas d\'équipement lors de sa création. En dehors de cela, il utilise le profil technique de la créature qu\'il représente.</p>\n<p>Le simulacre se montre amical envers vous et les créatures que vous désignez. Il obéit à vos ordres vocaux, se déplace et agit comme vous le souhaitez et agit à votre tour lors des combats. Le simulacre est incapable d\'apprendre et de gagner en puissance, il ne monte donc jamais de niveau et ne développe jamais ses pouvoirs. Il ne peut pas non plus récupérer un emplacement de sort dépensé.</p>\n<p>Si le simulacre est endommagé, vous pouvez le réparer dans un laboratoire d\'alchimie en utilisant des herbes rares et des minéraux d\'une valeur de 100 po par point de vie à régénérer. Le simulacre persiste jusqu\'à ce qu\'il tombe à 0 point de vie, il se transforme alors en neige et fond instantanément.</p>\n<p>Si vous lancez de nouveau ce sort, l\'éventuel double que vous maintenez déjà en activité est détruit sur-le-champ.</p>',
    link: '/grimoire/simulacre',
    title: 'Simulacre',
    level: '7',
    casting_time: '12 heures',
    range: 'contact',
    components: 'V, S, M (de la neige ou de la glace en quantité suffisante pour faire une reproduction grandeur nature de la créature à dupliquer  ; des cheveux, des rognures d\'ongles ou un autre échantillon de la créature à dupliquer, à placer dans la neige ou la glace, et de la poudre de rubis d\'une valeur minimale de 1500 po que le sort consume, à saupoudrer sur le double)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Simulacre de vie',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (une petite quantité d\'alcool ou de spiritueux)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Nécromancie'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous renforcez votre corps avec un ersatz de vie et gagnez 1d4+4 points de vie temporaires pendant la durée du sort.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, vous gagnez 5 points de vie temporaires supplémentaires par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/simulacre-de-vie',
    title: 'Simulacre de vie',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (une petite quantité d\'alcool ou de spiritueux)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Soin des blessures',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide',
          'Paladin',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La créature que vous touchez récupère un nombre de points de vie égal à 1d8 + votre modificateur de caractéristique d\'incantation. Ce sort n\'a aucun effet sur les morts-vivants et les créatures artificielles.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les soins augmentent de 1d8 par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/soin-des-blessures',
    title: 'Soin des blessures',
    level: '1',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Soin des blessures de groupe',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une vague d\'énergie curative s\'étend depuis un point de votre choix situé à portée. Choisissez un maximum de six créatures présentes dans une sphère de 9 mètres de rayon centrée sur ce point. Chacune d\'entre elles récupère un nombre de points de vie égal à 3d8 + votre modificateur de caractéristique d\'incantation. Ce sort n\'a aucun effet sur les morts-vivants ni sur les créatures artificielles.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 6 ou supérieur, les soins augmentent de 1d8 par niveau au-delà du niveau 5.</p>',
    link: '/grimoire/soin-des-blessures-de-groupe',
    title: 'Soin des blessures de groupe',
    level: '5',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Sommeil',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S, M (une pincée de sable fin, des pétales de rose ou un criquet)',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort plonge quelques créatures dans un sommeil magique. Lancez 5d8. Le total indique le nombre de points de vie de créatures que le sort affecte. Les créatures qui se trouvent dans un rayon de 6 mètres autour d\'un point de votre choix situé à portée sont affectées dans l\'ordre croissant de leur total actuel de points de vie (en ignorant les créatures <em>inconscientes</em>).</p>\n<p>Chaque créature affectée par le sort tombe <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconsciente</em></a>, en commençant par celle qui possède actuellement le moins de vie. Elle reste ainsi jusqu\'à la fin de la durée du sort, jusqu\'à ce qu\'elle subisse des dégâts ou jusqu\'à ce que quelqu\'un utilise son action pour la réveiller en la secouant ou en la giflant. Soustrayez le nombre de points de vie de la créature endormie du total auquel vous avez droit avant de passer à la suivante, c\'est-à-dire celle qui a le moins de points de vie après elle. Le nombre de points de vie de la créature doit être égal ou inférieur au total vous restant, sinon le sort n\'affecte pas la créature.</p>\n<p>Ce sort reste sans effet sur les morts-vivants et les créatures qui ne peuvent être <em>charmées</em>.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, lancez 2d8 de plus par niveau au-delà du niveau 1.</p>',
    link: '/grimoire/sommeil',
    title: 'Sommeil',
    level: '1',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S, M (une pincée de sable fin, des pétales de rose ou un criquet)',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Souhait',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Le souhait est le plus puissant des sorts qu\'une créature mortelle puisse lancer. Vous pouvez modifier les fondements de la réalité selon vos désirs, simplement en prononçant quelques mots.</p>\n<p>L\'utilisation basique de ce sort consiste à dupliquer les effets de n\'importe quel sort de niveau 8 ou moins. Vous n\'avez alors pas besoin de remplir les conditions requises, pas même de fournir les composantes matérielles onéreuses, le sort fait tout simplement effet.</p>\n<p>Sinon, vous pouvez créer l\'un des effets suivants, au choix.</p>\n<ul>\n<li>Vous créez un objet d\'une valeur maximale de 25000 po qui n\'a rien de magique. Il doit mesurer au maximum 90 mètres dans chaque dimension et apparaît en un emplacement inoccupé situé au sol et dans votre champ de vision.</li>\n<li>Vous permettez à un maximum de vingt créatures situées dans votre champ de vision de récupérer la totalité de leurs points de vie et vous mettez fin à tous les effets les affectant, tel que décrit dans le sort de <em>restauration supérieure</em>.</li>\n<li>Vous conférez à un maximum de dix créatures situées dans votre champ de vision une résistance à un type de dégâts de votre choix.</li>\n<li>Vous conférez à un maximum de dix créatures situées dans votre champ de vision l\'immunité contre un unique sort ou un autre effet magique pendant 8 heures. Par exemple, vous pouvez vous immuniser, ainsi que tous vos compagnons, contre l\'attaque absorption de vie des liches.</li>\n<li>Vous défaites un unique événement récent en faisant relancer un jet de dé effectué au cours du round précédent (y compris lors de votre dernier tour). La réalité se modifie pour s\'adapter au nouveau résultat. Par exemple, un souhait peut obliger un adversaire à relancer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> réussi, un ennemi à refaire son jet de critique ou un ami à rejouer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> raté. Vous pouvez attribuer un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> ou un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> à la créature qui relance le dé et vous êtes libre d\'appliquer le résultat du premier jet ou de la relance.</li>\n</ul>\n<p>Ce sort peut également vous permettre d\'accomplir des exploits dépassant le cadre des exemples précédents. Formulez votre souhait à votre MJ de la manière la plus précise possible. Le MJ dispose d\'une grande liberté pour gérer ce genre de cas. Plus le souhait est important, plus il y a de chances que quelque chose tourne mal. Le sort peut tout simplement échouer, avoir des effets partiels seulement ou s\'accompagner de conséquences inattendues en raison de la manière dont vous l\'avez formulé. Par exemple, si vous souhaitez qu\'un adversaire soit mort, vous pouvez très bien être projeté en avant dans le temps, à une période où il est décédé, ce qui, en pratique, vous élimine de la partie en cours de jeu. Et si vous souhaitez obtenir un objet magique légendaire ou un artefact mythique, vous pourriez très bien être instantanément transporté en sa présence, et en celle de son propriétaire actuel.</p>\n<p>Le stress lié à l\'incantation d\'un <em>souhait</em> pour faire autre chose que répliquer un autre sort vous affaiblit grandement. À tel point que vous subissez 1d10 dégâts nécrotiques par niveau de sort à chaque fois que vous lancez un autre sort par la suite, et ce jusqu\'à ce que vous ayez terminé un repos long. Il est absolument impossible de réduire ces dégâts ou de les empêcher, de quelque manière que ce soit. De plus, votre Force tombe à 3 (si elle n\'est pas déjà de 3 ou moins) pendant 2d4  jours. À chaque fois que vous passez une de ces journées à vous reposer et ne rien faire de plus que des activités légères, le temps de récupération qui vous reste diminue de 2 jours. Enfin, suite à ce stress, il y a 33 % de chances que vous ne puissiez plus jamais lancer <em>souhait</em>.</p>',
    link: '/grimoire/souhait',
    title: 'Souhait',
    level: '9',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Sphère de feu',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un bout de suif, une pincée de soufre et un peu de poudre de fer)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une sphère de feu de 1,50 mètre de diamètre apparaît dans un espace inoccupé de votre choix situé à portée et subsiste pendant toute la durée du sort. Chaque créature qui termine son tour dans un rayon de 1,50 mètre autour de la sphère doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 2d6 dégâts de feu, les autres la moitié seulement.</p>\n<p>Vous pouvez déplacer la sphère sur un maximum de 9 mètres par une action bonus. Si vous lui faites heurter une créature, cette dernière doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> ou subir les dégâts de la sphère, qui arrête de se déplacer pour ce tour.</p>\n<p>Quand vous déplacez la sphère, vous pouvez lui faire franchir des obstacles de 1,50 mètre de haut et la faire sauter par-dessus des fosses de 3 mètres de large. Elle embrase les objets inflammables qui ne sont ni portés ni transportés. Elle émet une lumière vive dans un rayon de 6 mètres et une lumière faible dans un rayon de 6 mètres supplémentaires.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 2.</p>',
    link: '/grimoire/sphere-de-feu',
    title: 'Sphère de feu',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un bout de suif, une pincée de soufre et un peu de poudre de fer)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Sphère glacée',
      spell: {
        casting_time: '1 action',
        range: '90 mètres',
        components: 'V, S, M (une petite sphère de cristal)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Un globe d\'énergie gelée jaillit de la pointe de votre doigt tendu et file vers un point de votre choix situé à portée. Là, il explose en une sphère de 18 mètres de rayon. Chaque créature dans la zone doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui échouent subissent 10d6 dégâts de froid, les autres la moitié seulement. Si le globe frappe une surface aqueuse ou un liquide principalement constitué d\'eau (ce qui n\'inclut pas les créatures majoritairement composées d\'eau), il gèle le liquide sur une épaisseur de 15 centimètres dans une zone de 9 mètres de côté. La glace subsiste une minute. Les créatures qui nageaient à la surface de l\'étendue d\'eau se retrouvent prises dans la glace. Une telle créature peut utiliser une action pour faire un test de Force contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort afin de se libérer.</p>\n<p>Une fois que vous avez terminé l\'incantation, vous pouvez attendre avant de lancer le globe. Dans ce cas, il ressemble à une bille de fronde glacée qui reste dans votre main. Vous pouvez alors le lancer à la main (à une portée de 12 mètres), avec une fronde (selon la portée habituelle de cette fronde) ou le donner à une créature qui peut faire de même. Le globe se brise à l\'impact, explosant comme décrit dans la version normale du sort. Vous pouvez également poser le globe au sol sans le briser. Il explose au bout de 1 minute s\'il n\'a pas été brisé auparavant.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, les dégâts augmentent de 1d6 par niveau au-delà du niveau 6.</p>',
    link: '/grimoire/sphere-glacee',
    title: 'Sphère glacée',
    level: '6',
    casting_time: '1 action',
    range: '90 mètres',
    components: 'V, S, M (une petite sphère de cristal)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Sphère résiliente',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S, M (un bout de cristal transparent hémisphérique et son équivalent en gomme arabique)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une sphère de force scintillante englobe une créature ou un objet de taille G ou inférieure situés à portée. Si la cible n\'est pas consentante, elle a droit à un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle le rate, elle est enfermée dans la sphère pour toute la durée du sort.</p>\n<p>Rien ne peut franchir la barrière que forme la sphère : ni les objets physiques, ni l\'énergie, ni les effets des autres sorts. En revanche, une créature qui se trouve au sein de la sphère y respire sans mal. La sphère est immunisée contre tous les types de dégâts. De plus, les attaques et les effets originaires de l\'extérieur de la sphère ne peuvent pas blesser la créature ou l\'objet qu\'elle abrite. De même, une créature au sein de la sphère est incapable d\'endommager ce qui se trouve à l\'extérieur.</p>\n<p>La sphère ne pèse rien et elle est tout juste assez grande pour contenir la créature ou l\'objet qu\'elle renferme. Une créature enfermée dans la sphère peut utiliser son action pour exercer une poussée sur la paroi de la sphère et la faire rouler à la moitié de sa vitesse habituelle. De même, une tierce personne peut ramasser la sphère ou la déplacer.</p>\n<p>Un sort de <em>désintégration</em> visant la sphère la détruit sans endommager ce qu\'elle contient.</p>',
    link: '/grimoire/sphere-resiliente',
    title: 'Sphère résiliente',
    level: '4',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S, M (un bout de cristal transparent hémisphérique et son équivalent en gomme arabique)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Stalagmites fulgurantes',
      spell: {
        casting_time: '1 action',
        range: '30 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous faites jaillir du sol des stalagmites de pierre d\'une hauteur de 3 mètres dans une zone carrée de 3 mètres d\'arête à portée du sort. Si elles atteignent le plafond avant d\'atteindre leur taille maximale, les stalagmites cessent de grandir. Chaque créature dans la zone doit effectuer une sauvegarde de Dextérité. Une créature volant à moins de 3 mètres du sol bénéficie d\'un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> sur ce jet. En cas d\'échec, les stalagmites infligent 4d4 dégâts perforants et la cible se retrouve <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> entre les stalagmites jusqu\'à la fin du sort. En cas de succès, elle ne subit que la moitié des dégâts et est libre ses mouvements. Une cible <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par les stalagmites peut utiliser une action pour effectuer une sauvegarde de Force. En cas de réussite, la créature se libère, mais subit 1d6 dégâts contondants. Pour la durée du sort, le terrain où se trouvent les stalagmites est considéré comme difficile.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de niveau 3 ou supérieur, les dégâts perforants augmentent de 2d4 pour chaque niveau au-delà du niveau 2.</p>',
    link: '/grimoire/stalagmites-fulgurantes',
    title: 'Stalagmites fulgurantes',
    level: '2',
    casting_time: '1 action',
    range: '30 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Strangulation',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tendez le bras en direction de votre cible et, de votre main, vous mimez son étranglement. Faites une attaque de sort à distance. En cas de réussite, la cible subit 1d6 points de dégâts contondants et elle doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force ou être <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a>. Si le <a href="/combattre#jets-dattaque">jet d\'attaque</a> initial était un succès, à chacun de vos tours pendant la durée du sort, vous pouvez utiliser votre action pour lui infliger automatiquement les mêmes dégâts et l\'obliger à faire un nouveau <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force. Si vous faites quoi que ce soit d\'autre (vous pouvez toutefois parler), le sort prend fin. Le sort prend aussi fin si la cible passe hors de portée ou en dehors de votre champ de vision.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 3, vous infligez 2d6 points de dégât par round. Vous augmentez les dégâts de 1d6 supplémentaires par tranche de 2 niveaux de plus (jusqu\'à 5d6 au niveau 9).</p>',
    link: '/grimoire/strangulation',
    title: 'Strangulation',
    level: '1',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Suggestion',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, M (une langue de serpent et soit un rayon de miel, soit une goutte d\'huile d\'olive)',
        duration: 'jusqu\'à 8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous visez une créature située à portée et dans votre champ de vision et à même de vous entendre et de vous comprendre. Vous l\'influencez par magie de façon à ce qu\'elle suive la conduite que vous lui proposez (en seulement une phrase ou deux). Les créatures qui ne peuvent être <em>charmées</em> sont immunisées contre ce sort. Vous devez formuler votre suggestion de manière à ce que la conduite à tenir semble tout à fait raisonnable. Si vous demandez à une créature de se poignarder, de se laisser tomber sur une lance, de s\'immoler ou d\'accomplir n\'importe quelle action à l\'évidence néfaste, le sort se termine automatiquement.</p>\n<p>La cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle fait de son mieux pour suivre la conduite que vous lui avez suggérée et cela peut continuer pendant toute la durée du sort. Si l\'action suggérée peut se finir plus rapidement, le sort se termine quand la cible a accompli ce que vous lui aviez demandé.</p>\n<p>Vous pouvez spécifier des conditions qui déclenchent une conduite spéciale pendant la durée du sort. Par exemple, vous pouvez suggérer à un chevalier de donner son cheval de guerre au premier mendiant qu\'il rencontre. Si les conditions ne sont pas remplies avant la fin du sort, la cible n\'accomplit pas l\'action.</p>\n<p>Si vous (ou l\'un de vos compagnons) blessez une créature affectée par ce sort, le sort se termine.</p>',
    link: '/grimoire/suggestion',
    title: 'Suggestion',
    level: '2',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, M (une langue de serpent et soit un rayon de miel, soit une goutte d\'huile d\'olive)',
    duration: 'jusqu\'à 8 heures'
  },
  {
    header: {
      title: 'Suggestion de groupe',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, M (une langue de serpent et soit un rayon de miel, soit une goutte d\'huile d\'olive)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous visez un maximum de douze créatures de votre choix, situées à portée et dans votre champ de vision et à même de vous entendre et de vous comprendre. Vous les influencez par magie de façon à ce qu\'elles suivent la conduite que vous leur proposez (en seulement une phrase ou deux). Les créatures qui ne peuvent être <em>charmées</em> sont immunisées contre ce sort. Vous devez formuler votre suggestion de manière à ce que la conduite à tenir semble tout à fait raisonnable. Si vous demandez à une créature de se poignarder, de se laisser tomber sur une lance, de s\'immoler ou d\'accomplir n\'importe quelle action à l\'évidence néfaste, l\'effet du sort s\'annule automatiquement.</p>\n<p>Chaque cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse, sans quoi elle fait de son mieux pour suivre la conduite que vous lui avez suggérée et cela peut occuper toute la durée du sort. Si l\'action suggérée peut se finir plus rapidement, le sort se termine quand la cible a accompli ce que vous lui aviez demandé.</p>\n<p>Vous pouvez spécifier des conditions qui déclenchent une conduite spéciale pendant la durée du sort. Par exemple, vous pouvez suggérer à un groupe de soldats de donner tout leur argent au premier mendiant qu\'ils rencontrent. Si les conditions ne sont pas remplies avant la fin du sort, la cible n\'accomplit pas l\'action.</p>\n<p>Si vous (ou l\'un de vos compagnons) blessez une créature affectée par ce sort, le sort se termine pour elle.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 7 ou supérieur, la durée du sort est de 10 jours. Si vous utilisez un emplacement de niveau 8, elle est de 30 jours et si vous utilisez un emplacement de niveau 9, elle est de 1 an et 1 jour.</p>',
    link: '/grimoire/suggestion-de-groupe',
    title: 'Suggestion de groupe',
    level: '6',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, M (une langue de serpent et soit un rayon de miel, soit une goutte d\'huile d\'olive)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Symbole',
      spell: {
        casting_time: '1 minute',
        range: 'contact',
        components: 'V, S, M (mercure, phosphore et poudre de diamant et d\'opale d\'une valeur totale d\'au moins 1000 po, que le sort consume)',
        duration: 'jusqu\'à dissipation ou déclenchement'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Quand vous lancez ce sort, vous inscrivez un glyphe néfaste sur une surface (comme une partie du sol, un pan de mur ou une table) ou dans un objet que l\'on peut refermer pour le dissimuler, comme un livre, un parchemin ou un coffre au trésor. Si vous optez pour une surface, le glyphe peut couvrir une zone de 3 mètres de diamètre au maximum. Si vous choisissez un objet, il ne faut plus le déplacer par la suite : si quelqu\'un le déplace à plus de 3 mètres de l\'endroit où vous avez jeté ce sort, le glyphe se brise et le sort se termine sans avoir été déclenché.</p>\n<p>Le glyphe est presque invisible. Pour le discerner, il faut réussir un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort.</p>\n<p>C\'est lors de l\'incantation que vous décidez de ce qui déclenchera le sort. Pour les glyphes tracés sur une surface quelconque, les déclencheurs les plus courants consistent à toucher le glyphe ou à se tenir dessus, à déplacer un objet recouvrant le glyphe, à s\'approcher à une certaine distance du glyphe ou encore à manipuler l\'objet sur lequel le glyphe est tracé. Pour les glyphes inscrits dans un objet, on trouve parmi les déclencheurs les plus répandus le fait d\'ouvrir l\'objet, de s\'en approcher à une certaine distance, ou de voir ou de lire le glyphe.</p>\n<p>Vous pouvez affiner le déclencheur, de façon à ce que le sort s\'active sous certaines conditions ou en fonction de certaines caractéristiques physiques (comme le poids ou la taille), ou selon un type de créature (pour un glyphe destiné aux guenaudes ou aux métamorphes, par exemple). Vous pouvez aussi définir des conditions pour que certaines créatures ne déclenchent pas le glyphe, en prononçant un mot de passe, par exemple.</p>\n<p>Lorsque vous dessinez le glyphe, vous devez choisir l\'une des options suivantes. Une fois le glyphe déclenché, il se met à luire et emplit une sphère de 18 mètres de rayon avec une faible lumière pendant 10 minutes, après quoi le sort se termine. Chaque créature présente dans la sphère quand le glyphe s\'active est visée par ses effets, tout comme une créature qui entre dans la sphère pour la première fois de son tour ou qui y termine son tour.</p>\n<p><strong>Démence</strong>. Chaque cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> d\'Intelligence. Celles qui échouent deviennent folles pendant 1 minute. Une créature démente ne peut pas entreprendre la moindre action, ne comprend pas ce que disent les autres créatures, ne peut pas lire et ne parle que dans un charabia incompréhensible. C\'est le MJ qui contrôle ses déplacements qui deviennent complètement erratiques.</p>\n<p><strong>Désespoir</strong>. Chaque cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme ou être submergée par le désespoir pendant 1 minute. Pendant tout ce temps, elles ne peuvent pas attaquer ni viser une créature avec une capacité, un sort ou un autre effet magique hostile.</p>\n<p><strong>Discorde</strong>. Chaque cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui le ratent se mettent à se quereller avec les autres créatures pendant 1 minute. Pendant tout ce temps, elles sont incapables de tenir une conversation sensée et subissent un <a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>désavantage</em></a> lors des jets d\'attaque et des tests de caractéristique.</p>\n<p><strong>Douleur</strong>. Chaque cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution ou être <a href="/gerer-la-sante-du-personnage#neutralisé"><em>neutralisée</em></a> par une douleur insoutenable pendant 1 minute.</p>\n<p><strong>Étourdissement</strong>. Chaque cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou être <a href="/gerer-la-sante-du-personnage#étourdi"><em>étourdie</em></a> pendant 1 minute.</p>\n<p><strong>Frayeur</strong>. Chaque cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse. Celles qui échouent sont <em>terrorisées</em> pendant 1 minute. Une cible <a href="/gerer-la-sante-du-personnage#terrorisé"><em>terrorisée</em></a> lâche tout ce qu\'elle tient et doit s\'éloigner du glyphe de 9 mètres au minimum à chacun de ses tours, dans la mesure du possible.</p>\n<p><strong>Mort</strong>. Chaque cible doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui échouent subissent 10d10 dégâts nécrotiques, les autres la moitié seulement.</p>\n<p><strong>Sommeil</strong>. Chaque cible doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Sagesse ou tomber <a href="/gerer-la-sante-du-personnage#inconscient"><em>inconsciente</em></a> pendant 10 minutes. Une telle créature se réveille si elle subit des dégâts ou si quelqu\'un utilise son action pour la réveiller en la secouant ou la giflant.</p>',
    link: '/grimoire/symbole',
    title: 'Symbole',
    level: '7',
    casting_time: '1 minute',
    range: 'contact',
    components: 'V, S, M (mercure, phosphore et poudre de diamant et d\'opale d\'une valeur totale d\'au moins 1000 po, que le sort consume)',
    duration: 'jusqu\'à dissipation ou déclenchement'
  },
  {
    header: {
      title: 'Télékinésie',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous devenez capable de déplacer ou de manipuler des créatures ou des objets par la pensée. Lorsque vous lancez ce sort, puis en tant qu\'action à chaque round pendant toute la durée du sort, vous pouvez exercer votre force de volonté sur une créature ou un objet situés à portée et dans votre champ de vision, ce qui provoque l\'effet approprié indiqué plus bas. Vous pouvez affecter la même cible, round après round, ou en choisir une nouvelle quand vous le désirez. Si vous changez de cible, la précédente n\'est plus affectée.</p>\n<p><strong>Créatures</strong>. Vous pouvez essayer de déplacer une créature de taille TG ou inférieure. Faites un test de caractéristique avec votre caractéristique d\'incantation, opposé à un test de Force de la cible. Si vous l\'emportez, vous déplacez la créature d\'un maximum de 9 mètres dans la direction de votre choix, y compris en hauteur, mais pas hors de portée du sort. Jusqu\'à la fin de votre prochain tour, la créature est entravée dans votre étreinte télékinétique. Une créature soulevée dans les airs reste suspendue dans le vide.</p>\n<p>Lors des rounds suivants, vous pouvez utiliser votre action pour maintenir votre prise télékinétique sur la cible en répétant les tests opposés.</p>\n<p><strong>Objets</strong>. Vous pouvez essayer de déplacer un objet pesant au maximum 500 kilogrammes. Si cet objet n\'est ni porté ni transporté, vous le déplacez automatiquement d\'un maximum de 9 mètres dans la direction de votre choix, mais pas hors de portée du sort.</p>\n<p>Si l\'objet est porté ou transporté par une créature, faites un test de caractéristique avec votre caractéristique d\'incantation, opposé à un test de Force de cette créature. Si vous l\'emportez, vous éloignez l\'objet de cette créature sur un maximum de 9 mètres dans la direction de votre choix, mais pas hors de portée du sort.</p>\n<p>Vous exercez un contrôle précis sur les objets pris dans votre étreinte télékinétique, vous pouvez donc manipuler un outil basique, ouvrir une porte ou un récipient, déposer un objet dans un récipient ou en retirer un, ou encore verser le contenu d\'une fiole.</p>',
    link: '/grimoire/telekinesie',
    title: 'Télékinésie',
    level: '5',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Téléportation',
      spell: {
        casting_time: '1 action',
        range: '3 mètres',
        components: 'V',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort vous transporte instantanément à la destination de votre choix, ainsi qu\'un maximum de huit créatures consentantes de votre choix situées à portée et dans votre champ de vision ou bien ainsi qu\'un unique objet situé à portée et dans votre champ de vision. Si vous prenez un objet pour cible, il doit tenir dans un cube de 3 mètres de côté et il ne doit pas être porté ni transporté par une créature non consentante.</p>\n<p>Vous devez choisir une destination connue, située sur le même plan d\'existence que vous. C\'est votre degré de familiarité avec la destination qui détermine vos chances d\'arriver sur place. Le MJ lance 1d100 et consulte la table ci-dessous.</p>\n<p><strong>Familiarité</strong>. « <em>Cercle permanent</em> » désigne un cercle de téléportation dont vous connaissez la séquence de symboles. « <em>Objet associé</em> » indique que vous possédez un objet prélevé à la destination choisie au cours des 6 derniers mois, comme un livre sorti de l\'étagère de la bibliothèque d\'un magicien, les draps d\'une suite royale ou un éclat de marbre arraché au tombeau secret d\'une liche. « <em>Très familier</em> » désigne un endroit où vous vous êtes souvent rendu, un lieu que vous avez soigneusement étudié ou un endroit que vous voyez au moment de l\'incantation.</p>\n<p>« <em>Vu à quelques reprises</em> » correspond aux endroits que vous avez vus plus d\'une fois, mais avec lesquels vous n\'êtes pourtant pas très familiers. « <em>Vu une fois</em> » représente un lieu vu une seule fois, éventuellement par magie. « Description » correspond à un endroit que vous connaissez seulement via la description d\'autrui, aussi bien au niveau de son emplacement que de son apparence, éventuellement grâce à une carte. « <em>Destination factice</em> » désigne les endroits qui n\'existent pas, si par exemple vous avez tenté de scruter le sanctuaire d\'un ennemi mais n\'avez vu qu\'une illusion ou si vous essayez de vous téléporter en un endroit familier qui n\'existe plus.</p>\n<p><strong>Sur place</strong>. Vous et vos compagnons (ou l\'objet téléporté) apparaissez exactement où vous le souhaitiez.</p>\n<p><strong>À proximité</strong>. Vous et vos compagnons (ou l\'objet téléporté) apparaissez à une distance aléatoire de votre destination, éloignés dans une direction tout aussi aléatoire. La distance qui vous sépare de votre destination est de 1d10 × 1d10 % de la distance que le sort vous a fait parcourir. Par exemple, si vous essayez de vous téléporter à une destination située à 180 kilomètres de votre position, que vous arrivez à proximité, et que vous obtenez 5 et 3, vous allez arriver à 15 % de distance de votre destination, c\'est-à-dire à 27 kilomètres. Le MJ détermine la direction dans laquelle vous vous êtes éloignés de la cible en lançant 1d8, le 1 représentant le Nord, le 2 le Nord-Est, le 3 l\'Est, etc., jusqu\'à faire le tour de la rose des vents. Si vous comptiez vous téléporter dans une cité portuaire et arrivez à 27 kilomètres au large de ses côtes, en pleine mer, vous pourriez bien avoir quelques ennuis.</p>\n<p><strong>Zone similaire</strong>. Vous et vos compagnons (ou l\'objet téléporté) arrivez dans une zone différente de celle prévue, mais dotée de caractéristiques visuelles ou thématiques similaires. Par exemple, si vous comptiez regagner votre laboratoire, vous pourriez arriver dans celui d\'un autre magicien ou dans une boutique d\'alchimie qui possède nombre d\'outils et d\'appareils présents dans votre laboratoire. En général, vous apparaissez dans l\'endroit ressemblant à votre destination le plus proche de celle-ci, mais comme le sort n\'a pas de limite de portée, vous pouvez tout à fait arriver n\'importe où sur votre plan d\'existence.</p>\n<p><strong>Incident</strong>. La magie imprévisible du sort complique le voyage. Chaque créature téléportée (ou l\'objet téléporté) subit 3d10 dégâts de force tandis que le MJ relance le dé pour savoir où vous arrivez (sachant qu\'il peut se produire plusieurs incidents, chacun infligeant ses propres dégâts).</p>\n<div class=\'simple-responsive-table\'><div><table class="datatable"><thead><tr><th>Familiarité</th>\n      <th class="text-align-center">Incident</th>\n      <th class="text-align-center">Zone similaire</th>\n      <th class="text-align-center">À proximité</th>\n      <th class="text-align-center">Sur place</th>\n    </tr></thead><tbody><tr><td><span class="label">Familiarité : </span><strong>Cercle permanent</strong></td>\n      <td class="text-align-center"><span class="label">Incident : </span>-</td>\n      <td class="text-align-center"><span class="label">Zone similaire : </span>-</td>\n      <td class="text-align-center"><span class="label">À proximité : </span>-</td>\n      <td class="text-align-center"><span class="label">Sur place : </span>01-100</td>\n    </tr><tr><td><span class="label">Familiarité : </span><strong>Objet associé</strong></td>\n      <td class="text-align-center"><span class="label">Incident : </span>-</td>\n      <td class="text-align-center"><span class="label">Zone similaire : </span>-</td>\n      <td class="text-align-center"><span class="label">À proximité : </span>-</td>\n      <td class="text-align-center"><span class="label">Sur place : </span>01-100</td>\n    </tr><tr><td><span class="label">Familiarité : </span><strong>Très familier</strong></td>\n      <td class="text-align-center"><span class="label">Incident : </span>01-05</td>\n      <td class="text-align-center"><span class="label">Zone similaire : </span>06-13</td>\n      <td class="text-align-center"><span class="label">À proximité : </span>14-24</td>\n      <td class="text-align-center"><span class="label">Sur place : </span>25-100</td>\n    </tr><tr><td><span class="label">Familiarité : </span><strong>Vu à quelques reprises</strong></td>\n      <td class="text-align-center"><span class="label">Incident : </span>01-33</td>\n      <td class="text-align-center"><span class="label">Zone similaire : </span>34-43</td>\n      <td class="text-align-center"><span class="label">À proximité : </span>44-53</td>\n      <td class="text-align-center"><span class="label">Sur place : </span>54-100</td>\n    </tr><tr><td><span class="label">Familiarité : </span><strong>Vu une seule fois</strong></td>\n      <td class="text-align-center"><span class="label">Incident : </span>01-43</td>\n      <td class="text-align-center"><span class="label">Zone similaire : </span>44-53</td>\n      <td class="text-align-center"><span class="label">À proximité : </span>54-73</td>\n      <td class="text-align-center"><span class="label">Sur place : </span>74-100</td>\n    </tr><tr><td><span class="label">Familiarité : </span><strong>Description</strong></td>\n      <td class="text-align-center"><span class="label">Incident : </span>01-43</td>\n      <td class="text-align-center"><span class="label">Zone similaire : </span>44-53</td>\n      <td class="text-align-center"><span class="label">À proximité : </span>54-73</td>\n      <td class="text-align-center"><span class="label">Sur place : </span>74-100</td>\n    </tr><tr><td><span class="label">Familiarité : </span><strong>Destination factice</strong></td>\n      <td class="text-align-center"><span class="label">Incident : </span>01-50</td>\n      <td class="text-align-center"><span class="label">Zone similaire : </span>51-100</td>\n      <td class="text-align-center"><span class="label">À proximité : </span>-</td>\n      <td class="text-align-center"><span class="label">Sur place : </span>-</td>\n    </tr></tbody></table></div></div>',
    link: '/grimoire/teleportation',
    title: 'Téléportation',
    level: '7',
    casting_time: '1 action',
    range: '3 mètres',
    components: 'V',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Tempête de feu',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '7'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une tempête faite de nuages de feu ronflant se forme à l\'endroit que vous avez choisi, à portée. La tempête occupe une zone composée d\'un maximum de dix cubes de 3 mètres d\'arête, que vous pouvez disposer comme bon vous semble. Chaque cube doit avoir au moins une face adjacente à celle d\'un autre cube. Chaque créature de la zone doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 7d10 dégâts de feu, les autres la moitié seulement.</p>\n<p>Le feu endommage les objets présents dans la zone et embrase les objets inflammables de la zone que personne ne porte ou ne transporte. Si vous le désirez, les flammes peuvent épargner la végétation présente dans la zone.</p>',
    link: '/grimoire/tempete-de-feu',
    title: 'Tempête de feu',
    level: '7',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Tempête de grêle',
      spell: {
        casting_time: '1 action',
        range: '90 mètres',
        components: 'V, S, M (une pincée de poussière et quelques gouttes d\'eau)',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Des grêlons durs comme de la pierre s\'abattent dans un cylindre de 6 mètres de rayon pour 12 mètres de haut, centré sur un point de votre choix à portée. Chaque créature présente dans le cylindre doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Celles qui échouent subissent 2d8 dégâts contondants et 4d6 dégâts de froid tandis que les autres en subissent la moitié seulement.</p>\n<p>Les grêlons transforment la zone en terrain difficile jusqu\'à la fin de votre prochain tour.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 5 ou supérieur, les dégâts contondants augmentent de 1d8 par niveau au-delà du niveau 4.</p>',
    link: '/grimoire/tempete-de-grele',
    title: 'Tempête de grêle',
    level: '4',
    casting_time: '1 action',
    range: '90 mètres',
    components: 'V, S, M (une pincée de poussière et quelques gouttes d\'eau)',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Tempête de neige',
      spell: {
        casting_time: '1 action',
        range: '45 mètres',
        components: 'V, S, M (une pincée de poussière et quelques gouttes d\'eau)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Jusqu\'à la fin du sort, une averse de flocons et de neige fondue s\'abat dans un cylindre de 6 mètres de haut pour un rayon de 12 mètres centré sur un point de votre choix situé à portée. Dans la zone, la visibilité est nulle et les flammes à nu s\'éteignent.</p>\n<p>Le sol de la zone est couvert d\'une couche de verglas si glissante que le terrain devient difficile. Quand une créature entre dans la zone d\'effet pour la première fois de son tour ou y débute son tour, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité ou tomber <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>.</p>\n<p>Si une créature se concentre dans la zone d\'effet du sort, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort, ou perdre sa concentration.</p>',
    link: '/grimoire/tempete-de-neige',
    title: 'Tempête de neige',
    level: '3',
    casting_time: '1 action',
    range: '45 mètres',
    components: 'V, S, M (une pincée de poussière et quelques gouttes d\'eau)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Tempête de sable',
      spell: {
        casting_time: '1 action',
        range: '1 kilomètre',
        components: 'V, S, M (une rose des sables)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une gigantesque tempête de sable qui balaye tout sur son passage. La vague de sable mesure 150 mètres de large, 24 mètres de long et 24 mètres de haut. Elle débute au point désigné situé à portée puis se déplace à une vitesse de 24 mètres par round dans la direction de votre choix. Une fois la direction fixée, il n\'est plus possible d\'en modifier la course. La vague inflige 8d6 dégâts contondants à toute créature qui se trouve sur son passage. Chaque créature affectée a droit à un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force pour réduire les dégâts de moitié. Les créatures de taille G ou inférieure qui le ratent sont emportées dans les airs et subissent 3d6 dégâts supplémentaires (non affectés par le résultat du jet de sauvegarde), tandis que les créatures de taille TG ou supérieure tombent <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>. Tant qu\'une créature se trouve dans la zone d\'effet de la tempête, elle est <a href="/gerer-la-sante-du-personnage#aveuglé"><em>aveuglée</em></a> et elle bénéficie d\'un abri important.</p>\n<p>Si ce sort est lancé dans un désert de sable ou de pierre, il inflige 4d6 dégâts supplémentaires (qui sont divisés par deux en cas de <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Force réussi).</p>',
    link: '/grimoire/tempete-de-sable',
    title: 'Tempête de sable',
    level: '8',
    casting_time: '1 action',
    range: '1 kilomètre',
    components: 'V, S, M (une rose des sables)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Tempête vengeresse',
      spell: {
        casting_time: '1 action',
        range: 'champ de vision',
        components: 'V, S',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '9'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>De menaçantes nuées orageuses se forment en un point situé dans votre champ de vision et s\'étendent dans un rayon de 110 mètres. Des éclairs strient la zone, le tonnerre gronde et un vent fort se lève. Chaque créature située sous le nuage lors de son apparition (mais pas à plus de 1500 mètres au-dessous) doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Celles qui échouent subissent 2d6 dégâts de tonnerre et sont <em>assourdies</em> pendant 5 minutes.</p>\n<p>À chaque round où vous continuez à vous concentrer sur ce sort, il génère des effets supplémentaires à votre tour.</p>\n<p><strong>Round 2</strong>. Une pluie acide se met à tomber. Les créatures et les objets situés sous le nuage subissent 1d6 dégâts d\'acide.</p>\n<p><strong>Round 3</strong>. Vous appelez six éclairs qui s\'abattent du nuage sur six créatures ou objets de votre choix situés sous la nuée. Une même créature ou un même objet ne peut pas être la cible de plusieurs éclairs. Une créature frappée par la foudre doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle échoue, elle subit 10d6 dégâts de foudre, la moitié seulement si elle réussit.</p>\n<p><strong>Round 4</strong>. La grêle se met à tomber. Chaque créature située sous le nuage subit 2d6 dégâts contondants.</p>\n<p><strong>Rounds 5 à 10</strong>. Des bourrasques et une pluie glacée balaient la zone sous le nuage et la transforment en terrain difficile où la visibilité est nulle. Chaque créature qui s\'y trouve subit 1d6 dégâts de froid. Il est impossible d\'effectuer une attaque avec une arme à distance dans la zone. Le vent et la pluie fonctionnent comme une distraction sévère quand il s\'agit de se concentrer sur un sort. Enfin, des bourrasques de vent fort (de 30 à 75 kilomètres par heure) dispersent automatiquement le brouillard, la brume et les phénomènes similaires stagnant dans la zone, qu\'ils soient d\'origine ordinaire ou magique.</p>',
    link: '/grimoire/tempete-vengeresse',
    title: 'Tempête vengeresse',
    level: '9',
    casting_time: '1 action',
    range: 'champ de vision',
    components: 'V, S',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Ténèbres',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, M (des poils de chauve-souris et une goutte de poix ou un bout de charbon)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Des ténèbres magiques se répandent depuis un point de votre choix situé à portée, jusqu\'à englober une sphère de 4,50 mètres de rayon. Les ténèbres s\'étendent en franchissant tout angle éventuel. La vision dans le noir d\'une créature ne suffit pas à percer ces ténèbres et les lumières non-magiques se révèlent incapables de les éclairer.</p>\n<p>Si le point que vous avez choisi est un objet en votre possession ou un objet qui n\'est ni porté ni transporté par autrui, les ténèbres émanent de l\'objet et se déplacent avec lui. Il suffit de recouvrir complètement l\'objet affecté avec un objet opaque, comme un bol ou un heaume, pour bloquer les ténèbres.</p>\n<p>Si une partie de la zone affectée par ce sort chevauche une zone de lumière issue d\'un sort de niveau 2 ou moins, elle dissipe le sort de lumière.</p>',
    link: '/grimoire/tenebres',
    title: 'Ténèbres',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, M (des poils de chauve-souris et une goutte de poix ou un bout de charbon)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Tentacules noirs',
      spell: {
        casting_time: '1 action',
        range: '27 mètres',
        components: 'V, S, M (un bout de tentacule appartenant à une pieuvre ou un calmar géant)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Des tentacules noirs grouillants envahissent le sol d\'un emplacement de 6 mètres de côté situé à portée et dans votre champ de vision. Pendant toute la durée du sort, ils transforment la zone en terrain difficile.</p>\n<p>Quand une créature pénètre dans la zone affectée pour la première fois au cours d\'un tour, ou quand elle débute son tour dans cette zone, elle doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité, sans quoi elle reçoit 3d6 dégâts contondants et se retrouve <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par les tentacules jusqu\'à la fin du sort. Une créature qui commence son tour déjà <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> dans la zone subit 3d6 dégâts contondants.</p>\n<p>Une créature <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par les tentacules peut utiliser son action pour effectuer un test de Force ou de Dextérité (à elle de choisir) contre le DD de sauvegarde de votre sort. Si elle le réussit, elle parvient à se libérer.</p>',
    link: '/grimoire/tentacules-noirs',
    title: 'Tentacules noirs',
    level: '4',
    casting_time: '1 action',
    range: '27 mètres',
    components: 'V, S, M (un bout de tentacule appartenant à une pieuvre ou un calmar géant)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Terrain hallucinatoire',
      spell: {
        casting_time: '10 minutes',
        range: '90 mètres',
        components: 'V, S, M (une pierre, une brindille et un bout de plante verte)',
        duration: '24 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '4'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous maquillez le terrain naturel dans un cube de 45 mètres d\'arête situé à portée et lui attribuez l\'apparence, les bruits et les odeurs d\'un autre type de terrain naturel. Ainsi, vous pouvez faire passer un champ ou une route pour un marais, une colline, une crevasse ou un autre terrain difficile voire impossible à traverser. Vous pouvez aussi déguiser une mare en prairie, un précipice en pente douce ou un goulet semé de rocaille en route large et aplanie. Les structures manufacturées, l\'équipement et les créatures de la zone ne changent pas d\'apparence.</p>\n<p>Les caractéristiques tactiles de la zone ne changent pas, les créatures qui y pénètrent risquent donc fort de percer l\'illusion à jour. Si la différence entre le terrain réel et l\'illusion n\'est pas évidente au toucher, une créature qui examine soigneusement la zone a droit à un test d\'Intelligence (Investigation) contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort pour percer l\'illusion à jour. Une fois qu\'une créature a compris l\'illusion, elle la voit comme une image floue superposée au terrain réel.</p>',
    link: '/grimoire/terrain-hallucinatoire',
    title: 'Terrain hallucinatoire',
    level: '4',
    casting_time: '10 minutes',
    range: '90 mètres',
    components: 'V, S, M (une pierre, une brindille et un bout de plante verte)',
    duration: '24 heures'
  },
  {
    header: {
      title: 'Texte illusoire',
      spell: {
        casting_time: '1 minute',
        range: 'contact',
        components: 'S, M (de l\'encre à base de plomb valant au minimum 10 po, que le sort consume)',
        duration: '10 jours'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Magicien',
          'Ombrelame',
          'Sorcier'
        ],
        spell_tag: [
          'rituel'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous écrivez sur un papier, un parchemin ou un autre matériau adapté à l\'écriture et l\'imprégnez d\'une puissante illusion qui persiste pendant toute la durée du sort.</p>\n<p>À vos yeux et à ceux de toutes les créatures que vous désignez lors de l\'incantation, l\'écriture semble normale, de votre main, et transmet le message que vous aviez en tête en rédigeant le texte. Pour les autres personnes, vos écrits semblent appartenir à une langue inconnue ou magique complètement inintelligible, ou alors ils transmettent un message complètement différent de la réalité, rédigé d\'une main qui n\'est pas la vôtre et dans une autre langue de votre connaissance.</p>\n<p>Si quelqu\'un dissipe le sort, l\'illusion disparaît, mais le message original aussi. Une créature dotée de vision parfaite est capable de lire le message original.</p>',
    link: '/grimoire/texte-illusoire',
    title: 'Texte illusoire',
    level: '1',
    casting_time: '1 minute',
    range: 'contact',
    components: 'S, M (de l\'encre à base de plomb valant au minimum 10 po, que le sort consume)',
    duration: '10 jours'
  },
  {
    header: {
      title: 'Thaumaturgie',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Clerc'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une manifestation merveilleuse mineure ou un signe de puissance surnaturelle à portée, ce qui génère l\'un des effets magiques suivants à portée.</p>\n<ul>\n<li>Votre voix retentit jusqu\'à trois fois plus fort que la normale pendant 1 minute.</li>\n<li>Les flammes vacillent, se ravivent, se réduisent ou changent de couleur pendant une minute.</li>\n<li>Vous provoquez des secousses inoffensives qui agitent le sol pendant 1 minute.</li>\n<li>Vous émettez un son instantané qui émane d\'un point de votre choix situé à portée, comme un roulement de tonnerre, le croassement d\'un corbeau ou des murmures inquiétants.</li>\n<li>Vous provoquez la fermeture ou l\'ouverture violente et immédiate d\'une porte ou d\'une fenêtre non verrouillée.</li>\n<li>Vous modifiez l\'apparence de vos yeux pendant 1 minute.</li>\n</ul>\n<p>Si vous lancez ce sort à plusieurs reprises, vous ne pouvez avoir que trois effets d\'une minute actifs à la fois. Vous pouvez révoquer un tel effet par une action.</p>',
    link: '/grimoire/thaumaturgie',
    title: 'Thaumaturgie',
    level: '0',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Toile d\'araignée',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S, M (un bout de toile d\'araignée)',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez une masse de toiles d\'araignées épaisses et collantes en un point de votre choix situé à portée. Pendant toute la durée du sort, les toiles occupent un cube de 6 mètres d\'arête centré sur le point choisi. Elles forment un terrain difficile à la visibilité réduite.</p>\n<p>Si les toiles ne sont pas ancrées entre deux éléments solides, comme des murs ou des arbres, ou disposées en couches sur le sol, le plafond ou un mur, elles s\'effondrent sur elles-mêmes et le sort se termine au début de votre prochain tour. Des toiles disposées en couches superposées sur une surface plane s\'accumulent sur une épaisseur de 1,50 mètre.</p>\n<p>Chaque créature qui commence son tour dans les toiles ou qui y pénètre lors de son tour doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité, ou être <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> tant qu\'elle reste dans les toiles ou jusqu\'à ce qu\'elle se libère.</p>\n<p>Une créature <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a> par les toiles peut utiliser son action pour effectuer un test de Force contre le DD du <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de votre sort. Si elle le réussit, elle n\'est plus <a href="/gerer-la-sante-du-personnage#entravé"><em>entravée</em></a>.</p>\n<p>Les toiles sont inflammables. Un cube de toiles de 1,50 mètre d\'arête exposé au feu brûle en 1 round, infligeant 2d4 dégâts de feu à toute créature qui commence son tour dans les flammes.</p>',
    link: '/grimoire/toile-daraignee',
    title: 'Toile d\'araignée',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S, M (un bout de toile d\'araignée)',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Trait de feu',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous lancez un trait enflammé sur une créature ou un objet à portée. Faites une attaque de sort à distance contre la cible. Si vous touchez, elle subit 1d10 dégâts de feu. Si le sort touche un objet inflammable qui n\'est ni porté ni transporté, il s\'embrase.</p>\n<p>Les dégâts du sort augmentent de 1d10 quand vous atteignez le niveau 5 (2d10), le niveau 11 (3d10) et le niveau 17 (4d10).</p>',
    link: '/grimoire/trait-de-feu',
    title: 'Trait de feu',
    level: '0',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Transpercer',
      spell: {
        casting_time: '1 action bonus',
        range: 'personnelle',
        components: 'V',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Rôdeur'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>La prochaine fois que vous blessez une créature avec une arme à distance qui inflige des dégâts perçants ou tranchants, l\'arme reste fichée dans le corps de votre cible. Elle lui inflige 1d4 dégâts supplémentaires à chacun de vos tours suivants jusqu\'à la fin du sort, ou jusqu\'à ce qu\'elle utilise son action pour retirer l\'arme. Retirer l\'arme lui inflige 2d4 dégâts, ou la moitié si elle réussit un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sort de niveau 2, remplacez les d4 par des d6. Pour chaque niveau de sort supérieur augmentez le dé utilisé, jusqu\'au d12 pour un emplacement de niveau 5.</p>',
    link: '/grimoire/transpercer',
    title: 'Transpercer',
    level: '1',
    casting_time: '1 action bonus',
    range: 'personnelle',
    components: 'V',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Transport végétal',
      spell: {
        casting_time: '1 action',
        range: '3 mètres',
        components: 'V, S',
        duration: '1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Druide'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort crée un lien magique entre une plante inanimée de taille G ou supérieure située à portée et une autre plante de mêmes dimensions, située à n\'importe quelle distance mais sur le même plan d\'existence. Vous devez impérativement avoir vu ou touché la plante de destination au moins une fois auparavant. Pendant toute la durée du sort, n\'importe quelle créature peut entrer par la plante de départ et ressortir par celle d\'arrivée en dépensant 1,50 mètre de déplacement.</p>',
    link: '/grimoire/transport-vegetal',
    title: 'Transport végétal',
    level: '6',
    casting_time: '1 action',
    range: '3 mètres',
    components: 'V, S',
    duration: '1 round'
  },
  {
    header: {
      title: 'Tremblement de terre',
      spell: {
        casting_time: '1 action',
        range: '150 mètres',
        components: 'V, S, M (une pincée de poussière, un caillou et un peu d\'argile)',
        duration: 'jusqu\'à 1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '8'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Ensorceleur/Sorcelame'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une perturbation sismique en un point situé au niveau du sol, dans votre champ de vision et à portée. Pendant toute la durée du sort, d\'intenses secousses agitent le sol dans un cercle de 30 mètres de rayon centré sur le point choisi. Elles ébranlent toutes les créatures et structures en contact avec le sol de cette zone.</p>\n<p>Le sol affecté devient un terrain difficile. Toute créature qui se trouve en contact avec le sol et en pleine concentration doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution sous peine de voir sa concentration brisée.</p>\n<p>Quand vous lancez ce sort, et à la fin de chacun de vos tours passés à vous concentrer dessus, toutes les créatures en contact avec le sol de la zone affectée doivent réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité ou tomber <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a>.</p>\n<p>Le sort a des effets supplémentaires selon le terrain affecté. C\'est au MJ de déterminer cela.</p>\n<p><strong>Fissures</strong>. Une fois que vous avez lancé le sort, des fissures s\'ouvrent dans toute la zone affectée au début de votre tour suivant. 1d6 fissures s\'ouvrent en des points choisis par le MJ. Chacune fait 1d10×3 mètres de profondeur pour 3 mètres de large et s\'étend d\'un bout de la zone sismique à l\'autre. Une créature qui se tient sur l\'emplacement d\'une fissure en train de s\'ouvrir doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle le rate, elle tombe dedans, sinon elle réussit à s\'écarter à temps.</p>\n<p>Une structure s\'effondre automatiquement si une fissure s\'ouvre sous elle (voir plus loin).</p>\n<p><strong>Structures</strong>. Les secousses infligent 50 dégâts contondants à toute structure en contact avec le sol au moment où vous lancez le sort et au début de chacun de vos tours jusqu\'à la fin du sort. Si l\'une d\'elles tombe à 0 point de vie, elle s\'effondre et blesse peut-être les créatures voisines. Une créature qui se trouve près d\'un bâtiment en train de s\'effondrer, à une distance égale ou inférieure à la moitié de la hauteur de ce bâtiment, doit effectuer un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Dextérité. Si elle échoue, elle subit 5d6 dégâts contondants, elle tombe <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a> et elle est ensevelie sous les décombres. Il faut réussir un test de Force (Athlétisme) DD 20 via une action pour y échapper. Le MJ peut modifier le DD en fonction de la nature des décombres. Si la créature réussit son jet de sauvegarde, elle subit seulement la moitié des dégâts, ne tombe pas <a href="/gerer-la-sante-du-personnage#à-terre"><em>à terre</em></a> et n\'est pas ensevelie.</p>',
    link: '/grimoire/tremblement-de-terre',
    title: 'Tremblement de terre',
    level: '8',
    casting_time: '1 action',
    range: '150 mètres',
    components: 'V, S, M (une pincée de poussière, un caillou et un peu d\'argile)',
    duration: 'jusqu\'à 1 minute'
  },
  {
    header: {
      title: 'Tromperie',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'S',
        duration: 'jusqu\'à 1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Illusion'
        ],
        spell_level: [
          '5'
        ],
        spell_class: [
          'Barde',
          'Magicien'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous devenez <a href="/gerer-la-sante-du-personnage#invisible"><em>invisible</em></a> à l\'instant même où un double illusoire de votre personne apparaît là où vous vous trouvez. Ce double persiste pendant toute la durée du sort, mais votre invisibilité se termine dès que vous lancez un sort ou attaquez.</p>\n<p>Vous pouvez utiliser votre action pour déplacer votre double d\'un maximum de deux fois votre vitesse et le faire bouger, parler et se comporter comme bon vous semble.</p>\n<p>Vous pouvez voir par les yeux et entendre par les oreilles de votre double comme si vous vous trouviez à son emplacement. À chacun de vos tours, vous pouvez utiliser une action bonus pour passer d\'une perception via ses sens à une perception via les vôtres ou inversement. Tant que vous utilisez les sens de votre double, vous êtes sourd et aveugle à ce qui se passe directement autour de vous.</p>',
    link: '/grimoire/tromperie',
    title: 'Tromperie',
    level: '5',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'S',
    duration: 'jusqu\'à 1 heure'
  },
  {
    header: {
      title: 'Trouver les pièges',
      spell: {
        casting_time: '1 action',
        range: '36 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Clerc',
          'Druide',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous percevez la présence de tout piège se trouvant à portée et dans votre champ de vision. Concernant ce sort, le terme de piège désigne toute chose qui inflige soudainement ou de façon inattendue un effet considéré comme néfaste ou indésirable et que son créateur a conçu dans ce but. Ainsi, le sort prévient si une zone est affectée par une alarme, un glyphe de garde ou une fosse piégée mécanique, mais il ne révèle pas une faiblesse naturelle dans un plancher, un plafond instable ou une doline cachée.</p>\n<p>Le sort indique simplement qu\'il y a un piège ; il ne précise pas où, mais vous donne une idée générale de la nature du danger qu\'il représente.</p>',
    link: '/grimoire/trouver-les-pieges',
    title: 'Trouver les pièges',
    level: '2',
    casting_time: '1 action',
    range: '36 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Trouver un chemin',
      spell: {
        casting_time: '1 minute',
        range: 'personnelle',
        components: 'V, S, M (un ensemble d\'instruments de divination [comme des os, des bâtonnets en ivoire, des cartes, des dents ou des runes gravées] d\'une valeur de 100  po et un objet venant de l\'endroit que vous cherchez)',
        duration: 'jusqu\'à 1 jour'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Druide'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Ce sort vous permet de trouver le chemin physique le plus direct et le plus court vers un endroit fixe spécifique avec lequel vous êtes familier et qui se trouve sur le même plan d\'existence que vous. Le sort échoue si vous choisissez une destination située sur un autre plan d\'existence, une destination mouvante (comme une forteresse mobile) ou une destination n\'ayant rien de spécifique (comme l\'antre d\'un dragon vert).</p>\n<p>Tant que le sort persiste et que vous êtes sur le même plan d\'existence que votre destination, vous savez dans quelle direction et à quelle distance elle se trouve. Tant que vous faites route vers votre destination, à chaque fois que vous avez le choix entre plusieurs itinéraires, vous déterminez automatiquement celui qui sera le plus court et le plus direct (mais pas forcément le plus sûr).</p>',
    link: '/grimoire/trouver-un-chemin',
    title: 'Trouver un chemin',
    level: '6',
    casting_time: '1 minute',
    range: 'personnelle',
    components: 'V, S, M (un ensemble d\'instruments de divination [comme des os, des bâtonnets en ivoire, des cartes, des dents ou des runes gravées] d\'une valeur de 100  po et un objet venant de l\'endroit que vous cherchez)',
    duration: 'jusqu\'à 1 jour'
  },
  {
    header: {
      title: 'Trouver une monture',
      spell: {
        casting_time: '10 minutes',
        range: '9 mètres',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Invocation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous invoquez un esprit qui prend la forme d\'une monture dotée d\'une intelligence, d\'une puissance et d\'une loyauté hors du commun, et créez un lien durable avec lui. La monture apparaît dans un emplacement inoccupé à portée et prend l\'apparence de votre choix : un cheval de guerre, un poney, un chameau, un élan ou un mastiff. (Votre MJ peut autoriser d\'autres formes animales.) La monture possède le profil technique de la forme choisie mais, au lieu d\'être de type normal, elle est céleste, féerique ou fiélone (à vous de choisir). De plus, si elle a d\'ordinaire une Intelligence de 5 ou moins, cette caractéristique passe à 6 et elle comprend un langage de votre choix que vous maîtrisez.</p>\n<p>Vous pouvez chevaucher votre monture au combat ou en dehors des affrontements, et le lien instinctif que vous partagez avec elle vous permet de vous battre ensemble comme si vous étiez une seule et même entité. Tant que vous la chevauchez, les sorts qui vous visent exclusivement l\'affectent aussi si vous le désirez.</p>\n<p>Quand la monture tombe à 0 point de vie, elle disparaît sans laisser de cadavre physique. Vous pouvez la renvoyer quand vous le désirez par une action qui la fait disparaître. Si vous lancez de nouveau ce sort, c\'est la même monture qui apparaît, disposant à nouveau de tous ses points de vie.</p>\n<p>Vous pouvez communiquer par télépathie avec votre monture tant qu\'elle se trouve dans un rayon de 1,50 kilomètre.</p>\n<p>Vous ne pouvez vous lier qu\'à une seule monture issue de ce sort à la fois. Vous pouvez libérer la monture du lien quand vous le désirez, par une action qui la fait disparaître.</p>',
    link: '/grimoire/trouver-une-monture',
    title: 'Trouver une monture',
    level: '2',
    casting_time: '10 minutes',
    range: '9 mètres',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Vague tonnante',
      spell: {
        casting_time: '1 action',
        range: 'personnelle (cube de 4,50 mètres)',
        components: 'V, S',
        duration: 'instantanée'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '1'
        ],
        spell_class: [
          'Barde',
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Une vague de force tonnante émane de vous. Chaque créature située dans un cube de 4,50 mètres d\'arête partant de vous doit faire un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Constitution. Les créatures qui échouent subissent 2d8 dégâts de tonnerre et sont bousculées de 3 mètres en face de vous. Les autres subissent seulement la moitié des dégâts et ne sont pas bousculées.</p>\n<p>De plus, les objets qui ne sont pas arrimés et se trouvent entièrement englobés dans la zone affectée sont automatiquement éloignés de 3 mètres à l\'opposé de vous. Le sort émet un grondement de tonnerre qui s\'entend dans un rayon de 90 mètres.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 2 ou supérieur, les dégâts augmentent de 1d8 par niveau au-delà du premier.</p>',
    link: '/grimoire/vague-tonnante',
    title: 'Vague tonnante',
    level: '1',
    casting_time: '1 action',
    range: 'personnelle (cube de 4,50 mètres)',
    components: 'V, S',
    duration: 'instantanée'
  },
  {
    header: {
      title: 'Verrou magique',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (poussière d\'or d\'une valeur minimum de 25 po, que le sort consume)',
        duration: 'jusqu\'à dissipation'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Abjuration'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une ouverture fermée, comme une porte, une fenêtre, un portail, un coffre ou autre. Elle se verrouille alors pour toute la durée du sort. Vous et toutes les créatures désignées lors de l\'incantation du sort pouvez ouvrir l\'ouverture normalement. Vous pouvez aussi définir un mot de passe qui, une fois prononcé dans un rayon de 1,50 mètre autour de l\'objet fermé, dissipe le sort pendant 1 minute. Sinon, impossible d\'ouvrir l\'objet à moins de le briser ou de dissiper ou supprimer le sort. Un sort de <em>déblocage</em> supprime le <em>verrou magique</em> pendant 10 minutes.</p>\n<p>Tant que l\'objet est affecté par ce sort, il est bien plus difficile à briser ou à ouvrir de force : le DD pour le briser ou crocheter ses éventuelles serrures augmente de 10.</p>',
    link: '/grimoire/verrou-magique',
    title: 'Verrou magique',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (poussière d\'or d\'une valeur minimum de 25 po, que le sort consume)',
    duration: 'jusqu\'à dissipation'
  },
  {
    header: {
      title: 'Viser juste',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'S',
        duration: 'jusqu\'à 1 round'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '0'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous tendez la main et pointez du doigt une cible à portée. Votre magie vous donne un bref aperçu de ses défenses. À votre prochain tour, vous avez l\'<a href="/utiliser-les-caracteristiques#avantage-et-désavantage"><em>avantage</em></a> lors de votre premier <a href="/combattre#jets-dattaque">jet d\'attaque</a> contre elle, à condition que le sort ne se soit pas terminé avant.</p>',
    link: '/grimoire/viser-juste',
    title: 'Viser juste',
    level: '0',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'S',
    duration: 'jusqu\'à 1 round'
  },
  {
    header: {
      title: 'Vision dans le noir',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une pincée de carotte séchée ou une agate)',
        duration: '8 heures'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Druide',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Ombrelame',
          'Rôdeur'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante pour lui permettre de voir dans le noir. Pendant toute la durée du sort, elle bénéficie de la vision dans le noir à une distance de 18 mètres.</p>',
    link: '/grimoire/vision-dans-le-noir',
    title: 'Vision dans le noir',
    level: '2',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une pincée de carotte séchée ou une agate)',
    duration: '8 heures'
  },
  {
    header: {
      title: 'Vision suprême',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (un collyre coûtant 25 po, fait de poudre de champignon, de safran et de graisse, que le sort consume)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '6'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Grâce à ce sort, la créature consentante que vous touchez est capable de voir les choses telles qu\'elles sont réellement. Pendant toute la durée du sort, la cible bénéficie de vision parfaite, repère les portes dérobées cachées par magie et voit le plan éthéré, tout cela dans un rayon de 36 mètres.</p>',
    link: '/grimoire/vision-supreme',
    title: 'Vision suprême',
    level: '6',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (un collyre coûtant 25 po, fait de poudre de champignon, de safran et de graisse, que le sort consume)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Vitalité',
      spell: {
        casting_time: '1 action',
        range: '9 mètres',
        components: 'V, S',
        duration: '1 minute'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Évocation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Jusqu\'à six créatures vivantes de votre choix, à portée et dans votre champ de vision, récupèrent 1 point de vie par round jusqu\'à la fin du sort.</p>\n<p><strong>À plus haut niveau</strong>. Lorsque vous lancez ce sort en utilisant un emplacement de sorts de niveau 4 ou supérieur, vous augmentez le nombre de points de vie récupéré par round de 1 point par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/vitalite',
    title: 'Vitalité',
    level: '3',
    casting_time: '1 action',
    range: '9 mètres',
    components: 'V, S',
    duration: '1 minute'
  },
  {
    header: {
      title: 'Voir l\'invisible',
      spell: {
        casting_time: '1 action',
        range: 'personnelle',
        components: 'V, S, M (une pincée de talc et un saupoudrage de poudre d\'argent)',
        duration: '1 heure'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Divination'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Ensorceleur/Sorcelame',
          'Magicien'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Pendant toute la durée du sort, vous voyez les créatures et les objets <em>invisibles</em> comme s\'ils étaient bien visibles et vous pouvez aussi observer le plan éthéré. Les créatures et les objets éthérés vous apparaissent comme des silhouettes translucides et fantomatiques.</p>',
    link: '/grimoire/voir-linvisible',
    title: 'Voir l\'invisible',
    level: '2',
    casting_time: '1 action',
    range: 'personnelle',
    components: 'V, S, M (une pincée de talc et un saupoudrage de poudre d\'argent)',
    duration: '1 heure'
  },
  {
    header: {
      title: 'Vol',
      spell: {
        casting_time: '1 action',
        range: 'contact',
        components: 'V, S, M (une rémige)',
        duration: 'jusqu\'à 10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Transmutation'
        ],
        spell_level: [
          '3'
        ],
        spell_class: [
          'Ensorceleur/Sorcelame',
          'Magicien',
          'Sorcier'
        ],
        spell_tag: [
          'concentration'
        ]
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous touchez une créature consentante et lui conférez la capacité de voler à une vitesse de 18 mètres pendant toute la durée du sort. Si la cible se trouve dans les airs quand le sort se termine, elle tombe, à moins de pouvoir arrêter sa chute.</p>\n<p><strong>À plus haut niveau</strong>. Si vous lancez ce sort en utilisant un emplacement de niveau 4 ou supérieur, vous pouvez viser une créature de plus par niveau au-delà du niveau 3.</p>',
    link: '/grimoire/vol',
    title: 'Vol',
    level: '3',
    casting_time: '1 action',
    range: 'contact',
    components: 'V, S, M (une rémige)',
    duration: 'jusqu\'à 10 minutes'
  },
  {
    header: {
      title: 'Zone de vérité',
      spell: {
        casting_time: '1 action',
        range: '18 mètres',
        components: 'V, S',
        duration: '10 minutes'
      },
      taxonomy: {
        source: [
          'Manuel des règles'
        ],
        category: [
          'docs',
          'joueur',
          'sorts'
        ],
        spell_school: [
          'Enchantement'
        ],
        spell_level: [
          '2'
        ],
        spell_class: [
          'Barde',
          'Clerc',
          'Paladin'
        ],
        spell_tag: null
      },
      process: {
        markdown: true,
        twig: true
      }
    },
    content: '<p>Vous créez une zone magique capable de protéger contre la duplicité, de la forme d\'une sphère de 4,50 mètres de rayon centrée sur un point de votre choix situé à portée. Jusqu\'à la fin du sort, une créature qui pénètre dans la sphère pour la première fois de son tour ou y commence son tour doit réussir un <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a> de Charisme. Si elle échoue, elle ne peut pas mentir délibérément tant qu\'elle reste dans la zone du sort. Vous savez si chaque créature présente a réussi ou raté son <a href="/utiliser-les-caracteristiques#jets-de-sauvegarde">jet de sauvegarde</a>.</p>\n<p>Une créature affectée est consciente du sort qui la limite et peut donc soigneusement éviter de répondre aux questions qui susciteraient normalement un mensonge de sa part. Une telle créature peut rester évasive dans ses réponses, tant qu\'elle reste dans les limites de la vérité.</p>',
    link: '/grimoire/zone-de-verite',
    title: 'Zone de vérité',
    level: '2',
    casting_time: '1 action',
    range: '18 mètres',
    components: 'V, S',
    duration: '10 minutes'
  }
];
