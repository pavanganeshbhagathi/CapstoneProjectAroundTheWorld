import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldtripsallComponent } from './worldtripsall.component';

describe('WorldtripsallComponent', () => {
  let component: WorldtripsallComponent;
  let fixture: ComponentFixture<WorldtripsallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldtripsallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldtripsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
