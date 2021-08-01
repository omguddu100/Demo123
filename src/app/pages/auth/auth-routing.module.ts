import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthPageComponent } from './containers';
import { LoginFormComponent,SignFormComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: AuthPageComponent,
    children:[
      {path:'', component:LoginFormComponent},
      {path:'signup', component:SignFormComponent}
     
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AuthRoutingModule {
}
