import { Component, HostListener, OnInit } from '@angular/core';
import { EventService } from './services/event.service';
import { ReservationService } from './services/reservation-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: 'reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  host: { class: 'app-reservation' },
})
export class ReservationComponent implements OnInit {
  groupId: string | number;
  items: any[];
  currentStep: number;
  dataGroup: any;
  isScrollToFixed = false;

  constructor(
    private router: Router,
    private reservationService: ReservationService,
    private eventService: EventService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.scrollY);

    this.isScrollToFixed = window.scrollY >= 275 ? true : false;
  }

  ngOnInit(): void {
    this.currentStep = 2;
    this.items = [
      { label: 'Local, Data e Hora da Reserva' },
      { label: 'Grupos de Carros' },
      { label: 'Tarifas e Adicionais' },
      { label: 'Dados Cadastrais e Pessoais ' },
    ];

    this.getGroup(this.eventService.getGroupId());
  }

  getGroup(groupId: any): void {
    if(groupId) {
      this.reservationService.getGroupById(groupId).subscribe(dataGroup => {
        this.dataGroup = dataGroup;
      });
    }else {
      // this.router.navigate([''])
    }
  }

}
