import { Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';

export const routeNames = {
};

export const routes: Routes = [
    { path: '**', component: MainContentComponent },
];

