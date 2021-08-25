import { createAction, props } from '@ngrx/store';
import { NewPost, Post } from 'src/app/interfce';

export const addPostAction = createAction(
  'addPost',
  props<{ post: NewPost }>()
);
export const updatePostAction = createAction(
  'updatePost',
  props<{ post: Post }>()
);
export const removePostAction = createAction(
  'removePost',
  props<{ id: number }>()
);
export const selectPostAction = createAction(
  'selectPost',
  props<{ id: number }>()
);
