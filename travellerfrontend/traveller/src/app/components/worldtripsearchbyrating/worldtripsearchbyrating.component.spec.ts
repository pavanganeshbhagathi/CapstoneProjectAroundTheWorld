import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldtripsearchbyratingComponent } from './worldtripsearchbyrating.component';

describe('WorldtripsearchbyratingComponent', () => {
  let component: WorldtripsearchbyratingComponent;
  let fixture: ComponentFixture<WorldtripsearchbyratingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldtripsearchbyratingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldtripsearchbyratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
