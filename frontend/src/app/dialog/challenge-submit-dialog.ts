import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Component, Inject} from "@angular/core";
@Component({
    selector: 'challenge-submit-dialog',
    templateUrl: 'challenge-submit-dialog.html',
})
export class ChallengeSubmitDialog {



    constructor(
        public dialogRef: MatDialogRef<ChallengeSubmitDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        
    }
    onNoClick(): void {
        this.dialogRef.close();
    }

}
