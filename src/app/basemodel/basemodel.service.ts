import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Basemodel} from './basemodel.model';
import {DataService} from '../shared/data/data.service';

@Injectable()
export class BasemodelService {
  selectedBasemodelChanged = new Subject<Basemodel>();
  private _selectedBasemodel: Basemodel;
  private _basemodels: Basemodel[] = [];

  constructor(private _dataService: DataService) {
    this._getInitialData();
  }

  getBasemodel(value: String): Basemodel {
    return this._basemodels.find((basemodel: Basemodel) => basemodel.value.toLowerCase() === value.toLowerCase());
  }

  getId(value: String): number {
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

  private _getInitialData() {
    this._dataService.getBasemodels()
      .subscribe(
        data => {
          this._basemodels = data;
        },
        err => console.log('Could not read Basemodels', err)
      );
  }
}
