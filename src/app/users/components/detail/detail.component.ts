import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersHttpService } from '../../services/users-http.service';
import { IUser } from '../../models/user.interface';
import { Observable } from 'rxjs';

/** detail user page */

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  user: IUser = null;

  constructor(private route: ActivatedRoute, private router: Router, private usersHttp: UsersHttpService) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          return this.getUsers(params.get('userName'));
        })
      )
      .subscribe((user) => {
        this.user = user;
      });
  }

  getUsers(userName: string): Observable<IUser> {
    return this.usersHttp.get(userName);
  }
}
