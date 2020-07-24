import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsearchingbysubtypeComponent } from './tripsearchingbysubtype.component';

describe('TripsearchingbysubtypeComponent', () => {
  let component: TripsearchingbysubtypeComponent;
  let fixture: ComponentFixture<TripsearchingbysubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsearchingbysubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsearchingbysubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
