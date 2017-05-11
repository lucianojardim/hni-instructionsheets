import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {User} from '../shared/user/user';
import {UserService} from '../shared/user/user.service';
import {InstructionSheet} from '../shared/instruction-sheet/instruction-sheet';
import {InstructionSheetService} from '../shared/instruction-sheet/instruction-sheet.service';

@Component({
  selector: 'app-user-attributes',
  templateUrl: './user-attributes.component.html',
  styleUrls: ['./user-attributes.component.css']
})
export class UserAttributesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  currentUser: User;
  savedInstructionSheets: InstructionSheet[] = [];
  showSavedInstructionSheets: boolean[] = []; // Only to control if an item is displayed or not
  recentlyDownloadedInstructionSheets: InstructionSheet[] = [];
  showRecentlyDownloadedInstructionSheets: boolean[] = []; // Only to control if an item is displayed or not

  constructor(private _userService: UserService,
              private _instructionSheetService: InstructionSheetService) {
  }

  ngOnInit() {
    this.getInstructionSheetsOfCurrentUser();
  }

  getInstructionSheetsOfCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    this.getInstructionSheets(this.currentUser);

    this.subscription = this._userService.currentUserWasModified
      .subscribe(
        (user: User) => {
          this.currentUser = user;
          this.getInstructionSheets(this.currentUser);
        }
      );
  }

  getInstructionSheets(currentUser: User) {
    this.savedInstructionSheets = this._instructionSheetService.getInstructionSheetsByIds(currentUser.savedInstructionSheetsIds);
    this.showSavedInstructionSheets = this.savedInstructionSheets.map(show => true);

    this.recentlyDownloadedInstructionSheets = this._instructionSheetService.getInstructionSheetsByIds(currentUser.recentlyDownloadedInstructionSheetIds);
    this.showRecentlyDownloadedInstructionSheets = this.recentlyDownloadedInstructionSheets.map(show => true);
  }

  deleteSavedInstructionSheet(instructionSheet: InstructionSheet, i) {
    this.showSavedInstructionSheets[i] = false;
    this._userService.deleteSavedInstructionSheetsId(instructionSheet.id);
  }

  deleteRecentlyDownloadedInstructionSheet(instructionSheet, i) {
    this.showRecentlyDownloadedInstructionSheets[i] = false;
    this._userService.deleteRecentlyDownloadedInstructionSheetId(instructionSheet.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
