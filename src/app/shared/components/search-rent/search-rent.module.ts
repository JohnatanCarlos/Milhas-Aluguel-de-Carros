import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchRentComponent } from './search-rent.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
  ],
  exports: [SearchRentComponent],
  declarations: [SearchRentComponent],
  providers: [],
})
export class SearchRentModule { }
