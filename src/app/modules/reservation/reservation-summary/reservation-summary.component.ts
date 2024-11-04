import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-summary',
  templateUrl: './reservation-summary.component.html',
  styleUrls: ['./reservation-summary.component.scss']
})
export class ReservationSummaryComponent implements OnInit {
  @Input() dataGroup: any;
  @Input() accessorys: any;
  @Input() additionals: any;


  constructor() { }

  ngOnInit() {
  }

}
