import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";

@Component({
    selector: 'highscore-component',
    templateUrl: 'highscore.component.html'
})

export class HighscoreComponent implements OnInit {
    public quiz: any;
    public scores: any[];

    constructor(private quizService: QuizService) {
        this.quizService.quiz.subscribe((quiz) => {
            this.quiz = quiz;
            this.quizService.getTopScoresByQuiz(this.quiz._id.$oid).subscribe((scores) => {
                this.scores = scores;
            });
        });
    }

    ngOnInit() {

    }
}
