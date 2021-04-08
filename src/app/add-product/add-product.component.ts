import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private productService: ProductService, private formBuilder: FormBuilder, private router: Router){}
  onSubmit(): void {console.log("test")}
  addProduct(): void {
    console.log(this.checkoutForm.value)
    this.productService.addProduct(this.checkoutForm.value);
    this.checkoutForm.reset();
    this.router.navigate(['/']);
  }
}