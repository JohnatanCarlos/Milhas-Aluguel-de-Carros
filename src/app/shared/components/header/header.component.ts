import { Component } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TimesService } from './../../services/times.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {
  showLabelDevolution = true;
  disabledSearch = false;
  isOverlapSearch = false;
  times$: Observable<any>

  constructor(private router: Router, private timesService: TimesService) {
    router.events.subscribe((event: any) => {
      if(event instanceof ActivationStart){
        // Recupera os valores passado na rota
        this.disabledSearch = event.snapshot.data.disabledSearch;
        this.isOverlapSearch = event.snapshot.data.overlapSearch;
        console.log(this.isOverlapSearch)
      }
    });
  }

  ngOnInit(): void {
    this.times$ = this.timesService.getTimesAvailableOfDay();
  }

  showHideLabelDevolution(showLabelDevolution: boolean){
    this.showLabelDevolution = !showLabelDevolution;
  }
}
