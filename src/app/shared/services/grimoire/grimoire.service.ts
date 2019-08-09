import { GRIMOIRE } from './grimoire';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sort } from 'src/app/models/sort.interface';

@Injectable({
  providedIn: 'root'
})
export class GrimoireService {
  getAll(): Observable<Sort[]> {
    return of(GRIMOIRE);
  }

  getById(id: string): Observable<Sort> {
    return of(GRIMOIRE.find(s => s.link === id));
  }
}
