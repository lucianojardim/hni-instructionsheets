/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './options/options.component';
import {BrandComponent} from './brand/brand.component';
import {SerialNumberManualComponent} from './serial-number/serial-number-manual/serial-number-manual.component';
import {SerialNumberReaderComponent} from './serial-number/serial-number-reader/serial-number-reader.component';
import {LoginComponent} from './login/login.component';
import {UserAttributesComponent} from './user-attributes/user-attributes.component';
import {BasemodelComponent} from './basemodel/basemodel.component';
import {SelectedComponent} from './shared/selected/selected.component';

import {AuthGuardService} from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'options', canActivate: [AuthGuardService], component: OptionsComponent
  },
  {
    path: 'serialNumberManual', canActivate: [AuthGuardService], component: SerialNumberManualComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'serialNumberReader', canActivate: [AuthGuardService], component: SerialNumberReaderComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'serialNumberNotFound', canActivate: [AuthGuardService], component: SerialNumberManualComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'serialNumberNotDecoded', canActivate: [AuthGuardService], component: SerialNumberManualComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'basemodel', canActivate: [AuthGuardService], component: BasemodelComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'basemodelNotFound', canActivate: [AuthGuardService], component: BasemodelComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'userAttributes', canActivate: [AuthGuardService], component: UserAttributesComponent
  },
  {
    path: 'brand/:brandName', canActivate: [AuthGuardService], component: BrandComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
