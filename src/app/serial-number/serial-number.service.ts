import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {SerialNumber} from './serial-number.model';
// TODO: make data changes persistent
@Injectable()
export class SerialNumberService {
  selectedSerialNumberChanged = new Subject<SerialNumber>();
  private _selectedSerialNumber: SerialNumber;
  private _serialNumbers: SerialNumber[] = [
    {id: 1, serialNumberValue: 'CLLNLL'},
    {id: 2, serialNumberValue: 'MFUZW6'},
  ];

  constructor() {
  }

  getSerialNumber(serialNumberValue: String): SerialNumber {
    return this._serialNumbers.find((serialNumber: SerialNumber) => serialNumber.serialNumberValue.toLowerCase() === serialNumberValue.toLowerCase());
  }

  getId(serialNumberValue: String): number {
    return this.getSerialNumber(serialNumberValue).id;
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
}
