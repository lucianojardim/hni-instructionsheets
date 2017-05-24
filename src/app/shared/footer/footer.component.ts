import {Component, OnInit} from '@angular/core';

import {BrandService} from '../../brand/brand.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _brandService: BrandService) {
  }

  ngOnInit() {
  }

  onGoingHome() {
    this._brandService.seedSelectedBrand();
  }

}
