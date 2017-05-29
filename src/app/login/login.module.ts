import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {LoginRoutingModule} from './login-routing.module';

import {LoginComponent} from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: []
})
export class LoginModule {
}
