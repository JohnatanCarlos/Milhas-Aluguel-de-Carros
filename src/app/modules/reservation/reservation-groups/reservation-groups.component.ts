import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationHttpService } from '../services/reservation-http.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-reservation-groups',
  templateUrl: 'reservation-groups.component.html',
  styleUrls: ['./reservation-groups.component.scss'],
  host: { class: 'app-reservation' },
})
export class ReservationGroupsComponent implements OnInit {
  flippedCards: boolean[] = [];
  items: any[];
  currentStep: number;
  products: any[];
  groupsAvailables: any[] = [];
  detailsVehicle: any[];
  title: string;
  isScrollToFixed = false;

  constructor(private router: Router, private reservationHttpService: ReservationHttpService, private eventService: EventService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.scrollY);

    this.isScrollToFixed = window.scrollY >= 275 ? true : false;
  }

  ngOnInit(): void {
    this.currentStep = 1;
    this.listGroupsAvailables();

    this.items = [
      { label: 'Localização e data' },
      { label: 'Grupos de veículos' },
      { label: 'Resumo da reserva' },
      { label: 'Identificação' },
    ];
  }

  flipCard(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
  }

  nextStep(groupId: any): void {
    this.eventService.sendGroupId(groupId);
    this.router.navigate(['reservas/passo-3']);
  }

  listGroupsAvailables(): void {
    this.reservationHttpService.getGroupsAvailable().subscribe(groups => {
      this.groupsAvailables = groups;
      console.log(this.groupsAvailables)
    })
  }
}
