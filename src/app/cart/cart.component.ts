import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  fullname: string = '';
  address: string = '';
  cardNumber: number = 0;
  carts: Cart[] = [];
  products: Product[] = [];

  constructor(
    private route: Router,
    private cartService: CartService,
    private productService: ProductService
    ) {

     }

  ngOnInit(): void {
    this.carts = this.cartService.getCart();

    this.productService.getProducts().subscribe((product) => (this.products = product));
  }

  getCart(): void {
    this.carts = this.cartService.getCart();
  }

  addCart(productName: string, productQuantity: number): void {
    const selectedProduct = this.products.find((product) => product.name === productName);
    this.cartService.editCart(selectedProduct as Product, productQuantity);
    if (productQuantity == 0) {
      alert('Item is removed from the cart');
    }
  }

  getTotalPrice(): number {
    return this.cartService.calcCartTotalPrice();
  }

  onSubmit(): void {
    this.route.navigate(['confirmation']);
  }
}

