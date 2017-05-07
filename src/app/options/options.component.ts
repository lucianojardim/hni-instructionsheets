import {Component, OnInit} from '@angular/core';

import {Brand} from '../brand/brand';
import {BrandService} from '../brand/brand.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private _brandService: BrandService) {
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
