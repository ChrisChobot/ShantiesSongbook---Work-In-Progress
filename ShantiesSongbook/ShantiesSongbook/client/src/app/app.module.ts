import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

import { AppComponent } from './app.component';
import router from './router';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { IndeterminateDialogIndicatorComponent } from './progress-indicator/indeterminate-dialog-indicator/indeterminate-dialog-indicator.component';
import { DeterminateDialogIndicatorComponent } from './progress-indicator/determinate-dialog-indicator/determinate-dialog-indicator.component';
import SongView from './views/songView';
import SongbookView from './views/songbookView';
import { SongBookPage } from './pages/songBookPage';
import { SongbookService } from './services/songbookService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerService } from './services/spinnerService';
import { InterceptorService } from './services/interceptorService';
import { SongPage } from './pages/songPage';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    router
  ],
  declarations: [
    AppComponent,
    ProgressIndicatorComponent,
    IndeterminateDialogIndicatorComponent,
    DeterminateDialogIndicatorComponent,
    SongView,
    SongbookView,
    SongBookPage,
    SongPage
   ],
    providers: [
      SongbookService,
      SpinnerService,
      { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
      { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
