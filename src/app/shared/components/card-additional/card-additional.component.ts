import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-additional',
  templateUrl: 'card-additional.component.html',
  styleUrls: ['card-additional.component.scss']
})

export class CardAdditionalComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;
  @Input() description: any;

  constructor() { }

  ngOnInit() { }
}
