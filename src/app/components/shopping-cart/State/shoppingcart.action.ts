import { createAction,props } from "@ngrx/store";
import { Product } from "src/app/models/product";

export const loadProducts = createAction(
    '[Product] Load Products'
    );

// Action to handle successful product loading
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);

// Action to handle product loading failure
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);

export const addToCart = createAction(
    '[Cart] Add To Cart', 
    props<{ product: Product }>());
export const removeFromCart = createAction(
    '[Cart] Remove From Cart', 
    props<{ productId: string }>());

export const clearCart = createAction('[Cart] Clear Cart');