import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {User} from '../shared/user/user.model';
import {UserService} from '../shared/user/user.service';
import {InstructionSheet} from '../shared/instruction-sheet/instruction-sheet.model';
import {InstructionSheetService} from '../shared/instruction-sheet/instruction-sheet.service';

@Component({
  selector: 'app-user-attributes',
  templateUrl: './user-attributes.component.html',
  styleUrls: ['./user-attributes.component.css']
})
export class UserAttributesComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  currentUser: User;
  savedInstructionSheetsHeader: string;
  savedInstructionSheets: InstructionSheet[] = [];
  recentlyDownloadedInstructionSheetsHeader: string;
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
    this.savedInstructionSheetsHeader = 'Saved instructions sheets';
    this.savedInstructionSheets = this._instructionSheetService.getInstructionSheetsByIds(currentUser.savedInstructionSheetsIds);
    this.recentlyDownloadedInstructionSheetsHeader = 'Recently downloaded';
    this.recentlyDownloadedInstructionSheets = this._instructionSheetService.getInstructionSheetsByIds(currentUser.recentlyDownloadedInstructionSheetIds);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
