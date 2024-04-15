import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from 'app/shared/components/footer/footer.module';
import { HeaderModule } from 'app/shared/components/header/header.module';
import { ButtonModule } from 'primeng/button';

import { HomeComponent } from './home.component';
import { AppCarouselModule } from './shared/components/carousel/carousel.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderModule,
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
