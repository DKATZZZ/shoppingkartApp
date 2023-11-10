import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ProductService } from "src/app/Apiservice/product.service";
import {of} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as CartActions from './shoppingcart.action';
import { Appstate } from "./Appstate.state";

@Injectable()
export class CartEffects {
   
    constructor(private action$:Actions,
        private serv:ProductService,
        private store:Store<Appstate>){

    }

    getproduct$ = createEffect(() => {
        return this.action$.pipe(ofType(CartActions.loadProducts),
        switchMap(() => 
          this.serv.getProducts().pipe(
            map((products)=> CartActions.loadProductsSuccess({products})),
            catchError(async (error) => CartActions.loadProductsFailure({ error }))
          )
        ))
    });
}
