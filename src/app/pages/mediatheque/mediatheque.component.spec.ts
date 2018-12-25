import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediathequeComponent } from './mediatheque.component';

describe('MediathequeComponent', () => {
  let component: MediathequeComponent;
  let fixture: ComponentFixture<MediathequeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediathequeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediathequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
