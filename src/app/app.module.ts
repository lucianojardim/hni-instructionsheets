import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {BrandService} from './brand/brand.service';
import {SeriesService} from './brand/series/series.service';
import {InstructionSheetService} from './shared/instruction-sheet/instruction-sheet.service';
import {SerialNumberService} from './serial-number/serial-number.service';
import {UserService} from './shared/user/user.service';
import {BasemodelService} from './basemodel/basemodel.service';

import {AuthGuardService} from './auth-guard.service';

// import {DataStorageService} from './shared/persistence/data-storage.service';

import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {BrandComponent} from './brand/brand.component';
import {OptionsComponent} from './shared/options/options.component';
import {SeriesComponent} from './brand/series/series.component';
import {SerialNumberSheetsComponent} from './serial-number/shared/serial-number-sheets/serial-number-sheets.component';
import {SerialNumberReaderComponent} from './serial-number/serial-number-reader/serial-number-reader.component';
import {UserComponent} from './shared/user/user.component';
import {UserAttributesComponent} from './user-attributes/user-attributes.component';
import {SerialNumberManualComponent} from './serial-number/serial-number-manual/serial-number-manual.component';
import {BasemodelComponent} from './basemodel/basemodel.component';
import {BasemodelSheetsComponent} from './basemodel/basemodel-sheets/basemodel-sheets.component';
import { InstructionSheetComponent } from './shared/instruction-sheet/instruction-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    OptionsComponent,
    SeriesComponent,
    SerialNumberSheetsComponent,
    SerialNumberReaderComponent,
    UserComponent,
    UserAttributesComponent,
    SerialNumberManualComponent,
    BasemodelComponent,
    BasemodelSheetsComponent,
    InstructionSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BrandService,
    SeriesService,
    InstructionSheetService,
    SerialNumberService,
    UserService,
    BasemodelService,
    AuthGuardService
    // DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
