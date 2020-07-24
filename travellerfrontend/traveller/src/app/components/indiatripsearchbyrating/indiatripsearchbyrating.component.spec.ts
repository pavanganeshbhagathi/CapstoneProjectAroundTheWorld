import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiatripsearchbyratingComponent } from './indiatripsearchbyrating.component';

describe('IndiatripsearchbyratingComponent', () => {
  let component: IndiatripsearchbyratingComponent;
  let fixture: ComponentFixture<IndiatripsearchbyratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiatripsearchbyratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiatripsearchbyratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
