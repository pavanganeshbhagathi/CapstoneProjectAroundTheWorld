import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsallComponent } from './tripsall.component';

describe('TripsallComponent', () => {
  let component: TripsallComponent;
  let fixture: ComponentFixture<TripsallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
