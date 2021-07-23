import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishModelRoutingModule } from './publish-model-routing.module';
import { PublishmodelPageComponent } from './containers/publishmodel-page/publishmodel-page.component';
import { PublishStepperComponent } from './components/';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';





@NgModule({
  declarations: [
    PublishmodelPageComponent,
    PublishStepperComponent
  ],
  imports: [
    CommonModule,
    PublishModelRoutingModule,
    SharedModule,
    MaterialModule
    

  ]
})
export class PublishModelModule { }
