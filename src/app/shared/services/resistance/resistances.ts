import { ResistanceType } from 'src/app/models/resistance-type';

export class Resistance {
  static readonly Infernale: ResistanceType = {
    name: 'Résistance infernale',
    resists: 'feu'
  };

  static readonly Celeste: ResistanceType = {
    name: 'Résistance céleste',
    resists: 'nécrotique'
  };

  static readonly Naine: ResistanceType = {
    name: 'Résistance naine',
    resists: 'poison',
    avantage: 'poison'
  };
}
