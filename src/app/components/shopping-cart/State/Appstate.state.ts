import {Product} from '../../../models/product';

export interface Appstate {
    cart: Product[];
  products: Product[]
}

export const initialState:Appstate = {
    cart: [],
  products: [],
}
