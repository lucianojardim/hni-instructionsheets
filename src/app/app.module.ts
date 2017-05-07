import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {BrandService} from './brand/brand.service';
import {SeriesService} from './series/series.service';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrandComponent} from './brand/brand.component';
import {OptionsComponent} from './options/options.component';
import {SeriesComponent} from './series/series.component';
import {InstructionSheetComponent} from './instruction-sheet/instruction-sheet.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    OptionsComponent,
    SeriesComponent,
    InstructionSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BrandService, SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
