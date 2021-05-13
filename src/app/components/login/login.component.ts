import { Subject } from 'rxjs';
import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginUser } from 'src/app/models/users';
import { SessionManagerService } from 'src/app/services/session-manager.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading: boolean;
  Message: string;
  EmailAddress: string;
  loginUser:LoginUser = new LoginUser();

  constructor(
    private router: Router,
    private session: SessionManagerService,
    private userService: UsersService,
    public dialog: MatDialog
  ) { 
    
  }

  ngOnInit(): void {
  }

  Login() {
    this.isLoading = true;
    this.userService.Loign(this.EmailAddress).subscribe(
      (data) => {
        this.loginUser = data;
        if(this.loginUser[0].id){
          this.session.setItem("UserID", this.loginUser[0].id);
          this.session.setItem("LoginUser", this.loginUser[0]);
          this.router.navigate(['/posts/'+this.loginUser[0].id]);
        }
        else{
          this.router.navigateByUrl("login");
        }
        this.isLoading = false;
      },
      (error) => {
        this.Message = <any>error;
        this.isLoading = false;
      }
    );
  }
}
