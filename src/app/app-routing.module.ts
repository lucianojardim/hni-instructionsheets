/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './options/options.component';
import {BrandComponent} from './brand/brand.component';
import {SeriesComponent} from './series/series.component';
import {BarcodeComponent} from './barcode/barcode.component';
import {BarcodeReaderComponent} from './barcode-reader/barcode-reader.component';
import {BarcodeSheetsComponent} from './shared/barcode-sheets/barcode-sheets.component';

const appRoutes: Routes = [
  {
    path: 'barcode', component: BarcodeComponent, children: [
    {path: ':barcodeNumber', component: BarcodeSheetsComponent},
  ]
  },
  {
    path: 'barcodereader', component: BarcodeReaderComponent, children: [
    {path: ':barcodeNumber', component: BarcodeSheetsComponent},
  ]
  },
  {
    path: 'brand/:brandname', component: BrandComponent, children: [
    {path: ':seriesName', component: SeriesComponent},
  ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: OptionsComponent},
  {path: '**', component: OptionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
