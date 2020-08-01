import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GituserDataService {  
  private _urlUser = "https://api.github.com/users"; 
  private _urlRepo = "https://api.github.com/users/mojombo/repos"; 

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this._urlUser);
  }
  getRepo(): Observable<any>{
    return this.http.get<any>(this._urlRepo);
  }
}
