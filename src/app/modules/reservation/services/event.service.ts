// Service de eventos
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private groupId: any

  sendGroupId(id: any) {
    this.groupId = id;
  }

  getGroupId() {
    return this.groupId;
  }
}
