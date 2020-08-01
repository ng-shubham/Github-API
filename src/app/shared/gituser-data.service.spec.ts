import { TestBed } from '@angular/core/testing';

import { GituserDataService } from './gituser-data.service';

describe('GituserDataService', () => {
  let service: GituserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GituserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
