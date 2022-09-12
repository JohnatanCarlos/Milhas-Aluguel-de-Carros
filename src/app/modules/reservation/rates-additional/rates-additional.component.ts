import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rates-additional',
  templateUrl: 'rates-additional.component.html',
  styleUrls: ['./rates-additional.component.scss']
})

export class RatesAdditionalComponent implements OnInit {
  count = 0;

  constructor() { }

  ngOnInit() { }

  countNumber(acao: string){
    if(acao == 'add'){
      this.count ++
    }else if(acao == 'rem'){
      this.count --
    }

  }
}
