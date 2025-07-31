import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HeaderService {
  private readonly URL = 'http://localhost:8080/'

  constructor(private http: HttpClient) { }

  getAgencys(name: string): Observable<any> {
    return this.http.get<any>(this.URL + `agency?name=${name}`)
  }

}
