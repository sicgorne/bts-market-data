import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
 * 1. Integrate Bootstrap 4 framework to your project.
 * 2. Create a login form (write HTML in app.component.html and CSS to app.component.css)
 * 3. Write a public function named authenticate and bind a click event from l-ogin submit button to it.
 * 4. Bind username and password from login form to new public properties (username and password). (hint: use  [(ngModel)] directive)
 * 5. Print username and password via console.log() inside your brand new authenticate function.
 */
  public username: string;
  public password: string;

  public displayedUsername: string;

  authenticate(username: string) {
    this.displayedUsername = username;
  }
}
