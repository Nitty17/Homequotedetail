import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeDetailsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHomeDetails(): Observable<HomeDetail> {
    return this.http.get<HomeDetail>(`${this.baseUrl}/home-details`)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errMessage = '';

    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errMessage = error.error.message;
    } else {
      // Get server-side error
      errMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errMessage);
    return throwError(errMessage);
 }
}
