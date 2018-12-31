import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhalifComponent } from './khalif.component';

describe('KhalifComponent', () => {
  let component: KhalifComponent;
  let fixture: ComponentFixture<KhalifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhalifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhalifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
