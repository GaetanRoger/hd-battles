import { TestBed } from '@angular/core/testing';

import { ObjetMagiqueService } from './objet-magique.service';

describe('ObjetMagiqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjetMagiqueService = TestBed.get(ObjetMagiqueService);
    expect(service).toBeTruthy();
  });
});
