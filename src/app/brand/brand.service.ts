import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Brand} from './brand';

@Injectable()
export class BrandService {

  selectedBrandChanged = new Subject<Brand>();
  private _brands: Brand[] = [
    {id: 1, name: 'Allsteel'},
    {id: 2, name: 'HON'}
  ];
  private _selectedBrand: Brand;

  constructor() {
    this.seedSelectedBrand();
  }

  getBrandByName(name: String): Brand {
    return this._brands.find((brand: Brand) => brand.name === name);
  }

  getId(brand: Brand): number {
    return this._brands.find((element: Brand) => element.name === brand.name).id;
  }

  getIdByName(name: String): number {
    return this._brands.find((brand: Brand) => brand.name === name).id;
  }

  getBrands(): Brand[] {
    return this._brands.slice();
  }

  getSelectedBrand(): Brand {
    return this._selectedBrand;
  }

  setSelectedBrand(brand: Brand) {
    this._selectedBrand = brand;
    this.selectedBrandChanged.next(this._selectedBrand);
  }

  seedSelectedBrand() {
    this._selectedBrand = {id: 0, name: 'HNI'};
    this.selectedBrandChanged.next(this._selectedBrand);
  }
}
