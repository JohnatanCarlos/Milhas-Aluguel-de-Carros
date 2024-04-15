import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'app/modules/reservation/services/event.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-card-groups',
  templateUrl: './card-groups.component.html',
  styleUrls: ['./card-groups.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardGroupsComponent implements OnInit {
  @Input() dataGroups: any;
  @Input() showValue = true;
  @Input() isOnlyOneCard = false;

  flippedCards: boolean[] = [];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    console.log(this.dataGroups)
  }

  nextStep(groupId: any): void {
    this.eventService.sendGroupId(groupId);
    this.router.navigate(['reservas/passo-3']);
  }

  toggleFlip(index: number) {
    console.log(this.dataGroups)

    this.flippedCards[index] = !this.flippedCards[index];
  }
}
