import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionCardComponent } from './accordion-card.component';
import { DetailsGroupsModule } from '../details-groups/details-groups.module';



@NgModule({
  declarations: [AccordionCardComponent],
  imports: [CommonModule, DetailsGroupsModule],
  exports: [AccordionCardComponent]
})
export class AccordionDetailsModule { }
