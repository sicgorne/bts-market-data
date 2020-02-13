import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user = new User();

  constructor() { }

  ngOnInit() {
  }

  public register(): void {
    console.log(this.user.firstName);
    console.log(this.user.lastName);
    console.log(this.user.email);
    console.log(this.user.email2);
    console.log(this.user.password);
    console.log(this.user.password2);
  }

}
