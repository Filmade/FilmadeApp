import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponseDto } from 'src/app/interfaces/response/authResponseDto.model';
import { UserForAuthenticationDto } from 'src/app/interfaces/user/userForAuthenticationDto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private returnUrl: string;
  
  loginForm: FormGroup;
  errorMessage: string = '';
  showError: boolean = false;

  
  constructor (private authService: AuthenticationService, private router: Router, private route: ActivatedRoute)  {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched
  }
  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName)?.hasError(errorName)
  }
  
  loginUser = (loginFormValue : any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userForAuth: UserForAuthenticationDto = {
      email: login.username,
      password: login.password
    }
    this.authService.loginUser('api/v1/accounts/login', userForAuth)
    .subscribe({
      next: (res:AuthResponseDto) => {
       localStorage.setItem("token", res.token);
       this.router.navigate([this.returnUrl]);
    },
    error: (err: HttpErrorResponse) => {
      this.errorMessage = err.message;
      this.showError = true;
    }})
  }
}