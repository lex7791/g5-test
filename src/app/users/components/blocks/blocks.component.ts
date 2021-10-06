import {Component, OnInit} from '@angular/core';
import {IUser} from '../../models/user.interface';
import {UsersHttpService} from '../../services/users-http.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent implements OnInit {
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
