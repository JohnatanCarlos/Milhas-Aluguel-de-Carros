import { TimesService } from './../../services/times.service';
import { Observable } from 'rxjs';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';


@Component({
  selector: 'app-search-rent',
  templateUrl: 'search-rent.component.html',
  styleUrls: ['search-rent.component.scss']
})

export class SearchRentComponent implements OnInit {
  showLabelDevolution = true;
  disabledSearch = false;
  isOverlapSearch = false;
  times$: Observable<any>

  constructor(private router: Router, private timesService: TimesService) {
    router.events.subscribe((event: any) => {
      if(event instanceof ActivationStart){
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
