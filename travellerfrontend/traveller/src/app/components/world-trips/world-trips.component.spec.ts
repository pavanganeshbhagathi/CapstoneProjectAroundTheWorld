import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTripsComponent } from './world-trips.component';

describe('WorldTripsComponent', () => {
  let component: WorldTripsComponent;
  let fixture: ComponentFixture<WorldTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
