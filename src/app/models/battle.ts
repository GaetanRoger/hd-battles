import { PreparedMonstre } from './prepared-monstre';
import { Character } from './character';

export interface Battle {
  id: string;
  name: string;
  creationDate: Date;
  lastModificationDate: Date;
  monstres: PreparedMonstre[];
  characters: Character[];
}
