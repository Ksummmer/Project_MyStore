import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductItemDetailComponent } from './product-item-detail.component';


describe('ProductItemDetailComponent', () => {
  let component: ProductItemDetailComponent;
  let fixture: ComponentFixture<ProductItemDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItemDetailComponent],
      imports:  [HttpClientTestingModule,
      RouterTestingModule, 
      FormsModule
    ]
    });
    fixture = TestBed.createComponent(ProductItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
