import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  public accountCreateForm = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  public errorMessage = ''

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit() {
    console.log(this.accountCreateForm);
  }

}
