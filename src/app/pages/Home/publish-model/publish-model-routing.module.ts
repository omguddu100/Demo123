import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishmodelPageComponent } from './containers';

const routes: Routes = [
  {path:'',component:PublishmodelPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishModelRoutingModule { }
