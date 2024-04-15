import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'app/shared/components/header/header.module';
import { StepsModule } from 'primeng/steps';

import { SignInComponent } from './sign-in.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HeaderModule,
    MatGridListModule,
    StepsModule,
    NgxMaskModule.forRoot()
  ],
  exports: [SignInComponent],
  declarations: [SignInComponent],
  providers: [],
})
export class SignInModule { }
