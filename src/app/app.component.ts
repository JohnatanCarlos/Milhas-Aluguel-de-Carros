import { Component } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOverlapSearch: boolean;

  constructor(private router: Router) {
    router.events.subscribe((event: any) => {
      if(event instanceof ActivationStart){
        this.isOverlapSearch = event.snapshot.data.overlapSearch;
      }
    });
  }
}
