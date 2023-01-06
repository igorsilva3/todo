import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    CreateAccountComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AccountModule { }
