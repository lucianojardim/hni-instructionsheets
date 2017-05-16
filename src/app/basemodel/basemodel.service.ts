import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Basemodel} from './basemodel';

// TODO: make data changes persistent
@Injectable()
export class BasemodelService {
  selectedBasemodelChanged = new Subject<Basemodel>();
  private _selectedBasemodel: Basemodel;
  private _basemodels: Basemodel[] = [
    {id: 1, value: 'alamala'}
  ];

  constructor() {
  }

  getBasemodel(value: String): Basemodel {
    return this._basemodels.find((basemodel: Basemodel) => basemodel.value.toLowerCase() === value.toLowerCase());
  }

  getId(value: String): number {
    value = value.toLowerCase();
    return this.getBasemodel(value).id;
  }

  getBasemodels(): Basemodel[] {
    return this._basemodels.slice();
  }

  getSelectedBasemodel(): Basemodel {
    return this._selectedBasemodel;
  }

  setSelectedBasemodel(basemodel: Basemodel) {
    this._selectedBasemodel = basemodel;
    this.selectedBasemodelChanged.next(this._selectedBasemodel);
  }
}
