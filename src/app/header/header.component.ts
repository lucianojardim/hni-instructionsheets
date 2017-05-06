import {Component, OnInit} from '@angular/core';

import {Brand} from '../brand/brand';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // TODO: selectedBrand has to be shared and dynamic
  selectedBrand: Brand = {name: 'hon'};

  constructor() {
  }

  ngOnInit() {
  }

}
