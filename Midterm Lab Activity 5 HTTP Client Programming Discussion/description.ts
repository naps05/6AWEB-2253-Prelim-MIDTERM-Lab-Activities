import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface UserDescription {
  userId: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class Description {
  constructor(private http: HttpClient) {}

  getDescriptions(): Observable<UserDescription[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        map(posts =>
          posts.map(post => ({
            userId: post.userId,
            description: post.title // map title to description
          }))
        )
      );
  }
}
