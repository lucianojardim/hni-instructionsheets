import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {SerialNumberRoutingModule} from './serial-number-routing.module';

import {SerialNumberManualComponent} from './serial-number-manual/serial-number-manual.component';
import {SerialNumberReaderComponent} from './serial-number-reader/serial-number-reader.component';

@NgModule({
  declarations: [
    SerialNumberReaderComponent,
    SerialNumberManualComponent
  ],
  imports: [
    FormsModule,
    SerialNumberRoutingModule,
    SharedModule
  ],
  providers: []
})
export class SerialNumberModule {
}
