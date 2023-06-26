import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation-http.service';

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
  ofertas: any[] = [];
  detailsVehicle: any[];
  title: string;
  isScrollToFixed = false;

  constructor(private router: Router, private reservationService: ReservationService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY);

    this.isScrollToFixed = window.scrollY >= 275 ? true : false;
  }

  ngOnInit(): void {
    this.currentStep = 1;
    this.listGroupsAvailables();

    this.items = [
      { label: 'Local, Data e Hora da Reserva' },
      { label: 'Grupos de Carros' },
      { label: 'Tarifas e Adicionais' },
      { label: 'Dados Cadastrais e Pessoais ' },
    ];

    this.products = [
      {
        name: 'Fiat Mobi',
        image: 'https://img0.icarros.com/dbimg/imgnoticia/4/27348_1',
      },
      {
        name: 'Renault Kwid',
        image:
          'https://www.karvi.com.br/blog/wp-content/uploads/2020/07/kwid-outsider-1-850x478.jpg',
      },
    ];
  }

  flipCard(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
  }

  nextStep(): void {
    this.router.navigate(['reservas/passo-3']);
  }

  listGroupsAvailables(): void {
    this.reservationService.getGroupsAvailable().subscribe(groups => {
      this.ofertas = groups;
    })
  }
}
