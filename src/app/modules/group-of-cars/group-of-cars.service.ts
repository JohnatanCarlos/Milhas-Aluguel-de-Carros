import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GroupOfCarsService {
  readonly URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(`${this.URL}/groups`);
  }

}
