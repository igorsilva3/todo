import { CreateAccountComponent } from './account/create-account/create-account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './account/guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './account/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'account',
    children: [
      {
        path: '',
        component: CreateAccountComponent
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
