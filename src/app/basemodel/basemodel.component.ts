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
    if (typeof this._basemodelService.getBasemodel(value) === 'undefined') {
      this.IsToDisplayErrorMessage = true;
      this._router.navigate(['/basemodel/NotFound'])
        .then()
        .catch();
    } else {
      this.IsToDisplayErrorMessage = false;
      this.selectedBasemodel = this._basemodelService.getBasemodel(value);
      this._basemodelService.setSelectedBasemodel(this.selectedBasemodel);
      this._router.navigate([encodeURIComponent(this.selectedBasemodel.value)], {relativeTo: this._activatedRoute})
        .then()
        .catch(err => console.log(err));
    }
  }

  IsRouteBasemodelNotFound(): boolean {
    return this._activatedRoute.toString().indexOf('NotFound') > 0;
  }

}
