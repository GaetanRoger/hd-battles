import { AbilityType } from './ability';
import { Speed } from './speed';
import { Language } from './language';
import { NightVision } from './night-vision';
import { ResistanceType } from './resistance-type';
export interface Race {
  name: string;
  rare: boolean;
  charBonus: {
    str?: number;
    dex?: number;
    con?: number;
    int?: number;
    wis?: number;
    cha?: number;
    others?: {
      count: number;
      value: number;
    }
  };
  age: {
    adult: number;
    max: number;
  };
  alignment: string;
  height: {
    min: number;
    avg: number;
    max: number;
  };
  weight: {
    min: number;
    avg: number;
    max: number;
  };
  speed: Speed[];
  languages: Language[];
  additionalLanguages?: number;
  nightVision?: NightVision;
  resistance?: ResistanceType;
  abilities: AbilityType[];
  magicTricks?: {
    count: number;
    incantationChar: string;
  };
}
