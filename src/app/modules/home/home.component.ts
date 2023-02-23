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
      image: 'https://orca.com.br/uploads/products/versions/branco-summit-novo-onix.png',
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

  destinyToDiscover = [
    {
      id: '1000',
      group: 'O que fazer em Recife',
      description: '',
      image: 'https://euviajo.deonibus.com/wp-content/uploads/2021/03/cidade-perto-de-recife.jpg',
    },
    {
      id: '1001',
      group: 'O que fazer em Porto de Galinhas',
      description: '',
      image: 'https://a.cdn-hotels.com/gdcs/production147/d268/ff75092a-e714-42ff-8055-b6f0a96405f0.jpg',
    },
    {
      id: '1002',
      group: 'O que fazer em Pria dos Carneiros',
      description: '',
      image: 'https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/12/Praia-dos-Carneiros-O-que-Fazer-Capa-702x459.jpg',
    },
    {
      id: '1003',
      group: 'O que fazer em Museo de Brennand',
      description: '',
      image: 'https://s3-sa-east-1.amazonaws.com/img.guiadasartes.com.br/eve/654-instituto-ricardo-brennand-/oPsAzbNU.jpg',
    },
  ]

  constructor() {}

  ngOnInit() {}
}
