import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SignInComponent } from './sign-in.component';
import { SearchRentModule } from 'app/shared/components/search-rent/search-rent.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SearchRentModule,
    MatGridListModule
  ],
  exports: [SignInComponent],
  declarations: [SignInComponent],
  providers: [],
})
export class SignInModule { }
