import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from 'src/app/interfce';

export const SHARED_STATE_NAME = 'shared';
const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoadingState = createSelector(getSharedState, (state) => {
  return state.showLoading;
});

export const getErrorMessage = createSelector(getSharedState, (state) => {
  return state.errorMessage;
});
