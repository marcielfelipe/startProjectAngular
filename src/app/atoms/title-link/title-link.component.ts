import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/data/products';

@Component({
  selector: 'app-title-link',
  templateUrl: './title-link.component.html',
  styleUrls: ['./title-link.component.css']
})
export class TitleLinkComponent implements OnInit {
  @Input() product!: Product
  constructor() { }

  ngOnInit(): void {
  }

}
