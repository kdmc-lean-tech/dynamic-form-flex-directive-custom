import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutDirective } from 'src/app/shared/directives/flex-layout.directive';
import { FlexLayoutLgDirective } from 'src/app/shared/directives/flex-layout-lg.directive';



@NgModule({
  declarations: [
    FlexLayoutDirective,
    FlexLayoutLgDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutDirective,
    FlexLayoutLgDirective
  ]
})
export class SharedModule { }
