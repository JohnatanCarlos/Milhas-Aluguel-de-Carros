import { Component, OnInit } from '@angular/core';
import { GroupOfCarsService } from './group-of-cars.service';

@Component({
  selector: 'app-group-of-cars',
  templateUrl: './group-of-cars.component.html',
  styleUrls: ['./group-of-cars.component.scss']
})
export class GroupOfCarsComponent implements OnInit {
  groups: any;

  constructor(private groupOfCarsService: GroupOfCarsService) { }

  ngOnInit(): void {
    this.listGroups();
  }

  listGroups(): void {
    this.groupOfCarsService.getGroups().subscribe(groups => {
      this.groups = groups;
    })
  }

}
