import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldtripsearchbysubtypeComponent } from './worldtripsearchbysubtype.component';

describe('WorldtripsearchbysubtypeComponent', () => {
  let component: WorldtripsearchbysubtypeComponent;
  let fixture: ComponentFixture<WorldtripsearchbysubtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldtripsearchbysubtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldtripsearchbysubtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
