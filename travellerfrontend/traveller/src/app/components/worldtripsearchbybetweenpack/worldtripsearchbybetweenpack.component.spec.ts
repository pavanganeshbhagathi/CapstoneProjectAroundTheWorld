import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldtripsearchbybetweenpackComponent } from './worldtripsearchbybetweenpack.component';

describe('WorldtripsearchbybetweenpackComponent', () => {
  let component: WorldtripsearchbybetweenpackComponent;
  let fixture: ComponentFixture<WorldtripsearchbybetweenpackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldtripsearchbybetweenpackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldtripsearchbybetweenpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
