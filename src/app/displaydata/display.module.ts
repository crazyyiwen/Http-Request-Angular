import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { 
        MatTableModule,
        MatPaginatorModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule 
        } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DialogPopupComponent } from './display/dialog-popup/dialog-popup.component';
import { DisplayService } from './display.service';
import { PutDialogPopupComponent } from './display/put-dialog-popup/put-dialog-popup.component';

const routes: Routes = [
    {path: '', component: DisplayComponent}
]
@NgModule({
    declarations: [DisplayComponent, DialogPopupComponent, PutDialogPopupComponent],
    imports: [
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatFormFieldModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        HttpClientModule,
        RouterModule
    ],
    providers: [DisplayService],
    entryComponents: [DialogPopupComponent, PutDialogPopupComponent]
})

export class DisplayModule{

}