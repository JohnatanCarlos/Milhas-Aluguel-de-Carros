import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { StepsModule } from 'primeng/steps';
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';

import { ReservationComponent } from './reservation.component';
import { RatesAdditionalComponent } from './rates-additional/rates-additional.component';
import { CardAccessoryModule } from 'app/shared/components/card-accessory/card-accessory.module';
import { CardAdditionalModule } from 'app/shared/components/card-additional/card-additional.module';
import { AccordionDetailsModule } from 'app/shared/components/accordion-card/accordion-card.module';
import {DividerModule} from 'primeng/divider';
import { MatButtonModule } from '@angular/material/button';
import { ReservationGroupsComponent } from './reservation-groups/reservation-groups.component';
import { DetailsGroupsModule } from 'app/shared/components/details-groups/details-groups.module';
import { CardGroupsModule } from 'app/shared/components/card-groups/card-groups.module';
import { ReservationSummaryComponent } from './reservation-summary/reservation-summary.component';

@NgModule({
  imports: [
    StepsModule,
    RouterModule,
    CarouselModule,
    CardGroupsModule,
    AccordionModule,
    MatButtonModule,
    DividerModule,
    CardAccessoryModule,
    CardAdditionalModule,
    AccordionDetailsModule,
    DetailsGroupsModule
  ],
  exports: [ReservationComponent, ReservationGroupsComponent, RatesAdditionalComponent],
  declarations: [ReservationComponent, ReservationGroupsComponent, RatesAdditionalComponent, ReservationSummaryComponent],
  providers: [],
})
export class ReservationModule {}
