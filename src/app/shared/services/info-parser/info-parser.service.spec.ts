import { TestBed } from '@angular/core/testing';

import { InfoParserService } from './info-parser.service';

describe('InfoParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfoParserService = TestBed.get(InfoParserService);
    expect(service).toBeTruthy();
  });
});
