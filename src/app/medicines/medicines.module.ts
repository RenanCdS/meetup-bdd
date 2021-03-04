import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './medicines-routing.module';
import { MedicineListPageComponent } from './pages/medicine-list-page/medicine-list-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MedicineListPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
