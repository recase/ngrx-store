import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private apiService: ApiService) {}

  public retrieveBlogs(): any {
    this.apiService.retrieveBlogs().subscribe(
      (res) => {
        debugger;
        console.log(res);
      },
      (err) => {
        console.log('error');
        console.log(err);
      }
    );
  }
}
