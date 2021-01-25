import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  form: FormGroup;
  taskData: any = {id:0,description:'',userId:0,state:false};
  taskDescription = '';
  
  constructor(
    public dialogRef: MatDialogRef<TaskEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private userTaskService: UserTaskService) { 
      this.form = this.fb.group({
        taskDescription: ['', [Validators.required]]
      });
      this.taskDescription = this.data.model.description;
    }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  update(){
    if (this.form.valid){
      const val = this.form.value;

      this.taskData.id = this.data.model.id;
      this.taskData.description = val.taskDescription;
      this.taskData.userId = this.data.model.userId;
      this.taskData.state = this.data.model.state;
      this.userTaskService.update(this.taskData).subscribe(() => {
       this.close();
      });
    }
  }
}
