import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonIconComponent } from './button-icon/button-icon.component';
import { FormCheckoutComponent } from './form-checkout/form-checkout.component';
import { ProductComponent } from './product/product.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CartItemComponent } from './cart-item/cart-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonIconComponent,
    CartItemComponent,
    FormCheckoutComponent,
    ProductComponent,
    ProductAlertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AtomsModule
  ],
  exports: [
    CartItemComponent,
    ButtonIconComponent,
    FormCheckoutComponent,
    ProductComponent,
    ProductAlertsComponent,

  ]
})
export class MoleculesModule{}
