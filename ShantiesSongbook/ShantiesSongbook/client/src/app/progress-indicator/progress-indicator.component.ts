import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatAll, delay, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { IndeterminateDialogIndicatorComponent } from './indeterminate-dialog-indicator/indeterminate-dialog-indicator.component';
import { DeterminateDialogIndicatorComponent } from './determinate-dialog-indicator/determinate-dialog-indicator.component';

@Component({
  selector: 'progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.css']
})
export class ProgressIndicatorComponent implements OnInit {
  spinnerDiameter: number = 50;
  progressValue$ = from([
    of(20).pipe(delay(800)),
    of(40).pipe(delay(1200)),
    of(60).pipe(delay(1600)),
    of(80).pipe(delay(2000)),
    of(100).pipe(delay(2400))
  ]).pipe(
    startWith(of(0)),
    concatAll()
  );

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  showDialog(): void {
    this.dialog.open(IndeterminateDialogIndicatorComponent, {
      width: '350px',
      hasBackdrop: true
    });

    // this.dialog.open(DeterminateDialogIndicatorComponent, {
    //   width: '250px',
    //   hasBackdrop: true
    // });
  }
}
