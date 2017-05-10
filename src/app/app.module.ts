import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {BrandService} from './brand/brand.service';
import {SeriesService} from './series/series.service';
import {InstructionSheetService} from './instruction-sheet/instruction-sheet.service';
import {BarcodeService} from './barcode/barcode.service';
import {UserService} from './shared/user/user.service';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrandComponent} from './brand/brand.component';
import {OptionsComponent} from './options/options.component';
import {SeriesComponent} from './series/series.component';
import {BarcodeComponent} from './barcode/barcode.component';
import {BarcodeSheetsComponent} from './shared/barcode-sheets/barcode-sheets.component';
import {BarcodeReaderComponent} from './barcode-reader/barcode-reader.component';
import {UserComponent} from './shared/user/user.component';
import {UserAttributesComponent} from './shared/user/user-attributes/user-attributes.component';
import {BarcodeManualComponent} from './barcode-manual/barcode-manual.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    OptionsComponent,
    SeriesComponent,
    BarcodeComponent,
    BarcodeSheetsComponent,
    BarcodeReaderComponent,
    UserComponent,
    UserAttributesComponent,
    BarcodeManualComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BrandService, SeriesService, InstructionSheetService, BarcodeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
