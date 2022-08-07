import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  count = 0;

  constructor() { }

  ngOnInit() {
    this.currentStep = 1;

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

  changeTitleAccordion(){
    this.hasDetails = !this.hasDetails;
  }

  get titleAccordion(): string {
    return this.hasDetails ? 'Menos detalhes' : 'Mais detalhes';
  }

  countNumber(acao: string){
    if(acao == 'add'){
      this.count ++
    }else if(acao == 'rem'){
      this.count --
    }

  }

}
