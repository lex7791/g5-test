import {Component, OnInit} from '@angular/core';
import {UsersHttpService} from '../../services/users-http.service';
import {IUser} from '../../models/user.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  users: IUser[] = [];

  constructor(private usersHttp: UsersHttpService) {
  }

  ngOnInit(): void {
  }

  /** get user list */
  getUsers(search): void {
    this.usersHttp.list(search)
      .subscribe(users => {
        this.users = users;
      });
  }
}
