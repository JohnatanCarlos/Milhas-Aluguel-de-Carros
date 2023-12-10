import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'app/modules/reservation/services/event.service';

@Component({
  selector: 'app-card-groups',
  templateUrl: './card-groups.component.html',
  styleUrls: ['./card-groups.component.scss']
})
export class CardGroupsComponent {
  @Input() dataGroups: any;
  @Input() showValue = true;
  @Input() isOnlyOneCard = false;

  flippedCards: boolean[] = [];

  constructor(private router: Router, private eventService: EventService) { }

  flipCard(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
  }

  nextStep(groupId: any): void {
    this.eventService.sendGroupId(groupId);
    this.router.navigate(['reservas/passo-3']);
  }
}
