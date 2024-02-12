import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerListComponent } from './shared/components/passenger-list/passenger-list.component';
import { PassengerCardComponent } from './shared/components/passenger-card/passenger-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerListComponent,
    PassengerCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
