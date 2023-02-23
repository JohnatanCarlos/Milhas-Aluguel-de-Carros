import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SearchRentComponent } from './search-rent.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { HeaderModule } from '../header/header.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    FormsModule,
    HeaderModule,
    ButtonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [SearchRentComponent],
  declarations: [SearchRentComponent],
  providers: [],
})
export class SearchRentModule { }
