import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

import {User} from './user';

@Injectable()
export class UserService {
  currentUserWasModified = new Subject<User>();
  private _currentUser: User;
  private _userFromDatabase: User;
  private _maxLengthSavedInstructionSheetsIds = 7;
  private _maxLengthRecentlyDownloadedInstructionSheetIds = 7;
  private _users: User[] = [];

  constructor(private http: Http) {
  }

  private _storeUsersIntoDatabase() {
    return this.http.put('https://instructionsheets-ad427.firebaseio.com/users.json', this.getUsers());
  }

  private _storeUserIntoDatabase(user: User) {
    return this.http.put(
      'https://instructionsheets-ad427.firebaseio.com/users/' + this._removeSpecialCharactersFromEmailAddress(user.emailAddress) + '.json',
      user
    );
  }

  private _removeSpecialCharactersFromEmailAddress(emailAddress: string): string {
    return emailAddress.replace(/[^a-zA-Z0-9]/g, 'z');
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

  private _getUserFromDatabase(emailAddress: string) {
    this.http.get(
      'https://instructionsheets-ad427.firebaseio.com/users/' + this._removeSpecialCharactersFromEmailAddress(emailAddress) + '.json',
    )
      .map(
        (response: Response) => {
          const user: User = response.json();
          console.log(response);
          console.log(user);
          console.log(user['savedInstructionSheetsIds']);
          console.log(user['recentlyDownloadedInstructionSheetIds']);
          if (!user['savedInstructionSheetsIds']) {
            user['savedInstructionSheetsIds'] = [];
          }
          if (!user['recentlyDownloadedInstructionSheetIds']) {
            user['recentlyDownloadedInstructionSheetIds'] = [];
          }
          console.log('user being returned by database function');
          console.log(user);
          return user;
        }
      )
      .subscribe(
        (user: User) => {
          console.log('user getting back from database');
          console.log(user);
          this._userFromDatabase = user;
          console.log(this._userFromDatabase);
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
        emailAddress: 'jardiml@hnicorp.com',
        savedInstructionSheetsIds: [1, 2, 3, 4, 5, 6, 7],
        recentlyDownloadedInstructionSheetIds: [8, 9, 10, 11, 12, 13, 14]
      }
    );
  }

  private _addUser(user: User) {
    this._getUserFromDatabase(user.emailAddress);
    if (!this._userFromDatabase) {
      this._storeUserIntoDatabase(user)
        .subscribe(
          (response: Response) => {
          }
        );
    } else {
      this._updateUser(user);
    }
  }

  private _updateUser(user: User) {
    this._getUserFromDatabase(user.emailAddress);
    if (this._userFromDatabase) {
      this._storeUserIntoDatabase(user)
        .subscribe(
          (response: Response) => {
          }
        );
    } else {
      this._addUser(user);
    }
  }

  getUserByEmailAddress(emailAddress: string): User {
    this._getUserFromDatabase(emailAddress);
    console.log('User from the database');
    console.log(this._userFromDatabase);
    return this._userFromDatabase;
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


