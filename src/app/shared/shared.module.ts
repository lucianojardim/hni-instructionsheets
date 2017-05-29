import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppRoutingModule} from '../app-routing.module';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {InstructionSheetComponent} from './instruction-sheet/instruction-sheet.component';
import {SelectedComponent} from './selected/selected.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    InstructionSheetComponent,
    SelectedComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    CommonModule,
    FooterComponent,
    HeaderComponent,
    InstructionSheetComponent,
    SelectedComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule {
}
