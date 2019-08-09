import { BESTIAIRE } from './bestiaire';
import { Injectable } from '@angular/core';
import { Monstre } from 'src/app/models/monstre.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BestiaireService {

  getAll(): Monstre[] {
    return BESTIAIRE;
  }

  getById(id: string): Monstre {
    return BESTIAIRE.find(m => m.link === id);
  }
}
