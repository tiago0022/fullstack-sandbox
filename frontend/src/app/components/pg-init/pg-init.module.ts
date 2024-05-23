import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PgInitComponent } from './pg-init.component';

@NgModule({
  declarations: [
    PgInitComponent,
    MainContentComponent,
    LoginComponent,
    WelcomeComponent,
  ],
  exports: [PgInitComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ]
})
export class PgInitModule { }
