import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {ChangePasswordRequest, LoginRequest, RegisterRequest} from "../entity/authClass";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  private apiURL="http://localhost:8080/api/auth"

  constructor(private http: HttpClient) { }

  logout(): void {
    this.isLoggedIn = false;
    this.http.post(`${this.apiURL}/logout`, "");
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, loginRequest);
  }

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiURL}/register`, registerRequest);
  }

  changePassword(changePasswordRequest: ChangePasswordRequest): Observable<any> {
    return this.http.post(`${this.apiURL}/change-password`, changePasswordRequest);
  }
}
