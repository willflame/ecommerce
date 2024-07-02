import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
  // pure: false,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(quantity: number): string {
    // console.log('call pipe');
    if (quantity === 0) {
      return 'Produto indisponível';
    } else if (quantity === 1) {
      return 'Última unidade';
    } else {
      return `${quantity} unidades disponível`;
    }
  }
}
