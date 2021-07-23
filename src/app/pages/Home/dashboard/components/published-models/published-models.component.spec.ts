import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedModelsComponent } from './published-models.component';

describe('PublishedModelsComponent', () => {
  let component: PublishedModelsComponent;
  let fixture: ComponentFixture<PublishedModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
