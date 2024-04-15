import { NgModule } from '@angular/core';

import { GroupOfCarsComponent } from './group-of-cars.component';
import { CardGroupsModule } from 'app/shared/components/card-groups/card-groups.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CardGroupsModule,
    CommonModule
  ],
  exports: [],
  declarations: [GroupOfCarsComponent],
  providers: [],
})
export class GroupOfCarsModule { }
