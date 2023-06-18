import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: 'reservation.component.html',
  styleUrls: ['./reservation.component.scss'],
  host: {"class": "app-reservation"}
})

export class ReservationComponent implements OnInit {

  items: any[];
  currentStep: number
  products: any[];
  ofertas: any[];
  detailsVehicle: any[];
  title: string;
  isScrollToFixed = false;

  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log(window.scrollY);

    this.isScrollToFixed = window.scrollY >= 275 ? true : false;

  }

  ngOnInit() {
    this.setTitle(this.router.url);

    this.ofertas = [
      {
        id: "123",
        atributos: [
          "Km Livre",
          "Cancelamento Grátis até 24 horas da retirada",
        ],
        disponivel: true,
        quantidadeDiarias: 30,
        acessorios: [
          {
              descricao: "4 portas",
              codigoAcessorio: 2
          },
          {
              descricao: "Ar-condicionado",
              codigoAcessorio: 3
          },
          {
              descricao: "Vidro elétrico",
              codigoAcessorio: 4
          },
          {
              descricao: "Trava elétrica",
              codigoAcessorio: 5
          },
          {
              descricao: "Air bag",
              codigoAcessorio: 6
          },
          {
              descricao: "Dir. Hidráulica",
              codigoAcessorio: 9
          },
          {
              descricao: "ABS",
              codigoAcessorio: 28
          }
        ],
        grupoVeiculo: {
          categoria: "Passeio",
          grupo: "B",
          nome: "Compacto Com Ar",
          imagemPadrao: "https://www.localiza.com/brasil-site/geral/Frota/MOBI.png",
          veiculos: [
            {
              blindado: false,
              nome: "Fiat Mobi 1.0",
              padraoGrupo: true,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/MOBI.png"
            },
            {
              blindado: false,
              nome: "Fiat Uno 1.0",
              padraoGrupo: false,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/NUNB.png"
            },
            {
              blindado: false,
              nome: "Renault Kwid 1.0",
              padraoGrupo: false,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/KWID.png"
            }
          ]
        },
        tarifa: {
          existeDescontoPromocional: false,
          percentualTaxaServico: 12,
          valorDiaria: "89,70",
          valorHoraExtra: 12,
          valorProtecaoCarro: 207,

        },
        valorTotal: 2274.52
      },
      {
        id: "1234",
        atributos: [
          "Km Controlado",
          "Hora Extra",
          "Cancelamento Grátis até 24 horas da retirada",
        ],
        disponivel: true,
        quantidadeDiarias: 30,
        acessorios: [
          {
              descricao: "4 portas",
              codigoAcessorio: 2
          },
          {
              descricao: "Ar-condicionado",
              codigoAcessorio: 3
          },
          {
              descricao: "Vidro elétrico",
              codigoAcessorio: 4
          },
          {
              descricao: "Trava elétrica",
              codigoAcessorio: 5
          },
          {
              descricao: "Air bag",
              codigoAcessorio: 6
          },
          {
              descricao: "Dir. Hidráulica",
              codigoAcessorio: 9
          },
          {
              descricao: "ABS",
              codigoAcessorio: 28
          }
        ],
        grupoVeiculo: {
          categoria: "Passeio",
          grupo: "B",
          nome: "Compacto Com Ar",
          imagemPadrao: "https://www.localiza.com/brasil-site/geral/Frota/MOBI.png",
          veiculos: [
            {
              blindado: false,
              nome: "Fiat Mobi 1.0",
              padraoGrupo: true,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/MOBI.png"
            },
            {
              blindado: false,
              nome: "Fiat Uno 1.0",
              padraoGrupo: false,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/NUNB.png"
            },
            {
              blindado: false,
              nome: "Renault Kwid 1.0",
              padraoGrupo: false,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/KWID.png"
            }
          ]
        },
        tarifa: {
          existeDescontoPromocional: false,
          percentualTaxaServico: 12,
          valorDiaria: "89,70",
          valorHoraExtra: 12,
          valorProtecaoCarro: 207,

        },
        valorTotal: 2274.52
      },
      {
        id: "12345",
        atributos: [
          "Km Livre",
          "Cancelamento Grátis até 24 horas da retirada",
        ],
        disponivel: true,
        quantidadeDiarias: 30,
        acessorios: [
          {
              descricao: "4 portas",
              codigoAcessorio: 2
          },
          {
              descricao: "Ar-condicionado",
              codigoAcessorio: 3
          },
          {
              descricao: "Vidro elétrico",
              codigoAcessorio: 4
          },
          {
              descricao: "Trava elétrica",
              codigoAcessorio: 5
          },
          {
              descricao: "Air bag",
              codigoAcessorio: 6
          },
          {
              descricao: "Dir. Hidráulica",
              codigoAcessorio: 9
          },
          {
              descricao: "ABS",
              codigoAcessorio: 28
          }
        ],
        grupoVeiculo: {
          categoria: "Passeio",
          grupo: "B",
          nome: "Compacto Com Ar",
          imagemPadrao: "https://www.localiza.com/brasil-site/geral/Frota/MOBI.png",
          veiculos: [
            {
              blindado: false,
              nome: "Fiat Mobi 1.0",
              padraoGrupo: true,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/MOBI.png"
            },
            {
              blindado: false,
              nome: "Fiat Uno 1.0",
              padraoGrupo: false,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/NUNB.png"
            },
            {
              blindado: false,
              nome: "Renault Kwid 1.0",
              padraoGrupo: false,
              urlImagem: "https://www.localiza.com/brasil-site/geral/Frota/KWID.png"
            }
          ]
        },
        tarifa: {
          existeDescontoPromocional: false,
          percentualTaxaServico: 12,
          valorDiaria: "89,70",
          valorHoraExtra: 12,
          valorProtecaoCarro: 207,

        },
        valorTotal: 2274.52
      }
    ]

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

}
