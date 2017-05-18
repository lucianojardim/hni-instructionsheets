import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {SerialNumber} from './serial-number.model';
// TODO: make data changes persistent
@Injectable()
export class SerialNumberService {
  selectedSerialNumberChanged = new Subject<SerialNumber>();
  private _selectedSerialNumber: SerialNumber;
  private _serialNumbers: SerialNumber[] = [
    {id: 1, serialNumberValue: '1'},
    {id: 2, serialNumberValue: '2'},
    {id: 3, serialNumberValue: '3'},
    {id: 4, serialNumberValue: '4'},
    {id: 5, serialNumberValue: '5'},
    {id: 6, serialNumberValue: '6'},
    {id: 7, serialNumberValue: '7'},
    {id: 8, serialNumberValue: '8'},
    {id: 9, serialNumberValue: '9'},
    {id: 10, serialNumberValue: '078742074986'} // added to test the serial-number reader
  ];

  constructor() {
  }

  getSerialNumber(serialNumberValue: String): SerialNumber {
    return this._serialNumbers.find((serialNumber: SerialNumber) => serialNumber.serialNumberValue === serialNumberValue);
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
