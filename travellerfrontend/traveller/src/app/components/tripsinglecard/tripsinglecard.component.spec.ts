import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsinglecardComponent } from './tripsinglecard.component';

describe('TripsinglecardComponent', () => {
  let component: TripsinglecardComponent;
  let fixture: ComponentFixture<TripsinglecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsinglecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsinglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
