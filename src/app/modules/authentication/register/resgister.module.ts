import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import { DropdownModule } from "primeng/dropdown";
import { RegisterComponent } from './register.component';
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
		CheckboxModule,
		ButtonModule,
		RadioButtonModule,
    RippleModule,
    DropdownModule,
    FormsModule,
    RadioButtonModule,
  ],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule { }
