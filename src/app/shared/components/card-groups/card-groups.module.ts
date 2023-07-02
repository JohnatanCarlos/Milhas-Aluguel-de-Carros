import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'primeng/carousel';

import { DetailsGroupsModule } from '../details-groups/details-groups.module';
import { CardGroupsComponent } from './card-groups.component';


@NgModule({
  imports: [
    DetailsGroupsModule,
    CarouselModule,
    MatButtonModule
  ],
  exports: [CardGroupsComponent],
  declarations: [CardGroupsComponent],
  providers: [],
})
export class CardGroupsModule { }
