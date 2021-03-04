import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemErrorPageComponent } from './pages/system-error-page/system-error-page.component';

const routes: Routes = [
  {
    path: '',
    component: SystemErrorPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ErrorRoutingModule {

}
