import { TestBed } from '@angular/core/testing';

import { TasksObservableService } from './tasks-observable.service';

describe('TasksObservableService', () => {
  let service: TasksObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
