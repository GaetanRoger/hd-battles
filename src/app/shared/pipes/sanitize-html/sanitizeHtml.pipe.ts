import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private readonly sanitizer: DomSanitizer) {}

  transform(value: string, ...args: any[]): SafeHtml {
    const linkRegex = /href="\//g;

    value = value.replace(linkRegex, 'target="_blank" href="https://heros-et-dragons.fr/');
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
