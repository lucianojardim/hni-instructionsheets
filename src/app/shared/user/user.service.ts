import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {User} from './user';

@Injectable()
export class UserService {
  currentUserWasModified = new Subject<User>();
  private _currentUser: User;
  private _maxLengthSavedInstructionSheetsIds = 7;
  private _maxLengthRecentlyDownloadedInstructionSheetIds = 7;
  private _users: User[] = [];

  constructor(private http: Http) {
    this._getUsersFromDatabase();
  }

  private _storeUsersIntoDatabase() {
    return this.http.put('https://instructionsheets-ad427.firebaseio.com/users.json', this.getUsers());
  }

  private _getUsersFromDatabase() {
    this.http.get('https://instructionsheets-ad427.firebaseio.com/users.json')
      .map(
        (response: Response) => {
          const users: User[] = response.json();
          for (const user of users) {
            if (!user['savedInstructionSheetsIds']) {
              user['savedInstructionSheetsIds'] = [];
            }
            if (!user['recentlyDownloadedInstructionSheetIds']) {
              user['recentlyDownloadedInstructionSheetIds'] = [];
            }
          }
          return users;
        }
      )
      .subscribe(
        (users: User[]) => {
          this._setUsers(users);
        }
      );
  }

  getUsers(): User[] {
    return this._users.slice();
  }

  private _setUsers(users: User[]) {
    this._users = users;
  }

  private _seedUsers() {
    this._addUser(
      {
        id: 1,
        emailAddress: 'jardiml@hnicorp.com',
        savedInstructionSheetsIds: [1, 2, 3, 4, 5, 6, 7],
        recentlyDownloadedInstructionSheetIds: [8, 9, 10, 11, 12, 13, 14]
      }
    );
  }

  private _addUser(user: User) {
    const index = this._users.indexOf(user);
    if (index < 0) {
      this._users.push(user);
      this._storeUsersIntoDatabase()
        .subscribe(
          (response: Response) => {
          }
        );
    } else {
      this._updateUser(user);
    }
  }

  private _updateUser(user: User) {
    const index = this._users.indexOf(user);
    if (index > -1) {
      this._users[index].savedInstructionSheetsIds = user.savedInstructionSheetsIds;
      this._users[index].recentlyDownloadedInstructionSheetIds = user.recentlyDownloadedInstructionSheetIds;
      this._storeUsersIntoDatabase()
        .subscribe(
          (response: Response) => {
          }
        );
    } else {
      this._addUser(user);
    }
  }

  private _deleteUserById(id: number) {
    this._deleteUser(this.getUserById(id));
  }

  private _deleteUser(user: User) {
    const index = this._users.indexOf(user);
    if (index > -1) {
      this._users.splice(index, 1);
      this._storeUsersIntoDatabase()
        .subscribe(
          (response: Response) => {
          }
        );
    }
  }

  getUserById(id: number) {
    return this._users.find((element: User) => element.id === id);
  }

  getUserByEmailAddress(emailAddress: string): User {
    return this._users.find((element: User) => element.emailAddress === emailAddress);
  }

  private _getNextAvailableUserId(): number {
    return this._users.length;
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(
      (resolve, reject) => {
        resolve(typeof this.getCurrentUser() !== 'undefined');
      }
    );
  }

  getCurrentUser(): User {
    return this._currentUser;
  }

  private _updateCurrentUser(user: User) {
    this._currentUser = user;
    this._updateUser(this._currentUser);
    this.currentUserWasModified.next(this._currentUser);
  }

  setCurrentUser(emailAddress: string) {
    let candidateUser: User = this.getUserByEmailAddress(emailAddress);
    if (!candidateUser) {
      candidateUser = {
        id: (this._getNextAvailableUserId()),
        emailAddress: emailAddress,
        savedInstructionSheetsIds: [],
        recentlyDownloadedInstructionSheetIds: []
      };
      this._addUser(candidateUser);
    }
    this._updateCurrentUser(candidateUser);
  }

  addSavedInstructionSheetsId(InstructionSheetsId: number) {
    this._currentUser.savedInstructionSheetsIds = this._addToFixLengthArray(
      this._currentUser.savedInstructionSheetsIds,
      this._maxLengthSavedInstructionSheetsIds,
      InstructionSheetsId
    );
    this._updateCurrentUser(this._currentUser);
  }

  deleteSavedInstructionSheetsId(InstructionSheetsId: number) {
    const index = this._currentUser.savedInstructionSheetsIds.indexOf(InstructionSheetsId);
    if (index > -1) {
      this._currentUser.savedInstructionSheetsIds.splice(index, 1);
    }
    this._updateCurrentUser(this._currentUser);
  }

  addRecentlyDownloadedInstructionSheetId(InstructionSheetsId: number) {
    this._currentUser.recentlyDownloadedInstructionSheetIds = this._addToFixLengthArray(
      this._currentUser.recentlyDownloadedInstructionSheetIds,
      this._maxLengthRecentlyDownloadedInstructionSheetIds,
      InstructionSheetsId
    );
    this._updateCurrentUser(this._currentUser);
  }

  deleteRecentlyDownloadedInstructionSheetId(InstructionSheetsId: number) {
    const index = this._currentUser.recentlyDownloadedInstructionSheetIds.indexOf(InstructionSheetsId);
    if (index > -1) {
      this._currentUser.recentlyDownloadedInstructionSheetIds.splice(index, 1);
    }
    this._updateCurrentUser(this._currentUser);
  }

  private _addToFixLengthArray(fixedLengthArray: number[], maxLegth: number, element: number): number[] {
    if (fixedLengthArray.indexOf(element) < 0) { // if not an existing element -> proceed with insert
      if (fixedLengthArray.length < maxLegth) {
        fixedLengthArray.push(element);
      } else {
        const shifted = fixedLengthArray.shift();
        fixedLengthArray.push(element);
      }
    }
    return fixedLengthArray;
  }
}


