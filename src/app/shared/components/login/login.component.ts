import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ICredentials } from '../../models/auth.interface';

/** login page component */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.checkConfirm();

    this.formGroup = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }

  login(): void {
    const user: ICredentials = this.formGroup.value;
    this.auth.login(user.email);
  }

  loginGithub(): void {
    this.auth.loginGithub();
  }
}
