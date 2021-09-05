import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  //injetando o elemento de referencia - (elemento da DOM)
  constructor(private el: ElementRef) { 
    //pegando o elemento que tem o atributo (appRed) e modificando a cor
    el.nativeElement.style.color = '#e35e6b'
  }

}
