import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineEditPageComponent } from './pages/medicine-edit-page/medicine-edit-page.component';
import { MedicineListPageComponent } from './pages/medicine-list-page/medicine-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineListPageComponent
  },
  {
    path: ':id',
    component: MedicineEditPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
