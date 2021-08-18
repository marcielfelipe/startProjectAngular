import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/templates/cart/cart.service';

type FormDataProps={
  name:string
  address: string
}

@Component({
  selector: 'app-form-checkout',
  templateUrl: './form-checkout.component.html',
  styleUrls: ['./form-checkout.component.css']
})
export class FormCheckoutComponent implements OnInit {
  formData:FormDataProps = {name:'', address:''}

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  checkoutForm = this.formBuilder.group({

  });

  items = this.cartService.getItems()

  onChangeName(event:any){
    this.formData.name = event
  }
  onChangeAddress(event:any){
    this.formData.address = event
  }

  onSubmit(): void {

    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.formData);
    this.formData.name=''
    this.formData.address=''
  }

}
