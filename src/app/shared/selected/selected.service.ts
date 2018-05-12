import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';

import {Basemodel} from '../../basemodel/basemodel.model';
import {BasemodelService} from '../../basemodel/basemodel.service';
import {Series} from '../../brand/series/series.model';
import {SeriesService} from '../../brand/series/series.service';
import {SerialNumber} from '../../serial-number/serial-number.model';
import {SerialNumberService} from '../../serial-number/serial-number.service';
import {InstructionSheet} from '../instruction-sheet/instruction-sheet.model';
import {InstructionSheetService} from '../instruction-sheet/instruction-sheet.service';

@Injectable()
export class SelectedService {

  private _selectedType: string;

  private _subscription: Subscription;
  selectedChanged = new Subject<any>();

  constructor(private _basemodelService: BasemodelService,
              private _serialNumberService: SerialNumberService,
              private _instructionSheetService: InstructionSheetService,
              private _seriesService: SeriesService) {
  }

  setSelected(activatedRoute: ActivatedRoute): any {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    const activatedRouteParent = <string>(activatedRoute.parent.toString().toLowerCase());
    if (activatedRouteParent.indexOf('basemodel') > 0) {
      this._selectedType = 'basemodel';
      this._subscription = this._basemodelService.selectedBasemodelChanged
        .subscribe(
          (basemodel: Basemodel) => {
            this.selectedChanged.next(basemodel);
          }
        );
      return <Basemodel>this._basemodelService.getSelectedBasemodel();
    } else {
      if (activatedRouteParent.indexOf('serialnumber') > 0) {
        this._selectedType = 'serialnumber';
        this._subscription = this._serialNumberService.selectedSerialNumberChanged
          .subscribe(
            (serialNumber: SerialNumber) => {
              this.selectedChanged.next(serialNumber);
            }
          );
        return <SerialNumber>this._serialNumberService.getSelectedSerialNumber();
      } else {
        if (activatedRouteParent.indexOf('brand') > 0) {
          this._selectedType = 'series';
          this._subscription = this._seriesService.selectedSeriesChanged
            .subscribe(
              (series: Series) => {
                this.selectedChanged.next(series);
              }
            );
          return <Series>this._seriesService.getSelectedSeries();
        } else {
          console.log('Selected service unable to determine a value for the selected object. Activated route parent is an unexpected route.');
          return undefined;
        }
      }
    }
  }

  getInstructionSheets(selected: any): InstructionSheet[] {
    if (this._selectedType === 'basemodel') {
      return this._instructionSheetService.getInstructionSheetsByBasemodel(<Basemodel>selected);
    } else {
      if (this._selectedType === 'serialnumber') {
        return this._instructionSheetService.getInstructionSheetsBySerialNumber(<SerialNumber>selected);
      } else {
        if (this._selectedType === 'series') {
          return this._instructionSheetService.getInstructionSheetsBySeries(<Series>selected);
        } else {
          console.log('Selected service unable to retrieve instructions sheets. Selected object has an unexptected type.');
          return undefined;
        }
      }
    }
  }

}
