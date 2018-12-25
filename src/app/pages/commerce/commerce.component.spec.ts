import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceComponent } from './commerce.component';

describe('CommerceComponent', () => {
  let component: CommerceComponent;
  let fixture: ComponentFixture<CommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
