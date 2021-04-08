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
  name;
  description;
  items = this.productService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    description: ''
  });
  //product: Observable<any>;
  //id;
  constructor(private productService: ProductService, private formBuilder: FormBuilder, private router: Router){}
  addProduct(): void {
    // Process checkout data here
    //window.alert("Please insert a name and a description for the product");
    this.productService.addProduct();
    this.items = [];//this.productService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  /*ngOnInit() {
    this.id = this.route.snapshot.params['productId'];
    this.product = this.productService.getProduct(this.id);
  }*/
}