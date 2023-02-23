import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './modules/authentication/register/register.component';
import { SignInComponent } from './modules/authentication/sign-in/sign-in.component';
import { HomeComponent } from './modules/home/home.component';
import { ReservationComponent } from './modules/reservation/reservation.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: RegisterComponent},
  {path: 'login', component: SignInComponent},
  {path: 'reservas/passo-2', component: ReservationComponent},
  {path: 'reservas/passo-3', component: ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
