export interface CounterState {
  counter: number;
  name: string;
}

export interface NewPost {
  title: string;
  blog: string;
  excerpt: string;
  publishedOn: string;
  status: string;
}

export interface Post extends NewPost {
  id: number;
}

export interface Posts {
  posts: Post[];
  selectedPost: Post | undefined;
}

export interface AppState {
  counter: CounterState;
  posts: Posts;
}

export interface AuthState {
  user: User | null;
  loggedIn: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface NewUser {
  firstName: string;
  lastName: string;
  middleName: string | undefined;
  email: string;
  password: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserWithToken {
  access: string;
  refresh: string;
}

export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
}
