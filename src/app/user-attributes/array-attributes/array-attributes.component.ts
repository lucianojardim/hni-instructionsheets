import {Component, OnInit, Input} from '@angular/core';

import {InstructionSheet} from '../../shared/instruction-sheet/instruction-sheet.model';
import {UserService} from '../../shared/user/user.service';

@Component({
  selector: 'app-array-attributes',
  templateUrl: './array-attributes.component.html',
  styleUrls: ['./array-attributes.component.css']
})
export class ArrayAttributesComponent implements OnInit {

  @Input() instructionSheetsHeader: string;
  @Input() instructionSheets: InstructionSheet[] = [];
  @Input() instructionSheetType: string;
  showInstructionSheets: boolean[];

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.prepareToDisplayInstructionSheet();
  }

  prepareToDisplayInstructionSheet() {
    this.showInstructionSheets = this.instructionSheets.map(show => true);
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
