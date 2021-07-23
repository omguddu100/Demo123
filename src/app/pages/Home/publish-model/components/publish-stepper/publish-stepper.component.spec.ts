import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishStepperComponent } from './publish-stepper.component';

describe('PublishStepperComponent', () => {
  let component: PublishStepperComponent;
  let fixture: ComponentFixture<PublishStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
