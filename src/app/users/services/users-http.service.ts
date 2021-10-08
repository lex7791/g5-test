import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user.interface';
import { catchError, map } from 'rxjs/operators';
import { IUserResponse } from '../models/user-response.interface';
import { environment } from '../../../environments/environment';

/** users http service */

@Injectable()
export class UsersHttpService {
  private readonly apiPaths = {
    userListPath: environment.baseUrl + '/search/users',
    userGetPath: environment.baseUrl + '/users',
  };

  constructor(private http: HttpClient) {}

  /** search users */
  list(text: string = '', limit: number = 20): Observable<IUser[]> {
    if (!text) {
      return;
    }

    const params = { per_page: limit.toString(), q: text };
    return this.http.get(this.apiPaths.userListPath, { params }).pipe(
      map((response: IUserResponse) => response.items),
      catchError((err) => {
        return of([]);
      })
    );
  }

  /** get user data */
  get(userName: string = ''): Observable<IUser> {
    if (!userName) {
      return;
    }

    return this.http.get(`${this.apiPaths.userGetPath}/${userName}`).pipe(
      catchError((err) => {
        return of();
      })
    ) as Observable<IUser>;
  }
}
