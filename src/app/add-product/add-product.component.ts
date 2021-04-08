import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { Observable} from "rxjs";
import { FormBuilder } from '@angular/forms';
@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"]
})
export class AddProduct {
 // description;
  checkoutForm = this.formBuilder.group({
    name: '',
    description: ''
  });
  items = []
  item : {
    name : string,
    description : string
  }
  constructor(private productService: ProductService, private formBuilder: FormBuilder){}
  onSubmit(): void {console.log("test")}
  addProduct(): void {
    console.log("test")
    console.log(this.checkoutForm.value)
    this.productService.addProduct(this.item);
    this.item = null;//this.productService.clearCart();
   // console.warn('Your order has been submitted', this.checkoutForm.value);
  }
  /*ngOnInit() {
    this.id = this.route.snapshot.params['productId'];
    this.product = this.productService.getProduct(this.id);
  }*/
}