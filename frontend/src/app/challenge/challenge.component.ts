import {Component, OnDestroy, OnInit} from '@angular/core';
import 'rxjs/add/operator/filter';
import {QuizService} from "../shared/services/quiz.service";
import {Quiz} from "../shared/models/Quiz";
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

    constructor(private quizService: QuizService,
                public dialog: MatDialog,
                private router: Router) {

    }

    ngOnInit() {
        // TODO fix n
        this.challengeSub = this.quizService.getLatestQuiz().subscribe(
            (result) => {
                this.quiz = result;
            });
    }

    ngOnDestroy() {
        this.challengeSub.unsubscribe();
    }

    public onSubmittedChallenge() {
        /*let dialogRef = this.dialog.open(ChallengeSubmitDialog, {
            width: '250px',
            data: {score: 1000}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });*/

    }
}

