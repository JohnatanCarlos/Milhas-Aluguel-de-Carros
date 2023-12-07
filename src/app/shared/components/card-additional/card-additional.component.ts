import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-additional',
  templateUrl: 'card-additional.component.html',
  styleUrls: ['card-additional.component.scss']
})

export class CardAdditionalComponent implements OnInit {
  @Input() dataSource: any;
  selectedItems: any[] = [];

  constructor() { }

  ngOnInit() { }

  handleCheckboxChange(event: any, additional: any): void {
    if (event.target.checked) {
      this.selectedItems.push(additional);
    } else {
      this.selectedItems = this.selectedItems.filter(item => item !== additional);
    }
    console.log(this.selectedItems)
  }
}
