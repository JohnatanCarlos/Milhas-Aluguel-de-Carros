import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ReservationService {
  additionals = new BehaviorSubject<any>(null);
  accessory = new BehaviorSubject<any>(null);

  constructor() { }

  getAdditionalsObservable() {
    return this.additionals.asObservable();
  }

  setAdditionalValue(additional: any): void {
    this.additionals.next(additional);
  }

  getAccessorysObservable() {
    return this.accessory.asObservable();
  }

  setAccessoryValue(accessory: any): void {
    this.accessory.next(accessory);
  }

}
