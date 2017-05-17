import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Barcode} from './barcode.model';
// TODO: make data changes persistent
@Injectable()
export class BarcodeService {
  selectedBarcodeChanged = new Subject<Barcode>();
  private _selectedBarcode: Barcode;
  private _barcodes: Barcode[] = [
    {id: 1, barcodeNumber: '1'},
    {id: 2, barcodeNumber: '2'},
    {id: 3, barcodeNumber: '3'},
    {id: 4, barcodeNumber: '4'},
    {id: 5, barcodeNumber: '5'},
    {id: 6, barcodeNumber: '6'},
    {id: 7, barcodeNumber: '7'},
    {id: 8, barcodeNumber: '8'},
    {id: 9, barcodeNumber: '9'},
    {id: 10, barcodeNumber: '078742074986'} // added to test the barcode reader
  ];

  constructor() {
  }

  getBarcode(barcodeNumber: String): Barcode {
    return this._barcodes.find((barcode: Barcode) => barcode.barcodeNumber === barcodeNumber);
  }

  getId(barcodeNumber: String): number {
    return this.getBarcode(barcodeNumber).id;
  }

  getBarcodes(): Barcode[] {
    return this._barcodes.slice();
  }

  getSelectedBarcode(): Barcode {
    return this._selectedBarcode;
  }

  setSelectedBarcode(barcode: Barcode) {
    this._selectedBarcode = barcode;
    this.selectedBarcodeChanged.next(this._selectedBarcode);
  }
}
