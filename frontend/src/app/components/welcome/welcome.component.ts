import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  user: User = { id: 1, name: "Tiago Mendonça" };
}
