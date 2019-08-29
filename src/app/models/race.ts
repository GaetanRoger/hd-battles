import { Speed } from './speed';
import { Language } from './language';
import { NightVision } from './night-vision';
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
}
