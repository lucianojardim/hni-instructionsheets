/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './options/options.component';
import {BrandComponent} from './brand/brand.component';
import {SeriesComponent} from './series/series.component';
import {BarcodeComponent} from './barcode/barcode.component';
import {BarcodeManualComponent} from './barcode-manual/barcode-manual.component';
import {BarcodeReaderComponent} from './barcode-reader/barcode-reader.component';
import {BarcodeSheetsComponent} from './shared/barcode-sheets/barcode-sheets.component';
import {UserComponent} from './shared/user/user.component';
import {UserAttributesComponent} from './shared/user/user-attributes/user-attributes.component';

const appRoutes: Routes = [
  {path: 'options', component: OptionsComponent},
  {
    path: 'barcodetext', component: BarcodeManualComponent, children: [
    {path: ':barcodeNumber', component: BarcodeSheetsComponent},
  ]
  },
  {
    path: 'barcodelist', component: BarcodeComponent, children: [
    {path: ':barcodeNumber', component: BarcodeSheetsComponent},
  ]
  },
  {
    // TODO finish barcode reader
    path: 'barcodereader', component: BarcodeReaderComponent, children: [
    {path: ':barcodeNumber', component: BarcodeSheetsComponent},
  ]
  },
  {path: 'attributes', component: UserAttributesComponent},
  {
    path: 'brand/:brandname', component: BrandComponent, children: [
    {path: ':seriesName', component: SeriesComponent},
  ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: UserComponent},
  {path: '**', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
