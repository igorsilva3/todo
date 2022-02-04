import { TestBed } from '@angular/core/testing';

import { GetTaskByIdService } from './get-task-by-id.service';

describe('GetTaskByIdService', () => {
  let service: GetTaskByIdService

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTaskByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
