import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser, UserLogin } from '../interfce';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = environment.base_api_url + 'api/';

  private blogListUrl: string = this.baseUrl + '';
  private loginUrl: string = this.baseUrl + 'login';
  private logouturl: string = this.baseUrl + 'logout';
  private signupUrl: string = this.baseUrl + 'register';

  constructor(private http: HttpClient) {}

  public retrieveBlogs(): Observable<any> {
    return this.http.get<any>(this.blogListUrl);
  }

  public login(loginData: UserLogin): Observable<any> {
    return this.http.post(this.loginUrl, loginData);
  }

  public logout(data: { refresh_token: string | null }): Observable<any> {
    return this.http.post(this.logouturl, data);
  }

  public signup(signupData: NewUser): Observable<any> {
    return this.http.post(this.signupUrl, signupData);
  }
}
