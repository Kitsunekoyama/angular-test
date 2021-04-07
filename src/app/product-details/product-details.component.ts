import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Observable} from "rxjs";

/*interface Prod {
    id:number;
    title:string;
    body: string;
    userId:number;
}*/
@Component({
  selector: "app-product-list",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product: Observable<any>;
  id;
  constructor(private productService: ProductService, private route: ActivatedRoute){}
  getProduct() {
    //this.product = this.productService.getProduct(this.id);
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['productId'];
    this.product = this.productService.getProduct(this.id);
   // console.log(products)
    //this.product = this.product[this.id]
   // console.log("product=" + this.product.title)
  }
  /* ... */
}