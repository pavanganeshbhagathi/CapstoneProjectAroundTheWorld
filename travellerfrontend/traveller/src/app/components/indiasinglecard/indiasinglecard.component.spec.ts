import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiasinglecardComponent } from './indiasinglecard.component';

describe('IndiasinglecardComponent', () => {
  let component: IndiasinglecardComponent;
  let fixture: ComponentFixture<IndiasinglecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiasinglecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiasinglecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
