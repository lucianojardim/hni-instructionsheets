import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Basemodel} from './basemodel.model';
import {BasemodelService} from './basemodel.service';

@Component({
  selector: 'app-basemodel',
  templateUrl: './basemodel.component.html',
  styleUrls: ['./basemodel.component.css']
})
export class BasemodelComponent implements OnInit {
  selectedBasemodel: Basemodel;
  IsToDisplayErrorMessage = true;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _basemodelService: BasemodelService) {
  }

  ngOnInit() {
  }

  getBasemodel(value: string): void {
    this.selectedBasemodel = this._basemodelService.getBasemodel(value);
    if (typeof this.selectedBasemodel === 'undefined') {
      this.IsToDisplayErrorMessage = true;
      this._router.navigate(['/basemodelNotFound'])
        .then()
        .catch();
    } else {
      this.IsToDisplayErrorMessage = false;
      this._basemodelService.setSelectedBasemodel(this.selectedBasemodel);
      this._router.navigate([encodeURIComponent(this.selectedBasemodel.value)], {relativeTo: this._activatedRoute})
        .then()
        .catch();
    }
  }

  IsRouteBasemodelNotFound(): boolean {
    return this._activatedRoute.toString().indexOf('NotFound') > 0;
  }

}
