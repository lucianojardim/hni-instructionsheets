import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {BrandService} from './brand/brand.service';
import {SeriesService} from './brand/series/series.service';
import {InstructionSheetService} from './shared/instruction-sheet/instruction-sheet.service';
import {BarcodeService} from './barcode/barcode.service';
import {UserService} from './shared/user/user.service';
import {BasemodelService} from './basemodel/basemodel.service';

import {AuthGuardService} from './auth-guard.service';

// import {DataStorageService} from './shared/persistence/data-storage.service';

import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {BrandComponent} from './brand/brand.component';
import {OptionsComponent} from './shared/options/options.component';
import {SeriesComponent} from './brand/series/series.component';
import {BarcodeSheetsComponent} from './barcode/shared/barcode-sheets/barcode-sheets.component';
import {BarcodeReaderComponent} from './barcode/barcode-reader/barcode-reader.component';
import {UserComponent} from './shared/user/user.component';
import {UserAttributesComponent} from './user-attributes/user-attributes.component';
import {BarcodeManualComponent} from './barcode/barcode-manual/barcode-manual.component';
import {BasemodelComponent} from './basemodel/basemodel.component';
import {BasemodelSheetsComponent} from './basemodel/basemodel-sheets/basemodel-sheets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    OptionsComponent,
    SeriesComponent,
    BarcodeSheetsComponent,
    BarcodeReaderComponent,
    UserComponent,
    UserAttributesComponent,
    BarcodeManualComponent,
    BasemodelComponent,
    BasemodelSheetsComponent
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
    BarcodeService,
    UserService,
    BasemodelService,
    AuthGuardService
    // DataStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
