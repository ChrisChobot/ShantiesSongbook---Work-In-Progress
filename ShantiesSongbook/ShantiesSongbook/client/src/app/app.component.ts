import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpinnerService } from './services/spinnerService';

@Component({
  selector: 'songbook-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Shanties song book';

    public visibility: boolean = false;

    constructor(private _http: HttpClient, private spinnerService: SpinnerService) { }

    ngOnInit() {

        this.spinnerService.visibility.subscribe(state => {
            this.visibility = state;
        });

        this.spinnerService.notVisibility.subscribe(state => {
            this.visibility = state;
        });

    }

}
