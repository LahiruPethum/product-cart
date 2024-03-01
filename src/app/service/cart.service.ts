import { Injectable } from '@angular/core';
import { Item } from '../dto/item';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:Array<{code:string,qty:number}>=[]; 
  private totalItems= new Subject<number>();

  constructor() { }

    updateCart(item:Item, toCart:number ){
    const it = this.cartItems.find(i=>i.code===item.code);
    if(it){
      it.qty=toCart;
      if(it.qty==0){
        this.cartItems.splice(this.cartItems.indexOf(it),1);
      }
    }else{
      this.cartItems.push({code:item.code,qty:toCart});
    }
       
      this.calculateTotalItems();
  }

  private calculateTotalItems(){
    let totalItems = 0;
    this.cartItems.forEach(Item=>totalItems+=Item.qty);
    this.totalItems.next(totalItems);
  }

  getTotalItemsInCart():Subject<number>{
   return this.totalItems;

  }

  getQtyInCart(code:string):number{
const item = this.cartItems.find(i=>i.code===code);
return item?item.qty:0;
  }

  getAllCartItems(): Array<{code:string,qty:number}>{
    return this.cartItems;
  }

  removeItemFromCart(code:string):void{
    this.cartItems.filter(item=>item.code!=code);
  }
}
