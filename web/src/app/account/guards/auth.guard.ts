import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'

import { SessionService } from './../services/session.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private isAuthenticated: boolean = true

  constructor(private router: Router, private sessionService: SessionService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const token = this.sessionService.getTokenSessionService.execute()

    if (!token) {
      this.isAuthenticated = false
      this.router.navigate(['account', 'login'])
    }

    return this.isAuthenticated
  }
}
