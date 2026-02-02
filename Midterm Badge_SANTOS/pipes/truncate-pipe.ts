import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string | null | undefined, limit: number = 100): string {
    if (!value) return ''; // safe for null/undefined
    return value.length > limit
      ? value.substring(0, limit) + '...'
      : value;
  }
}
