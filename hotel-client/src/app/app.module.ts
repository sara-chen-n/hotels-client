import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelBoxComponent } from './ui-component/hotel-box/hotel-box.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { HotelShippingComponent } from './hotel-shipping/hotel-shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    HotelBoxComponent,
    HotelInfoComponent,
    HotelShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
