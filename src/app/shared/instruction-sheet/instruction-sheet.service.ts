import {Injectable} from '@angular/core';

import {Series} from '../../brand/series/series.model';
import {SerialNumber} from '../../serial-number/serial-number.model';
import {Basemodel} from '../../basemodel/basemodel.model';
import {InstructionSheet} from './instruction-sheet.model';
import {DataService} from '../data/data.service';

@Injectable()
export class InstructionSheetService {
  private _instructionSheets: InstructionSheet[] = [];

  constructor(private _dataService: DataService) {
    this._getInitialData();
  }

  getInstructionSheetsByIds(instructionSheetIds: number[]): InstructionSheet[] {
    const result: InstructionSheet[] = [];
    const arrayLength: number = instructionSheetIds.length;
    for (let i = 0; i < arrayLength; i++) {
      result.push(this.getInstructionSheetsById(instructionSheetIds[i]));
    }
    return result;
  }

  getInstructionSheetsById(id: number): InstructionSheet {
    return this._instructionSheets.find((instructionSheet: InstructionSheet) => instructionSheet.id === id);
  }

  getInstructionSheetsBySeries(series: Series): InstructionSheet[] {
    return this.getInstructionSheetsBySeriesId(series.id);
  }

  getInstructionSheetsBySeriesId(seriesId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.seriesIdArray.find(
          (element: number) =>
          element === seriesId
        )
    );
  }

  getInstructionSheetsBySerialNumber(serialNumber: SerialNumber): InstructionSheet[] {
    return this.getInstructionSheetsBySerialNumberId(serialNumber.id);
  }

  getInstructionSheetsBySerialNumberId(serialNumberId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.serialNumberIdArray.find(
          (element: number) =>
          element === serialNumberId
        )
    );
  }

  getInstructionSheetsByBasemodel(basemodel: Basemodel): InstructionSheet[] {
    return this.getInstructionSheetsByBasemodelId(basemodel.id);
  }

  getInstructionSheetsByBasemodelId(basemodelId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.basemodelIdArray.find(
          (element: number) =>
          element === basemodelId
        )
    );
  }

  private _getInitialData() {
    this._dataService.getInstructionSheets()
      .subscribe(
        data => {
          this._instructionSheets = data;
          console.log('from instruction-sheets.service _getInitialData');
        },
        err => console.log('Could not read Instruction Sheets', err)
      );
  }

}
