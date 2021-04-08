import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
//import { Http, Response } from '@angular/http';
import { Observable, throwError } from "rxjs";



@Injectable()
export class ProductService {
  products; //: Observable<Object>;
  //items = [];
  constructor(private http: HttpClient) {}
  addProduct(item) {
    console.log(item.name);
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: item.name,
    body: item.description,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
  /*getItems() {
    return this.items;
  }*/
  getProduct(id): Observable<any> {
    
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id + '/comments');
    //return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }
  fetchProduct(): Observable<Object> {
    this.products = this.http.get('https://jsonplaceholder.typicode.com/posts');
    return this.products;
  }
}
//
