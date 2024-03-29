import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { Item } from '../dto/item';
import { DUMMY_DATA } from '../dummy-data';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-row',
  templateUrl: './cart-row.component.html',
  styleUrl: './cart-row.component.scss'
})
export class CartRowComponent implements OnInit{

  @Input()
item : Item = DUMMY_DATA[0];
@Input()
qty:number=0;
@Output()
onRemove= new EventEmitter<void>();

constructor(private cartService:CartService){}

ngOnInit(): void {
  
}

removeItem(){
  this.cartService.removeItemFromCart(this.item.code);
}
}
