import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState, Post } from 'src/app/interfce';
import { removePostAction, selectPostAction } from '../../state/post.actions';
import { getPost } from '../../state/post.select';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit, OnDestroy {
  public posts: Post[] = [];
  private postSubscription: Subscription | undefined;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.postSubscription = this.store.select(getPost).subscribe((posts) => {
      this.posts = posts;
    });
  }

  public newBlog(): void {
    this.router.navigate(['blog', 'new']);
  }

  public update(id: number) {
    this.store.dispatch(selectPostAction({ id: id }));
    this.router.navigate(['blog', 'update']);
  }

  public deletePost(id: number) {
    this.store.dispatch(removePostAction({ id: id }));
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
