import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

import {InstructionSheet} from './instruction-sheet.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-instruction-sheet',
  templateUrl: './instruction-sheet.component.html',
  styleUrls: ['./instruction-sheet.component.css']
})
export class InstructionSheetComponent implements OnInit, OnChanges {
  @Input() instructionSheetsHeader: string;
  @Input() instructionSheets: InstructionSheet[] = [];
  @Input() instructionSheetType = 'InstructionSheets';
  @Input() operationType = 'save';
  showAddSavedInstructionSheetMsg: boolean[];
  showInstructionSheets: boolean[];
  itemsLabel: string;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.prepareToDisplayInstructionSheet();
  }

  prepareToDisplayInstructionSheet() {
    this.showInstructionSheets = this.instructionSheets.map(show => true);
    this.showAddSavedInstructionSheetMsg = this.instructionSheets.map(show => false);
    if (this.instructionSheets.length === 1) {
      this.itemsLabel = 'item';
    } else {
      this.itemsLabel = 'items';
    }
  }

  addSavedInstructionSheet(instructionSheet: InstructionSheet, i) {
    this._userService.addSavedInstructionSheetsId(instructionSheet.id);
    this.showAddSavedInstructionSheetMsg[i] = true;
  }

  addRecentlyDownloadedInstructionSheet(instructionSheet) {
    this._userService.addRecentlyDownloadedInstructionSheetId(instructionSheet.id);
  }

  deleteInstructionSheet(instructionSheet: InstructionSheet, i) {
    this.showInstructionSheets[i] = false;
    if (this.instructionSheetType.toLowerCase() === 'savedinstructionsheets') {
      this._userService.deleteSavedInstructionSheetsId(instructionSheet.id);
    } else {
      if (this.instructionSheetType.toLowerCase() === 'recentlydownloadedinstructionsheets') {
        this._userService.deleteRecentlyDownloadedInstructionSheetId(instructionSheet.id);
      }
    }
  }
}
