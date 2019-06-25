import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) { }
  @HostListener('focus') onFocus() {
    this.highlight(null);
  }
  @HostListener('blur') onBlur() {
    this.highlight('yellow');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
