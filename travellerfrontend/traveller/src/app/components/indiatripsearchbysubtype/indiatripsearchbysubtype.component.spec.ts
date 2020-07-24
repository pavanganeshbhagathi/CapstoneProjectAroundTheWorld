import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiatripsearchbysubtypeComponent } from './indiatripsearchbysubtype.component';

describe('IndiatripsearchbysubtypeComponent', () => {
  let component: IndiatripsearchbysubtypeComponent;
  let fixture: ComponentFixture<IndiatripsearchbysubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiatripsearchbysubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiatripsearchbysubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
