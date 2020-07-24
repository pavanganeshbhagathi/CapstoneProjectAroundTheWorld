import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTripsuppoterComponent } from './world-tripsuppoter.component';

describe('WorldTripsuppoterComponent', () => {
  let component: WorldTripsuppoterComponent;
  let fixture: ComponentFixture<WorldTripsuppoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldTripsuppoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldTripsuppoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
