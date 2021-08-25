import { createAction, props } from '@ngrx/store';

export const incrementAction = createAction('[counter component] increment');
export const decrementAction = createAction('[counter component] decrement');
export const resetAction = createAction('[counter componet] reset');

export const customIncrement = createAction(
  'customIncrement',
  props<{ count: number }>()
);

export const changeName = createAction('changeName');
