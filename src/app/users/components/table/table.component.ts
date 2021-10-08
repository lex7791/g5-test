import { Component } from '@angular/core';
import { UsersHttpService } from '../../services/users-http.service';
import { IUser } from '../../models/user.interface';

/** users table page */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  users: IUser[] = [];

  constructor(private usersHttp: UsersHttpService) {}

  /** get user list */
  getUsers(search: string): void {
    this.usersHttp.list(search).subscribe((users) => {
      this.users = users;
    });
  }
}
