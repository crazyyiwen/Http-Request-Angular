import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DisplayService } from '../../display.service';

@Component({
  selector: 'app-dialog-popup',
  templateUrl: './dialog-popup.component.html',
  styleUrls: ['./dialog-popup.component.css'],
})
export class DialogPopupComponent implements OnInit {
  obj = {
    id:11,
    description: ' ',
    iconUrl:'new',
    longDescription:'long',
    lessonsCount:0,
    category:' '
  };
  constructor(private dialogRef: MatDialogRef<DialogPopupComponent>, private displayservice: DisplayService) { }

  ngOnInit() {
  }
  subForm(data: NgForm){
    this.obj.description = data.value.des;
    this.obj.lessonsCount = data.value.les;
    this.obj.category = data.value.cat;
    this.displayservice.postCourse(this.obj)
    .subscribe(
      result => {
      }
    );
    this.dialogRef.close();
  }
  onCancel(){
    this.dialogRef.close();
  }
}
