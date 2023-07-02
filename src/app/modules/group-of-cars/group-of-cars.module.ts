import { NgModule } from '@angular/core';

import { GroupOfCarsComponent } from './group-of-cars.component';
import { CardGroupsModule } from 'app/shared/components/card-groups/card-groups.module';

@NgModule({
  imports: [
    CardGroupsModule
  ],
  exports: [],
  declarations: [GroupOfCarsComponent],
  providers: [],
})
export class GroupOfCarsModule { }
