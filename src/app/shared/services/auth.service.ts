import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

/** authentication service */

const EMAIL_LOGIN_KEY = 'emailLogin';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
    private auth: AngularFireAuth,
    private router: Router,
    private storage: StorageService
  ) {}

  /** get authorized user data */
  get user(): Observable<firebase.User | null> {
    return this.auth.user;
  }

  /** login with email */
  login(email: string): Observable<boolean> {
    const sendLink = this.auth
      .sendSignInLinkToEmail(email, { url: window.location.href, handleCodeInApp: true })
      .then(() => {
        this.storage.set(EMAIL_LOGIN_KEY, email);
        return true;
      });

    return from(sendLink);
  }

  /** check email confirm link */
  checkConfirm(): void {
    const emailLink = this.router.url;

    this.auth.isSignInWithEmailLink(emailLink).then(() => {
      const email = this.storage.get(EMAIL_LOGIN_KEY);

      if (!email) {
        return;
      }

      this.auth
        .signInWithEmailLink(email, emailLink)
        .then(() => {
          this.storage.remove(EMAIL_LOGIN_KEY);
          this.goMain();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  /** login with GitHub */
  loginGithub(): void {
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(() => {
      this.goMain();
    });
  }

  /** redirect to main page */
  goMain(): void {
    this.router.navigate(['/']);
  }

  /** logout user */
  logout(): void {
    this.auth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }
}
