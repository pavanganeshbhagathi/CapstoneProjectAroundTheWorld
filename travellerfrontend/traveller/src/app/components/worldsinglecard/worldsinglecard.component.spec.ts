import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldsinglecardComponent } from './worldsinglecard.component';

describe('WorldsinglecardComponent', () => {
  let component: WorldsinglecardComponent;
  let fixture: ComponentFixture<WorldsinglecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldsinglecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldsinglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
