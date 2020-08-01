import { Booking } from './../model/booking';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private url = 'http://localhost:8080/AroundTheWorld/booking';
  constructor(private http: HttpClient) { }


  createOrder(booking: Booking ): Observable<any> {
    return this.http.post(`${this.url}/createOrder`, booking).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
   errorHandler(error: HttpErrorResponse): any {
    return observableThrowError(error.message || 'Server Error');
  }
}
