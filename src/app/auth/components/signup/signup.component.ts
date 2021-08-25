import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState, NewUser } from 'src/app/interfce';
import { signup } from '../../state/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;
  public passwordMatch: boolean = true;

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: [null, [Validators.required]],
      middlename: [null],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordConfirm: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  public signup(): void {
    this.passwordMatch = true;

    if (this.signupForm.valid) {
      if (this.checkPassword()) {
        const newUser: NewUser = {
          firstName: this.signupForm.value.firstName,
          middleName: this.signupForm.value.middleName,
          lastName: this.signupForm.value.lastName,
          email: this.signupForm.value.email,
          password: this.signupForm.value.password,
        };
        this.store.dispatch(signup(newUser));
      } else {
        this.passwordMatch = false;
      }
    }
  }

  private checkPassword(): boolean {
    return (
      this.signupForm.value.password === this.signupForm.value.passwordConfirm
    );
  }

  get form(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
}
