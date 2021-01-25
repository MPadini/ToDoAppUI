import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserTaskListComponent } from './pages/user-task-list/user-task-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MaterialModule } from './material-module';
import { HttpClientModule} from "@angular/common/http";
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { MessagesComponent } from './shared/messages/messages.component';
import { TaskComponent } from './pages/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskEditComponent } from './pages/task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserTaskListComponent,
    NavbarComponent,
    UserEditComponent,
    MessagesComponent,
    TaskComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    UserEditComponent,
    UserTaskListComponent,
    MessagesComponent,
    TaskEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
