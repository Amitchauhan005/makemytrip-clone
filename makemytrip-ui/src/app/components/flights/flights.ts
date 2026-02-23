import { Component } from '@angular/core';
import { FlightCardComponent } from '../flight-card/flight-card';

@Component({
  selector: 'app-flights',
  standalone: true,
  imports: [FlightCardComponent],
  templateUrl: './flights.html'
})
export class FlightsComponent {}