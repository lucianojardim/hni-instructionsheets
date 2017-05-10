import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Barcode} from '../barcode/barcode';
import {BarcodeService} from '../barcode/barcode.service';

@Component({
  selector: 'app-barcode-manual',
  templateUrl: './barcode-manual.component.html',
  styleUrls: ['./barcode-manual.component.css']
})
export class BarcodeManualComponent implements OnInit {
  selectedBarcode: Barcode;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _barcodeService: BarcodeService) {
  }

  ngOnInit() {
  }

  getBarcode(barcodeNumber: string): void {
    this.selectedBarcode = this._barcodeService.getBarcode(barcodeNumber);
    this._barcodeService.setSelectedBarcode(this.selectedBarcode);
    this._router.navigate([this.selectedBarcode.barcodeNumber], {relativeTo: this._activatedRoute})
      .then()
      .catch();
  }
}
