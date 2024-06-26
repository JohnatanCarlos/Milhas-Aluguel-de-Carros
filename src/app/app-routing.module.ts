import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './modules/authentication/register/register.component';
import { SignInComponent } from './modules/authentication/sign-in/sign-in.component';
import { HomeComponent } from './modules/home/home.component';
import { ReservationComponent } from './modules/reservation/reservation.component';
import { ReservationGroupsComponent } from './modules/reservation/reservation-groups/reservation-groups.component';
import { GroupOfCarsComponent } from './modules/group-of-cars/group-of-cars.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {disabledSearch: false, overlapSearch: true}
  },
  {
    path: 'cadastro',
    component: RegisterComponent,
    data: {disabledSearch: true}
  },
  {
    path: 'login',
    component: SignInComponent,
    data: {disabledSearch: true}
  },
  {
    path: 'register',
    component: SignInComponent,
    data: {disabledSearch: true}
  },
  {
    path: 'grupos-de-carros',
    component: GroupOfCarsComponent,
    data: {disabledSearch: true}
  },
  {
    path: 'reservas/passo-2',
    component: ReservationGroupsComponent,
    data: {disabledSearch: true}
  },
  {
    path: 'reservas/passo-3',
    component: ReservationComponent,
    data: {disabledSearch: true}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
