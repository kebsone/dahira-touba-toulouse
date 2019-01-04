import { TestBed } from '@angular/core/testing';

import { DahiraService } from './dahira.service';

describe('DahiraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DahiraService = TestBed.get(DahiraService);
    expect(service).toBeTruthy();
  });
});
