import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/templates/cart/cart.service';

type ItemProps={
  name: string
  price: number
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  constructor(
    private cartService: CartService,
  ) { }
  items = this.cartService.getItems()

  ngOnInit(): void {
  }

}
