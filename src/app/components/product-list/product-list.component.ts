import { Component, OnInit } from '@angular/core';
import {Product} from "../../entity/product";
import {ProductService} from "../services/product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }
  onSelectProduct(product: Product) {
    // Hier können Sie bestimmen, was passiert, wenn ein Produkt ausgewählt wird.
    // Zum Beispiel könnten Sie zu einer Detailseite navigieren.
  }
}
