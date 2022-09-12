import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Product {
  id?: string;
  group?: string;
  subGroup?: string;
  description?: string;
  image?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: 'carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  products = [
    {
      id: '1000',
      group: 'Grupo A',
      subGroup: 'Compacto',
      description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAdWwK3vLdNatlGdPco-AhnANWsb2YTviZw&usqp=CAU',
    },
    {
      id: '1001',
      group: 'Grupo B',
      subGroup: 'Compacto Com Ar',
      description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAdWwK3vLdNatlGdPco-AhnANWsb2YTviZw&usqp=CAU',
    },
    {
      id: '1002',
      group: 'Grupo C',
      subGroup: 'Econômico Com Ar',
      description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAdWwK3vLdNatlGdPco-AhnANWsb2YTviZw&usqp=CAU',
    },
    {
      id: '1003',
      group: 'Grupo D',
      subGroup: 'Econômico Sesan Com Ar',
      description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJAdWwK3vLdNatlGdPco-AhnANWsb2YTviZw&usqp=CAU',
    }
  ];

  // responsiveOptions;

  constructor() {
    // this.responsiveOptions = [
    //   {
    //     breakpoint: '1024px',
    //     numVisible: 3,
    //     numScroll: 3,
    //   },
    //   {
    //     breakpoint: '768px',
    //     numVisible: 2,
    //     numScroll: 2,
    //   },
    //   {
    //     breakpoint: '560px',
    //     numVisible: 1,
    //     numScroll: 1,
    //   },
    // ];
  }

  ngOnInit(): void {}
}
