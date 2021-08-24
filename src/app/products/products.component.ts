import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../cartservice.service';
import { products } from '../products';
import { Productservice } from '../productservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productss= products  ;
  
  // public productss: any ;

  public cartItem: any;
  
  constructor(private productService: Productservice, private cart:Cartservice) { }

  ngOnInit(): void {

  // fatch the products from the server .
    // this.productService.getProducts().subscribe((res)=>
    // {
    //   console.log( ' ++++++++++++ ' +res);
      
    //   this.productss = res;
    //   console.log( ' ------------- ' + this.productss);
    //   this.productss.forEach((product:any) => {
    //     Object.assign(product,{amount:1, total:product.price});
    //   });
    // })
  
  // its just an experiment
    // this.cart.on<any>().subscribe((item:any)=>{
    //   this.cartItem = item;
    // })
    
  // save the products in to Local storage.
    localStorage.setItem("Products", JSON.stringify(products));
  }


// Add products in to the cart
  addTocart(product:any, event:any, ){
    console.log(event);
    console.log('id:' + product.id)

    event.target.disabled = true;
    event.target.innerText = 'In the bag';

    this.cart.addCartitem(product);
    
  
  // its just an experiment.
    // let Id = product.id;
    // let Incart:boolean = this.cart.cartItems.find((item:any)=>{
    //   item.id === Id;
    // })
    // console.log(Incart)
    // if (Incart) {
    //   event.target.disabled = true;
    //   event.target.innerText = 'In the bag';
    // } else{
    //   event.target.disabled = false;
    //   event.target.innerHTML =  `<i class="fas fa-shopping-cart"></i>add to bag`;
    // }
    // event.target.disabled = true;
    // event.target.innerText = 'In the bag' 
    // let Id = product.id;
    // let Item = (localStorage.getItem("Products"));
    //   return products.find(product => product.id === Id);
    // this.cart.addtoLocalstorage(product);
  }


}
