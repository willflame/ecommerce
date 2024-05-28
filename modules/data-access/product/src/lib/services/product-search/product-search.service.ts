import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  constructor(private _httpClient: HttpClient) {}

  searchByName(name: string): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        name,
      },
    });
  }
}
