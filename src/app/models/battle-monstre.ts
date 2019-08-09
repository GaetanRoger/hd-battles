import { Monstre } from './monstre.interface';

export interface BattleMonstre {
  monstre: Monstre;
  quantity: number;
  randomHp: boolean;
}
