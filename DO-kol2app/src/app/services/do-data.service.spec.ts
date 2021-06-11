import { TestBed } from '@angular/core/testing';
import { DODataService } from './do-data.service';

describe('DODataService', () => {
  let service: DODataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DODataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
