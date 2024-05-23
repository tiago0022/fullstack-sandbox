import { Component } from '@angular/core';

@Component({
  selector: 'app-pg-init',
  templateUrl: './pg-init.component.html',
  styleUrl: './pg-init.component.scss'
})
export class PgInitComponent {
  title = 'Fullstack sandbox';
  version = 'Displaying the name of the user that is on the DB';
}
