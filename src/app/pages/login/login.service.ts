import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/assets/environments/environment';

@Injectable()

export class LoginService {
  constructor(private http: HttpClient) { }

  onLogin(data: any): Observable<any> {
    return this.http.post(
      environment.baseUrls.LOGIN_URL, 
      data
    )
  }
}
