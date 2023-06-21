import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {ChangePasswordRequest, LoginInformations, LoginRequest, RegisterRequest} from "../entity/authClass";
import {HttpService} from "./http.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginInformations: LoginInformations=new LoginInformations("","", false)
  private apiURL="http://localhost:8080/api/auth"

  constructor(private http: HttpClient) { }

  logout(): void {
    this.loginInformations.isLoggedIn = false;
    const headers = this.createLoginHeaders(this.loginInformations);
    this.http.post(`${this.apiURL}/logout`, "", {headers});
  }

  login(loginRequest: LoginRequest): Observable<any> {
    this.loginInformations.email = loginRequest.email;
    this.loginInformations.password = loginRequest.password;
    this.loginInformations.isLoggedIn = true;

    const headers = this.createLoginHeaders(this.loginInformations);
    return this.http.post(`${this.apiURL}/login`, loginRequest, {headers});
  }

  register(registerRequest: RegisterRequest): Observable<any> {
    const headers = this.createLoginHeaders(this.loginInformations);
    return this.http.post(`${this.apiURL}/register`, registerRequest, {headers});
  }

  changePassword(changePasswordRequest: ChangePasswordRequest): Observable<any> {
    const headers = this.createLoginHeaders(this.loginInformations);
    return this.http.post(`${this.apiURL}/change-password`, changePasswordRequest, {headers});
  }

  public createLoginHeaders(loginInformations: LoginInformations): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(loginInformations.email + ':' + loginInformations.password)
    });
  }
}
