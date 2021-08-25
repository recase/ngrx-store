import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { BlogUpdateComponent } from './components/blog-update/blog-update.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/post.reducer';
import { POST_STATE_NAME } from './state/post.select';

@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogAddComponent,
    BlogUpdateComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POST_STATE_NAME, postReducer),
  ],
})
export class BlogModule {}
