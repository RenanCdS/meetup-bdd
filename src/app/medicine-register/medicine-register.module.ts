import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicineRegisterRoutingModule } from './medicine-register-routing.module';
import { MedicineRegisterPageComponent } from './pages/medicine-register-page/medicine-register-page.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MedicineRegisterPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MedicineRegisterRoutingModule
  ]
})
export class MedicineRegisterModule { }
