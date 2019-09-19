import { Component, OnInit } from '@angular/core';
import { DialogPopupComponent } from '../dialog-popup/dialog-popup.component';
import { MatDialogRef } from '@angular/material';
import { DisplayService } from '../../display.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-put-dialog-popup',
  templateUrl: './put-dialog-popup.component.html',
  styleUrls: ['./put-dialog-popup.component.css']
})
export class PutDialogPopupComponent implements OnInit {

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
