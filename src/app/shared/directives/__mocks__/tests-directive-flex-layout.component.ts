import { Component } from "@angular/core";

@Component({
  template: `
    <div [fxLayout]="'row'">
      <app-input-field></app-input-field>
      <app-input-field></app-input-field>
    </div>
  `,
  styles: []
})
export class TestFlexLayoutRowComponent {
}

@Component({
  template: `
    <div [fxLayout]="'column'">
      <app-input-field></app-input-field>
      <app-input-field></app-input-field>
    </div>
  `,
  styles: []
})
export class TestFlexLayoutColumnComponent {
}


@Component({
  template: `
    <div [fxLayout]="">
      <app-input-field></app-input-field>
      <app-input-field></app-input-field>
    </div>
  `,
  styles: []
})
export class TestFlexLayoutUndefinedComponent {
}


@Component({
  template: `
    <div [fxLayout]="45">
      <app-input-field></app-input-field>
      <app-input-field></app-input-field>
    </div>
  `,
  styles: []
})
export class TestFlexLayoutNumberInputComponent {
}
