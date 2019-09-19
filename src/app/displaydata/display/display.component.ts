import { Component, OnInit, ViewChild } from '@angular/core';
import { DisplayService } from '../display.service';
import { MatTableDataSource } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';
import { PutDialogPopupComponent } from './put-dialog-popup/put-dialog-popup.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})

export class DisplayComponent implements OnInit {
  // dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'description', 'lessonsCount', 'category', 'action'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private displayservice: DisplayService, private dialog: MatDialog) { }

  ngOnInit() {
    this.displayservice.getCourses().subscribe(
      result => {
        this.dataSource.data = result;
        console.log(this.dataSource);
        
      }
    );
    this.dataSource.paginator = this.paginator;
  }
  openDialog(){
    const dialogRef = this.dialog.open(DialogPopupComponent);
  }
  onDelete(id: number){
    console.log(id);
    this.displayservice.deleteCourse(id).subscribe(
      result => {

      }
    );
  }
  onPut(id: number, course: any){
    console.log(id);
    console.log(course);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {ID: id, Object: course}
    const dialogRef = this.dialog.open(PutDialogPopupComponent, dialogConfig);
  }
}
