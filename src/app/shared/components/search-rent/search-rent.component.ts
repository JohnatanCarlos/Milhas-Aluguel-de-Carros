import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-rent',
  templateUrl: 'search-rent.component.html',
  styleUrls: ['search-rent.component.scss']
})

export class SearchRentComponent implements OnInit {
  showLabelDevolution = true;

  constructor() { }

  ngOnInit() { }

  showHideLabelDevolution(showLabelDevolution: boolean){
    this.showLabelDevolution = !showLabelDevolution;
  }
}
