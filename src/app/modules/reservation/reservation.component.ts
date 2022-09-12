import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: 'reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  host: {"class": "app-reservation"}
})

export class ReservationComponent implements OnInit {

  hasDetails = false
  items: any[];
  currentStep: number
  products: any[];
  title: string;



  constructor(private router: Router) { }

  ngOnInit() {
    this.setTitle(this.router.url);

    this.items = [
      {label: 'Local, Data e Hora da Reserva'},
      {label: 'Grupos de Carros'},
      {label: 'Tarifas e Adicionais'},
      {label: 'Dados Cadastrais e Pessoais '},
    ];

    this.products = [
      {
        name: "Fiat Mobi",
        image: "https://img0.icarros.com/dbimg/imgnoticia/4/27348_1"
      },
      {
        name: "Renault Kwid",
        image: "https://www.karvi.com.br/blog/wp-content/uploads/2020/07/kwid-outsider-1-850x478.jpg"
      }
    ];

  }

  setTitle(urlCurrent: string): void {
    if(urlCurrent == '/reservas/passo-2'){
      this.currentStep = 1;
      this.title = 'Selecione o melhor grupo de carro e tarifa para você';
    }else if(urlCurrent == '/reservas/passo-3'){
      this.currentStep = 2;
      this.title = 'Tarifas e Adicionais';
    }else{
      this.title = 'Default';
    }
  }

  changeTitleAccordion(){
    this.hasDetails = !this.hasDetails;
  }

  get titleAccordion(): string {
    return this.hasDetails ? 'Menos detalhes' : 'Mais detalhes';
  }



}
