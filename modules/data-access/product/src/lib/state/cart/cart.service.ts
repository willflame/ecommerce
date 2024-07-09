import { computed, Injectable, signal } from '@angular/core';
// import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // Forma com observables
  // private cartSubject$ = new BehaviorSubject<Product[]>([]);
  // cart$ = this.cartSubject$.asObservable();
  // quantity$ = this.cart$.pipe(map(products => products.length));

  // addToCart(product: Product) {
  //   const currentCart = this.cartSubject$.getValue();
  //   this.cartSubject$.next([...currentCart, product]);
  // }

  // Forma com signals
  private cartSignal = signal<Product[]>([]);
  cart = this.cartSignal.asReadonly();
  quantity = computed(() => this.cart().length);

  addToCart(product: Product) {
    this.cartSignal.update((products) => [...products, product]);
  }
}
