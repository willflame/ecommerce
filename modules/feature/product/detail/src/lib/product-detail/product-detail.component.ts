import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product, ProductSearchService } from '@ecommerce/product-data-access';
import { Observable, switchMap } from 'rxjs';
import { getParams } from './get-params';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  private productSearchService = inject(ProductSearchService);

  // @Input() id!: string;
  // id$ = = getParams();
  product$: Observable<Product> = getParams().pipe(
    switchMap((id: string) => this.productSearchService.getById(id))
  );

  // private activatedRoute = inject(ActivatedRoute);
  // constructor(private activatedRoute: ActivatedRoute) {}

  // ngOnInit(): void {
  //   // this.activatedRoute.snapshot.params['id'];

  //   // this.activatedRoute.params.subscribe((params) => {
  //   //   console.log(params['id']);
  //   // });

  //   // this.id$ = this.activatedRoute.params.pipe(map((params) => params['id']));
  // }
}
