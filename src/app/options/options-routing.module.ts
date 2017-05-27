/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './options.component';

import {AuthGuardService} from '../auth-guard.service';

const optionsRoutes: Routes = [
  {
    path: 'options', canActivate: [AuthGuardService], component: OptionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(optionsRoutes)],
  exports: [RouterModule]
})
export class OptionsRoutingModule {
}
