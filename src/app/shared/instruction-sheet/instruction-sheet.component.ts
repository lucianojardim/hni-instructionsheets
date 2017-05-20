import { Component, OnInit, Input } from '@angular/core';

import {InstructionSheet} from './instruction-sheet.model';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-instruction-sheet',
  templateUrl: './instruction-sheet.component.html',
  styleUrls: ['./instruction-sheet.component.css']
})
export class InstructionSheetComponent implements OnInit {

  @Input() instructionSheets: InstructionSheet[] = [];
  showAddSavedInstructionSheetMsg: boolean[] = this.instructionSheets.map(show => false);

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }
  addSavedInstructionSheet(instructionSheet: InstructionSheet, i) {
    this._userService.addSavedInstructionSheetsId(instructionSheet.id);
    this.showAddSavedInstructionSheetMsg[i] = true;
  }

  addRecentlyDownloadedInstructionSheet(instructionSheet, i) {
    this._userService.addRecentlyDownloadedInstructionSheetId(instructionSheet.id);
  }
}
