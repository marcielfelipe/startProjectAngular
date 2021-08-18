import { ProductAlertsComponent } from './molecules/product-alerts/product-alerts.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './atoms/button/button.component';
import { ButtonIconComponent } from './molecules/button-icon/button-icon.component';
import { CartItemComponent } from './molecules/cart-item/cart-item.component';
import { FormCheckoutComponent } from './molecules/form-checkout/form-checkout.component';
import { ProductComponent } from './molecules/product/product.component';
import { CartComponent } from './templates/cart/cart.component';
import { ProductDetailsComponent } from './templates/product-details/product-details.component';
import { ProductListComponent } from './templates/product-list/product-list.component';
import { ShippingComponent } from './templates/shipping/shipping.component';
import { TopBarComponent } from './templates/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { AtomsModule } from './atoms/atoms.module';

@NgModule({
  declarations: [
    AppComponent,
    // ButtonComponent,
    ButtonIconComponent,
    CartItemComponent,
    FormCheckoutComponent,
    ProductComponent,
    ProductAlertsComponent,
    CartComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ShippingComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    AtomsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
