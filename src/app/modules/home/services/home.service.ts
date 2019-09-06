import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient ) { }

  private localMock = `http://localhost:4200/assets/mock/data-api.json`;

  getData(): Observable<any> {
    return this.http.get(this.localMock);
  }
}
