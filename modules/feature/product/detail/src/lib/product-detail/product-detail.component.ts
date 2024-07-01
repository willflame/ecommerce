import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getParams } from './get-params';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  // @Input() id!: string;
  id$ = getParams();

  private activatedRoute = inject(ActivatedRoute);
  // constructor(private activatedRoute: ActivatedRoute) {}

  // ngOnInit(): void {
  //   // this.activatedRoute.snapshot.params['id'];

  //   // this.activatedRoute.params.subscribe((params) => {
  //   //   console.log(params['id']);
  //   // });

  //   // this.id$ = this.activatedRoute.params.pipe(map((params) => params['id']));
  // }
}
