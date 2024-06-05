import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class RecommendedProductsService {
  readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  constructor(private _httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        page: 1,
        limit: 6,
      },
    });
  }
}
