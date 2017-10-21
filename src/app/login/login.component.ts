import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from '../shared/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailAddress: string;

  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    // Retrieve emailAddress from localStorage and passes the value to the html
    this.emailAddress = localStorage.getItem('emailAddress');
  }

  getInstructionSheetByEmail(emailAddress: string) {
    // Save emailAddress in localStorage
    localStorage.setItem('emailAddress', emailAddress);

    this._userService.setCurrentUser(emailAddress);
    this._router.navigate(['/options'])
      .then()
      .catch();
  }
}
