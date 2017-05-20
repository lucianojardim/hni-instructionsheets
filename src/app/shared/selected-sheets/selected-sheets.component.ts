import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

import {Basemodel} from '../../basemodel/basemodel.model';
import {BasemodelService} from '../../basemodel/basemodel.service';
import {Series} from '../../brand/series/series.model';
import {SeriesService} from '../../brand/series/series.service';
import {SerialNumber} from '../../serial-number/serial-number.model';
import {SerialNumberService} from '../../serial-number/serial-number.service';
import {InstructionSheet} from '../instruction-sheet/instruction-sheet.model';
import {InstructionSheetService} from '../instruction-sheet/instruction-sheet.service';

@Component({
  selector: 'app-selected-sheets',
  templateUrl: './selected-sheets.component.html',
  styleUrls: ['./selected-sheets.component.css']
})
export class SelectedSheetsComponent implements OnInit, OnDestroy {
  subscriptionBaselmodel: Subscription;
  subscriptionSerialNumber: Subscription;
  subscriptionSeries: Subscription;
  selectedBasemodel: Basemodel;
  selectedSerialNumber: SerialNumber;
  selectedSeries: Series;
  instructionSheetsHeader: string;
  instructionSheets: InstructionSheet[] = [];

  constructor(private _basemodelService: BasemodelService,
              private _serialNumberService: SerialNumberService,
              private _seriesService: SeriesService,
              private _instructionSheetService: InstructionSheetService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const activatedRoute = <string>(this._activatedRoute.parent.toString().toLowerCase());
    if (activatedRoute.indexOf('basemodel') > 0) {
      this.getInstructionSheetsOfSelectedBasemodel();
    } else {
      if (activatedRoute.indexOf('serialnumber') > 0) {
        this.getInstructionSheetsOfSelectedSerialNumber();
      } else {
        if (activatedRoute.indexOf('brand') > 0) {
          this.getInstructionSheetsOfSelectedSeries();
        } else {
          console.log('Error from SelectedSheets component. This is an unidentified route.');
        }
      }
    }
  }

  getInstructionSheetsOfSelectedBasemodel() {
    this.instructionSheetsHeader = 'Instruction sheets for this base model:';
    this.selectedBasemodel = this._basemodelService.getSelectedBasemodel();
    this.getInstructionSheetsbyBasemodel(this.selectedBasemodel);

    this.subscriptionBaselmodel = this._basemodelService.selectedBasemodelChanged
      .subscribe(
        (basemodel: Basemodel) => {
          this.selectedBasemodel = basemodel;
          this.getInstructionSheetsbyBasemodel(this.selectedBasemodel);
        }
      );
  }

  getInstructionSheetsOfSelectedSerialNumber() {
    this.instructionSheetsHeader = 'Instruction sheets for this serial number:';
    this.selectedSerialNumber = this._serialNumberService.getSelectedSerialNumber();
    this.getInstructionSheetsBySerialNumber(this.selectedSerialNumber);

    this.subscriptionSerialNumber = this._serialNumberService.selectedSerialNumberChanged
      .subscribe(
        (serialNumber: SerialNumber) => {
          this.selectedSerialNumber = serialNumber;
          this.getInstructionSheetsBySerialNumber(this.selectedSerialNumber);
        }
      );
  }

  getInstructionSheetsOfSelectedSeries() {
    this.instructionSheetsHeader = 'Instruction sheets for this base model:';
    this.selectedSeries = this._seriesService.getSelectedSeries();
    this.getInstructionSheetsBySeries(this.selectedSeries);

    this.subscriptionSeries = this._seriesService.selectedSeriesChanged
      .subscribe(
        (series: Series) => {
          this.selectedSeries = series;
          this.getInstructionSheetsBySeries(this.selectedSeries);
        }
      );
  }

  getInstructionSheetsbyBasemodel(selectedBasemodel: Basemodel) {
    this.instructionSheets = this._instructionSheetService.getInstructionSheetsByBasemodel(selectedBasemodel);
  }

  getInstructionSheetsBySerialNumber(selectedSerialNumber: SerialNumber) {
    this.instructionSheets = this._instructionSheetService.getInstructionSheetsBySerialNumber(selectedSerialNumber);
  }

  getInstructionSheetsBySeries(selectedSeries: Series) {
    this.instructionSheets = this._instructionSheetService.getInstructionSheetsBySeries(selectedSeries);
  }

  ngOnDestroy() {
    if (this.subscriptionBaselmodel) {
      this.subscriptionBaselmodel.unsubscribe();
    }
    if (this.subscriptionSerialNumber) {
      this.subscriptionSerialNumber.unsubscribe();
    }
    if (this.subscriptionSeries) {
      this.subscriptionSeries.unsubscribe();
    }
  }

}
