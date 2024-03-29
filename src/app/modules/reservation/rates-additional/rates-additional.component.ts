import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-rates-additional',
  templateUrl: 'rates-additional.component.html',
  styleUrls: ['./rates-additional.component.scss']
})

export class RatesAdditionalComponent implements OnInit {
  isShowAdditional: boolean;
  additionals = [
    {id: 1, title: "Proteção do carro", value: 25.00, description: "Para você ter a tranquilidade total, vá de Proteção completa! Com esta proteção adicional a proteção do carro, você conta com a cobertura do carro, vidros e pneus, e ainda tem 100% de isenção dos custos pré fixados de limite de danos em caso de acidente ou roubo."},
    {id: 2, title: "Cobertura para terceiros", value: 10.00, description: null},
    {id: 3, title: "Condutor Jovem", value: 15.00},
    {id: 4, title: "Limpeza Garantida", value: 30.00},
  ];

  accessorys = [
    {id: 1, title: "Cadeira de bebê", value: 25.00, quantity: 0},
    {id: 2, title: "Assento de elevação", value: 25.00, quantity: 0},
    {id: 3, title: "Bebê conforto", value: 25.00, quantity: 0},
    {id: 4, title: "Localiza Way", value: 25.00, quantity: 0}
  ];

  totalItens: any[] = [];

  constructor(private router: Router, private reservationService: ReservationService) { }

  ngOnInit() {
    this.showAdditional(this.router.url)
  }

  showAdditional(urlCurrent: string): void {
    if(urlCurrent == '/reservas/passo-3'){
      this.isShowAdditional = true;
    }else {
      this.isShowAdditional = false;
    }
  }

  setAccessory(event: any) {
    this.reservationService.setAccessoryValue(event);
    console.log(event)
  }

  setAdditional(event: any) {
    this.reservationService.setAdditionalValue(event);
    console.log(event)
  }

  updateTotal(totalAtualizado: any[]) {
    this.totalItens = totalAtualizado;
    console.log(this.totalItens)
  }

}
