import { Action, createReducer, on } from '@ngrx/store';
import { SharedState } from 'src/app/interfce';
import { setErrorMessageAction, setLoadingAction } from './shared.actions';
import { sharedState } from './shared.state';

const _sharedReducer = createReducer(
  sharedState,
  on(setLoadingAction, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  }),
  on(setErrorMessageAction, (state, action) => {
    return {
      ...state,
      errorMessage: action.errorMessage,
    };
  })
);

export function sharedReducer(state: SharedState | undefined, action: Action) {
  return _sharedReducer(state, action);
}
