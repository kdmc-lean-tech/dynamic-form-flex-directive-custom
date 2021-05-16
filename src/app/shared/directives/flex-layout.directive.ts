import { Directive, ElementRef, Input, OnChanges, Renderer2 } from "@angular/core";
import { FlexDirection } from '../../models/flex-layout.model';

@Directive({
  selector: '[fxLayout]'
})
export class FlexLayoutDirective implements OnChanges {
  @Input() fxLayout: FlexDirection;

  constructor(
    private el: ElementRef,
    private renderer2: Renderer2
  ) {
  }

  ngOnChanges(changes) {
    if (changes.fxLayout) {
      this.setFlexDirection(changes.fxLayout?.currentValue);
    }
  }

  private setFlexDirection(fxLayout: FlexDirection) {
    if (
      fxLayout && typeof fxLayout === 'string' &&
      (fxLayout.includes('row') || fxLayout.includes('column'))) {
        this.renderer2.setStyle(this.el.nativeElement, 'display', 'flex');
        this.renderer2.setStyle(this.el.nativeElement, 'flex-direction', fxLayout);
    }
  }
}
