import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishmodelPageComponent } from './publishmodel-page.component';

describe('PublishmodelPageComponent', () => {
  let component: PublishmodelPageComponent;
  let fixture: ComponentFixture<PublishmodelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishmodelPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishmodelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
