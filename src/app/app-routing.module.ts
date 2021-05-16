import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from 'src/app/components/regiter-form/register-form.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
