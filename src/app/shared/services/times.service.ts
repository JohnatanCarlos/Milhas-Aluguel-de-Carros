import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class TimesService {
  readonly URL = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getTimesAvailableOfDay(): Observable<any> {
    return this.http.get(`${this.URL}/horarios-disponivel-locacao`)
  }
}
