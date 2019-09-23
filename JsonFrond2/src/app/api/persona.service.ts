import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private perUrl = 'http://localhost:3000/person';

  constructor(private http: HttpClient) {}

  obtenerPersonas(): Observable<any[]>{
    return this.http.get<any[]>(this.perUrl).pipe(
      tap(data => console.log('All' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error ocurred: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
