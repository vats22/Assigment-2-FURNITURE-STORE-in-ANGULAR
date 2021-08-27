import { Injectable } from '@angular/core';
import { BehaviorSubject, config, Observable } from 'rxjs'
import { products } from './products';
 
@Injectable({
  providedIn: 'root'
})
export class Cartservice {
  public cartItems:any= JSON.parse(localStorage.getItem('Cart') || '[]') || [];
  public productList = new BehaviorSubject<any>([]);
  public grandAmount = 0;
  Localstore:any[]=[];
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
    console.log("addToCart:"+ " " + this.cartItems)
    this.productList.next(this.cartItems);
    console.log('vvvvv' + " " + this.productList);
    this.gettotalPrice();
    console.log(this.gettotalPrice());
    this.Localstore = [...this.cartItems];
    console.log("additem in Localstore" + " " + this.Localstore);
    localStorage.setItem("Cart", JSON.stringify(this.Localstore));
  }

  

  gettotalPrice(){
    let grandTotal:number = 0;
    console.log("in cart item:" + " " + this.cartItems);
    this.cartItems.map((item:any) => {
      console.log("Find item:" + " " + item);
      console.log('Find value:' + " " + item.totalvalue);
      let total= parseInt(item.totalvalue);
      console.log("Find total:" + " " + total);
      grandTotal += total;
      console.log("find total valu:" + " " +grandTotal);
      this.Localstore = [...this.cartItems];
      console.log("get updated price&Quntiy in Localstore:" + " " + this.Localstore);
      localStorage.setItem("Cart",JSON.stringify(this.Localstore));
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
      console.log("cartItems after remove:" + " " +this.cartItems)
      this.productList.next(this.cartItems);
      this.Localstore = [...this.cartItems];
      console.log("remove item in Localstore" + " " + this.Localstore);
      localStorage.setItem("Cart",JSON.stringify(this.Localstore));
      
    })
    
  }

  emptyCart(){
    this.cartItems = [];
    let data = products.forEach((pro:any)=>{
      pro.qantity = 1;
      pro.totalvalue = pro.price;
    })
    this.productList.next(this.cartItems);
    this.Localstore = [...this.cartItems];
    console.log("emptycart in Localstore" + " " + this.Localstore);
    localStorage.setItem("Cart",JSON.stringify(this.Localstore));
    return data;

  }





  // addtoLocalstorage(product:any){
  //   console.log("addLocalstore:" + " " +product);
  //   this.Localstore = [...product];
  //   localStorage.setItem("cart", JSON.stringify(this.Localstore));
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
