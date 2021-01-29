import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployerRegisterPageComponent } from './pages/employer-register-page/employer-register-page.component';

const routes: Routes = [
  {
    path: '',
    component: EmployerRegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRegisterRoutingModule { }
