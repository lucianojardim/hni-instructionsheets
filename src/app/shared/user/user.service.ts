import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {User} from './user';

@Injectable()
export class UserService {
  currentUserWasModified = new Subject<User>();
  private _currentUser: User;
  private _maxLengthSavedInstructionSheetsIds = 7;
  private _maxLengthRecentlyDownloadedInstructionSheetIds = 7;
  private _users: User[] = [];

  constructor() {
    this._seedUsers();
  }

  private _seedUsers() {
    this._users = [
      {
        id: 0,
        emailAddress: 'jardiml@hnicorp.com',
        savedInstructionSheetsIds: [1, 4, 7],
        recentlyDownloadedInstructionSheetIds: [1, 4, 7]
      },
      {
        id: 1,
        emailAddress: 'user2@email.com',
        savedInstructionSheetsIds: [2, 5, 8],
        recentlyDownloadedInstructionSheetIds: [2, 5, 8]
      },
      {
        id: 2,
        emailAddress: 'user3@email.com',
        savedInstructionSheetsIds: [3, 6, 9],
        recentlyDownloadedInstructionSheetIds: [3, 6, 9]
      }
    ];
  }

  getCurrentUser(): User {
    return this._currentUser;
  }

  setCurrentUser(emailAddress: string) {
    let candidateUser: User = this._users.find((element: User) => element.emailAddress === emailAddress);
    if (!candidateUser) {
      candidateUser = {
        id: (this._getNextAvailableUserId()),
        emailAddress: emailAddress,
        savedInstructionSheetsIds: [],
        recentlyDownloadedInstructionSheetIds: []
      };
      this._users.push(candidateUser);
    }
    this._currentUser = candidateUser;
    this.currentUserWasModified.next(this._currentUser);
  }

  addSavedInstructionSheetsId(InstructionSheetsId: number) {
    this._currentUser.savedInstructionSheetsIds = this._addToFixLengthArray(
      this._currentUser.savedInstructionSheetsIds,
      this._maxLengthSavedInstructionSheetsIds,
      InstructionSheetsId
    );
    this.currentUserWasModified.next(this._currentUser);
  }

  deleteSavedInstructionSheetsId(InstructionSheetsId: number) {
    const index = this._currentUser.savedInstructionSheetsIds.indexOf(InstructionSheetsId);
    if (index > -1) {
      this._currentUser.savedInstructionSheetsIds.splice(index, 1);
    }
    this.currentUserWasModified.next(this._currentUser);
  }

  addRecentlyDownloadedInstructionSheetId(InstructionSheetsId: number) {
    this._currentUser.recentlyDownloadedInstructionSheetIds = this._addToFixLengthArray(
      this._currentUser.recentlyDownloadedInstructionSheetIds,
      this._maxLengthRecentlyDownloadedInstructionSheetIds,
      InstructionSheetsId
    );
    this.currentUserWasModified.next(this._currentUser);
  }

  deleteRecentlyDownloadedInstructionSheetId(InstructionSheetsId: number) {
    const index = this._currentUser.recentlyDownloadedInstructionSheetIds.indexOf(InstructionSheetsId);
    if (index > -1) {
      this._currentUser.recentlyDownloadedInstructionSheetIds.splice(index, 1);
    }
    this.currentUserWasModified.next(this._currentUser);
  }

  private _addToFixLengthArray(fixedLengthArray: number[], maxLegth: number, element: number): number[] {
    if (fixedLengthArray.indexOf(element) < 0) { // not existing element -> proceed with insert
      if (fixedLengthArray.length < maxLegth) {
        fixedLengthArray.push(element);
      } else {
        fixedLengthArray.pop();
        fixedLengthArray.push(element);
      }
    }
    return fixedLengthArray;
  }

  private _getNextAvailableUserId(): number {
    return this._users.length - 1;
  }
}


