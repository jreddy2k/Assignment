import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { DatePipe } from "@angular/common";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { MaterialModule } from "./Helpers/material.module";
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { PipesModule } from "src/app/pipes/pipes.module";

import { NgxMatFileInputModule } from "@angular-material-components/file-input";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { ModalModule } from "ngx-bootstrap/modal";
import { DateAdapter, MAT_DATE_FORMATS } from "@angular/material/core";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosComponent } from './components/todos/todos.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { DisplayCheckedItems } from './pipes/filter.pipe';
import { FilterPipe } from './pipes/Searchfilter.pipe';


var redirectUri = "";
//define redirect uri based on environemnt
if (window.location.href.includes("localhost")) {
  redirectUri = "http://localhost:4200/";
}

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NavbarComponent,  
    ErrorComponent,
    AlbumsComponent,
    PostsComponent,
    TodosComponent,
    LoginComponent,
    //ShowFormsdialog,
    DisplayCheckedItems,
    FilterPipe
    
  ],
  //entryComponents: [ShowFormsdialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MaterialModule,
    PipesModule,
    NgxMatSelectSearchModule,
    // NgxMatFileInputModule,
    MaterialFileInputModule,
    ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
