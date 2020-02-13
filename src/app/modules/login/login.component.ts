import { Component, OnInit } from '@angular/core';
import { Authentication } from '../../models/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public authentication = new Authentication();

  constructor() { }

  ngOnInit() {
  }

  public authenticate(): void {
    console.log(this.authentication.email, this.authentication.password);
    console.log(this.authentication.validateEmail() ? 'Valid email' : 'Invalid email');
  }

}
