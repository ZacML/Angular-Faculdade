import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inverte',
  standalone: true
})
export class InvertePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return "";
    let invertida = value.split("").reverse().join("");
    if (invertida === value && value !== "" && value.length > 1)
      return invertida + ' (palíndromo)';
    return invertida;
  }
}