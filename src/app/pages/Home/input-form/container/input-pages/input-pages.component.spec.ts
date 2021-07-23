import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPagesComponent } from './input-pages.component';

describe('InputPagesComponent', () => {
  let component: InputPagesComponent;
  let fixture: ComponentFixture<InputPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
