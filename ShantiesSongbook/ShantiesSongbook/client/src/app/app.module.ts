import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import router from './router';
import { ProgressIndicatorComponent } from './progress-indicator/progress-indicator.component';
import { IndeterminateDialogIndicatorComponent } from './progress-indicator/indeterminate-dialog-indicator/indeterminate-dialog-indicator.component';
import { DeterminateDialogIndicatorComponent } from './progress-indicator/determinate-dialog-indicator/determinate-dialog-indicator.component';
import { MatIconModule } from '@angular/material/icon';
import ShantyView from './views/shantyView';
import SongbookView from './views/songbookView';
import { SongBookPage } from './pages/songBookPage';

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
    router
  ],
  declarations: [
    AppComponent,
    ProgressIndicatorComponent,
    IndeterminateDialogIndicatorComponent,
    DeterminateDialogIndicatorComponent,
    ShantyView,
    SongbookView,
    SongBookPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
