import { Directive, ElementRef, HostListener, Renderer2, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appToggleShow]'
})
export class CommonDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.ChangeBgColor('red');
  }
  @Output() displayChanged: EventEmitter<number> =   new EventEmitter();
  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('#17a2b8');
  }

  ChangeBgColor(color: string) {

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  @HostListener('click') onClick() {
    this.displayChanged.emit(1);
  }

}
