import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';

import { ReservationComponent } from './reservation.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [StepsModule, CarouselModule, AccordionModule, ButtonModule],
  exports: [ReservationComponent],
  declarations: [ReservationComponent],
  providers: [],
})
export class ReservationModule {}
