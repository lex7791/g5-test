import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

/** header component */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public auth: AuthService) {}

  logout(event: Event): void {
    event.preventDefault();
    this.auth.logout();
  }
}
