import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Basemodel} from '../basemodel.model';
import {BasemodelService} from '../basemodel.service';
import {InstructionSheet} from '../../shared/instruction-sheet/instruction-sheet.model';
import {InstructionSheetService} from '../../shared/instruction-sheet/instruction-sheet.service';

@Component({
  selector: 'app-basemodel-sheets',
  templateUrl: './basemodel-sheets.component.html',
  styleUrls: ['./basemodel-sheets.component.css']
})
export class BasemodelSheetsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedBasemodel: Basemodel;
  instructionSheets: InstructionSheet[] = [];

  constructor(private _basemodelService: BasemodelService,
              private _instructionSheetService: InstructionSheetService) {
  }

  ngOnInit() {
    this.getInstructionSheetsOfSelectedBasemodel();
  }

  getInstructionSheetsOfSelectedBasemodel() {
    this.selectedBasemodel = this._basemodelService.getSelectedBasemodel();
    this.getInstructionSheets(this.selectedBasemodel);

    this.subscription = this._basemodelService.selectedBasemodelChanged
      .subscribe(
        (basemodel: Basemodel) => {
          this.selectedBasemodel = basemodel;
          this.getInstructionSheets(this.selectedBasemodel);
        }
      );

  }

  getInstructionSheets(selectedBasemodel: Basemodel) {
    this.instructionSheets = this._instructionSheetService.getInstructionSheetsByBasemodel(selectedBasemodel);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
