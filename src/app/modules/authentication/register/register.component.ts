import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
  cities: any[];

  constructor() {
    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  ngOnInit() { }
}
