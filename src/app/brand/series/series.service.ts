import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Brand} from '../brand';
import {BrandService} from '../brand.service';
import {Series} from './series';
// TODO: make data changes persistent
@Injectable()
export class SeriesService {
  selectedSeriesChanged = new Subject<Series>();
  private _serieses: Series[] = [
    {id: 1, name: '38000 Series Stack On Units', brandId: 1},
    {id: 2, name: '38000 Series Steel Desking', brandId: 1},
    {id: 3, name: '500 Lateral', brandId: 1},
    {id: 4, name: '500 Series Lateral', brandId: 1},
    {id: 5, name: '7700 Series ', brandId: 1},
    {id: 6, name: 'Abode', brandId: 1},
    {id: 7, name: 'Abound', brandId: 1},
    {id: 8, name: 'Accelerate', brandId: 1},
    {id: 9, name: 'Accessories - HON', brandId: 1},
    {id: 10, name: 'basyx Lateral File', brandId: 1},
    {id: 11, name: 'basyx Tables', brandId: 1},
    {id: 12, name: 'Brigade', brandId: 1},
    {id: 13, name: 'Brigade - 600 Series', brandId: 1},
    {id: 14, name: 'Brigade - 700 Series', brandId: 1},
    {id: 15, name: 'Brigade - 800 Series', brandId: 1},
    {id: 16, name: 'Contain', brandId: 1},
    {id: 17, name: 'Endorse', brandId: 1},
    {id: 18, name: 'Flagship', brandId: 1},
    {id: 19, name: 'Flagship Lateral', brandId: 1},
    {id: 20, name: 'Flagship Pedestal', brandId: 1},
    {id: 21, name: 'Ignition Seating', brandId: 1},
    {id: 22, name: 'Preside', brandId: 1},
    {id: 23, name: 'Private Label', brandId: 1},
    {id: 24, name: 'Quotient', brandId: 1},
    {id: 25, name: 'Solve', brandId: 1},
    {id: 26, name: 'Soothe', brandId: 1},
    {id: 27, name: 'Systems Support Pedestals', brandId: 1},
    {id: 28, name: 'Systems Worksurface', brandId: 1},
    {id: 29, name: 'Voi', brandId: 1},
    {id: 30, name: 'Abound', brandId: 2},
    {id: 31, name: '101 Series', brandId: 2},
    {id: 32, name: '10500 Series', brandId: 2},
    {id: 33, name: '10700 Series', brandId: 2},
    {id: 34, name: '10700, 94000', brandId: 2},
    {id: 35, name: '34000 Series Steel Desking', brandId: 2},
    {id: 36, name: '38000 Series Stack On Units', brandId: 2},
    {id: 37, name: '38000 Series Steel Desking', brandId: 2},
    {id: 38, name: 'Abode', brandId: 2},
    {id: 39, name: 'Accessories - HON', brandId: 2},
    {id: 40, name: 'Announce', brandId: 2},
    {id: 41, name: 'Arrive', brandId: 2},
    {id: 42, name: 'Attune, 10700', brandId: 2},
    {id: 43, name: 'Brigade', brandId: 2},
    {id: 44, name: 'Brigade Bookcase', brandId: 2},
    {id: 45, name: 'Contain', brandId: 2},
    {id: 46, name: 'Flagship', brandId: 2},
    {id: 47, name: 'Flagship Bookcase', brandId: 2},
    {id: 48, name: 'Flagship Lateral', brandId: 2},
    {id: 49, name: 'Flagship Pedestal', brandId: 2},
    {id: 50, name: 'Flagship Storage Cabinet', brandId: 2},
    {id: 51, name: 'GuestStacker - 4030 Series', brandId: 2},
    {id: 52, name: 'Ignition Seating', brandId: 2},
    {id: 53, name: 'Mentor Series', brandId: 2},
    {id: 54, name: 'Metro Classic ', brandId: 2},
    {id: 55, name: 'N/F', brandId: 2},
    {id: 56, name: 'Olson - 4040 Series ', brandId: 2},
    {id: 57, name: 'Pagoda ', brandId: 2},
    {id: 58, name: 'Park Avenue Collection', brandId: 2},
    {id: 59, name: 'Park Avenue Collection, Attune', brandId: 2},
    {id: 60, name: 'Park Avenue Collection, Attune, 10500', brandId: 2},
    {id: 61, name: 'Park Avenue Collection, Valido, 10500', brandId: 2},
    {id: 62, name: 'Pennsylvania Avenue, 10700, 94000', brandId: 2},
    {id: 63, name: 'Pennsylvania Avenue, Attune, 10700', brandId: 2},
    {id: 64, name: 'Perpetual ', brandId: 2},
    {id: 65, name: 'Preside', brandId: 2},
    {id: 66, name: 'Riley Series ', brandId: 2},
    {id: 67, name: 'StationMaster', brandId: 2},
    {id: 68, name: 'Systems Electrical', brandId: 2},
    {id: 69, name: 'Systems Worksurface', brandId: 2},
    {id: 70, name: 'Voi', brandId: 2},
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



