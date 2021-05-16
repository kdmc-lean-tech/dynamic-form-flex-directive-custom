import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from 'src/app/components/regiter-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from 'src/app/components/input-field/input-filed.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
