import { Monstre } from './monstre';

export interface PreparedMonstre {
  monstre: Monstre;
  quantity: number;
  randomHp: boolean;
}
