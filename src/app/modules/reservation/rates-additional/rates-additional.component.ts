import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates-additional',
  templateUrl: 'rates-additional.component.html',
  styleUrls: ['./rates-additional.component.scss']
})

export class RatesAdditionalComponent implements OnInit {
  additionals = [
    {id: 1, title: "Proteção do carro", value: "25.00"},
    {id: 2, title: "Cobertura para terceiros", value: "10.00"},
    {id: 3, title: "Condutor Jovem", value: "15.00"},
    {id: 4, title: "Limpeza Garantida", value: "30.00"},
  ];

  accessorys = [
    {id: 1, title: "Cadeira de bebê", value: "25.00"},
    {id: 2, title: "Assento de elevação", value: "25.00"},
    {id: 3, title: "Bebê conforto", value: "25.00"},
    {id: 4, title: "Localiza Way", value: "25.00"},
  ];

  constructor() { }

  ngOnInit() { }

}
