import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiatripsComponent } from './indiatrips.component';

describe('IndiatripsComponent', () => {
  let component: IndiatripsComponent;
  let fixture: ComponentFixture<IndiatripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiatripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiatripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
