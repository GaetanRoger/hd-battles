import { TestBed } from '@angular/core/testing';

import { BestiaireService } from './bestiaire.service';

describe('BestiaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestiaireService = TestBed.get(BestiaireService);
    expect(service).toBeTruthy();
  });
});
