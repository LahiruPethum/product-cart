import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { HomeComponent } from './home/home.component';

import { CartComponent } from './cart/cart.component';

const routes:Routes=[
  {
    path:'home', component : HomeComponent
  },
  {
    path:'items/:code', component : ItemComponent
  },
  {
    path:'cart', component : CartComponent
  },
{
  path:'',
  pathMatch:'full',
  redirectTo:'/home'
},
{
  path:'**',

  redirectTo:'/home'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
