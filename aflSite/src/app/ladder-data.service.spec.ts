import { TestBed } from '@angular/core/testing';

import { LadderDataService } from './ladder-data.service';

describe('LadderDataService', () => {
  let service: LadderDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LadderDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
