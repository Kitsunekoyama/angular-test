import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Observable} from "rxjs";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProduct implements OnInit {
  product: Observable<any>;
  id;
  constructor(private productService: ProductService, private route: ActivatedRoute){}
  ngOnInit() {
    this.id = this.route.snapshot.params['productId'];
    this.product = this.productService.getProduct(this.id);
  }
}