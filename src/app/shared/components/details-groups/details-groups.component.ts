import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-details-groups',
  templateUrl: 'details-groups.component.html',
  styleUrls: ['details-groups.component.scss'],
})
export class DetailsGroupsComponent implements OnInit {
  @Input() detailsGroup: any[] = [];

  allDetails = [
    {
      icon: 'icon-door',
      descricao: '4 portas',
      codigoAcessorio: 1
    },
    {
      icon: 'pi-bolt',
      descricao: 'Ar-condicionado',
      codigoAcessorio: 2
    },
    {
      icon: 'pi-moon',
      descricao: 'Vidro elétrico',
      codigoAcessorio: 3
    },
    {
      icon: 'pi-sun',
      descricao: 'Trava elétrica',
      codigoAcessorio: 4
    },
    {
      icon: 'pi-at',
      descricao: 'Air bag',
      codigoAcessorio: 5
    },
    {
      icon: 'pi-stop',
      descricao: 'Dir. Hidráulica',
      codigoAcessorio: 6
    },
    {
      icon: 'pi-qrcode',
      descricao: 'ABS',
      codigoAcessorio: 7
    },
    {
      icon: 'pi-qrcode',
      descricao: 'Automatico',
      codigoAcessorio: 8
    },
    {
      icon: 'pi-code',
      descricao: 'Eletrico',
      codigoAcessorio: 9
    },
  ];

  details: any;

  constructor() {}

  ngOnInit() {
    console.log(this.detailsGroup)
    this.details = this.allDetails.filter(detail => {
      return this.detailsGroup.some(detailGroup => detailGroup.codigoAcessorio === detail.codigoAcessorio);
    });
  }

}
