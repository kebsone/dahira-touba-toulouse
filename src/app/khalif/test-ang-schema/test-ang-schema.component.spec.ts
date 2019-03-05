import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAngSchemaComponent } from './test-ang-schema.component';

describe('TestAngSchemaComponent', () => {
  let component: TestAngSchemaComponent;
  let fixture: ComponentFixture<TestAngSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAngSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAngSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
