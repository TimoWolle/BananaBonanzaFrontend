import {Product} from "./product";

export class UserShoppingCartItem {
  product: Product;
  quantity: number;
  action: string;

  constructor(product: Product, quantity: number, action: string) {
    this.product = product;
    this.quantity = quantity;
    this.action = action;
  }
}
