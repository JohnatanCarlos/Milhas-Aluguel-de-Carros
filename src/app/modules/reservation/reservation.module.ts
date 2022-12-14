import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';

import { ReservationComponent } from './reservation.component';
import { ButtonModule } from 'primeng/button';
import { RatesAdditionalComponent } from './rates-additional/rates-additional.component';
import { CardAccessoryModule } from 'app/shared/components/card-accessory/card-accessory.module';
import { CardAdditionalModule } from 'app/shared/components/card-additional/card-additional.module';
import { AccordionDetailsModule } from 'app/shared/components/accordion-card/accordion-card.module';
import {DividerModule} from 'primeng/divider';

@NgModule({
  imports: [
    StepsModule,
    RouterModule,
    CarouselModule,
    AccordionModule,
    ButtonModule,
    DividerModule,
    CardAccessoryModule,
    CardAdditionalModule,
    AccordionDetailsModule
  ],
  exports: [ReservationComponent, RatesAdditionalComponent],
  declarations: [ReservationComponent, RatesAdditionalComponent],
  providers: [],
})
export class ReservationModule {}
