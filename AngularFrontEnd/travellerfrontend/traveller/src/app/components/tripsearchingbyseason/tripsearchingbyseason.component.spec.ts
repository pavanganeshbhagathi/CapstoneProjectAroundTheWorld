import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsearchingbyseasonComponent } from './tripsearchingbyseason.component';

describe('TripsearchingbyseasonComponent', () => {
  let component: TripsearchingbyseasonComponent;
  let fixture: ComponentFixture<TripsearchingbyseasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsearchingbyseasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsearchingbyseasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
