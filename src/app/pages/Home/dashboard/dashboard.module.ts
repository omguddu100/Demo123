import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './container/dashboard-page/dashboard-page.component';
import { PublishedModelsComponent,RecentlyPublishedComponent} from './components/'
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PublishedModelsComponent,
    RecentlyPublishedComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
