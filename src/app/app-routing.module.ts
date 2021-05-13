import { LoginComponent } from './components/login/login.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosComponent } from './components/todos/todos.component';

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [  
  // 
  { path: "", redirectTo: "login", pathMatch: "full" },

  { path: "login", component: LoginComponent }, 
  { path: "albums/:id", component: AlbumsComponent }, 
  { path: "posts/:id", component: PostsComponent }, 
  { path: "todos/:id", component: TodosComponent }, 
  { path: "error", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
