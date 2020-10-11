import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';
import { CommonModule } from '@angular/common';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { HotelShippingComponent } from './hotel-shipping/hotel-shipping.component';

const routes: Routes = [
  { path: '', component: HotelsComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'hotels/:id/info', component: HotelInfoComponent },
  { path: 'hotels/:id/shipping', component: HotelShippingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
