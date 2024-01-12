import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) { }

  getAllEvent() {
    return this.http.get<any[]>('http://localhost:3000/global/getAllEvents');
  }

}
