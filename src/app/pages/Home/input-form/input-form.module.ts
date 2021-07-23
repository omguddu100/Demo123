import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddcategoryRoutingModule } from './inputform-routing.module';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { InputPagesComponent } from './container/input-pages/input-pages.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ReactiveFormComponent,
    TemplateDrivenComponent,
    InputPagesComponent,
    
  ],
  imports: [
    CommonModule,
    AddcategoryRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class InputFormModule { }
