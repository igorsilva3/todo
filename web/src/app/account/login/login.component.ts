import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './../services/auth.service'
import { SessionService } from './../services/session.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm = {
    email: '',
    password: '',
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService,
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.execute(this.loginForm).subscribe(async ({ token }) => {
      if (!token) {
        return
      }

      this.sessionService.setTokenSessionService.execute(token)

      await this.router.navigate(['/'])
    })
  }
}
