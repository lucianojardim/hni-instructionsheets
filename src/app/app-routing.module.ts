/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './shared/options/options.component';
import {BrandComponent} from './brand/brand.component';
import {SeriesComponent} from './brand/series/series.component';
import {SerialNumberManualComponent} from './serial-number/serial-number-manual/serial-number-manual.component';
import {SerialNumberReaderComponent} from './serial-number/serial-number-reader/serial-number-reader.component';
import {SerialNumberSheetsComponent} from './serial-number/shared/serial-number-sheets/serial-number-sheets.component';
import {UserComponent} from './shared/user/user.component';
import {UserAttributesComponent} from './user-attributes/user-attributes.component';
import {BasemodelComponent} from './basemodel/basemodel.component';
import {BasemodelSheetsComponent} from './basemodel/basemodel-sheets/basemodel-sheets.component';

import {AuthGuardService} from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'options', canActivate: [AuthGuardService], component: OptionsComponent
  },
  {
    path: 'serialNumberManual', canActivate: [AuthGuardService], component: SerialNumberManualComponent, children: [
    {
      path: ':serialNumberValue', canActivate: [AuthGuardService], component: SerialNumberSheetsComponent
    },
  ]
  },
  {
    path: 'serialNumberReader', canActivate: [AuthGuardService], component: SerialNumberReaderComponent, children: [
    {
      path: ':serialNumberValue', canActivate: [AuthGuardService], component: SerialNumberSheetsComponent
    },
  ]
  },
  {
    path: 'serialNumberNotFound', canActivate: [AuthGuardService], component: SerialNumberManualComponent, children: [
    {
      path: ':serialNumberValue', canActivate: [AuthGuardService], component: SerialNumberSheetsComponent
    },
  ]
  },
  {
    path: 'basemodel', canActivate: [AuthGuardService], component: BasemodelComponent, children: [
    {
      path: ':basemodelValue', canActivate: [AuthGuardService], component: BasemodelSheetsComponent
    },
  ]
  },
  {
    path: 'basemodelNotFound', canActivate: [AuthGuardService], component: BasemodelComponent, children: [
    {
      path: ':basemodelValue', canActivate: [AuthGuardService], component: BasemodelSheetsComponent
    },
  ]
  },
  {
    path: 'userAttributes', canActivate: [AuthGuardService], component: UserAttributesComponent
  },
  {
    path: 'brand/:brandName', canActivate: [AuthGuardService], component: BrandComponent, children: [
    {
      path: ':seriesName', canActivate: [AuthGuardService], component: SeriesComponent
    },
  ]
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '', component: UserComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: UserComponent
  },
  {
    path: '**', component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
