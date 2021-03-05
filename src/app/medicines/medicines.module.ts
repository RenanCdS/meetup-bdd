import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './medicines-routing.module';
import { MedicineListPageComponent } from './pages/medicine-list-page/medicine-list-page.component';
import { SharedModule } from '../shared/shared.module';
import { MedicineEditPageComponent } from './pages/medicine-edit-page/medicine-edit-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MedicineListPageComponent, MedicineEditPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
