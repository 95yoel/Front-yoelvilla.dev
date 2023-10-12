import { TestBed } from '@angular/core/testing';

import { IconsBehaviorService } from './icons-behavior.service';

describe('IconsBehaviorService', () => {
  let service: IconsBehaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconsBehaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
