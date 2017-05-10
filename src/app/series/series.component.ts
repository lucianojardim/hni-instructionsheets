import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Series} from './series';
import {SeriesService} from './series.service';
import {InstructionSheet} from '../instruction-sheet/instruction-sheet';
import {InstructionSheetService} from '../instruction-sheet/instruction-sheet.service';
import {UserService} from '../shared/user/user.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedSeries: Series;
  instructionSheets: InstructionSheet[] = [];
  showAddSavedInstructionSheetMsg: boolean[] = [];

  constructor(private _seriesService: SeriesService,
              private _instructionSheetService: InstructionSheetService,
              private _userService: UserService) {
  }

  ngOnInit() {
    this.getInstructionSheetsOfSelectedSeries();
  }

  getInstructionSheetsOfSelectedSeries() {
    this.selectedSeries = this._seriesService.getSelectedSeries();
    this.getInstructionSheets(this.selectedSeries);

    this.subscription = this._seriesService.selectedSeriesChanged
      .subscribe(
        (series: Series) => {
          this.selectedSeries = series;
          this.getInstructionSheets(this.selectedSeries);
        }
      );

  }

  getInstructionSheets(selectedSeries: Series) {
    this.instructionSheets = this._instructionSheetService.getInstructionSheetsBySeries(selectedSeries);
    this.showAddSavedInstructionSheetMsg = this.instructionSheets.map(show => false);
  }

  addSavedInstructionSheet(instructionSheet: InstructionSheet, i) {
    this._userService.addSavedInstructionSheetsId(instructionSheet.id);
    this.showAddSavedInstructionSheetMsg[i] = true;
  }

  addRecentlyDownloadedInstructionSheet(instructionSheet, i) {
    this._userService.addRecentlyDownloadedInstructionSheetId(instructionSheet.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
