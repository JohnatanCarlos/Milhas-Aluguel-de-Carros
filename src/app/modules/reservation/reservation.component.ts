import { Component, HostListener, OnInit } from '@angular/core';
import { EventService } from './services/event.service';
import { ReservationHttpService } from './services/reservation-http.service';
import { Router } from '@angular/router';
import { ReservationService } from './services/reservation.service';

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
  dataGroup2: any;
  isScrollToFixed = true;
  additionals: any[] = [];
  accessorys: any[] = [];
  isFlipped = false;

  constructor(
    private reservationService: ReservationService,
    private reservationHttpService: ReservationHttpService,
    private eventService: EventService,
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // console.log(window.scrollY);

    this.isScrollToFixed = window.scrollY >= 0 ? true : false;
  }

  ngOnInit(): void {
    this.currentStep = 2;
    this.items = [
      { label: 'Localização e data' },
      { label: 'Grupos de veículos' },
      { label: 'Resumo da reserva' },
      { label: 'Identificação' },
    ];

    this.getGroup(this.eventService.getGroupId());
    this.listenerAdditional()
    this.listenerAccessory()
  }

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }

  getGroup(groupId: any): void {
    if(groupId) {
      this.reservationHttpService.getGroupById(groupId).subscribe(dataGroup => {
        this.dataGroup = dataGroup;
        console.log(this.dataGroup)
         // Transforme o objeto em um array de objetos para enviar ao componente
         this.dataGroup2 = [dataGroup]
      });
    }else {
      // this.router.navigate([''])
    }
  }

  listenerAdditional() {
    this.reservationService.getAdditionalsObservable().subscribe(res => {
     this.additionals = res
    })
  }

  listenerAccessory() {
    this.reservationService.getAccessorysObservable().subscribe(res => {
     this.accessorys = res
    })
  }

}
