import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-accessory',
  templateUrl: 'card-accessory.component.html',
  styleUrls: ['card-accessory.component.scss']
})

export class CardAccessoryComponent implements OnInit {
  @Output() countPlus = new EventEmitter();
  @Input() title: string;
  @Input() value: string;

  countValue = 0;

  constructor() { }

  ngOnInit() { }

  quantity(option: string): void {
    if(option === 'plus'){
      this.countValue++;
    }else if (option === 'minus'){
      if(this.countValue > 0){
        this.countValue--;
      }
    }
  }
}
