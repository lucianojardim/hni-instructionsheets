import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Series} from './series.model';
import {SeriesService} from './series.service';
import {InstructionSheet} from '../../shared/instruction-sheet/instruction-sheet.model';
import {InstructionSheetService} from '../../shared/instruction-sheet/instruction-sheet.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  selectedSeries: Series;
  instructionSheets: InstructionSheet[] = [];

  constructor(private _seriesService: SeriesService,
              private _instructionSheetService: InstructionSheetService) {
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
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
