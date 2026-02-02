import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private postsSubject = new BehaviorSubject<Post[]>([]);
  posts$ = this.postsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  private loadPosts(): void {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: data => this.postsSubject.next(data),
        error: err => console.error('Failed to load posts', err)
      });
  }
}
