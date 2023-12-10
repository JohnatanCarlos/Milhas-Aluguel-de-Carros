import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: 'sign-in.component.html',
  styleUrls: ['sign-in.component.scss']
})

export class SignInComponent implements OnInit {
  hidePassword = true;
  isFlipped: boolean = false;
  currentStep: number = 1;

  constructor() { }

  ngOnInit(): void { }

  flipCard(): void {
    console.log(this.isFlipped)
    this.isFlipped = !this.isFlipped;
  }

  nextStep(): void {
    if(this.currentStep < 3) {
      this.currentStep++;
    }
  }
}
