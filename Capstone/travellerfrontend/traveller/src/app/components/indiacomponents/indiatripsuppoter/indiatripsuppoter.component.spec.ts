import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiatripsuppoterComponent } from './indiatripsuppoter.component';

describe('IndiatripsuppoterComponent', () => {
  let component: IndiatripsuppoterComponent;
  let fixture: ComponentFixture<IndiatripsuppoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiatripsuppoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiatripsuppoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
