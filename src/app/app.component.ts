import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from './auth/state/auth.actions';
import { isAuthenticated } from './auth/state/auth.selector';

import { AuthState } from './interfce';
import {
  getErrorMessage,
  getLoadingState,
} from './shared/state/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog-ui';
  public loadingStatus$!: Observable<boolean>;
  public errorMessage$!: Observable<string>;
  public isAuthenticated$!: Observable<boolean>;
  constructor(private store: Store<AuthState>) {}

  ngOnInit(): void {
    this.loadingStatus$ = this.store.select(getLoadingState);
    this.errorMessage$ = this.store.select(getErrorMessage);
    this.isAuthenticated$ = this.store.select(isAuthenticated);
  }

  public logout(): void {
    this.store.dispatch(logout());
  }
}
