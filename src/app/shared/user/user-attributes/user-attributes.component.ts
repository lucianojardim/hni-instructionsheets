import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {User} from '../user';
import {UserService} from '../user.service';
import {InstructionSheet} from '../../../instruction-sheet/instruction-sheet';
import {InstructionSheetService} from '../../../instruction-sheet/instruction-sheet.service';

@Component({
  selector: 'app-user-attributes',
  templateUrl: './user-attributes.component.html',
  styleUrls: ['./user-attributes.component.css']
})
export class UserAttributesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  currentUser: User;
  savedInstructionSheets: InstructionSheet[] = [];
  recentlyDownloadedInstructionSheets: InstructionSheet[] = [];

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
    this.recentlyDownloadedInstructionSheets = this._instructionSheetService.getInstructionSheetsByIds(currentUser.recentlyDownloadedInstructionSheetIds);
  }

  deleteSavedInstructionSheet(instructionSheet: InstructionSheet) {
    console.log(instructionSheet);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
