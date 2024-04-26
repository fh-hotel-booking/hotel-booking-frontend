import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from  '@angular/core';
import {BookingData} from "./booking-data";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {

  private url = 'http://localhost:8080/BookingData';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor( private http: HttpClient) { }

  /** GET filtered booking data from the server */
  getBookingDataFilter(hotelName: String): Observable<BookingData[]> {
    return this.http.get<BookingData[]>(this.url + "?hotelName=" + hotelName)
      .pipe();
  }
}
