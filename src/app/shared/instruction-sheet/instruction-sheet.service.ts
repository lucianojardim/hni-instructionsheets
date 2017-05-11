import {Injectable} from '@angular/core';

import {Series} from '../../brand/series/series';
import {Barcode} from '../../barcode/barcode';
import {InstructionSheet} from './instruction-sheet';
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class InstructionSheetService {
  // TODO Review the links between instruction sheets and series and barcode -- I believe some are not correct
  private _instructionSheets: InstructionSheet[] = [
    {
      id: 1,
      name: '143-0118.pdf',
      fileName: '143-0118.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=10456589f66424a909dc0fb303f039632&authkey=ARz_i_C1QstMy9fKVoca6rY',
      seriesIdArray: [30,
        31,
        32,
        33,
        34,
        35,
        36,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        63,
        64,
        65,
        66,
        67,
        70],
      barcodeIdArray: [17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        61,
        69]
    },
    {
      id: 2,
      name: '143-0133.pdf',
      fileName: '143-0133.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1f5823bfc82fe4a92a867ac61914a4d92&authkey=AUhOTGW2VGeE0yQ1zNmtZdM',
      seriesIdArray: [46],
      barcodeIdArray: [17]
    },
    {
      id: 3,
      name: '143-0160.pdf',
      fileName: '143-0160.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=159cae41b9a444ec8b007549970e2d16a&authkey=ARUZmQ-YhPlFbVVeUTduKrg',
      seriesIdArray: [30],
      barcodeIdArray: [70]
    },
    {
      id: 4,
      name: '343-0477.pdf',
      fileName: '343-0477.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1445b7d3917b34096843713dca68ac800&authkey=Ab1HVFepXnxc0n4gHKDrP5A',
      seriesIdArray: [5,
        7,
        18,
        21],
      barcodeIdArray: [17,
        31,
        32,
        69]
    },
    {
      id: 5,
      name: '343-2270G.pdf',
      fileName: '343-2270G.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1445b7d3917b34096843713dca68ac800&authkey=Ab1HVFepXnxc0n4gHKDrP5A',
      seriesIdArray: [2,
        3,
        4,
        6,
        7,
        9,
        10,
        12,
        13,
        14,
        15,
        16,
        18,
        19,
        20,
        23,
        27,
        28],
      barcodeIdArray: [3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        61,
        69]
    },
    {
      id: 6,
      name: '3430389000.pdf',
      fileName: '3430389000.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1ebeaec663ec84068a9b0a4980f07c3a5&authkey=AReXBvKYBLSib9Ws15kJK1s',
      seriesIdArray: [1,
        6,
        7,
        8,
        11,
        16,
        17,
        22,
        24,
        25,
        26,
        29],
      barcodeIdArray: [45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63,
        64,
        65,
        66,
        67,
        68,
        69]
    },
    {
      id: 7,
      name: '42-2241.pdf',
      fileName: '42-2241.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1931697695c80464eb463f9a2331e61b4&authkey=Ab3NoC9zH1_2E-pEZRUFkFc',
      seriesIdArray: [49],
      barcodeIdArray: [1]
    },
    {
      id: 8,
      name: '42-2248.pdf',
      fileName: '42-2248.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=18032d47f9b344ac3a20f6bbbb6e7ccc8&authkey=AajVxQZhPGJs6V_E9EOb3ig',
      seriesIdArray: [30,
        68,
        69],
      barcodeIdArray: [2, 3]
    },
    {
      id: 9,
      name: '42-2249.pdf',
      fileName: '42-2249.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1ccd700be97c44c4c87aaef6879bf5842&authkey=AYYsbJ_QRZZGc1JPp2BIaPU',
      seriesIdArray: [46],
      barcodeIdArray: [17]
    },
    {
      id: 10,
      name: '42-2328.pdf',
      fileName: '42-2328.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=162f7ae3f5d1f4da0b810e0e739b82e6e&authkey=AdYWfjTDNVHlcJWkYIePqKU',
      seriesIdArray: [37],
      barcodeIdArray: [4]
    },
    {
      id: 11,
      name: '42-2333.pdf',
      fileName: '42-2333.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=14d850367ac194502b5b20edefb912f92&authkey=AQTN15iv9Pk3WFXr7L2jqkg',
      seriesIdArray: [37],
      barcodeIdArray: [4]
    },
    {
      id: 12,
      name: '43-0179.pdf',
      fileName: '43-0179.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1fd7b37c3fcbf4cd49cbcabfe0df87702&authkey=AdYlcUrxzoFHpaiA4y6g0gg',
      seriesIdArray: [62,
        65],
      barcodeIdArray: [39, 44]
    },
    {
      id: 13,
      name: '56-0196.pdf',
      fileName: '56-0196.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=1711a34dc55b5405898c6c14c6d287ed0&authkey=AZi4fcqIh3B_9-Oak913WI4',
      seriesIdArray: [46,
        48],
      barcodeIdArray: [6]
    },
    {
      id: 14,
      name: '56-0415.pdf',
      fileName: '56-0415.pdf',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=192f125bf12d04f6a9636b57a5b1fcd50&authkey=Ab9QFPOgQNJ4dgnttSQBoXE',
      seriesIdArray: [45],
      barcodeIdArray: [7, 71] // Added 71 to support tests with barcode reader
    }
  ];

  constructor() {
  }

  getInstructionSheetsByIds(instructionSheetIds: number[]): InstructionSheet[] {
    const result: InstructionSheet[] = [];
    const arrayLength: number = instructionSheetIds.length;
    for (let i = 0; i < arrayLength; i++) {
      result.push(this.getInstructionSheetsById(instructionSheetIds[i]));
    }
    return result;
  }

  getInstructionSheetsById(id: number): InstructionSheet {
    return this._instructionSheets.find((instructionSheet: InstructionSheet) => instructionSheet.id === id);
  }

  getInstructionSheetsBySeries(series: Series): InstructionSheet[] {
    return this.getInstructionSheetsBySeriesId(series.id);
  }
  getInstructionSheetsBySeriesId(seriesId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.seriesIdArray.find(
          (element: number) =>
          element === seriesId
        )
    );
  }

  getInstructionSheetsByBarcode(barcode: Barcode): InstructionSheet[] {
    return this.getInstructionSheetsByBarcodeId(barcode.id);
  }

  getInstructionSheetsByBarcodeId(barcodeId: number): InstructionSheet[] {
    return this._instructionSheets.filter(
      (instructionSheet: InstructionSheet) =>
        instructionSheet.barcodeIdArray.find(
          (element: number) =>
          element === barcodeId
        )
    );
  }
}
