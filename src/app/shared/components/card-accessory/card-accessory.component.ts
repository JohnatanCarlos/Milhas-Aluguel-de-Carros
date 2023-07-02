import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-accessory',
  templateUrl: 'card-accessory.component.html',
  styleUrls: ['card-accessory.component.scss']
})

export class CardAccessoryComponent {
  @Input() dataAccessory: any;
  @Output() totalAccessory: any = new EventEmitter();

  countValue = 0;
  totalItens: any[] = [];

  updateCountValue(option: string): void {
    if(option === 'plus'){
      this.countValue++;
    }else if (option === 'minus'){
      if(this.countValue > 0){
        this.countValue--;
      }
    }

    let newItem = {
      id: this.dataAccessory.id,
      title: this.dataAccessory.title,
      value: '25,00',
      quantity: this.countValue
    };

    // console.log(this.dataAccessory.id)

    // Verificar se o item já existe no array totalItens
    const existingItem = !!this.totalItens.find(item => item.id === this.dataAccessory.id);
    console.log(existingItem);
    this.totalItens.push(newItem);

    // if (false) {
    //   // Atualizar a quantidade do item existente
    //   console.log(`nao vou fazer nada`)
    // } else {
    //   // Adicionar o novo item ao array totalItens
    //   this.totalItens.push(newItem);
    // }

    // Emitir o evento totalAccessory com a lista atualizada
    this.totalAccessory.emit(this.totalItens);
  }
}
