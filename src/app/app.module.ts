import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartRowComponent } from './cart-row/cart-row.component';



@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    HeaderComponent,
    ItemComponent,
    HomeComponent,
    CartComponent,
    CartRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
