import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {BrandRoutingModule} from './brand-routing.module';

import {BrandComponent} from './brand.component';

@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    FormsModule,
    BrandRoutingModule,
    SharedModule
  ],
  providers: []
})
export class BrandModule {
}
