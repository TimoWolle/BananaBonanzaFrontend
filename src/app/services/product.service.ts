import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../entity/product";
import {HttpService} from "./http.service";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/warehouse/products';  // URL to your backend

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getProducts(): Observable<any[]> {
    const headers = this.httpService.createHeaders();
      return this.http.get<Product[]>(this.apiUrl, { headers });
  }

}
