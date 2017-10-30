import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LocationService }		from './services/location.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
