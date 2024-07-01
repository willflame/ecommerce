import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';

import { Product, ProductSearchService } from '@ecommerce/product-data-access';

@Component({
  selector: 'ecommerce-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>;

  constructor(private _productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.products$ = this.control.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((text) => text?.length > 0),
      switchMap((text) => this._productSearchService.searchByName(text))
    );
  }
}
