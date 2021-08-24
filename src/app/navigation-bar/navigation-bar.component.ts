import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../cartservice.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  public totalItems:number=0;
  constructor(private cart: Cartservice) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.totalItems = res.length;
    })
  }

}
