import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Cart[] = [];

  constructor() { }

  getCart(): Cart[] {
    return this.cart;
  }

  addProductToCart(product: Product, productQuantity: number): Cart {
    return {
      productName: product.name,
      productPrice: product.price,
      productQuantity,
      url: product.url,
    };
  }

  getQuantity(product: Product): number {
    const targetCart = this.cart.find(
      (cart) => cart.productName === product.name
    );
    return targetCart?.productQuantity as number;
  }

  editCart(product: Product, productQuantity: number): void { 
    const targetCart = this.cart.find(
      (cart) => cart.productName === product.name
    );
    
     if (targetCart){
      if (productQuantity <= 0) {   
        this.cart = this.cart.filter((cart) => cart.productName !== targetCart?.productName)
      } else {
        targetCart.productQuantity = productQuantity; 
      }
    } else {
      this.cart.push(this.addProductToCart(product, productQuantity))
    };     
  }

  calcCartTotalPrice(): number {
    const totalPriceResult: number = this.cart.reduce(
      (totalPriceResult, cartProductPrice) => {
        return (totalPriceResult + cartProductPrice.productPrice * cartProductPrice.productQuantity);
      }, 0);
    const totalPrice: number = Number(totalPriceResult.toFixed(2));
    return totalPrice;
  }

}
