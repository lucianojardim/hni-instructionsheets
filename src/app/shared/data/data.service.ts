import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private _http: Http) {
  }

  private _readJsonFile(pathToFile: string) {
    return this._http.get(pathToFile)
      .map(
        (res: Response) => {
          return res.json();
        }
      )
      .catch(
        (err: Response) => {
          return Observable.throw({msg: 'Failed to read data file', error: err});
        }
      );
  }

  getBasemodels() {
    return this._readJsonFile('/assets/data/basemodel.json');
  }

  getBrands() {
    return this._readJsonFile('/assets/data/brand.json');
  }

  getInstructionSheets() {
    return this._readJsonFile('/assets/data/instruction-sheet.json');
  }

  getSerialNumbers() {
    return this._readJsonFile('/assets/data/serial-number.json');
  }

  getSeries() {
    return this._readJsonFile('/assets/data/series.json');
  }

}
