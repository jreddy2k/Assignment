import { UsersService } from "./../../services/users.service";
import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { SessionManagerService } from "src/app/services/session-manager.service";
import { LoginUser } from "src/app/models/users";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  loginUser: LoginUser = new LoginUser();
  albums: boolean = false;
  posts: boolean = false;
  todos: boolean = false;
  UserID: number;
  Email: string;
  user: any;

  constructor(
    private location: Location,
    public router: Router,
    private session: SessionManagerService,
    private usersService: UsersService
  ) {
    this.user = this.session.getItem("LoginUser");
  }

  ngOnInit() {
    this.usersService.loginUserSub$.subscribe((res) => {
      this.loginUser = res;
      this.UserID = this.loginUser.id;
    });
    if (!this.loginUser.id) {
      
      this.loginUser = this.user;
      this.UserID = this.loginUser.id;
    }

    if (this.location.path() === "/todos") {
      this.todos = true;
    } else this.todos = false;
    if (this.location.path() === "/albums") {
      this.albums = true;
    } else this.albums = false;
    if (this.location.path() === "/posts") {
      this.posts = true;
    } else this.posts = false;
  }

  logoutApplication = () => {
    this.loginUser = new LoginUser();
    this.UserID = null;
    this.session.destroySession();
    this.router.navigateByUrl("login");
  };
}
