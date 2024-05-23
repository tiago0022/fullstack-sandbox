import { Component, OnInit } from '@angular/core';
import { routeNames } from '../../app.routes';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  get backRoute(): string[] { return ['/' + routeNames.login]; }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.userService.getUser('root').subscribe((user: User) => {
      this.user = user;
    });
  }

}
