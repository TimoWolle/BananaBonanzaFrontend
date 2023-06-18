import { Component, OnInit } from '@angular/core';
import {Product, ProductCategory, ProductStatus} from "../../entity/product";
import {ProductService} from "../../services/product.service";
import {ProductComponent} from "../product/product.component";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', "../../extern.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productsPerPage = 4;
  pages: number[] = [];
  currentPage: number = 1; // Setzen Sie dies auf Ihre aktuelle Seite.

  constructor(private productService: ProductService) {
    // Die Anzahl der Seiten berechnen.
    let pageCount = Math.floor(this.products.length / this.productsPerPage);

    // Wenn es übrig gebliebene Produkte gibt, fügen wir eine zusätzliche Seite hinzu.
    if (this.products.length % this.productsPerPage > 0) {
      pageCount++;
    }

    // Erstelle ein Array von Seitennummern.
    this.pages = Array.from({length: pageCount}, (_, i) => i + 1);
  }

  ngOnInit() {
    this.getProducts();

    let product: Product = {
      id: 1,
      title: 'Product Title',
      description: 'Product Description',
      imageURL: 'path/to/image.jpg',
      price: 99.99,
      oldPrice: 199.99,
      category: ProductCategory.ACCESSORIES,
      reviews: [],
      status: ProductStatus.AVAILABLE
    };

    this.products = [product]; // Hier setzen wir das erstellte Produkt in das products-Array
  }
  onSelectProduct(product: Product) {
    // Hier können Sie bestimmen, was passiert, wenn ein Produkt ausgewählt wird.
    // Zum Beispiel könnten Sie zu einer Detailseite navigieren.
  }

  onSortChange(event: any) {
    const sortValue = event.target.value;
    switch (sortValue) {
      case 'recommend':
        // Empfohlen sort logic
        break;
      case 'price_asc':
        // Preis: Aufsteigend sort logic
        break;
      case 'price_desc':
        // Preis: Absteigend sort logic
        break;
      case 'rating':
        // Durchschn. Kundenbewertung sort logic
        break;
      default:
        // Default sort logic
        break;
    }
  }

  getProducts():void{
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
  }

  addToCart(product: Product) {

  }
}
