import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-accessory',
  templateUrl: 'card-accessory.component.html',
  styleUrls: ['card-accessory.component.scss']
})

export class CardAccessoryComponent {
  @Input() dataAccessory: any;
  @Input() totalItens: any[];
  @Output() totalAccessory: EventEmitter<any> = new EventEmitter();

  countValue = 0;

  updateCountValue(option: string): void {
    if (option === 'plus') {
      this.countValue++;
    } else if (option === 'minus') {
      if (this.countValue > 0) {
        this.countValue--;
      }
    }

    this.updateTotalItens();
  }

  removeAccessoryFromTotal(id: any): void {
    const index = this.totalItens.findIndex(item => item.id === id);
    if (index !== -1) {
      this.totalItens.splice(index, 1);
    }
  }

  updateTotalItens(): void {
    let newItem = {
      id: this.dataAccessory.id,
      title: this.dataAccessory.title,
      value: '25,00',
      quantity: this.countValue
    };

    if (newItem.quantity === 0) {
      this.removeAccessoryFromTotal(newItem.id);
    } else {
      const existingItem = this.totalItens.find(item => item.id === newItem.id);

      if (!existingItem) {
        this.totalItens.push(newItem);
      } else {
        existingItem.quantity = newItem.quantity;
      }
    }
    console.log(this.totalItens)
    this.totalAccessory.emit(this.totalItens);
  }
}
