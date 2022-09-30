import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public sharedValue: Number = 25; 
  public minValue: Number = 0;
  public maxValue: Number = 100;

  constructor() { }

  ngOnInit(): void {
  }

  onInputChanged(event: Event) {
    this.sharedValue = Number((event.target as HTMLInputElement).value);
  }
  

}
