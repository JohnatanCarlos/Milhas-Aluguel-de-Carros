import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ReservationHttpService {
  readonly URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getGroupsAvailable(): Observable<any> {
    return this.http.get(`${this.URL}/groupsAvailable`);
  }

  getGroupById(id: any): Observable<any> {
    return this.http.get(`${this.URL}/groupsAvailable/${id}`);
  }

}
