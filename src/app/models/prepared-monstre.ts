import { Monstre } from './monstre.interface';

export interface PreparedMonstre {
  monstre: Monstre;
  quantity: number;
  randomHp: boolean;
}
