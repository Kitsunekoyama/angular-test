import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Observable} from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  comments: Observable<any>;
 // name: string;
  title: string;
  id;
  constructor(private productService: ProductService, private route: ActivatedRoute){this.title = this.route.snapshot.paramMap.get('title')}
  ngOnInit() {
    this.id = this.route.snapshot.params['productId'];
    this.comments = this.productService.getProduct(this.id);
  }
}