import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicineListPageComponent } from './pages/medicine-list-page/medicine-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: MedicineListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
