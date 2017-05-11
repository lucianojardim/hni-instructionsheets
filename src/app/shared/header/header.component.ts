import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Brand} from '../../brand/brand';
import {BrandService} from '../../brand/brand.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  selectedBrand: Brand;
  subscription: Subscription;

  constructor(private _brandService: BrandService) {
  }

  ngOnInit() {
    this.getSelectedBrand();
  }

  onGoingHome() {
    this._brandService.seedSelectedBrand();
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
