import { createAction, props } from '@ngrx/store';

export const setLoadingAction = createAction(
  '[shared] loading',
  props<{ status: boolean }>()
);
export const setErrorMessageAction = createAction(
  '[shared] errorMessage',
  props<{ errorMessage: string }>()
);
