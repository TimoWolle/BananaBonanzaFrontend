import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from "../entity/product";
import {UserShoppingCartItem} from "../entity/UserShoppingCartItem";
import {User} from "../entity/user";
import {Shoppingcart} from "../entity/shoppingcart";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/user/shopping-cart/update';  // URL to your backend

  constructor(private http: HttpClient) { }


  getShoppingCartByUserId(id: number) {
    const url = `http://localhost:8080/api/user/${id}/cart`;
    const headers = this.createHeaders();
    return this.http.get<Shoppingcart[]>(url, { headers });
  }
  updateShoppingCart(item: UserShoppingCartItem): Observable<any> {
    const headers = this.createHeaders();
    return this.http.put<any>(this.apiUrl, item, { headers });
  }

  addProduct(product: Product, quantity: number) {
    return this.updateShoppingCart({ action: 'add', product, quantity });
  }

  removeProduct(product: Product) {
    return this.updateShoppingCart({ action: 'remove', product, quantity: 0 });
  }

  updateProductQuantity(product: Product, quantity: number) {
    return this.updateShoppingCart({ action: 'update', product, quantity });
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
