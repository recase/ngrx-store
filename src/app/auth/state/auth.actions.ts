import { createAction, props } from '@ngrx/store';
import { NewUser, UserLogin } from 'src/app/interfce';

export const loginAction = createAction(
  '[auth page] login',
  props<UserLogin>()
);
export const loginSuccess = createAction('[auth page] loginSuccess');
export const loginFail = createAction('[auth page] loginFail');
export const logout = createAction('[auth page] logout');
export const logoutSuccess = createAction('[auth page] logoutSuccess');
export const logoutFail = createAction('[auth page] logoutFail');
export const signup = createAction('[auth] sigup', props<NewUser>());
export const signupSuccess = createAction('[auth] signupSuccess');
export const signupFail = createAction('[auth] signupFail');
