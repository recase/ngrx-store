import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/interfce';

export const AUTH_STATE_NAME = 'auth';

const getSuthSelector = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const loginUser = createSelector(getSuthSelector, (state) => {
  return state;
});

export const isAuthenticated = createSelector(getSuthSelector, (state) => {
  return state.loggedIn;
});
