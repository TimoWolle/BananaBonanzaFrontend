import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {ShippingInformationsComponent} from "./components/shipping-informations/shipping-informations.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {KontaktComponent} from "./components/kontakt/kontakt.component";
import {IndexComponent} from "./components/index/index.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductComponent} from "./components/product/product.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {CartComponent} from "./components/cart/cart.component";

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shipping-information', component: ShippingInformationsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'kontakt', component: KontaktComponent },
  { path: 'shop', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'product/:id', component: ProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
