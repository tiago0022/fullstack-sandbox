import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { localStorageConfig } from '../../app.config';
import { routeNames } from '../../app.routes';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form: FormGroup;

  loading = false;
  httpError = false;

  constructor(private userService: UserService, formBuilder: FormBuilder, private router: Router) {
    this.form = formBuilder.group({
      email: [null, Validators.required]
    });
  }

  get welcomeRoute(): string[] { return ['/' + routeNames.welcome]; }

  get email(): FormControl { return this.form.controls['email'] as FormControl; }

  get enableLogin(): boolean { return this.form.valid && !this.loading; }

  login() { // Not exactly a login, basically a placeholder function

    this.loading = true;
    this.httpError = false;
    this.form.disable();

    this.userService.getUser(this.email.value).subscribe(
      {
        next: (user: User) => {
          localStorage.setItem(localStorageConfig.user.name, user?.name)
          this.router.navigate(this.welcomeRoute);
        },
        error: (error) => {
          console.log(error);
          this.loading = false;
          this.httpError = true;
          this.form.enable();
        }
      });
  }

}

