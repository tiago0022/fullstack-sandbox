import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PgInitModule } from './components/pg-init/pg-init.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PgInitModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
