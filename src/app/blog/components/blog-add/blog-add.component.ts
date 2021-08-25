import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, NewPost, Post } from 'src/app/interfce';
import { addPostAction } from '../../state/post.actions';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.scss'],
})
export class BlogAddComponent implements OnInit {
  public blogForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    blog: ['', [Validators.required]],
    excerpt: [''],
    publishedOn: [''],
    status: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  public saveBlog(): void {
    if (this.blogForm.valid) {
      const newPost: NewPost = {
        title: this.blogForm.value.title,
        blog: this.blogForm.value.blog,
        excerpt: this.blogForm.value.excerpt,
        publishedOn: this.blogForm.value.publishedOn,
        status: this.blogForm.value.status,
      };

      this.store.dispatch(addPostAction({ post: newPost }));
      this.back();
    }
  }
  public back(): void {
    this.router.navigate(['blog']);
  }
}
