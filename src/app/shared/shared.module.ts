import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OptionsRoutingModule} from '../options/options-routing.module';

import {HeaderComponent} from './header/header.component';
import {InstructionSheetComponent} from './instruction-sheet/instruction-sheet.component';
import {SelectedComponent} from './selected/selected.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InstructionSheetComponent,
    SelectedComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    OptionsRoutingModule
  ],
  providers: [],
  exports: [
    CommonModule,
    HeaderComponent,
    InstructionSheetComponent,
    SelectedComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {
}
