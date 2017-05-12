/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './shared/options/options.component';
import {BrandComponent} from './brand/brand.component';
import {SeriesComponent} from './brand/series/series.component';
import {BarcodeSelectComponent} from './barcode/barcode-select/barcode-select.component';
import {BarcodeManualComponent} from './barcode/barcode-manual/barcode-manual.component';
import {BarcodeReaderComponent} from './barcode/barcode-reader/barcode-reader.component';
import {BarcodeSheetsComponent} from './barcode/shared/barcode-sheets/barcode-sheets.component';
import {UserComponent} from './shared/user/user.component';
import {UserAttributesComponent} from './user-attributes/user-attributes.component';

const appRoutes: Routes = [
  {
    path: 'options', component: OptionsComponent
  },
  {
    path: 'barcodemanual', component: BarcodeManualComponent, children: [
    {
      path: ':barcodeNumber', component: BarcodeSheetsComponent
    },
  ]
  },
  {
    path: 'barcodeselect', component: BarcodeSelectComponent, children: [
    {
      path: ':barcodeNumber', component: BarcodeSheetsComponent
    },
  ]
  },
  {
    path: 'barcodereader', component: BarcodeReaderComponent, children: [
    {
      path: ':barcodeNumber', component: BarcodeSheetsComponent
    },
  ]
  },
  {
    path: 'barcodenotfound', component: BarcodeManualComponent, children: [
    {
      path: ':barcodeNumber', component: BarcodeSheetsComponent
    },
  ]
  },
  {
    path: 'userattributes', component: UserAttributesComponent
  },
  {
    path: 'brand/:brandname', component: BrandComponent, children: [
    {
      path: ':seriesName', component: SeriesComponent
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
