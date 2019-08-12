import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifier',
})
export class ModifierPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value >= 0) {
      return '+' + value;
    } else {
      return value.toString();
    }
  }

}
