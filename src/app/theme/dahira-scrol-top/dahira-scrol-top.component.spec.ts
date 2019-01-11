import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DahiraScrolTopComponent } from './dahira-scrol-top.component';

describe('DahiraScrolTopComponent', () => {
  let component: DahiraScrolTopComponent;
  let fixture: ComponentFixture<DahiraScrolTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DahiraScrolTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DahiraScrolTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
