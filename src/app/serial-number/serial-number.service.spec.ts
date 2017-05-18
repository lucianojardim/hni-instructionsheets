import {TestBed, inject} from '@angular/core/testing';

import {SerialNumberService} from './serial-number.service';

describe('SerialNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerialNumberService]
    });
  });

  it('should ...', inject([SerialNumberService], (service: SerialNumberService) => {
    expect(service).toBeTruthy();
  }));
});
