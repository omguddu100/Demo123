import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
@Component({
  selector: 'app-publish-stepper',
  templateUrl: './publish-stepper.component.html',
  styleUrls: ['./publish-stepper.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PublishStepperComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {
    
  }

}
