import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Layout/header/header.component';
import { SidenavComponent } from './Layout/sidenav/sidenav.component';
import { MainComponent } from './Layout/main/main.component';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from './Layout/sub-header/sub-header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    SubHeaderComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports:[
    MainComponent
  ]

})
export class SharedModule { }
