import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  @Input() dataSource: any;
  @Input() slidesPerView: number;

  // products = [
  //   {
  //     id: '1000',
  //     group: 'Grupo A',
  //     subGroup: 'Compacto',
  //     description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
  //     image: 'https://mobi.fiat.com.br/content/dam/fiat/products/341/acz/0/2023/page/profile.png',
  //   },
  //   {
  //     id: '1001',
  //     group: 'Grupo B',
  //     subGroup: 'Compacto Com Ar',
  //     description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
  //     image: 'https://orca.com.br/uploads/products/versions/branco-summit-novo-onix.png',
  //   },
  //   {
  //     id: '1002',
  //     group: 'Grupo C',
  //     subGroup: 'Econômico Com Ar',
  //     description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
  //     image: 'https://grandbrasil.com.br/wp-content/uploads/2022/09/hb20s-2023-bg-300x211.png',
  //   },
  //   {
  //     id: '1003',
  //     group: 'Grupo D',
  //     subGroup: 'Econômico Sesan Com Ar',
  //     description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
  //     image: 'http://fakeimg.pl/300/?text=3',
  //   },
  //   {
  //     id: '1003',
  //     group: 'Grupo D',
  //     subGroup: 'Econômico Sesan Com Ar',
  //     description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
  //     image: 'http://fakeimg.pl/300/?text=4',
  //   },
  //   {
  //     id: '1003',
  //     group: 'Grupo D',
  //     subGroup: 'Econômico Sesan Com Ar',
  //     description: 'Veiculo similiar a: Fiat Uno 1.0, dentre outros',
  //     image: 'http://fakeimg.pl/300/?text=5',
  //   }
  // ];

  // carouselData = [
  //   {
  //     'id': '1',
  //     'src': 'http://fakeimg.pl/300/?text=1',
  //   },
  //   {
  //     'id': '2',
  //     'src': 'http://fakeimg.pl/300/?text=2',
  //   },
  //   {
  //     'id': '3',
  //     'src': 'http://fakeimg.pl/300/?text=3',
  //   },
  //   {
  //     'id': '4',
  //     'src': 'http://fakeimg.pl/300/?text=4',
  //   },
  //   {
  //     'id': '5',
  //     'src': 'http://fakeimg.pl/300/?text=5',
  //   }
  // ];

  constructor(){}

  ngOnInit(): void {
    // this.swiper();
  }

  ngAfterViewInit(){
    this.swiper();
  }

  swiper(){
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: this.slidesPerView,
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });

  }
}


// new Swiper('.swiper', {
//   modules: [Navigation, Pagination],

//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   // scrollbar: {
//   //   el: '.swiper-scrollbar',
//   // },
// });
