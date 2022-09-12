import { ReservationComponent } from './modules/reservation/reservation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/authentication/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reservas/passo-2', component: ReservationComponent},
  {path: 'reservas/passo-3', component: ReservationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
