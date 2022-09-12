import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

import { CarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CarouselComponent],
  declarations: [CarouselComponent],
  providers: [],
})
export class AppCarouselModule { }
