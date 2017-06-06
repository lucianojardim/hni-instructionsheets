/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BasemodelComponent} from './basemodel.component';
import {SelectedComponent} from '../shared/selected/selected.component';

import {AuthGuardService} from '../auth-guard.service';

const basemodelRoutes: Routes = [
  {
    path: 'basemodel/Manual', canActivate: [AuthGuardService], component: BasemodelComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'basemodel/NotFound', canActivate: [AuthGuardService], component: BasemodelComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(basemodelRoutes)],
  exports: [RouterModule]
})
export class BaseModelRoutingModule {
}
