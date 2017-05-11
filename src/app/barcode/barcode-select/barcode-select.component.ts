import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Barcode} from '../barcode';
import {BarcodeService} from '../barcode.service';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode-select.component.html',
  styleUrls: ['./barcode-select.component.css']
})
export class BarcodeSelectComponent implements OnInit {
  selectedBarcode: Barcode;
  barcodes: Barcode[] = [];

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _barcodeService: BarcodeService) {
  }

  ngOnInit() {
    this.getBarcodes();
  }

  onSelectedBarcode(): void {
    this._barcodeService.setSelectedBarcode(this.selectedBarcode);
    this._router.navigate([this.selectedBarcode.barcodeNumber], {relativeTo: this._activatedRoute})
      .then()
      .catch();
  }

  getBarcodes() {
    this.barcodes = this._barcodeService.getBarcodes();
  }
}
