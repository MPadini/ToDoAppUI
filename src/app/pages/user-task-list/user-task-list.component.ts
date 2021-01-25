import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserTaskService } from 'src/app/services/user-task.service';
import { TaskEditComponent } from '../task-edit/task-edit.component';

@Component({
  selector: 'app-user-task-list',
  templateUrl: './user-task-list.component.html',
  styleUrls: ['./user-task-list.component.css']
})
export class UserTaskListComponent implements OnInit {
  userName= '';
  hasFiles= false;
  addNewTaskVisible = false;
  tasks: any = [];
  taskData: any = {id:0,description:'',userId:0,state:false};
  
  constructor(
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<UserTaskListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userTaskService: UserTaskService) { 
      this.userName = data.model.name;
    }

  ngOnInit() {
    this.loadTasks();
  }

  close(){
    this.dialogRef.close();
  }


  loadTasks(){
     this.userTaskService.GetAll(this.data.model.id).subscribe((data) => {
      this.tasks = data;
      if(data.length === 0){
          this.hasFiles= false;
        } else {
          this.hasFiles= true;
        }
      });
  }

  sortTask(prop: string) {
    const sorted = this.tasks.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
    // asc/desc
    if (prop.charAt(0) === '-') { sorted.reverse(); }
    return sorted;
  }

  addNewTask(){
    this.addNewTaskVisible = true;
  }

  onCloseTask(){
    this.addNewTaskVisible = false;
  }

  editTask(task: any){
    const dialogRef = this.dialog.open(TaskEditComponent, {
      height: '220px',
      width: '450px',
      data: { model: task}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(task: any){
    this.userTaskService.delete(this.data.model.id, task.id).subscribe((data) => {
      this.loadTasks();
    });
  }

  onCreateTask(){
    this.loadTasks();
    this.addNewTask();
  }

  changeState(task: any){
     this.taskData.id = task.id;
      this.taskData.description = task.description;
      this.taskData.userId = task.userId;
      this.taskData.state = task.state; 
     this.userTaskService.update(this.taskData).subscribe(() => {
        this.loadTasks();
      });
  }
}
