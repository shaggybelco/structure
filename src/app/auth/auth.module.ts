import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { NavComponent } from './nav/nav.component';
import { PrivateComponent } from '../private/private/private.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {path: 'auth/login', component: LoginComponent}
    ],
  },{
    path: 'dash', component: PrivateComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    NavComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
