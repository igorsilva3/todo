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

  public errorMessage: string = ''

  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionService: SessionService,
  ) {}

  ngOnInit(): void {
    if (this.sessionService.getTokenSessionService.execute()) {
      this.router.navigate(['/'])
    }
  }

  login() {
    try {
      this.authService.execute(this.loginForm).subscribe(({ token }) => {
        if (!token) {
          return
        }

        this.sessionService.setTokenSessionService.execute(token)

        window.location.reload() // Gambiarra para redirecionar o usuário para a página inicial
      })
    } catch (error: any) {
      this.errorMessage = error.message
    }
  }
}
