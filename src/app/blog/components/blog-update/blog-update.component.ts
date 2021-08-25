import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, Post } from 'src/app/interfce';
import { updatePostAction } from '../../state/post.actions';
import { getSelectedPost } from '../../state/post.select';

@Component({
  selector: 'app-blog-update',
  templateUrl: './blog-update.component.html',
  styleUrls: ['./blog-update.component.scss'],
})
export class BlogUpdateComponent implements OnInit {
  public blogForm!: FormGroup;
  private selectedPost!: Post;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.store.select(getSelectedPost).subscribe((post) => {
      if (post) {
        this.selectedPost = post;
        this.initializeForm();
      }
    });
  }

  private initializeForm(): void {
    this.blogForm = this.fb.group({
      title: [
        this.selectedPost.title,
        [Validators.required, Validators.minLength(5)],
      ],
      blog: [this.selectedPost.blog, [Validators.required]],
      excerpt: [this.selectedPost.excerpt],
      publishedOn: [this.selectedPost.publishedOn],
      status: [this.selectedPost.status, [Validators.required]],
    });
  }

  public updateBlog(): void {
    if (this.blogForm.valid) {
      const updatedPost: Post = {
        id: this.selectedPost.id,
        title: this.blogForm.value.title,
        blog: this.blogForm.value.blog,
        excerpt: this.blogForm.value.excerpt,
        publishedOn: this.blogForm.value.publishedOn,
        status: this.blogForm.value.status,
      };
      this.store.dispatch(updatePostAction({ post: updatedPost }));
      this.back();
    }
  }

  public back(): void {
    this.router.navigate(['blog']);
  }
}
