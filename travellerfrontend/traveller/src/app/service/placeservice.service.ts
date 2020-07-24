import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlaceserviceService {

  private url = 'http://localhost:8080/AroundTheWorld/places';
  constructor(private http: HttpClient) { }


  getAllPlace(): Observable<any> {
    return this.http.get(`${this.url}/retrivePlaces`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  getplaceById(id: number): Observable<any> {
    return this.http.get(`${this.url}/retrivePlaces/PlaceById/${id}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  getplaceByname(name: string): Observable<any> {
    return this.http.get(`${this.url}/retriveplaceType/${name}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }



  getplaceByPackage(packeage: any): Observable<any> {
    return this.http.get(`${this.url}/retrivePlaces/${packeage}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }


  getplaceByType(placeType: string): Observable<any> {
    return this.http.get(`${this.url}/retriveplaceType/${placeType}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }


  // tslint:disable-next-line:ban-types
  getplaceBySeason(season: String): Observable<any> {
    return this.http.get(`${this.url}/retriveBySeason/${season}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }


  getplaceBewteenPackage(start: any, end: any): Observable<any> {
    return this.http.get(`${this.url}/retrivebetweenpackage/start/${start}/between/end/${end}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }

  // tslint:disable-next-line:ban-types
  getplaceSubType(subtype: String): Observable<any> {
    return this.http.get(`${this.url}/retriveSubplaceType/${subtype}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }


  getplaceByRating(rating: number): Observable<any> {
    return this.http.get(`${this.url}/retriveRating/${rating}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }


  getplacePackageGreterThanEqual(value: number): Observable<any> {
    return this.http.get(`${this.url}/retriveplacePackageGreaterThanEqual/${value}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }


  getplacePackageLessThanEqual(value: number): Observable<any> {
    return this.http.get(`${this.url}/retriveplacePackageLessThanEqual/${value}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }


  // tslint:disable-next-line:ban-types
  getTwoplaceTypeAndPlaceRating(placetype: String, rating: number): any {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://localhost:8080/AroundTheWorld/places/placeTypeAndPlaceSubType/PlaceType/${placetype}/PlaceRating/${rating}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  // tslint:disable-next-line:ban-types
  getTwoplaceTypeAndSeason(placetype: String, season: String): any {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://localhost:8080/AroundTheWorld/places/placeTypeAndPlaceSubType/PlaceType/${placetype}/PlaceSeason/${season}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:ban-types
  getTwoplaceTypeAndSubType(placetype: String, placeSubType: String): any {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://localhost:8080/AroundTheWorld/places/placeTypeAndPlaceSubType/PlaceType/${placetype}/placeSubtype/${placeSubType}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }
  // tslint:disable-next-line:ban-types
  getTwoplaceTypeAndBetween(placetype: String, startingValue: number, endingValue: number): any {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`http://localhost:8080/AroundTheWorld/places/retrivebetweenPackage/PlaceType/${placetype}/start/${startingValue}/between/end/${endingValue}`).pipe(tap(data =>
      data), catchError(this.errorHandler));
  }





  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
