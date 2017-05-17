import {Component, ViewChild, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
declare var Quagga: any;

import {Barcode} from '../barcode.model';
import {BarcodeService} from '../barcode.service';

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.css']
})
export class BarcodeReaderComponent implements OnInit {
  @ViewChild('barcodeFileInput') barcodeFileInput;
  @ViewChild('picturePreview') picturePreview;
  selectedBarcode: Barcode;
  isToDisableSearchButton = true;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _barcodeService: BarcodeService) {
  }

  ngOnInit() {
  }

  startDecode() {
    if (this.barcodeFileInput.nativeElement.files && this.barcodeFileInput.nativeElement.files.length) {
      this.Decode(URL.createObjectURL(this.barcodeFileInput.nativeElement.files[0]))
        .then((barcodeNumber: string) => this.getBarcode(barcodeNumber))
        .catch((e: string) =>
          this._router.navigate(['/barcodenotfound'])
            .then()
            .catch()
        );
    }
    this.isToDisableSearchButton = true;
  }

  Decode(src: string) {
    return new Promise((resolve, reject) => {
      Quagga.decodeSingle(
        {
          inputStream: {
            size: 640,
            singleChannel: false
          },
          locator: {
            patchSize: 'large',
            halfSample: false
          },
          decoder: {
            readers: [
              'upc_reader',
              'code_128_reader',
              'code_39_reader',
              'code_39_vin_reader',
              'ean_8_reader',
              'ean_reader',
              'upc_e_reader',
              'codabar_reader'
            ]
          },
          locate: true,
          src: src
        },
        result => {
          if (result && result.codeResult && result.codeResult.code) {
            resolve(result.codeResult.code);
          } else {
            reject('Unable to decode the barcode image!');
          }
        }
      );
    });
  }

  CaptureBarcodeImage() {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      this.picturePreview.nativeElement.src = reader.result;
    };
    reader.readAsDataURL(this.barcodeFileInput.nativeElement.files[0]);
    this.isToDisableSearchButton = false;
  }

  getBarcode(barcodeNumber: string): void {
    if (typeof this._barcodeService.getBarcode(barcodeNumber) === 'undefined') {
      // this.IsToDisplayErrorMessage = true;
      this._router.navigate(['/barcodenotfound'])
        .then()
        .catch();
    } else {
      // this.IsToDisplayErrorMessage = false;
      this.selectedBarcode = this._barcodeService.getBarcode(barcodeNumber);
      this._barcodeService.setSelectedBarcode(this.selectedBarcode);
      this._router.navigate([this.selectedBarcode.barcodeNumber], {relativeTo: this._activatedRoute})
        .then()
        .catch();
    }
  }
}
