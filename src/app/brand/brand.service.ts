import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Brand} from './brand.model';
import {DataService} from '../shared/data/data.service';

@Injectable()
export class BrandService {

  selectedBrandChanged = new Subject<Brand>();
  private _brands: Brand[] = [];
  private _selectedBrand: Brand;

  constructor(private _dataService: DataService) {
    this.seedSelectedBrand();
    this._getInitialData();
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

  private _getInitialData() {
    this._dataService.getBrands()
      .subscribe(
        data => {
          this._brands = data;
        },
        err => console.log('Could not read Brands', err)
      );
  }

}
