import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRegisterRoutingModule } from './employer-register-routing.module';
import { EmployerRegisterPageComponent } from './pages/employer-register-page/employer-register-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [EmployerRegisterPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    EmployerRegisterRoutingModule
  ]
})
export class EmployerRegisterModule { }
