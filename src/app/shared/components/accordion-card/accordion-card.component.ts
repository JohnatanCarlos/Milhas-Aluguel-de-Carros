import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-card',
  templateUrl: './accordion-card.component.html',
  styleUrls: ['./accordion-card.component.scss']
})
export class AccordionCardComponent {
  @Input() detailsVehicle: any[];
  openDetails = true;

  constructor() { }

  showInfoAccordion(): void {
    this.openDetails = !this.openDetails;
  }

  get titleAccordion(): string {
    return this.openDetails ? 'Menos detalhes' : 'Mais detalhes';
  }

}
