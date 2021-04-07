import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable()
export class ProductService {
  products;
  constructor(private http: HttpClient) {}
  public getProduct(id) : Observable<Object> {
    console.log(id)
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }
  fetchProduct(): Observable<Object> {
    this.products = this.http.get('https://jsonplaceholder.typicode.com/posts');
    return this.products;
  }
}
//
