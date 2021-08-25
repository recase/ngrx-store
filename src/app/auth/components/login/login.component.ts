import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState, UserLogin } from 'src/app/interfce';
import { loginAction } from '../../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public showError: boolean = false;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  public login(): void {
    if (this.loginForm.valid) {
      const userLoginData: UserLogin = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.store.dispatch(loginAction(userLoginData));
    }
  }

  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
