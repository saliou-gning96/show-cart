import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() product: Product = {};
  @Input() quantity = 0;
  @Input() tva = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  get pttc(): number {
    return (this.product.price ?? 0) * this.quantity + this.tva;
  }
}
