import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recortar'
})
export class RecortarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let texto = value.slice(0, 250)


    return `${texto} .........`;
  }

}
