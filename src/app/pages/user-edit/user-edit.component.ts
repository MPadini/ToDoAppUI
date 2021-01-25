import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  form: FormGroup;
  userData: any = {id:0,name:''};
  taskDescription = '';
  userName = '';

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    private userService:UserService) {
      this.form = this.fb.group({
        userName: ['', [Validators.required]]
      });
      this.userName = this.data.model.name;
     }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

  update(){
    if (this.form.valid){
      const val = this.form.value;

      this.userData.id = this.data.model.id;
      this.userData.name = val.userName;
      this.userService.update(this.userData).subscribe(() => {
       this.close();
      });
    }
  }
}
