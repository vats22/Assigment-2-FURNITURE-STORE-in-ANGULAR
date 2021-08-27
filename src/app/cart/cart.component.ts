import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products:any=[];
  public grandTotal !:number;
  public TotalAmount:any;
  
  constructor(private cart:Cartservice) { }

  ngOnInit(): void {

    // if(localStorage.getItem("Cart") != null){
    //   this.cart.cartItems = localStorage.getItem(JSON.parse("Cart") || []);
    //   let product = this.cart.cartItems.map(((item:any)=>{
    //     return item
    //   }));
    //   this.products = this.cart.cartItems;
    //   console.log("from ngOnInit:" + product);
    //   this.cart.addCartitem(product);
      
    // }

    this.cart.getProducts().subscribe((res:any)=>{
      this.products = res;
      console.log('mmmmmmm' + this.products);
      this.grandTotal = this.cart.gettotalPrice();
      console.log('hhhhhh' + this.grandTotal);
    })

   
  }

  itemInc(item:any){
    // this.cart.itemPluse(item);
    console.log("cart:" + item.id, item.title, item.price, item.qantity);
    // this.cart.itemPluse(item);
    
    if(item.qantity != 5){
      // let orginalval = item.price;
      item.qantity++;
      item.totalvalue = item.price * item.qantity;
      console.log("item totalvalue:" + item.totalvalue);
      this.grandTotal = this.cart.gettotalPrice();
    }
         
  }

  itemDec(item:any){
  
    if(item.qantity != 1){
      item.qantity--;
      item.totalvalue = item.price * item.qantity;
      console.log("item totalvalue:" + item.totalvalue);
      this.grandTotal = this.cart.gettotalPrice();     
    }    
  }

  removeItem(item:any, event:any){
    console.log(event);
    
    // event.target.disabled = false;
    // event.target.innerHTML = `<i class="fas fa-shopping-cart"></i>add to bag`;
    // this.cart.emit(item);
    this.cart.removeCartitem(item)
    console.log(item);
  }

  emptyCart(){
    this.cart.emptyCart();
  }

  


  

}
