import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {UserAttributesRoutingModule} from './user-attributes-routing.module';

import {UserAttributesComponent} from './user-attributes.component';

@NgModule({
  declarations: [
    UserAttributesComponent
  ],
  imports: [
    FormsModule,
    UserAttributesRoutingModule,
    SharedModule
  ],
  providers: []
})
export class UserAttributesModule {
}
