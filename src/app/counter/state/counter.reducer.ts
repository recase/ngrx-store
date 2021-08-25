import { Action, createReducer, on } from '@ngrx/store';
import {
  changeName,
  customIncrement,
  decrementAction,
  incrementAction,
  resetAction,
} from './counter.actions';
import { initialState } from './counter.state';

const _counterReducer = createReducer(
  initialState,
  on(incrementAction, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrementAction, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(resetAction, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeName, (state) => {
    return {
      ...state,
      name: 'changed name',
    };
  })
);

export function counterReducer(
  state: { counter: number; name: string } | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
