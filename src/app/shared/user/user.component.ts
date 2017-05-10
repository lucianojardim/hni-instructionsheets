import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
  }

  getInstructionSheetByEmail(emailAddress: string) {
    this._userService.setCurrentUser(emailAddress);
    this._router.navigate(['/options'])
      .then()
      .catch();
  }
}
