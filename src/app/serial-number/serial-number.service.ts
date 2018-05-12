import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {SerialNumber} from './serial-number.model';
import {DataService} from '../shared/data/data.service';

@Injectable()
export class SerialNumberService {
  selectedSerialNumberChanged = new Subject<SerialNumber>();
  private _selectedSerialNumber: SerialNumber;
  private _serialNumbers: SerialNumber[] = [];

  constructor(private _dataService: DataService) {
    this._getInitialData();
  }

  getSerialNumber(value: String): SerialNumber {
    return this._serialNumbers.find((serialNumber: SerialNumber) => serialNumber.value.toLowerCase() === value.toLowerCase());
  }

  getId(value: String): number {
    return this.getSerialNumber(value).id;
  }

  getSerialNumbers(): SerialNumber[] {
    return this._serialNumbers.slice();
  }

  getSelectedSerialNumber(): SerialNumber {
    return this._selectedSerialNumber;
  }

  setSelectedSerialNumber(serialNumber: SerialNumber) {
    this._selectedSerialNumber = serialNumber;
    this.selectedSerialNumberChanged.next(this._selectedSerialNumber);
  }

  private _getInitialData() {
    this._dataService.getSerialNumbers()
      .subscribe(
        data => {
          this._serialNumbers = data;
        },
        err => console.log('Could not read Serial Numbers', err)
      );
  }
}
