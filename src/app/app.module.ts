import { SearchRentModule } from './shared/components/search-rent/search-rent.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterModule } from './modules/authentication/register/resgister.module';
import { HomeModule } from './modules/home/home.module';
import { ReservationModule } from './modules/reservation/reservation.module';
import { HeaderModule } from './shared/components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInModule } from './modules/authentication/sign-in/sign-in.module';
import { GroupOfCarsModule } from './modules/group-of-cars/group-of-cars.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    ReservationModule,
    GroupOfCarsModule,
    RegisterModule,
    SignInModule,
    BrowserAnimationsModule,
    SearchRentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
