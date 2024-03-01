import { Component, OnInit } from '@angular/core';
import { DUMMY_DATA } from '../dummy-data';
import { Item } from '../dto/item';
import { ItemService } from '../service/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items:Array<Item>;
  //cartItems:Array<{code:string,qty:number}>=[]; 

constructor(private itemService : ItemService){
  this.items=itemService.getAllItems();
}


}
