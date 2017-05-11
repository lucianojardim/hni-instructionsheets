import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

declare var Quagga: any;

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.css']
})
export class BarcodeReaderComponent implements OnInit {

  @ViewChild('barcodeFileInput') barcodeFileInput;
  codeResult: string;
  srcURL: string;

  constructor(private _elementRef: ElementRef, private _domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log(this);
  }

  startDecode(event) {
    const input = this._elementRef.nativeElement.querySelector('#barcodeFileInput');
    if (input[0].files && input[0].files.length) {
      const tmpImgURL = URL.createObjectURL(input[0].files[0]);
      this.Decode(tmpImgURL);
    }
  }

  Decode(src: string) {
    console.log(src);
    console.log(Quagga);
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
      function (result) {
        console.log(result);
        if (result && result.codeResult && result.codeResult.code) {
          console.log(result.codeResult.code);
        } else {
          this.codeResult = 'Unable to read barcode!';
        }
      }
    );
  }

  OnChange(event): void {
    this.codeResult = ' ';
    const reader = new FileReader();
    const image = this._elementRef.nativeElement.querySelector('#picturePreview');
    reader.onload = (e) => {
      // console.log(reader.result);
      const src = reader.result;
      image.src = src;
    };
    // console.log(reader.result);
    reader.readAsDataURL(event.target.files[0]);
    const file = URL.createObjectURL(event.target.files[0]);
    const fileURL = this._domSanitizer.bypassSecurityTrustUrl(file);

    // console.log(event.target.files[0]);
    // this.Decode(image.src);
    this.Decode(file);

    // const file: File = inputValue.files[0];
    // try {
    //   const URL = window.URL;
    //   this.srcURL = URL.createObjectURL(file);
    // } catch (e) {
    //   try {
    //     const myReader: FileReader = new FileReader();
    //     myReader.onload = function(e){
    //       console.log(e);
    //       // you can perform an action with readed data here
    //       console.log(myReader.result);
    //     };
    //     myReader.readAsDataURL(file);
    //   } catch (e) {
    //       this.codeResult = 'Failure! createObjectURL and FileReader are not supported in this browser.';
    //   }
    // }
  }
}
