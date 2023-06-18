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

  constructor(private router: Router) {
    router.events.subscribe((event: any) => {
      if(event instanceof ActivationStart){
        this.disabledSearch = event.snapshot.data.disabledSearch;
        this.isOverlapSearch = event.snapshot.data.overlapSearch;
        console.log(this.isOverlapSearch)
      }
    });
  }
  ngOnInit(): void {

  }


  showHideLabelDevolution(showLabelDevolution: boolean){
    this.showLabelDevolution = !showLabelDevolution;
  }
}
