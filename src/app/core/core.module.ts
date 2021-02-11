import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BaseLayoutComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ]
})
export class CoreModule { }
