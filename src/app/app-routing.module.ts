/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './shared/options/options.component';
import {BrandComponent} from './brand/brand.component';
import {SeriesComponent} from './brand/series/series.component';
import {BarcodeManualComponent} from './barcode/barcode-manual/barcode-manual.component';
import {BarcodeReaderComponent} from './barcode/barcode-reader/barcode-reader.component';
import {BarcodeSheetsComponent} from './barcode/shared/barcode-sheets/barcode-sheets.component';
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
    path: 'barcodemanual', canActivate: [AuthGuardService], component: BarcodeManualComponent, children: [
    {
      path: ':barcodeNumber', canActivate: [AuthGuardService], component: BarcodeSheetsComponent
    },
  ]
  },
  {
    path: 'barcodereader', canActivate: [AuthGuardService], component: BarcodeReaderComponent, children: [
    {
      path: ':barcodeNumber', canActivate: [AuthGuardService], component: BarcodeSheetsComponent
    },
  ]
  },
  {
    path: 'barcodenotfound', canActivate: [AuthGuardService], component: BarcodeManualComponent, children: [
    {
      path: ':barcodeNumber', canActivate: [AuthGuardService], component: BarcodeSheetsComponent
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
    path: 'basemodelnotfound', canActivate: [AuthGuardService], component: BasemodelComponent, children: [
    {
      path: ':basemodelValue', canActivate: [AuthGuardService], component: BasemodelSheetsComponent
    },
  ]
  },
  {
    path: 'userattributes', canActivate: [AuthGuardService], component: UserAttributesComponent
  },
  {
    path: 'brand/:brandname', canActivate: [AuthGuardService], component: BrandComponent, children: [
    {
      path: ':seriesName', canActivate: [AuthGuardService], component: SeriesComponent
    },
  ]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
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
