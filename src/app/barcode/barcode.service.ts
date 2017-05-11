import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Barcode} from './barcode';

@Injectable()
export class BarcodeService {
  selectedBarcodeChanged = new Subject<Barcode>();
  private _selectedBarcode: Barcode;
  private _barcodes: Barcode[] = [
    {id: 1, barcodeNumber: '0420223000'},
    {id: 2, barcodeNumber: '0420224100'},
    {id: 3, barcodeNumber: '0420224800'},
    {id: 4, barcodeNumber: '0420230000'},
    {id: 5, barcodeNumber: '0420230600'},
    {id: 6, barcodeNumber: '0420231700'},
    {id: 7, barcodeNumber: '0420232800'},
    {id: 8, barcodeNumber: '0420233000'},
    {id: 9, barcodeNumber: '0420233300'},
    {id: 10, barcodeNumber: '0420233600'},
    {id: 11, barcodeNumber: '0420233700'},
    {id: 12, barcodeNumber: '0420236000'},
    {id: 13, barcodeNumber: '0420236100'},
    {id: 14, barcodeNumber: '0420236200'},
    {id: 15, barcodeNumber: '0420236400'},
    {id: 16, barcodeNumber: '0420237500'},
    {id: 17, barcodeNumber: '0420237600'},
    {id: 18, barcodeNumber: '0420237900'},
    {id: 19, barcodeNumber: '0420239000'},
    {id: 20, barcodeNumber: '0420239100'},
    {id: 21, barcodeNumber: '0420244000'},
    {id: 22, barcodeNumber: '0420246500'},
    {id: 23, barcodeNumber: '0420247000'},
    {id: 24, barcodeNumber: '0420253800'},
    {id: 25, barcodeNumber: '0420255200'},
    {id: 26, barcodeNumber: '0420261900'},
    {id: 27, barcodeNumber: '0420264800'},
    {id: 28, barcodeNumber: '0420268500'},
    {id: 29, barcodeNumber: '0420273000'},
    {id: 30, barcodeNumber: '0420537200'},
    {id: 31, barcodeNumber: '0420539000'},
    {id: 32, barcodeNumber: '0420557700'},
    {id: 33, barcodeNumber: '0420560400'},
    {id: 34, barcodeNumber: '0420930200'},
    {id: 35, barcodeNumber: '0420983000'},
    {id: 36, barcodeNumber: '0420995000'},
    {id: 37, barcodeNumber: '0430016600'},
    {id: 38, barcodeNumber: '0430060200'},
    {id: 39, barcodeNumber: '0430061000'},
    {id: 40, barcodeNumber: '0460006200'},
    {id: 41, barcodeNumber: '0460104300'},
    {id: 42, barcodeNumber: '0460104400'},
    {id: 43, barcodeNumber: '0460105000'},
    {id: 44, barcodeNumber: '0560008500'},
    {id: 45, barcodeNumber: '0560019600'},
    {id: 46, barcodeNumber: '0560021100'},
    {id: 47, barcodeNumber: '0560022200'},
    {id: 48, barcodeNumber: '0560022300'},
    {id: 49, barcodeNumber: '0560023100'},
    {id: 50, barcodeNumber: '0560033100'},
    {id: 51, barcodeNumber: '0560033300'},
    {id: 52, barcodeNumber: '0560033400'},
    {id: 53, barcodeNumber: '0560033600'},
    {id: 54, barcodeNumber: '0560033700'},
    {id: 55, barcodeNumber: '0560033800'},
    {id: 56, barcodeNumber: '0560039500'},
    {id: 57, barcodeNumber: '0560040600'},
    {id: 58, barcodeNumber: '0560040800'},
    {id: 59, barcodeNumber: '0560041500'},
    {id: 60, barcodeNumber: '0560041900'},
    {id: 61, barcodeNumber: '0560042100'},
    {id: 62, barcodeNumber: '0560043000'},
    {id: 63, barcodeNumber: '0560044000'},
    {id: 64, barcodeNumber: '0560044100'},
    {id: 65, barcodeNumber: '0560044200'},
    {id: 66, barcodeNumber: '0560044500'},
    {id: 67, barcodeNumber: '0560044700'},
    {id: 68, barcodeNumber: '0560044800'},
    {id: 69, barcodeNumber: '1430011700'},
    {id: 70, barcodeNumber: '1430016000'},
    {id: 71, barcodeNumber: '078742074986'} // added to test the barcode reader
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
