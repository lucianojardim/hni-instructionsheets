import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Brand} from '../../brand/brand.model';
import {BrandService} from '../../brand/brand.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  selectedBrand: Brand;
  subscription: Subscription;
  srcHeader: string;
  altHeader: string;

  constructor(private _brandService: BrandService) {
  }

  ngOnInit() {
    this.getSelectedBrand();
    this.setHeader();
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

  setHeader() {
    switch (this.selectedBrand.name.toLowerCase()) {
      case  'allsteel':
        this.srcHeader = '/assets/allsteel/images/logo.png';
        this.altHeader = 'Allsteel';
        break;
      case'hon':
        this.srcHeader = '/assets/hon/images/logo.svg';
        this.altHeader = 'HON Office Furniture';
        break;
      default:
        this.srcHeader = '/assets/hni/images/logo.svg';
        this.altHeader = 'HNI';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
