
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
import { FooterModule } from './shared/components/footer/footer.module';
import { NgxMaskModule } from 'ngx-mask';

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
    FooterModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
