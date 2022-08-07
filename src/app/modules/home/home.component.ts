import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars = [
    {
      id: '1000',
      group: 'Grupo A - Compacto ',
      description: 'Product Description',
      image: 'https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/2022-onix-plus/optimizaci%C3%B3n-/mov/colorizer-onix-plus-premier-cinza-satin-steel.jpg?imwidth=960',
    },
    {
      id: '1001',
      group: 'Grupo B - Compacto ',
      description: 'Product Description',
      image: 'https://www.automaistv.com.br/wp-content/uploads/2020/09/HB20-2-990x595.jpg',
    },
    {
      id: '1002',
      group: 'Grupo C - Compacto ',
      description: 'Product Description',
      image: 'https://storage.performay.com.br/models/featured/GYiFPKtXcvvhKtPZZ6z5iWcU0Rz91gRA2ITVS79l.jpeg',
    },
    {
      id: '1003',
      group: 'Grupo D - Compacto ',
      description: 'Product Description',
      image: 'https://estrelalocadoramg.com.br/wp-content/uploads/2019/03/sprinter.jpg',
    },
    {
      id: '1004',
      group: 'Grupo E - Compacto ',
      description: 'Product Description',
      image: 'https://quatrorodas.abril.com.br/wp-content/uploads/2019/05/chevrolet-spin-premier.jpg?quality=70&strip=info',
    },
    {
      id: '1005',
      group: 'Grupo F - Compacto ',
      description: 'Product Description',
      image: 'https://vivacar.com.br/wp-content/uploads/2018/01/kwid.jpg',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
