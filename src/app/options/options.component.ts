import {Component, OnInit} from '@angular/core';

import {Brand} from '../brand/brand.model';
import {BrandService} from '../brand/brand.service';
import {InstructionSheetService} from '../shared/instruction-sheet/instruction-sheet.service';
import {SeriesService} from '../brand/series/series.service';
import {BasemodelService} from '../basemodel/basemodel.service';
import {SerialNumberService} from '../serial-number/serial-number.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private _brandService: BrandService,
              private _instructionSheetService: InstructionSheetService,
              private _seriesService: SeriesService,
              private _basemodelService: BasemodelService,
              private _serialNumberService: SerialNumberService) {
  }

  ngOnInit() {
    this.getBrands();
  }

  getBrands(): void {
    this.brands = this._brandService.getBrands();
  }

  onSelectedBrand(brandName: string): void {
    this._brandService.setSelectedBrand(this._brandService.getBrandByName(brandName));
  }
}
