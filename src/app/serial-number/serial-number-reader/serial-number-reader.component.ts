import {Component, ViewChild, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
declare var Quagga: any;

import {SerialNumber} from '../serial-number.model';
import {SerialNumberService} from '../serial-number.service';

@Component({
  selector: 'app-serial-number-reader',
  templateUrl: './serial-number-reader.component.html',
  styleUrls: ['./serial-number-reader.component.css']
})
export class SerialNumberReaderComponent implements OnInit {
  @ViewChild('serialNumberFileInput') serialNumberFileInput;
  @ViewChild('picturePreview') picturePreview;
  selectedSerialNumber: SerialNumber;
  isToDisableSearchButton = true;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _serialNumberService: SerialNumberService) {
  }

  ngOnInit() {
  }

  startDecode() {
    if (this.serialNumberFileInput.nativeElement.files && this.serialNumberFileInput.nativeElement.files.length) {
      this.Decode(URL.createObjectURL(this.serialNumberFileInput.nativeElement.files[0]))
        .then((value: string) => this.getSerialNumber(value))
        .catch((e: string) => {
          console.log(e);
          this._router.navigate(['/serialNumber/NotDecoded'])
            .then()
            .catch(err => console.log(err));
          }
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
            reject('Unable to decode the serial-number image!');
          }
        }
      );
    });
  }

  CaptureSerialNumberImage() {
    const reader = new FileReader();
    reader.onloadend = (e) => {
      this.picturePreview.nativeElement.src = reader.result;
    };
    reader.readAsDataURL(this.serialNumberFileInput.nativeElement.files[0]);
    this.isToDisableSearchButton = false;
  }

  getSerialNumber(value: string): void {
    if (typeof this._serialNumberService.getSerialNumber(value) === 'undefined') {
      this._router.navigate(['/serialNumber/NotDecoded'])
        .then()
        .catch(err => console.log(err));
    } else {
      this.selectedSerialNumber = this._serialNumberService.getSerialNumber(value);
      this._serialNumberService.setSelectedSerialNumber(this.selectedSerialNumber);
      this._router.navigate([encodeURIComponent(this.selectedSerialNumber.value)], {relativeTo: this._activatedRoute})
        .then()
        .catch(err => console.log(err));
    }
  }
}
