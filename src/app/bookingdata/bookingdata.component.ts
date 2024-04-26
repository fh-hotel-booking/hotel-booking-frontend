import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { TableModule } from 'primeng/table';
import { BookingData } from '../booking-data';
import { BookingDataService } from '../booking-data.service';

@Component({
  selector: 'app-bookingdata',
  standalone: true,
  imports: [
    NgForOf,
    TableModule
  ],
  templateUrl: './bookingdata.component.html',
  styleUrl: './bookingdata.component.css'
})
export class BookingdataComponent {
  bookingData: BookingData[] = [];

  constructor(private bookingDataService: BookingDataService) { }

  ngOnInit(): void {
    this.getBookingData("");
  }

  getBookingData(hotelName: String): void {
    this.bookingDataService.getBookingDataFilter(hotelName)
      .subscribe(bookingData => {
        this.bookingData = bookingData;
      });
  }
}
