/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BrandComponent} from './brand.component';
import {SelectedComponent} from '../shared/selected/selected.component';

import {AuthGuardService} from '../auth-guard.service';

const brandRoutes: Routes = [
  {
    path: 'brand/:brandName', canActivate: [AuthGuardService], component: BrandComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(brandRoutes)],
  exports: [RouterModule]
})
export class BrandRoutingModule {
}
