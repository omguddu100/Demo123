import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { InputPagesComponent } from './container/input-pages/input-pages.component';
// import { InputPagesComponent, ReactiveFormComponent } from './container';

const routes: Routes = [
  {
    path:'',
    component:InputPagesComponent,
    children:[
        {path:'TemplateDrivenForms',component: TemplateDrivenComponent},
        {path:'ReactiveForm',component:ReactiveFormComponent}
     ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddcategoryRoutingModule { }
