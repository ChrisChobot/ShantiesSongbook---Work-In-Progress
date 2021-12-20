import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import ShantyView from '../app/views/shantyView'
import { Songbook } from './services/songbook';

@NgModule({
  declarations: [
    AppComponent,
    ShantyView
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    Songbook
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
