import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsearchingbyratingComponent } from './tripsearchingbyrating.component';

describe('TripsearchingbyratingComponent', () => {
  let component: TripsearchingbyratingComponent;
  let fixture: ComponentFixture<TripsearchingbyratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsearchingbyratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsearchingbyratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
