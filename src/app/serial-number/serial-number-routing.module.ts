/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {SerialNumberManualComponent} from './serial-number-manual/serial-number-manual.component';
import {SerialNumberReaderComponent} from './serial-number-reader/serial-number-reader.component';
import {SelectedComponent} from '../shared/selected/selected.component';

import {AuthGuardService} from '../auth-guard.service';

const serialNumberRoutes: Routes = [
  {
    path: 'serialNumber/Manual', canActivate: [AuthGuardService], component: SerialNumberManualComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'serialNumber/Reader', canActivate: [AuthGuardService], component: SerialNumberReaderComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'serialNumber/NotFound', canActivate: [AuthGuardService], component: SerialNumberManualComponent, children: [
    {
      path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
    },
  ]
  },
  {
    path: 'serialNumber/NotDecoded',
    canActivate: [AuthGuardService],
    component: SerialNumberManualComponent,
    children: [
      {
        path: ':selectedValue', canActivate: [AuthGuardService], component: SelectedComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(serialNumberRoutes)],
  exports: [RouterModule]
})
export class SerialNumberRoutingModule {
}
