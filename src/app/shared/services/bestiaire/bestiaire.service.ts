import { BESTIAIRE } from './bestiaire';
import { Injectable } from '@angular/core';
import { Monstre } from 'src/app/models/monstre.interface';
import { DiceRoll } from '../../../models/dice-roll';
import { InfoParserService } from '../info-parser/info-parser.service';
import { MonstreContent } from '../../../models/monstre-content';

@Injectable({
  providedIn: 'root'
})
export class BestiaireService {

  constructor(private readonly infoParser: InfoParserService) {}

  getAll(): Monstre[] {
    return BESTIAIRE;
  }

  getById(id: string): Monstre {
    return BESTIAIRE.find(m => m.link === id);
  }

  parseContent(monstre: Monstre): MonstreContent {
    return this.infoParser.parseContent(monstre.content);
  }
}
