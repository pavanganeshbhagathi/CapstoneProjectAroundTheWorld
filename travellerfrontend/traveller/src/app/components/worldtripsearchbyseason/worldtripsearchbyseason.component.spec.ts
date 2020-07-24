import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldtripsearchbyseasonComponent } from './worldtripsearchbyseason.component';

describe('WorldtripsearchbyseasonComponent', () => {
  let component: WorldtripsearchbyseasonComponent;
  let fixture: ComponentFixture<WorldtripsearchbyseasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldtripsearchbyseasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldtripsearchbyseasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
