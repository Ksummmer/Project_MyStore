import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  id: number = 0; 
  products: Product[] = [];
  selectedProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };
  cartQuantity: number = 0;

  @Input() product: Product  =  {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };
  
  @Output() addProduct: EventEmitter<any> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private cartService: CartService 
    ) {
  }

ngOnInit(): void {
    this.cartQuantity = this.getQuantity();
    this.productService.getProducts().subscribe((product) => {
      this.selectedProduct = product.find(
        (product) => product.id == this.selectedProduct.id
      ) as Product;
    });
 }

 getQuantity(): number {
  return this.cartService.getQuantity(this.product);
 }

 submitForm(): void {
  this.addProduct.emit(this.cartQuantity);     
 }
}
