import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {BaseModelRoutingModule} from './basemodel-routing.module';

import {BasemodelComponent} from './basemodel.component';

@NgModule({
  declarations: [
    BasemodelComponent
  ],
  imports: [
    FormsModule,
    BaseModelRoutingModule,
    SharedModule
  ],
  providers: []
})
export class BasemodelModule {
}
