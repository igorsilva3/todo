import { TestBed } from '@angular/core/testing';

import { SetTokenSessionService } from './set-token-session.service';

describe('SetTokenSessionService', () => {
  let service: SetTokenSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetTokenSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
