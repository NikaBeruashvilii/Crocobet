import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../components/table/user.model';
import { Post } from '../components/table/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}posts`)
  }

  getDataById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}posts/${id}`)
  }

  getDataPosts(id: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}comments?postId=${id}`)
  }
}
