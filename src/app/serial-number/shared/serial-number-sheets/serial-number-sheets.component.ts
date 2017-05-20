import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {SerialNumber} from '../../serial-number.model';
import {SerialNumberService} from '../../serial-number.service';
import {InstructionSheet} from '../../../shared/instruction-sheet/instruction-sheet.model';
import {InstructionSheetService} from '../../../shared/instruction-sheet/instruction-sheet.service';

@Component({
  selector: 'app-serial-number-sheets',
  templateUrl: './serial-number-sheets.component.html',
  styleUrls: ['./serial-number-sheets.component.css']
})
export class SerialNumberSheetsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  selectedSerialNumber: SerialNumber;
  instructionSheets: InstructionSheet[] = [];

  constructor(private _serialNumberService: SerialNumberService,
              private _instructionSheetService: InstructionSheetService
              ) {
  }

  ngOnInit() {
    this.getInstructionSheetsOfSelectedSerialNumber();
  }

  getInstructionSheetsOfSelectedSerialNumber() {
    this.selectedSerialNumber = this._serialNumberService.getSelectedSerialNumber();
    this.getInstructionSheets(this.selectedSerialNumber);

    this.subscription = this._serialNumberService.selectedSerialNumberChanged
      .subscribe(
        (serialNumber: SerialNumber) => {
          this.selectedSerialNumber = serialNumber;
          this.getInstructionSheets(this.selectedSerialNumber);
        }
      );

  }

  getInstructionSheets(selectedSerialNumber: SerialNumber) {
    this.instructionSheets = this._instructionSheetService.getInstructionSheetsBySerialNumber(selectedSerialNumber);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
