import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Barcode} from '../barcode.model';
import {BarcodeService} from '../barcode.service';

@Component({
  selector: 'app-barcode-manual',
  templateUrl: './barcode-manual.component.html',
  styleUrls: ['./barcode-manual.component.css']
})
export class BarcodeManualComponent implements OnInit {
  selectedBarcode: Barcode;
  IsToDisplayErrorMessage = true;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _barcodeService: BarcodeService) {
  }

  ngOnInit() {
  }

  getBarcode(barcodeNumber: string): void {
    if (typeof this._barcodeService.getBarcode(barcodeNumber) === 'undefined') {
      this.IsToDisplayErrorMessage = true;
      this._router.navigate(['/barcodenotfound'])
        .then()
        .catch();
    } else {
      this.IsToDisplayErrorMessage = false;
      this.selectedBarcode = this._barcodeService.getBarcode(barcodeNumber);
      this._barcodeService.setSelectedBarcode(this.selectedBarcode);
      this._router.navigate([this.selectedBarcode.barcodeNumber], {relativeTo: this._activatedRoute})
        .then()
        .catch();
    }
  }

  IsRouteBarcodeNotFound(): boolean {
    return this._activatedRoute.toString().indexOf('notfound') > 0;
  }
}
