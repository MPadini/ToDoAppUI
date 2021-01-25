import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { MessagesComponent } from 'src/app/shared/messages/messages.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { UserTaskListComponent } from '../user-task-list/user-task-list.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any = [];
  
  constructor(public dialog: MatDialog, private userService:UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.GetAll().subscribe((data) => {
        this.users = data;
    });
  }

  updateUser(user: any){
      const dialogRef = this.dialog.open(UserEditComponent, {
        height: '220px',
        width: '450px',
        data: { model: user}
      });
      dialogRef.afterClosed().subscribe(() => {
        this.loadUsers();
      });
  }

  viewTasks(user: any){
   const dialogRef = this.dialog.open(UserTaskListComponent, {
      width: '450px',
      data: { model: user}
    });
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  
  deleteUser(user: any){
    const dialogRef = this.dialog.open(MessagesComponent, {
      width: '450px',
      data: { title: 'Delete user?' }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==='Yes'){
         this.userService.delete(user.id).subscribe(() => {
          this.loadUsers();
        });
      }
    });
  }
}
