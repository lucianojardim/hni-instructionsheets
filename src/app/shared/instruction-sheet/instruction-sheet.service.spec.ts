import {TestBed, inject} from '@angular/core/testing';

import {InstructionSheetService} from './instruction-sheet.service';

describe('InstructionSheetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructionSheetService]
    });
  });

  it('should ...', inject([InstructionSheetService], (service: InstructionSheetService) => {
    expect(service).toBeTruthy();
  }));
});
