import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {LoginInformations} from "../entity/authClass";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private authservice: AuthService) { }

  public createHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(this.authservice.loginInformations.email + ':' + this.authservice.loginInformations.password)
    });
  }
}
