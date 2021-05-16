import { Component, forwardRef, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() disabled = false;
  onChange = (_) => {};
  onTouched = () => {}; 
  public value: string;

  constructor() {

  }

  public onInput(value) {
    this.onChange(value);
  }

  writeValue(value) {
    if (value) {
      this.value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }
}
