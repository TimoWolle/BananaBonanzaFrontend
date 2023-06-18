import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../entity/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/warehouse/products';  // URL to your backend

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
      const headers = this.createHeaders();
      return this.http.get<Product[]>(this.apiUrl, { headers });
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
