import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchRentModule } from '../../shared/components/search-rent/search-rent.module';
import { HomeComponent } from './home.component';
import { AppCarouselModule } from './shared/components/carousel/carousel.module';
import {ButtonModule} from 'primeng/button';
import { FooterModule } from 'app/shared/components/footer/footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SearchRentModule,
    AppCarouselModule,
    FooterModule,
    MatButtonModule,
    ButtonModule
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
