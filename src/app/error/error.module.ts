import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemErrorPageComponent } from './pages/system-error-page/system-error-page.component';
import { ErrorRoutingModule } from './error-routing.module';



@NgModule({
  declarations: [SystemErrorPageComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
