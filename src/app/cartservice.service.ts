import { Injectable } from '@angular/core';
import { BehaviorSubject, config, Observable } from 'rxjs'
import { products } from './products';
 
@Injectable({
  providedIn: 'root'
})
export class Cartservice {
  public cartItems:any= [];
  public productList = new BehaviorSubject<any>([]);
  public grandAmount = 0;
  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  // It's just an experiment.

    // emit<T>(event:T){
    //   this.productList.next(event);
    // }

    // on<T>():Observable<T>{
    //   return this.productList.asObservable();
    // }

  addCartitem(product:any){
    this.cartItems.push(product);
    // localStorage.setItem('Cart',JSON.stringify(this.cartItems));
    console.log(this.cartItems)
    this.productList.next(this.cartItems);
    console.log('vvvvv' + this.productList);
    this.gettotalPrice();
    console.log(this.gettotalPrice());
  }

  

  gettotalPrice(){
    let grandTotal:number = 0;
    console.log("in cart item:" + this.cartItems);
    this.cartItems.map((item:any) => {
      console.log("Find item:" + item);
      console.log('Find value:' + item.totalvalue);
      let total= parseInt(item.totalvalue);
      console.log("Find total:" + total);
      grandTotal += total;
      console.log("find total valu:" +grandTotal);
    })
    return grandTotal;
  }

  removeCartitem(item:any){
    console.log('cccc' +this.cartItems)
    this.cartItems.map((v:any, index:any)=>{
      if(item.id === v.id){
        this.cartItems.splice(index,1);
        item.qantity = 1;
        item.totalvalue = item.price;
       
      }
      console.log("cartItems after remove" +this.cartItems)
      this.productList.next(this.cartItems);
      
    })
    
  }

  emptyCart(){
    this.cartItems = [];
    let data = products.forEach((pro:any)=>{
      pro.qantity = 1;
      pro.totalvalue = pro.price;
    })
    this.productList.next(this.cartItems);
    return data

  }





  // addtoLocalstorage(product:any){
  //   localStorage.setItem('Cart',JSON.stringify(product));
  // }
  
  // itemPluse(item:any){
  //   let Id = item.id;
  //   console.log("plus:" + Id)
  //   console.log(this.cartItems);
  //   console.log(item.qantity);
  //   // console.log(this.cartItems.find((product:any)=>{
  //   //   product.id === Id;}));
  //   let tempItem = this.cartItems.find((product:any)=>{
  //     product.id === Id;
  //     console.log(product.id)
  //     console.log(Id);
  //   })
  //   let qantity = parseInt(tempItem.qantity);
  //   console.log(qantity);
  //   console.log(tempItem);
  //   console.log(tempItem.qantity);
  //   qantity = qantity + 1;
  //   this.gettotalPrice();
  //   console.log(this.gettotalPrice());
  // }
}
