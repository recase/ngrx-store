import { Posts } from 'src/app/interfce';

export const postState: Posts = {
  posts: [
    {
      id: 1,
      title: 'test title one',
      blog: 'descriptions for the post',
      excerpt: '',
      publishedOn: '2020',
      status: 'published',
    },
    {
      id: 2,
      title: 'test title two',
      blog: 'descriptions for the post',
      excerpt: '',
      publishedOn: '2020',
      status: 'published',
    },
  ],
  selectedPost: undefined,
};
