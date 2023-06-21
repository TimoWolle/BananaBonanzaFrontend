import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './components/footer/footer.component';
import { ShippingInformationsComponent } from './components/shipping-informations/shipping-informations.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { IndexComponent } from './components/index/index.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartComponent } from './components/cart/cart.component';
import {CommonModule, registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductComponent,
    FooterComponent,
    ShippingInformationsComponent,
    HeaderComponent,
    AboutUsComponent,
    KontaktComponent,
    IndexComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
  provide: LOCALE_ID,
  useValue: 'de-DE' // 'de-DE' for Germany, 'fr-FR' for France ...
},],
  bootstrap: [AppComponent]
})
export class AppModule {constructor() {
  registerLocaleData(localeDe);
}}
