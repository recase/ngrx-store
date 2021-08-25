import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogUpdateComponent } from './components/blog-update/blog-update.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogListComponent,
        pathMatch: 'full',
      },
      {
        path: 'new',
        component: BlogAddComponent,
      },
      {
        path: 'update',
        component: BlogUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
