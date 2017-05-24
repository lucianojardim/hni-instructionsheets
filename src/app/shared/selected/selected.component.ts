import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute} from '@angular/router';

import {SelectedService} from './selected.service';
import {InstructionSheet} from '../instruction-sheet/instruction-sheet.model';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  selected: any;
  instructionSheetsHeader = 'Instruction Sheets';
  instructionSheets: InstructionSheet[] = [];

  constructor(private _selectedService: SelectedService,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getInstructionSheetsOfSelected();
  }

  getInstructionSheetsOfSelected() {
    this.selected = this._selectedService.getSelected(this._activatedRoute);
    this.instructionSheets = this._selectedService.getInstructionSheets(this.selected);
    this.subscription = this._selectedService.selectedChanged
      .subscribe(
        (selected: any) => {
          this.selected = selected;
          this.instructionSheets = this._selectedService.getInstructionSheets(this.selected);
        }
      );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
