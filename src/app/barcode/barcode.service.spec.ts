import {TestBed, inject} from '@angular/core/testing';

import {BarcodeService} from './barcode.service';

describe('BarcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarcodeService]
    });
  });

  it('should ...', inject([BarcodeService], (service: BarcodeService) => {
    expect(service).toBeTruthy();
  }));
});
