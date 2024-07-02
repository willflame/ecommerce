import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Product, ProductSearchService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { Observable, switchMap } from 'rxjs';
import { getParams } from './get-params';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
// import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, QuantityDescriptionPipe],
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

  // getQuantityDescription(quantity: number): string {
  //   // console.log('call function');

  //   if (quantity === 0) {
  //     return 'Produto indisponível';
  //   } else if (quantity=== 1) {
  //     return 'Última unidade';
  //   } else {
  //     return `${quantity} unidades disponível`;
  //   }
  // }
}
