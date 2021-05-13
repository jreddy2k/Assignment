import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { SessionManagerService } from "./services/session-manager.service";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

export class AppComponent {
  title = "TorinAssignmentUI";
  private loggedIn: boolean;
  private subscription: Subscription;
  public isIframe: boolean;

  isLoading:boolean = false;
  constructor(
    private router: Router,
    private session: SessionManagerService,
  ) {
    this.isIframe = window !== window.parent && !window.opener;
  }

  login() {    
   
    if (1) {
      console.log(true);
      
    } else {
      this.loggedIn = false;
      //this.authService.loginRedirect();
    }
  }

  InitializeApp() {
    
  }


  logout() {
    //this.authService.logout();
  }

  ngOnInit() {
    this.login();
  }

  ngOnDestroy() {
    
  }
}
