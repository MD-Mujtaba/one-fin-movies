import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  token = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
    'Authorization': this.token,
  });

  requestOptions = { headers: this.headers };

  getMovieList(page: number): Observable<any> {
    if(page != 1) {
      return this.http.get(
        `${environment.baseUrls.MOVIES_URL}?page=${page}`,
        this.requestOptions
      )  
    } else {
      return this.http.get(
        `${environment.baseUrls.MOVIES_URL}`,
        this.requestOptions
      )
    }
  }
}