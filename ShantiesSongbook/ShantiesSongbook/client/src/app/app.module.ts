import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import ShantyView from '../app/views/shantyView'
import SongbookView from '../app/views/songbookView'
import { SongbookService } from './services/songbookService';
import { SpinnerInterceptor } from './services/spinnerInterceptor';
import router from './router';
import { SongBookPage } from './pages/songBookPage';

@NgModule({
  declarations: [
    AppComponent,
    ShantyView,
    SongbookView,
    SongBookPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    router
  ],
  providers: [
    SongbookService,
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
