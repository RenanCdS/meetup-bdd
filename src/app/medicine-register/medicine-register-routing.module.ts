import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineRegisterPageComponent } from './pages/medicine-register-page/medicine-register-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineRegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicineRegisterRoutingModule { }
