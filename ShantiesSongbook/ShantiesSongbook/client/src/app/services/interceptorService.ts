
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from './spinnerService';
import { finalize, delay } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    constructor(private spinner: SpinnerService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.visibility.emit(true);
        return next.handle(req)
            .pipe(
                delay(0),
                finalize(() => this.spinner.notVisibility.emit(false))
            );   
    }
}