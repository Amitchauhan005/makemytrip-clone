

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { FlightsComponent } from './components/flights/flights';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: FlightsComponent }
];