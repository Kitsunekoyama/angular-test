import { Component } from "@angular/core";

import { products } from '../products';
import { ProductService } from './product.service';
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  constructor(private productService: ProductService) {this.fetchProduct();}
  products;
  fetchProduct() {
    this.products = this.productService.fetchProduct();
  }
  
}
