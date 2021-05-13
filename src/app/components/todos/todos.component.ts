import { TodosService } from "./../../services/todos.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SessionManagerService } from "src/app/services/session-manager.service";
import { MatDialog } from "@angular/material/dialog";
import { Todo } from "src/app/models/todos";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
})
export class TodosComponent implements OnInit {
  isLoading: boolean;
  Message: string;
  UserID:number;
  ShowCompleted: boolean = false;
  todos: Todo[] = [];
  constructor(
    private route: ActivatedRoute,
    private session: SessionManagerService,
    private todoService: TodosService,
    public dialog: MatDialog
  ) {
    //this.UserID = this.session.getItem("UserID");
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.GetTodos(id);
  }

  GetTodos(UserID: any) {
    this.isLoading = true;
    this.todoService.GetetTodos(UserID).subscribe(
      (data) => {
        this.todos = data;

        this.isLoading = false;
      },
      (error) => {
        this.Message = <any>error;
        this.isLoading = false;
      }
    );
  }
}
