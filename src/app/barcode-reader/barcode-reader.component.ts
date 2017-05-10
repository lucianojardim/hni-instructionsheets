import {Component, OnInit} from '@angular/core';
import {Quagga} from 'quagga';

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.component.html',
  styleUrls: ['./barcode-reader.component.css']
})
export class BarcodeReaderComponent implements OnInit {
  private state = {
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
    // src: src
  };

  constructor() {
  }

  ngOnInit() {
    Quagga.init(this.state, (err) => {
      if (err) {
        return console.log(err);
      }
      Quagga.start();
    });

    Quagga.onProcessed((result) => this.onProcessed(result));
  }

  onStartDecode(barcodeFileInput: HTMLInputElement) {
    if (barcodeFileInput[0].files && barcodeFileInput[0].files.length) {
      const tmpImgURL = URL.createObjectURL(barcodeFileInput[0].files[0]);
      this.DecodeImage(tmpImgURL);
    }
  }

  DecodeImage(src: any) {
  }

  onProcessed(result: any) {
    const drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute('width'), 10), parseInt(drawingCanvas.getAttribute('height'), 10));
        result.boxes.filter(function (box) {
          return box !== result.box;
        }).forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, {x: 0, y: 1}, drawingCtx, {color: 'green', lineWidth: 2});
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, {x: 0, y: 1}, drawingCtx, {color: '#00F', lineWidth: 2});
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, {x: 'x', y: 'y'}, drawingCtx, {color: 'red', lineWidth: 3});
      }
    }
  }
}
