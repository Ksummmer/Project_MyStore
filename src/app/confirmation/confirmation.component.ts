import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  constructor(private cartService: CartService) {}

  getTotalPrice(): number {
    return this.cartService.calcCartTotalPrice();
  }
}
