import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'app/modules/reservation/services/event.service';

@Component({
  selector: 'app-card-groups',
  templateUrl: './card-groups.component.html',
  styleUrls: ['./card-groups.component.scss']
})
export class CardGroupsComponent implements OnInit {
  @Input() dataGroups: any;
  @Input() showValue = true;

  flippedCards: boolean[] = [];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
  }


  flipCard(index: number): void {
    this.flippedCards[index] = !this.flippedCards[index];
  }

  nextStep(groupId: any): void {
    this.eventService.sendGroupId(groupId);
    this.router.navigate(['reservas/passo-3']);
  }
}
