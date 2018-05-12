import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {map, catchError, retry} from 'rxjs/operators';
import {Observable, pipe, throwError} from 'rxjs';

@Injectable()
export class DataService {

  constructor(private _http: HttpClient) {
  }

  private _readJsonFile(pathToFile: string) {
    return this._http.get<any>(pathToFile).pipe(
      retry(3),
      catchError(this.handleError)
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Failed to read data file');
  }

}
