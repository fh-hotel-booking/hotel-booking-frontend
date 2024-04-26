import { TestBed } from '@angular/core/testing';

import { BookingDataService } from './booking-data.service';

describe('BookingDataServiceService', () => {
  let service: BookingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
