import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GituserDataService {  
  private _url = "https://api.github.com/users";

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this._url);
  }
}
