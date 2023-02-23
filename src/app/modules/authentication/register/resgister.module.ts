import { SearchRentModule } from './../../../shared/components/search-rent/search-rent.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RegisterComponent } from './register.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { StepsModule } from 'primeng/steps';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    StepsModule,
    SearchRentModule
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule { }
