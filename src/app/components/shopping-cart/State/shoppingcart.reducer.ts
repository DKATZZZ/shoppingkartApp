import { createReducer, on } from "@ngrx/store";
import { addToCart,removeFromCart,loadProducts, clearCart, loadProductsFailure, loadProductsSuccess } from "./shoppingcart.action";
import { initialState } from "./Appstate.state";

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state, { product }) => ({ ...state, cart: [...state.cart, product] })),
  on(removeFromCart, (state, { productId }) => ({ ...state, cart: state.cart.filter(item => item.id !== productId) })),
  on(clearCart, state => ({ ...state, cart: [] })),
  on(loadProducts, state => state), // No state change during loading
  on(loadProductsSuccess, (state, { products }) => ({ ...state, products })),
  on(loadProductsFailure, state => state) // You 
  )