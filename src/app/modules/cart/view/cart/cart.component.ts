import { Component, OnInit } from '@angular/core';
import { input1 } from 'src/app/data/input1';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartData = input1;
  constructor() { }

  ngOnInit(): void {
  }

  getItemTva(item: any): number {
    let tva = 0;
    switch(item.product?.type) {
      case 'book':
        tva = (item.product?.price * item.quantity) * 0.1;
        break;
      case 'other':
        tva = (item.product?.price * item.quantity) * 0.2;
        break;
      default:
        tva = 0;
        break;
    }

    if (item.isImported) {
      tva = tva + (item.product?.price * item.quantity) * 0.05;
    }
    
    tva = Number(tva.toFixed(2));
    return tva;
  }

  get totalTva(): number {
    let prices = this.cartData.map((item: any) => {
      return this.getItemTva(item);
    })

    return prices.reduce((a, b) => a + b, 0);
  }

  get totalPrice(): number {
    let prices = this.cartData.map((item: any) => {
      return item.product.price * item.quantity + this.getItemTva(item);
    })

    return prices.reduce((a, b) => a + b, 0);
  }

}
