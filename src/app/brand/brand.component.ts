import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

// import { Brand } from './brand';
import {Series} from '../series/series';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  // TODO: selectedBrand has to be shared and dynamic
  // selectedBrand: Brand = {name: 'hon'};
  // TODO: changes to a dynamic attribution instead of hardcoded
  selectedSeries: Series = {name: '101 Series'};
  // TODO: create SeriesService and convert this to a getSerieses
  serieses: Series[] = [
    {name: '101 Series'},
    {name: '10500 Series'},
    {name: '10700 Series'},
    {name: '10700, 94000'},
    {name: '34000 Series Steel Desking'},
    {name: '38000 Series Stack On Units'},
    {name: '38000 Series Steel Desking'},
    {name: 'Abode'},
    {name: 'Accessories - HON'},
    {name: 'Announce'},
    {name: 'Arrive'},
    {name: 'Attune, 10700'},
    {name: 'Brigade'},
    {name: 'Brigade Bookcase'},
    {name: 'Contain'},
    {name: 'Flagship'},
    {name: 'Flagship Bookcase'},
    {name: 'Flagship Lateral'},
    {name: 'Flagship Pedestal'},
    {name: 'Flagship Storage Cabinet'},
    {name: 'GuestStacker - 4030 Series'},
    {name: 'Ignition Seating'},
    {name: 'Mentor Series'},
    {name: 'Metro Classic'},
    {name: 'N/F'},
    {name: 'Olson - 4040 Series'},
    {name: 'Pagoda'},
    {name: 'Park Avenue Collection'},
    {name: 'Park Avenue Collection, Attune'},
    {name: 'Park Avenue Collection, Attune, 10500'},
    {name: 'Park Avenue Collection, Valido, 10500'},
    {name: 'Pennsylvania Avenue, 10700, 94000'},
    {name: 'Pennsylvania Avenue, Attune, 10700'},
    {name: 'Perpetual'},
    {name: 'Preside'},
    {name: 'Riley Series'},
    {name: 'StationMaster'},
    {name: 'Systems Electrical'},
    {name: 'Systems Worksurface'},
    {name: 'Voi'},
  ];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onSelectedSeries(): void {
    this.router.navigate([this.selectedSeries.name], {relativeTo: this.activatedRoute})
      .then()
      .catch();
  }
}
