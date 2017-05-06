import {Component, OnInit} from '@angular/core';

// import { Brand } from '../brand/brand';
// import { Series } from './series';
import {InstructionSheet} from '../instruction-sheet/instruction-sheet';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  // TODO: selectedBrand has to be shared and dynamic
  // selectedBrand: Brand = {name: 'hon'};
  // TODO: changes to a dynamic attribution instead of hardcoded
  // selectedSeries: Series = {name: '101 Series'};
  // TODO: changes to a dynamic attribution instead of hardcoded
  // selectedInstructionSheet: InstructionSheet = {barcode: '', url: ''};
  // TODO: create InstructionSheetService and convert this to a getInstructionSheets
  instructionSheets: InstructionSheet[] = [
    {
      name: 'Abound (French)',
      barcode: '430061000',
      url: 'https://hnicorporation.sharepoint.com/sites/extJardimL/_layouts/15/guestaccess.aspx?docid=10456589f66424a909dc0fb303f039632&authkey=ARz_i_C1QstMy9fKVoca6rY'
    }
  ];
  //
  constructor() {
  }

  ngOnInit() {
  }

}
