import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

import {BrandService} from './brand.service';
import {Brand} from './brand.model';
import {Series} from './series/series.model';
import {SeriesService} from './series/series.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit, OnDestroy {
  selectedBrand: Brand;
  subscription: Subscription;
  selectedSeries: Series;
  serieses: Series[] = [];
  selectFirstOption = 'Select a Series';

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _brandService: BrandService,
              private _seriesService: SeriesService) {
  }

  ngOnInit() {
    this.getSelectedBrand();
    this.getSerieses(this.selectedBrand);
  }

  onSelectedSeries(): void {
    if (typeof this.selectedSeries === 'object') {
      this._seriesService.setSelectedSeries(
        this._seriesService.getSeriesByNameAndBrand(
          this.selectedSeries.name,
          this._brandService.getSelectedBrand()
        )
      );
      this._router.navigate([encodeURIComponent(this.selectedSeries.name)], {relativeTo: this._activatedRoute})
        .then()
        .catch();
    }
  }

  getSelectedBrand() {
    this.selectedBrand = this._brandService.getSelectedBrand();
    this.subscription = this._brandService.selectedBrandChanged
      .subscribe(
        (brand: Brand) => {
          this.selectedBrand = brand;
        }
      );
  }

  getSerieses(selectedBrand: Brand) {
    this.serieses = this._seriesService.getSerieses(selectedBrand);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
