import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { ICredentials } from '../models/auth.interface';

/** authentication service */

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private auth: AngularFireAuth, private router: Router) {}

  get user(): Observable<firebase.User | null> {
    return this.auth.user;
  }

  login(user: ICredentials): void {
    this.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      this.goMain();
    });
  }

  loginGithub(): void {
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(() => {
      this.goMain();
    });
  }

  goMain(): void {
    this.router.navigate(['/']);
  }

  logout(): void {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
