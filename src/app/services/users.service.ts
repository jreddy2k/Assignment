import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from 'src/environments/environment';
import { LoginUser } from '../models/users';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class UsersService {
  public fileSelectedSubject$ = new Subject<string>();

  private loginUserSub = new Subject<LoginUser>();
  loginUserSub$ = this.loginUserSub.asObservable();

  
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

  Loign(Email:any): Observable<LoginUser> {
    return this.http.get<LoginUser>(
      `${this.baseUrl}users?email=${Email}`
    ).pipe(tap((response)=>
    {
      this.loginUserSub.next(response[0]);
    }));
  }
  
}
