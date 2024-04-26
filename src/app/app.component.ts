import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookingdataComponent} from "./bookingdata/bookingdata.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookingdataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotels';
}
