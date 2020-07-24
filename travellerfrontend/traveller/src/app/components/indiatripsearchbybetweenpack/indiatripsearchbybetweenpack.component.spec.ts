import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiatripsearchbybetweenpackComponent } from './indiatripsearchbybetweenpack.component';

describe('IndiatripsearchbybetweenpackComponent', () => {
  let component: IndiatripsearchbybetweenpackComponent;
  let fixture: ComponentFixture<IndiatripsearchbybetweenpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiatripsearchbybetweenpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiatripsearchbybetweenpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
