import { Component, OnInit  } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {
  id: number = 0;
  products: Product[] = [];
  cartQuantity: number = 0;
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  };
  selectedProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    url: '',
    description: ''
  }
  
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private cartService: CartService 
    ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((routeParams: ParamMap) => {
      this.id = Number(routeParams.get('id'));
    
    this.productService.getProducts().subscribe((product) => {
      this.selectedProduct = product.find(
        (product) => product.id == this.id
      ) as unknown as Product;
    });

    this.cartQuantity = this.getQuantity();
  });
}

getQuantity(): number {
  return this.cartService.getQuantity(this.selectedProduct);
}

addProduct(): void {
  this.cartService.editCart(this.selectedProduct, this.cartQuantity);
  if(this.cartQuantity == 0 ) {
    alert('item is removed from the cart ')
  }else if(this.cartQuantity == undefined) {
    alert('item is not added to the cart')
    } else {
      alert(`${this.cartQuantity} item(s) is added to the cart`);
    }
  }
}

