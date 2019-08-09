import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'attributName'
})
export class AttributNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value ? value.slice(0, 3) : null;
  }

}
