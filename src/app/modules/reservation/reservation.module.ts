import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';

import { ReservationComponent } from './reservation.component';
import { ButtonModule } from 'primeng/button';
import { RatesAdditionalComponent } from './rates-additional/rates-additional.component';

@NgModule({
  imports: [StepsModule, CarouselModule, AccordionModule, ButtonModule],
  exports: [ReservationComponent, RatesAdditionalComponent],
  declarations: [ReservationComponent, RatesAdditionalComponent],
  providers: [],
})
export class ReservationModule {}
