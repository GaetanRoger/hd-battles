import { BattleMonstre } from './battle-monstre';

export interface Battle {
  id: string;
  name: string;
  monstres: BattleMonstre[];
}
