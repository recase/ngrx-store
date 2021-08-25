import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Posts } from 'src/app/interfce';

export const POST_STATE_NAME = 'posts';

const getPostSelectorState = createFeatureSelector<Posts>(POST_STATE_NAME);

export const getPost = createSelector(getPostSelectorState, (state) => {
  return state.posts;
});
export const getSelectedPost = createSelector(getPostSelectorState, (state) => {
  return state.selectedPost;
});
