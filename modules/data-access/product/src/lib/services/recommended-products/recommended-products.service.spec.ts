import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RecommendedProductsService } from './recommended-products.service';
import { Product } from '../../models/product.model';
import { mockProducts } from '../../mocks/products.mock';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RecommendedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recommended products correctly', () => {
    // Arrange
    const url = `${service.apiUrl}/products?page=1&limit=6`;
    let result: Product[] = [];

    // Action
    service.getProducts().subscribe({
      next: (products) => (result = products),
    });

    // Assert
    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });
});
