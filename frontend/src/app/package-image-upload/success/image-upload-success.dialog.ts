import {Component, ElementRef, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";


@Component({
    selector: 'image-upload-success-dialog',
    templateUrl: './image-upload-success.dialog.html'
})
export class ImageUploadSuccessDialog {


    constructor(
        public dialogRef: MatDialogRef<ImageUploadSuccessDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }


}
