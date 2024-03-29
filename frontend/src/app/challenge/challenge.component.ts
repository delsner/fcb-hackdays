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

    constructor(private quizService: QuizService) {

    }

    ngOnInit() {
        this.quizService.quiz.subscribe(
            (quiz) => {
                this.quiz = quiz;
            });
    }

    ngOnDestroy() {
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

