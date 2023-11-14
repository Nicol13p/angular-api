import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "https://65245f63ea560a22a4e9cca8.mockapi.io/alumnos";
  constructor(private http : HttpClient) { }
  public getData() : Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
