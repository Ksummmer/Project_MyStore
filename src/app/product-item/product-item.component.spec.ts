import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { ProductService} from '../services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemComponent], 
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule], providers: [ProductService]
    });
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
