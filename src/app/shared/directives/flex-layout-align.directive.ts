import { Directive, Input } from "@angular/core";

@Directive({
  selector: '[fxLayoutAlign]'
})
export class FlexLayoutAlignDirective {
  @Input() fxLayoutAlign: string;
  
  constructor() {

  }
}
