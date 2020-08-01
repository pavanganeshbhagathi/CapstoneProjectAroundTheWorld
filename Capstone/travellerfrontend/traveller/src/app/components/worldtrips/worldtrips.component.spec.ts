import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldtripsComponent } from './worldtrips.component';

describe('WorldtripsComponent', () => {
  let component: WorldtripsComponent;
  let fixture: ComponentFixture<WorldtripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldtripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldtripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
