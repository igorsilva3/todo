import { TestBed } from '@angular/core/testing';

import { GetTokenSessionService } from './get-token-session.service';

describe('GetTokenSessionService', () => {
  let service: GetTokenSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTokenSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
