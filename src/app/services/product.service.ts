import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  private URL = '../assets/data.json';

  constructor(private http: HttpClient) { }
 
  getProducts(): Observable<Product[]> {
   return this.http.get<Product[]>(this.URL)
  }

 }