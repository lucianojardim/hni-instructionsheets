import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Brand} from '../brand.model';
import {BrandService} from '../brand.service';
import {Series} from './series.model';
// TODO: make data changes persistent
@Injectable()
export class SeriesService {
  selectedSeriesChanged = new Subject<Series>();
  private _serieses: Series[] = [
    {id: 1, name: '38000 Series', brandId: 1},
    {id: 2, name: 'Abound', brandId: 1},
    {id: 3, name: 'Accelerate', brandId: 1},
    {id: 4, name: 'Model not in pricer', brandId: 1},
    {id: 5, name: 'Systems', brandId: 1},
    {id: 6, name: '101 Series', brandId: 2},
    {id: 7, name: '10500 Series', brandId: 2},
    {id: 8, name: '10700 Series', brandId: 2},
    {id: 9, name: '1800 Series', brandId: 2},
    {id: 10, name: '1870 Series', brandId: 2},
    {id: 11, name: '1890 Series', brandId: 2},
    {id: 12, name: '34000 Series', brandId: 2},
    {id: 13, name: '38000 Series', brandId: 2},
    {id: 14, name: '500 Series', brandId: 2},
    {id: 15, name: '7700 Series', brandId: 2},
    {id: 16, name: '94000 Series', brandId: 2},
    {id: 17, name: 'Abound', brandId: 2},
    {id: 18, name: 'Accelerate', brandId: 2},
    {id: 19, name: 'Accessories', brandId: 2},
    {id: 20, name: 'Activity Tables', brandId: 2},
    {id: 21, name: 'Ampere - 2290 Series', brandId: 2},
    {id: 22, name: 'Announce', brandId: 2},
    {id: 23, name: 'Arrive', brandId: 2},
    {id: 24, name: 'Attune', brandId: 2},
    {id: 25, name: 'Basyx by HON', brandId: 2},
    {id: 26, name: 'Brigade', brandId: 2},
    {id: 27, name: 'ComforTask - 5900 Series', brandId: 2},
    {id: 28, name: 'Concinnity', brandId: 2},
    {id: 29, name: 'Contain', brandId: 2},
    {id: 30, name: 'Coordinate', brandId: 2},
    {id: 31, name: 'Endorse', brandId: 2},
    {id: 32, name: 'Flagship', brandId: 2},
    {id: 33, name: 'Flock', brandId: 2},
    {id: 34, name: 'Folding Chair - FC00 Series', brandId: 2},
    {id: 35, name: 'GuestStacker - 4030 Series', brandId: 2},
    {id: 36, name: 'Hospitality', brandId: 2},
    {id: 37, name: 'Huddle', brandId: 2},
    {id: 38, name: 'Ignition Seating', brandId: 2},
    {id: 39, name: 'Laminate Occasional Tables', brandId: 2},
    {id: 40, name: 'Mentor Series', brandId: 2},
    {id: 41, name: 'Metro Classic', brandId: 2},
    {id: 42, name: 'Motivate', brandId: 2},
    {id: 43, name: 'Occasional Tables', brandId: 2},
    {id: 44, name: 'Olson - 4040 Series', brandId: 2},
    {id: 45, name: 'Pagoda', brandId: 2},
    {id: 46, name: 'Park Avenue', brandId: 2},
    {id: 47, name: 'Pennsylvania Avenue', brandId: 2},
    {id: 48, name: 'Perpetual', brandId: 2},
    {id: 49, name: 'Preside', brandId: 2},
    {id: 50, name: 'Private Label', brandId: 2},
    {id: 51, name: 'Riley', brandId: 2},
    {id: 52, name: 'Smartlink', brandId: 2},
    {id: 53, name: 'Solutions', brandId: 2},
    {id: 54, name: 'Solve', brandId: 2},
    {id: 55, name: 'Soothe', brandId: 2},
    {id: 56, name: 'StationMaster', brandId: 2},
    {id: 57, name: 'Systems', brandId: 2},
    {id: 58, name: 'Valido', brandId: 2},
    {id: 59, name: 'Verse', brandId: 2},
    {id: 60, name: 'Voi', brandId: 2}
  ];
  private _selectedSeries: Series;

  constructor(private _brandService: BrandService) {
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

}



