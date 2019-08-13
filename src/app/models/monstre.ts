import { MonstreContent } from './monstre-content';
import { DiceRoll } from './dice-roll';
import { Carac } from './carac';
import { Sens } from './sens';
import { ClasseArmure } from './classe-armure';
import { Speed } from './speed';

export interface Monstre {
  header: {
    title: string;
    monster: {
      type: string;
      subtype?: string;
      size: string;
      altsize?: string;
      alignment: string;
      ac: string;
      hp: string;
      speed: string;
      str: string;
      dex: string;
      con: string;
      int: string;
      wis: string;
      cha: string;
      saves: string;
      skills: string;
      vulnerabilities?: string;
      resistances?: string;
      immunities?: string;
      immunities_debilities?: string[];
      senses: string;
      languages: string;
      challenge: string;
      px: string;
    };
    taxonomy: {
      source: string[];
      category: string[];
      monster_category: string[];
      monster_challenge: string[];
      monster_type: string[];
      monster_environnement: string[];
      monster_dungeon_type: string[];
    };
  };
  content: string;
  link: string;
  title: string;
  category: string[];
  display_type: string;
  type: string;
  truetype: string;
  subtype?: string;
  size: string;
  altsize?: string;
  alignment: string;
  challenge: string;
  environment: string[];
  dungeon_type: string[];
  parsed: {
    content: MonstreContent;
    hp: DiceRoll;
    str: Carac;
    dex: Carac;
    int: Carac;
    con: Carac;
    wis: Carac;
    cha: Carac;
    ac: ClasseArmure;
    senses: Sens[];
    speed: Speed[];
  };
}
