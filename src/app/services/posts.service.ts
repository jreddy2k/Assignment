import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { forkJoin, Observable, Subject } from "rxjs";
import { environment } from 'src/environments/environment';
import { Post, PostComments } from '../models/posts';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class PostService {
  public fileSelectedSubject$ = new Subject<string>();
  
  baseUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
    rejectUnauthorized: false,
  };

  constructor(private http: HttpClient) {
    this.baseUrl = environment.serverUrl;
  }

  GetPosts(UserId:any): Observable<Post[]> {
    return this.http.get<Post[]>(
      `${this.baseUrl}posts?userId=${UserId}`
    );
  }

  GetPostByID(Id: string): Observable<Post> {
    return this.http.get<Post>(
      `${this.baseUrl}posts/${Id}`
    );
  }

  GetCommentsByPostID(Id: any): Observable<PostComments[]> {
    return this.http.get<PostComments[]>(  
      `${this.baseUrl}comments?postId=${Id}`)
  }

  GetPostComments(UserId:any): Observable<any> {
    return forkJoin([
      this.http.get<Post[]>(`${this.baseUrl}posts?userId=${UserId}`),
      this.http.get<PostComments[]>(  `${this.baseUrl}comments`)
    ]).pipe(
        map((data) => {
          let posts: Post[] = data[0];
          let postComments: PostComments[] = data[1];
          for(let i = 0; i < posts.length; i++){
            if(!posts[i].comments){
              posts[i].comments = [] ;
            }
            postComments.filter(comment => {
              if(posts[i].id == comment.postId){
                posts[i].comments.push(comment)
              }
            })
          }
          console.log(posts)
         
          return posts;
        }),
      );
  }
 
}
