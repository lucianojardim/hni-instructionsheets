/**
 * Created by jardiml on 4/23/17.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';

import {AuthGuardService} from './auth-guard.service';

const appRoutes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  {
    path: '', component: LoginComponent, pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  // {
  //   path: 'options', loadChildren: './options/options.module#OptionsModule'
  // },
  // {
  //   path: 'serialNumber', loadChildren: './serial-number/serial-number.module#SerialNumberModule'
  // },
  // {
  //   path: 'basemodel', loadChildren: './basemodel/basemodel.module#BasemodelModule'
  // },
  // {
  //   path: 'brand', loadChildren: './brand/brand.module#BrandModule'
  // },
  // {
  //   path: 'userAttributes', loadChildren: './user-attributes/user-attributes.module#UserAttributesModule'
  // }
  // {
  //   path: '**', component: LoginComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
