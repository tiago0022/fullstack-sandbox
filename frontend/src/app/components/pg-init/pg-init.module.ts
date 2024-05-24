import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MainContentComponent } from '../main-content/main-content.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { PgInitComponent } from './pg-init.component';

@NgModule({
  declarations: [
    LoginComponent,
    MainContentComponent,
    PgInitComponent,
    WelcomeComponent,
  ],
  exports: [PgInitComponent],
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    ObserversModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ]
})
export class PgInitModule { }
