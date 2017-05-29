import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {SharedModule} from './shared/shared.module';
import {SerialNumberModule} from './serial-number/serial-number.module';
import {BasemodelModule} from './basemodel/basemodel.module';
import {BrandModule} from './brand/brand.module';
import {OptionsModule} from './options/options.module';
import {UserAttributesModule} from './user-attributes/user-attributes.module';
import {LoginModule} from './login/login.module';

import {BrandService} from './brand/brand.service';
import {SeriesService} from './brand/series/series.service';
import {InstructionSheetService} from './shared/instruction-sheet/instruction-sheet.service';
import {SerialNumberService} from './serial-number/serial-number.service';
import {UserService} from './shared/user/user.service';
import {BasemodelService} from './basemodel/basemodel.service';
import {SelectedService} from './shared/selected/selected.service';

import {AuthGuardService} from './auth-guard.service';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    SerialNumberModule,
    BasemodelModule,
    BrandModule,
    OptionsModule,
    UserAttributesModule,
    LoginModule
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
