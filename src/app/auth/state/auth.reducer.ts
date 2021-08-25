import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/interfce';
import { loginSuccess, logoutSuccess } from './auth.actions';
import { authState } from './auth.state';

const _authReducer = createReducer(
  authState,
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      loggedIn: true,
    };
  }),
  on(logoutSuccess, (state) => {
    return {
      ...state,
      loggedIn: false,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
