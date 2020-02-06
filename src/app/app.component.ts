import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   * 1. Integrate Bootstrap 4 framework to your project.
   * 2. Create a login form (write HTML in app.component.html and CSS to app.component.css)
   * 3. Write a public function named authenticate and bind a click event from l-ogin submit button to it.
   * 4. Bind username and password from login form to new public properties (username and password). (hint: use  [(ngModel)] directive)
   * 5. Print username and password via console.log() inside your brand new authenticate function.
   */
  public username: string;
  public password: string;
  public session: boolean = false;
  public displayedUsername: string;
  public displayedPassword: string;
  public userData = {username: '', password: ''};

  constructor() {
  }

  ngOnInit(): void {
    this.checkUser();
  }

  authenticate(username: string, password: string) {
    this.displayedUsername = username;
    this.displayedPassword = password;
    localStorage.setItem(this.username, this.password);

    this.checkUser();
  }


  checkUser() {
    this.userData.username = localStorage.getItem(this.username);
    if (this.userData.username !== '') {
      console.log(this.userData.username);
    }
  }
}
