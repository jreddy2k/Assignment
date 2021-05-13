import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todos';

@Injectable({
  providedIn: "root",
})
export class TodosService {
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

  GetetTodos(UserID:any): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      `${this.baseUrl}todos?userId=${UserID}`
    );
  }
 
}
