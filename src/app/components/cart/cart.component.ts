import {Component, OnInit} from '@angular/core';
import {Product} from "../../entity/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css', "../../extern.css"]
})
export class CartComponent implements OnInit{
  cartproducts: Product[] = [];
  preTax: number = 0; // Betrag vor Steuern
  tax: number = 0; // Mehrwertsteuer
  total: number = 0; // Gesamtsumme

  constructor() {
  }

  ngOnInit(): void {
  }
}
