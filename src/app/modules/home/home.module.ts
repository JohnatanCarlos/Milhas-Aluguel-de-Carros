import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchRentModule } from '../../shared/components/search-rent/search-rent.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from './shared/components/carousel/carousel.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SearchRentModule,
    CarouselModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
