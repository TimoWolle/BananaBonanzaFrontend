import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../entity/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/user';  // URL to your backend

  constructor(private http: HttpClient) { }

  getUserByID(id: number) {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.get<User>(url, { headers });
  }

  private createHeaders() {
    const username = 'admin';
    const password = 'admin';

    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
  }
}
