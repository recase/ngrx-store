import { Action, createReducer, on } from '@ngrx/store';
import { Post, Posts } from 'src/app/interfce';
import {
  addPostAction,
  removePostAction,
  selectPostAction,
  updatePostAction,
} from './post.actions';
import { postState } from './post.state';

const _postReducer = createReducer(
  postState,
  on(addPostAction, (state, action) => {
    const max_id = Math.max(...state.posts.map((p) => p.id));
    const post: Post = { ...action.post, id: max_id ? max_id : 0 + 1 };
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(removePostAction, (state, action) => {
    return {
      ...state,
      posts: state.posts.filter((post) => post.id !== action.id),
    };
  }),
  on(updatePostAction, (state, action) => {
    const updatedPosts = state.posts.map((post) =>
      post.id === action.post.id ? action.post : post
    );
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(selectPostAction, (state, action) => {
    return {
      ...state,
      selectedPost: state.posts.find((post) => post.id === action.id),
    };
  })
);

export function postReducer(state: Posts | undefined, action: Action) {
  return _postReducer(state, action);
}
