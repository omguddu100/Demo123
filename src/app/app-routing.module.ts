import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './pages/auth/guards';


const routes: Routes = [
  
  {
    path: "dashboard",
    pathMatch:'full',
    canActivate: [AuthGuard],
    loadChildren:()=> import('./pages/Home/dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:"PublishModel",
    pathMatch:'full',
    loadChildren:()=>import('./pages/Home/publish-model/publish-model.module').then(m=>m.PublishModelModule)

  },

  {
    path:"",
  //  pathMatch:'full',
    loadChildren:()=> import('./pages/auth/auth.module').then(m=>m.AuthModule)
  },
  {
    path: 'inputFrom',
    loadChildren: () => import('./pages/Home/input-form/input-form.module').then(m => m.InputFormModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
