import { Component } from "@angular/core";

//import { products } from '../products';
import { ProductService } from "./product.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products;
  constructor(private productService: ProductService) {}

  fetchProduct() {
    this.products = this.productService.fetchProduct();
  }
  share() {
    window.alert("The product has been shared!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
