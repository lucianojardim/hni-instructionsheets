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
          return Observable.throw({msg: 'Failed to read json file', error: err});
        }
      );
  }

  getBasemodels() {
    return this._readJsonFile('/assets/json/basemodel.json');
  }

  getBrands() {
    return this._readJsonFile('/assets/json/brand.json');
  }

  getInstructionSheets() {
    return this._readJsonFile('/assets/json/instruction-sheet.json');
  }

  getSerialNumbers() {
    return this._readJsonFile('/assets/json/serial-number.json');
  }

  getSeries() {
    return this._readJsonFile('/assets/json/series.json');
  }

}
