import { Component,Input,OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  
  totalItemsInCart = 0;

  constructor(private cartService:CartService){
    
  }

  ngOnInit():void{
this.oncartChange();
  }

 oncartChange(){
  this.cartService.getTotalItemsInCart().subscribe(value=>this.totalItemsInCart=value);
  // this.totalItemsInCart = this.cartService.getTotalItemsInCart();
 }
}
