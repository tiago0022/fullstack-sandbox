import { Component } from '@angular/core';
import { routeNames } from '../../app.routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  get welcomeRoute(): string[] { return ['/' + routeNames.welcome]; }
}
