/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserAttributesComponent} from './user-attributes.component';

import {AuthGuardService} from '../auth-guard.service';

const userAttributesRoutes: Routes = [
  {
    path: 'userAttributes', canActivate: [AuthGuardService], component: UserAttributesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(userAttributesRoutes)],
  exports: [RouterModule]
})
export class UserAttributesRoutingModule {
}
