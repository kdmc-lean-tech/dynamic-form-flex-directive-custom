import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from "@angular/core";
import { FlexDirection } from "src/app/models/flex-layout.model";

@Directive({
  selector: '[fxLayout.lg]'
})
export class FlexLayoutLgDirective implements OnChanges {
  @Input('fxLayout.lg') fxLayout: FlexDirection;
  
  constructor(private el: ElementRef, private renderer2: Renderer2) {
  }

  ngOnChanges(changes) {
    if (changes.fxLayout) {
      const widthScreen = window.screen.width;
      this.setFlexDirection(changes.fxLayout.currentValue, widthScreen);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setFlexDirection(this.fxLayout, event.currentTarget.innerWidth);
  }

  private setFlexDirection(fxLayout: FlexDirection, widthScreen: number) {
    if (
      fxLayout && typeof fxLayout === 'string' &&
      (fxLayout.includes('row') || fxLayout.includes('column'))) {
        this.setStylesToElement(widthScreen, fxLayout);
    }
  }

  private validateWidthScreen(widthScreen: number) {
    return widthScreen >= 1280 && widthScreen <= 1919.99 ? true : false;
  }

  private setStylesToElement(widthScreen: number, fxLayout: FlexDirection) {
    this.renderer2.setStyle(this.el.nativeElement, 'display', 'flex');
    if (this.validateWidthScreen(widthScreen)) {
      this.renderer2.setStyle(this.el.nativeElement, 'flex-direction', fxLayout);
    } else {
      this.renderer2.setStyle(this.el.nativeElement, 'flex-direction', '');
    }
  }
}
