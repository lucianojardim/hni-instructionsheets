import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Barcode} from '../../barcode/barcode';
import {BarcodeService} from '../../barcode/barcode.service';
import {InstructionSheet} from '../../instruction-sheet/instruction-sheet';
import {InstructionSheetService} from '../../instruction-sheet/instruction-sheet.service';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-barcode-sheets',
  templateUrl: './barcode-sheets.component.html',
  styleUrls: ['./barcode-sheets.component.css']
})
export class BarcodeSheetsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  selectedBarcode: Barcode;
  instructionSheets: InstructionSheet[] = [];
  showAddSavedInstructionSheetMsg: boolean[] = [];

  constructor(private _barcodeService: BarcodeService,
              private _instructionSheetService: InstructionSheetService,
              private _userService: UserService) {
  }

  ngOnInit() {
    this.getInstructionSheetsOfSelectedBarcode();
  }

  getInstructionSheetsOfSelectedBarcode() {
    this.selectedBarcode = this._barcodeService.getSelectedBarcode();
    this.getInstructionSheets(this.selectedBarcode);

    this.subscription = this._barcodeService.selectedBarcodeChanged
      .subscribe(
        (barcode: Barcode) => {
          this.selectedBarcode = barcode;
          this.getInstructionSheets(this.selectedBarcode);
        }
      );

  }

  getInstructionSheets(selectedBarcode: Barcode) {
    this.instructionSheets = this._instructionSheetService.getInstructionSheetsByBarcode(selectedBarcode);
    this.showAddSavedInstructionSheetMsg = this.instructionSheets.map(show => false);
  }

  addSavedInstructionSheet(instructionSheet: InstructionSheet, i) {
    this._userService.addSavedInstructionSheetsId(instructionSheet.id);
    this.showAddSavedInstructionSheetMsg[i] = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
