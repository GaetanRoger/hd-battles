import { Character } from './character';
import { PreparedMonstre } from './prepared-monstre';

export interface BattleIndividual {
  monstre?: PreparedMonstre;
  character?: Character;
  initiative: number;
  hp?: number[];
  maxHp?: number[];
}
