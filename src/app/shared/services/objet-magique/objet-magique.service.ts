import { Injectable } from '@angular/core';
import { ObjetMagique } from 'src/app/models/objet-magique.interface';
import { OBJETS_MAGIQUES } from './objets-magiques';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjetMagiqueService {
  getAll(): Observable<ObjetMagique[]> {
    return of(OBJETS_MAGIQUES);
  }

  getById(id: string): Observable<ObjetMagique> {
    return of(OBJETS_MAGIQUES.find(om => om.link === id));
  }
}
