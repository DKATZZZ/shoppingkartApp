import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { addToCart, clearCart, loadProducts, removeFromCart } from './State/shoppingcart.action';
import { Appstate } from './State/Appstate.state';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {
  cart$: Observable<Product[]>;

  constructor(private store: Store<Appstate>) {
    this.cart$ = store.select((state) => state.cart);
  }

  ngOnInit() {
    // Dispatch the loadProducts action to fetch products from the backend
    this.store.dispatch(loadProducts());
  }
  addToCart(product:Product){
    this.store.dispatch(addToCart({product}))
  }
  removeFromCart(productId:string){
    this.store.dispatch(removeFromCart({productId}))
  }

  clearCart() {
    this.store.dispatch(clearCart());
  }
}
