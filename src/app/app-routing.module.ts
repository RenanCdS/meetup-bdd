import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './core/components/base-layout/base-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'medicamentos',
        loadChildren: () => import('./medicines/medicines.module').then(m => m.HomeModule)
      },
      {
        path: 'error',
        loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
      },
      {
        path: 'registrar-medicamento',
        loadChildren: () => import('./medicine-register/medicine-register.module').then(m => m.MedicineRegisterModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/medicamentos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
