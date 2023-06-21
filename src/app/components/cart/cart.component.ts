import {Component, OnInit} from '@angular/core';
import {Product} from "../../entity/product";
import {CartService} from "../../services/cart.service";
import {UserService} from "../../services/user.service";
import {Shoppingcart} from "../../entity/shoppingcart";
import {User} from "../../entity/user";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', "../../extern.css"]
})
export class CartComponent implements OnInit {
  shoppingCarts: Shoppingcart[] = [];

  constructor(private cartService: CartService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.loadShoppingCart()
  }

  loadShoppingCart(): void {
    const userId = 1; // Annahme: ID des eingeloggten Benutzers
    this.cartService.getShoppingCartByUserId(userId).subscribe(
      (shoppingCarts: Shoppingcart[]) => {
        this.shoppingCarts = shoppingCarts;
      }
    );
  }

  removeProductFromCart(product: Product){
    this.cartService.removeProduct(product).subscribe();
    this.loadShoppingCart();
  }

  calculateTotal(): number {
    let total = 0;
    for (const item of this.shoppingCarts) {
      total += item.product.price * item.quantity;
    }
    return total;
  }

// Berechnung der Steuer (tax)
  calculateTax(): number {
    const total = this.calculateTotal();
    const taxRate = 0.19; // Beispiel: 19% Steuersatz
    return total * taxRate
  }

  updateProductQuantity(product: Product, quantity: number) {
    this.cartService.updateProductQuantity(product, quantity).subscribe(
      (shoppingCarts: Shoppingcart[]) => {
      this.shoppingCarts = shoppingCarts;}
    )

  }
}
