import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * 1. Implement a navigation bar in app.component.html (Above router outlet!)
   * 2. Implement a footer for your application. (into app component.html UNDER THE router outlet!)
   * 3. Implement links that are going to redirect you from login to register and vice-versa. (look at login example)
   * 4. Implement a user model that is going to have (email, password, firstName, lastName)
   * 5. Implement a registration module (similar as login). (write angular ngModules to google and search topic "lazy loading for command")
   * 6. After you create a register form, write a function (method) "register" that is going to write data to console (similar to what login does now)
   *    You should bind registration data to user model.
   * 7. Use node package manager (npm) to install graph.js library to your project (we're going to use that to render graphs)
   */
}
