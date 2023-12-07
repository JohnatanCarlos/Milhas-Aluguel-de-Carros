import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-card-accessory',
  templateUrl: 'card-accessory.component.html',
  styleUrls: ['card-accessory.component.scss']
})

export class CardAccessoryComponent {
  @Input() dataAccessory: any;
  totalItens: any[] = [];
  @Output() totalAccessory: EventEmitter<any> = new EventEmitter();

  updateCountValue(option: string, accessory: any): void {
    if (option === 'plus') {
      accessory.quantity++;
      const existingItem = this.totalItens.find(item => item.id === accessory.id);
      if (!existingItem) {
        this.totalItens.push(accessory);
      } else {
        existingItem.quantity = accessory.quantity;
      }

    } else if (option === 'minus') {
      if (accessory.quantity > 0) {
        accessory.quantity--;

        if(accessory.quantity === 0) {
          this.totalItens = this.totalItens.filter(item => item.id !== item.id)
        }
      }
    }

    // console.log(this.totalItens)
    this.totalAccessory.emit(this.totalItens);
  }

}
