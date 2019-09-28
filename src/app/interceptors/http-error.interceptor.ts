import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
   } from '@angular/common/http';
   import { Observable, throwError } from 'rxjs';
   import { retry, catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
   
   export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(
      private _snackBar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request)
        .pipe(
          retry(1),
          catchError((error: HttpErrorResponse) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
              // client-side error
              errorMessage = `Error: ${error.error.message}`;
            } else {
              // server-side error
              errorMessage = 'No data for entered city! Please, try another one.'
              //errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            
           // window.alert(errorMessage);
            this._snackBar.open(errorMessage,'',{
              duration: 3000
            });
            return throwError(errorMessage);
          })
        )
    }
   }