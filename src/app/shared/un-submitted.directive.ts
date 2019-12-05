import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnSubmitted]'
})
export class UnSubmittedDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.color = 'red'; }

}
