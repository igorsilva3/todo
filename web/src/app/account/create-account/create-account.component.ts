import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { SignupService } from './../services/signup.service'

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  public accountCreateForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  public errorMessage = ''

  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit(): void {}

  public onSubmit() {
    try {
      this.signupService.execute(this.accountCreateForm).subscribe(() => {
        this.router.navigate(['/account/login'])
      })
    } catch (error: any) {
      this.errorMessage = error.message
    }
  }
}
