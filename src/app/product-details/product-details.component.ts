import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product-list/product.service';
import { products } from '../products';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  name: string = 'Appareil';
  status: string = 'Statut';
  constructor(private productService: ProductService, private route: ActivatedRoute){}
  ngOnInit() {
    this.name = this.route.snapshot.params['id'];
  }
  /* ... */
}