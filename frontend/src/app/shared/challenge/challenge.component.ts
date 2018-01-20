import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/operator/filter';
import {ChallengeService} from "../services/challenge.service";
import {Quiz} from "../models/Quiz";
import {Subscription} from "rxjs";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from "@angular/router";
import {ChallengeSubmitDialog} from "../dialog/challenge-submit-dialog";


@Component({
    selector: 'challenge',
    templateUrl: './challenge.component.html'
})
export class ChallengeComponent implements OnInit, OnDestroy {

    public quiz;

    private challengeSub: Subscription;

    constructor(private challengeService: ChallengeService,
                public dialog: MatDialog,
                private router: Router) {

    }

    ngOnInit() {
        this.challengeSub = this.challengeService.getChallenge().subscribe(
            (result) => {
                this.quiz = result;
            });
    }

    ngOnDestroy() {
        this.challengeSub.unsubscribe();
    }

    public onSubmittedChallenge() {
        console.log("test");

        let dialogRef = this.dialog.open(ChallengeSubmitDialog, {
            width: '250px',
            data: { score: 1000 }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });

    }
}

