import { TestBed } from '@angular/core/testing';

import { StdtableService } from './stdtable.service';

describe('StdtableService', () => {
  let service: StdtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StdtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
