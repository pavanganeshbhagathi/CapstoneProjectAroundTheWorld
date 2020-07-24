import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiatripsearchbyseasonComponent } from './indiatripsearchbyseason.component';

describe('IndiatripsearchbyseasonComponent', () => {
  let component: IndiatripsearchbyseasonComponent;
  let fixture: ComponentFixture<IndiatripsearchbyseasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiatripsearchbyseasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiatripsearchbyseasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
