import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productQuantity: number = 0;

  constructor(
    private productService: ProductService, 
    private cartService: CartService
    ) {  
  }

  ngOnInit(): void {
     this.productService.getProducts().subscribe((products) => 
           (this.products = products)
         )
  }

  addProduct(product: Product, productQuantity: number): void {
    this.cartService.editCart(product, productQuantity);
    if(productQuantity == 0 ) {
      alert('item is removed from the cart ')
    }else if(productQuantity == undefined) {
      alert('item is not added to the cart')
    }else {
      alert(`${product.name} in amount of ${productQuantity} item(s) is added to cart`);
    }
  }
}
