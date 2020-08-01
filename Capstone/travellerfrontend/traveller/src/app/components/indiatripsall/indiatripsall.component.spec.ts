import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiatripsallComponent } from './indiatripsall.component';

describe('IndiatripsallComponent', () => {
  let component: IndiatripsallComponent;
  let fixture: ComponentFixture<IndiatripsallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiatripsallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiatripsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
