import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {Brand} from '../brand.model';
import {BrandService} from '../brand.service';
import {Series} from './series.model';
import {DataService} from '../../shared/data/data.service';

@Injectable()
export class SeriesService {
  selectedSeriesChanged = new Subject<Series>();
  private _serieses: Series[] = [];
  private _selectedSeries: Series;

  constructor(private _brandService: BrandService, private _dataService: DataService) {
    this._getInitialData();
  }

  getSeriesByNameAndBrand(name: string, brand: Brand): Series {
    return this.getSeriesByNameAndBrandName(name, brand.name);
  }

  getSeriesByNameAndBrandName(name: string, brandName: string): Series {
    const brandId: number = this._brandService.getIdByName(brandName);
    return this._serieses.find((series: Series) => series.name === name && series.brandId === brandId);
  }

  getIdByName(name: string): number {
    return this._serieses.find((series: Series) => series.name === name).id;
  }

  getSerieses(brand: Brand): Series[] {
    return this.getSeriesesByBrandName(brand.name);
  }

  getSeriesesByBrandName(brandName: string): Series[] {
    const brandId: number = this._brandService.getIdByName(brandName);
    return this._serieses.filter(series => series.brandId === brandId).slice();
  }

  getSelectedSeries(): Series {
    return this._selectedSeries;
  }

  setSelectedSeries(series: Series) {
    this._selectedSeries = series;
    this.selectedSeriesChanged.next(this._selectedSeries);
  }

  private _getInitialData() {
    this._dataService.getSeries()
      .subscribe(
        data => {
          this._serieses = data;
        },
        err => console.log('Could not read Series', err)
      );
  }
}



