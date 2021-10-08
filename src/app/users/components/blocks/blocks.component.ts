import { Component } from '@angular/core';
import { IUser } from '../../models/user.interface';
import { UsersHttpService } from '../../services/users-http.service';

/** users blocks page */

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent {
  users: IUser[] = [];

  constructor(private usersHttp: UsersHttpService) {}

  /** get user list */
  getUsers(search: string): void {
    this.usersHttp.list(search).subscribe((users) => {
      this.users = users;
    });
  }
}
