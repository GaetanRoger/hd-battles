import { TestBed } from '@angular/core/testing';

import { GrimoireService } from './grimoire.service';

describe('GrimoireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrimoireService = TestBed.get(GrimoireService);
    expect(service).toBeTruthy();
  });
});
