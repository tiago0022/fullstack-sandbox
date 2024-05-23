import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routeNames = {
    login: 'login',
    welcome: 'welcome',
};

export const routes: Routes = [
    { path: routeNames.login, component: LoginComponent },
    { path: routeNames.welcome, component: WelcomeComponent },
    { path: '**', component: LoginComponent },
];

