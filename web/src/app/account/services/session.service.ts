import { Injectable } from '@angular/core'

import { SetTokenSessionService } from './set-token-session.service'
import { GetTokenSessionService } from './get-token-session.service'

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(
    public setTokenSessionService: SetTokenSessionService,
    public getTokenSessionService: GetTokenSessionService,
  ) {}
}
