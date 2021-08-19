import { Component, Input, OnInit } from '@angular/core';

type ShippingProps={
  type:string
  price:number
}

@Component({
  selector: 'app-shipping-item',
  templateUrl: './shipping-item.component.html',
  styleUrls: ['./shipping-item.component.css']
})
export class ShippingItemComponent implements OnInit {
  @Input() shippingCosts:any
  constructor() { }

  ngOnInit(): void {
  }

}
