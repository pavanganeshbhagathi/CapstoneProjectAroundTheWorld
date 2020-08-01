import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsearchingbybetweenpackComponent } from './tripsearchingbybetweenpack.component';

describe('TripsearchingbybetweenpackComponent', () => {
  let component: TripsearchingbybetweenpackComponent;
  let fixture: ComponentFixture<TripsearchingbybetweenpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsearchingbybetweenpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsearchingbybetweenpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
