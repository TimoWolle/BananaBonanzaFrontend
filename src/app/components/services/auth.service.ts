import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/auth/login', credentials)
      .pipe(
        tap(_ => this.isLoggedIn = true)
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    // Sie können hier auch einen Logout-Request an Ihren Server senden, falls nötig.
  }

  // Weitere Methoden wie register, password reset etc. können hier hinzugefügt werden.
}
