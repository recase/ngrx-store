import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import {
  AppState,
  NewUser,
  User,
  UserLogin,
  UserWithToken,
} from 'src/app/interfce';
import { ApiService } from 'src/app/services/api.service';
import {
  setErrorMessageAction,
  setLoadingAction,
} from '../../shared/state/shared.actions';
import {
  loginAction,
  loginFail,
  loginSuccess,
  logout,
  logoutFail,
  logoutSuccess,
  signup,
  signupFail,
  signupSuccess,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private api: ApiService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      mergeMap((action) => {
        const loginData: UserLogin = {
          email: action.email,
          password: action.password,
        };
        this.store.dispatch(setLoadingAction({ status: true }));
        return this.api.login(loginData).pipe(
          map((data: UserWithToken) => {
            // const user: User = {
            //   id: data.id,
            //   firstName: data.firstName,
            //   lastName: data.lastName,
            //   email: data.email,
            // };
            localStorage.setItem('access-token', data.access);
            localStorage.setItem('refresh-token', data.refresh);
            this.store.dispatch(setLoadingAction({ status: false }));
            return loginSuccess();
          }),
          catchError((error) => {
            this.store.dispatch(
              setErrorMessageAction({ errorMessage: error.error.detail })
            );
            setTimeout(() => {
              this.store.dispatch(setErrorMessageAction({ errorMessage: '' }));
            }, 2000);
            this.store.dispatch(setLoadingAction({ status: false }));
            return of(loginFail());
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(logout),
      mergeMap(() => {
        const refresh_token = localStorage.getItem('refresh-token');
        this.store.dispatch(setLoadingAction({ status: true }));
        return this.api.logout({ refresh_token }).pipe(
          map(() => {
            localStorage.removeItem('access-token');
            localStorage.removeItem('refresh-token');
            this.store.dispatch(setLoadingAction({ status: false }));
            return logoutSuccess();
          }),
          catchError((error) => {
            this.store.dispatch(
              setErrorMessageAction({ errorMessage: error.error.detail })
            );
            setTimeout(() => {
              this.store.dispatch(setErrorMessageAction({ errorMessage: '' }));
            }, 2000);
            this.store.dispatch(setLoadingAction({ status: false }));
            return of(logoutFail());
          })
        );
      })
    );
  });

  loginPageRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[logoutSuccess, signupSuccess]),
        tap(() => {
          this.router.navigate(['auth', 'login']);
        })
      );
    },
    { dispatch: false }
  );

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signup),
      mergeMap((action) => {
        const newUser: NewUser = {
          firstName: action.firstName,
          middleName: action.middleName,
          lastName: action.lastName,
          email: action.email,
          password: action.password,
        };
        this.store.dispatch(setErrorMessageAction({ errorMessage: '' }));
        this.store.dispatch(setLoadingAction({ status: true }));
        return this.api.signup(newUser).pipe(
          map(() => {
            this.store.dispatch(setLoadingAction({ status: false }));
            return signupSuccess();
          }),
          catchError((err) => {
            this.store.dispatch(setLoadingAction({ status: false }));
            return of(
              setErrorMessageAction({
                errorMessage: err.error[Object.keys(err.error)[0]],
              })
            );
          })
        );
      })
    );
  });

  // signupSuccess$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(signupSuccess),
  //       tap(() => {
  //         this.router.navigate(['auth', 'login']);
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  // signupFail$ = createEffect(() => {
  //   return this.actions$.pipe(ofType(signupFail), tap(() => {
  //     this.router.navigate(['auth', 'signup'])
  //   }))
  // }, {dispatch: false})
}
