import { ElementRef, Renderer2 } from "@angular/core";
import { FlexDirection } from "src/app/models/flex-layout.model";

export class ResponsiveDirectiveClass {
  public fxLayout: FlexDirection;
  constructor(
    protected el: ElementRef,
    protected renderer2: Renderer2,
    private minWidth: number,
    private maxWidth: number) {
  }
}
