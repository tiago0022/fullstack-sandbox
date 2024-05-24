import { Component, OnInit } from '@angular/core';
import { localStorageConfig } from '../../app.config';
import { routeNames } from '../../app.routes';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {

  userName: string | null;

  constructor(private userService: UserService) { }

  get backRoute(): string[] { return ['/' + routeNames.login]; }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.userName = localStorage.getItem(localStorageConfig.user.name);
  }

}
