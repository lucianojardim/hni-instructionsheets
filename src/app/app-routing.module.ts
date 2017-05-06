/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {OptionsComponent} from './options/options.component';
import {BrandComponent} from './brand/brand.component';
import {SeriesComponent} from './series/series.component';

const appRoutes: Routes = [
  {
    path: 'instructionsheets/:brandname', component: BrandComponent, children: [
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
