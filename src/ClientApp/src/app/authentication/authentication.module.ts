import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [RegisterUserComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterUserComponent },
      { path: 'login', component: LoginComponent }
    ])
  ]
})
export class AuthenticationModule { }