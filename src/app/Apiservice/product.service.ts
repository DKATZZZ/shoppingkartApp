import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'environment/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ApiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.ApiUrl}/products`);
  }
}
