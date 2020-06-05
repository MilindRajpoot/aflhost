import { TestBed } from '@angular/core/testing';

import { CompleteGameResultsService } from './complete-game-results.service';

describe('CompleteGameResultsService', () => {
  let service: CompleteGameResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompleteGameResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
