import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, pipe} from 'rxjs';
import {IUser} from '../models/user.interface';
import {catchError, map, tap} from 'rxjs/operators';
import {IUserResponse} from '../models/user-response.interface';

@Injectable()
export class UsersHttpService {
  api = 'https://api.github.com';
  userListPath = this.api + '/search/users';
  userGetPath = this.api + '/users';

  constructor(private http: HttpClient) {
  }

  list(text: string = '', limit: number = 20): Observable<IUser[]> {
    if (!text) {
      return;
    }
    
    const params = {per_page: limit.toString(), q: text};
    return this.http.get(this.userListPath, {params})
      .pipe(
        map((response: IUserResponse) => response.items),
        catchError(err => {
          return of([]);
        })
      );
  }

  get(userName: string = ''): Observable<IUser> {
    if (!userName) {
      return;
    }

    return this.http.get(`${this.userGetPath}/${userName}`)
      .pipe(
        tap(user => {
          console.log(user);
        }),
        catchError(err => {
          return of();
        })
      ) as Observable<IUser>;
  }
}
