import { PreparedMonstre } from './prepared-monstre';
import { Character } from './character';

export interface Battle {
  id: string;
  name: string;
  monstres: PreparedMonstre[];
  characters: Character[];
}
