import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SerialNumber} from '../serial-number.model';
import {SerialNumberService} from '../serial-number.service';

@Component({
  selector: 'app-serial-number-manual',
  templateUrl: './serial-number-manual.component.html',
  styleUrls: ['./serial-number-manual.component.css']
})
export class SerialNumberManualComponent implements OnInit {
  selectedSerialNumber: SerialNumber;
  IsToDisplayErrorMessage = true;

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _serialNumberService: SerialNumberService) {
  }

  ngOnInit() {
  }

  getSerialNumber(serialNumberValue: string): void {
    if (typeof this._serialNumberService.getSerialNumber(serialNumberValue) === 'undefined') {
      this.IsToDisplayErrorMessage = true;
      this._router.navigate(['/serialNumberNotFound'])
        .then()
        .catch();
    } else {
      this.IsToDisplayErrorMessage = false;
      this.selectedSerialNumber = this._serialNumberService.getSerialNumber(serialNumberValue);
      this._serialNumberService.setSelectedSerialNumber(this.selectedSerialNumber);
      this._router.navigate([this.selectedSerialNumber.serialNumberValue], {relativeTo: this._activatedRoute})
        .then()
        .catch();
    }
  }

  IsRouteSerialNumberNotFound(): boolean {
    return this._activatedRoute.toString().indexOf('NotFound') > 0;
  }
}
