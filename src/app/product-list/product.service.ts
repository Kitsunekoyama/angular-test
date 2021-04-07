import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  getProduct(id) : Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }
  fetchProduct(): Observable<Object> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
//
