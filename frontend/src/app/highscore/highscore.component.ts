import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {AuthService} from "../shared/services/auth.service";
import {Subscription} from "rxjs/Subscription";


@Component({
    selector: 'highscore-component',
    templateUrl: 'highscore.component.html',
    styleUrls: ['highscore.component.scss']
})

export class HighscoreComponent implements OnInit {
    public single: any[];
    public view: any[] = [500, 200];

    totalValue = 25;
    public colorScheme = {
        domain: ['#d20e1e']
    };

    public quiz: any;
    public scores: any[];
    private quizSub: Subscription;

    constructor(private quizService: QuizService,
                private authService: AuthService) {
        this.quizSub = this.quizService.quiz.subscribe((quiz) => {
            this.quiz = quiz;
            if (quiz) {
                this.quizService.getTopScoresByQuiz(this.quiz._id.$oid).subscribe((scores) => {
                    this.authService.currentUser.subscribe((user) => {
                        if (user) {
                            scores = scores.map((s, i) => {
                                return {
                                    ...s,
                                    rank: (i + 1)
                                };
                            });
                            let idx = scores.findIndex((s) => user.email == s.email);
                            this.single = [
                                {
                                    "name": "of Max Score",
                                    "value": scores[idx].points
                                }
                            ];

                            let minIdx = Math.min(4, scores.length);
                            this.scores = scores.slice(0, minIdx);

                            if (!this.scores.find((s) => user.email == s.email)) {
                                this.scores.push(scores[idx]);
                            } else {
                                if (scores.length > 4) {
                                    this.scores.push(scores[4]);
                                }
                            }
                        }
                    });
                });
            }
        });
    }

    ngOnInit() {

    }

    ngOnDestroy() {
        this.quizSub.unsubscribe();
        this.cleanup();
    }

    private cleanup() {
        this.scores = [];
        this.single = null;
    }
}
