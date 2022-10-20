import { TestBed } from '@angular/core/testing';

import { BugRegistrarService } from './bug-registrar.service';

describe('BugRegistrarService', () => {
  let service: BugRegistrarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugRegistrarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
