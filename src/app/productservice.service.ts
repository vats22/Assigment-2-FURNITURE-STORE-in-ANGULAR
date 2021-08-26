import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
// import {product} from '../app/products';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Productservice {

 // public url = "https://fakestoreapi.com/products"
 public _url = "../assets/products.json";

  constructor(private _http:HttpClient ) { }
  
// get products method - 1.
  getProducts(){
    return this._http.get<any>(this._url).pipe(map((res:any)=>{
      return res;
    }));
  }

// get products method -2.
  // getProductss():Observable<product[]>{
  //   return this._http.get<product[]>(this._url)
                    
  // }
  
}
