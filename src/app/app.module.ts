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
import {SelectedService} from './shared/selected/selected.service';

import {AuthGuardService} from './auth-guard.service';

import { AppComponent } from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {BrandComponent} from './brand/brand.component';
import {OptionsComponent} from './options/options.component';
import {SerialNumberReaderComponent} from './serial-number/serial-number-reader/serial-number-reader.component';
import {LoginComponent} from './login/login.component';
import {UserAttributesComponent} from './user-attributes/user-attributes.component';
import {SerialNumberManualComponent} from './serial-number/serial-number-manual/serial-number-manual.component';
import {BasemodelComponent} from './basemodel/basemodel.component';
import { InstructionSheetComponent } from './shared/instruction-sheet/instruction-sheet.component';
import {SelectedComponent} from './shared/selected/selected.component';
import {FooterComponent} from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    OptionsComponent,
    SerialNumberReaderComponent,
    LoginComponent,
    UserAttributesComponent,
    SerialNumberManualComponent,
    BasemodelComponent,
    InstructionSheetComponent,
    SelectedComponent,
    FooterComponent
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
    AuthGuardService,
    SelectedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
