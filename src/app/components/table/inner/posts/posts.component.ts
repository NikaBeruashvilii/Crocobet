import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsData: Post[] = [];

  constructor(private _api: ApiService, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPostsById()
  }

  getPostsById() {
    this.acRoute.params.subscribe(par => {
      this.getPosts(par['id'])
    })
  }

  getPosts(id: number) {
    this._api.getDataPosts(id).subscribe((res: Post[]) => {
      this.postsData = res
    })
  }

}
