import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Output()closeTask = new EventEmitter();
  @Output()createTask = new EventEmitter();
  form: FormGroup;
  taskData: any = {userId:0,description:''};
  userId = 0;
  taskDescription = '';
  
  constructor(
    public dialogRef: MatDialogRef<TaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private userTaskService: UserTaskService) { 
      this.form = this.fb.group({
        taskDescription: ['']
      });
      this.userId = this.data.model.id;
    }

  ngOnInit() {
  }

  cancelNewTask(){
    this.closeTask.emit();
  }

  createNewTask(){
    if (this.form.valid){
      const val = this.form.value;

      this.taskData.userId = this.data.model.id;
      this.taskData.description = val.taskDescription;
      this.userTaskService.create( this.taskData.userId, this.taskData).subscribe(() => {
        this.taskDescription = '';
        this.createTask.emit();
      });
    }
    
  }
}
