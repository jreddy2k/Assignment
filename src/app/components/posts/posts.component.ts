import { UsersService } from './../../services/users.service';
import { Post, PostComments } from "./../../models/posts";
import { PostService } from "./../../services/posts.service";
import { Component, OnInit } from "@angular/core";
import { SessionManagerService } from "src/app/services/session-manager.service";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from '@angular/router';
import { LoginUser } from 'src/app/models/users';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  isLoading: boolean;
  Message: string;
  posts: Post[] = [];
  searchText:string = "";
  postComments:PostComments[] =[];
  loginUser:LoginUser = new LoginUser();
  
  constructor(
    private route: ActivatedRoute,
    private session: SessionManagerService,
    private postService: PostService,
    private usersService: UsersService,
  ) {
    this.usersService.loginUserSub$.subscribe((res)=>
    {
      this.loginUser = res;
    })
  }

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.GetPostComments(id);   
  }

  GetPostComments(UserID: any) {
    this.isLoading = true;
    this.postService.GetPostComments(UserID).subscribe(
      (posts) => {
        this.posts = posts;
        
        this.isLoading = false;
      },
      (error) => {
        this.Message = <any>error;
        this.isLoading = false;
      }
    )
  }

  GetCommentsByPostID(PostID){
    this.isLoading = true;
    this.postService.GetCommentsByPostID(PostID).subscribe(
      (posts) => {
        this.postComments = posts;
       
        this.isLoading = false;
      },
      (error) => {
        this.Message = <any>error;
        this.isLoading = false;
      }
    );
  }
}
