import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakebackendService {
  private products: Product[] = [
    { id: '1', name: 'Product 1', price: 10.99 },
    { id: '2', name: 'Product 2', price: 19.99 },
    // Add more products here
  ];
  constructor() { }
  getProducts() {
    return of(this.products);
  }
}
