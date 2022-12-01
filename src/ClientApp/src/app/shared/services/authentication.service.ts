import { UserForRegistrationDto } from 'src/app/interfaces/user/userForRegistrationDto.model'; 
import { RegistrationResponseDto } from 'src/app/interfaces/response/registrationResponseDto.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { UserForAuthenticationDto } from 'src/app/interfaces/user/userForAuthenticationDto.model';
import { AuthResponseDto } from 'src/app/interfaces/response/authResponseDto.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto> (this.baseUrl + route, body);
  }

  public loginUser = (route: string, body: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(this.baseUrl + route, body);
  }

  public isLoggedIn = () =>{  console.log(localStorage.getItem("token") == null); return localStorage.getItem("token") == null; }
  
}