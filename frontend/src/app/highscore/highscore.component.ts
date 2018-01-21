import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {AuthService} from "../shared/services/auth.service";


@Component({
    selector: 'highscore-component',
    templateUrl: 'highscore.component.html',
    styleUrls: ['highscore.component.scss']
})

export class HighscoreComponent implements OnInit {
    public single: any[];
    public view: any[] = [500, 200];

    totalValue = 25;

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = false;
    xAxisLabel = '';
    showYAxisLabel = false;
    yAxisLabel = '';

    public colorScheme = {
        domain: ['#d20e1e']
    };

    // line, area
    autoScale = true;

    public quiz: any;
    public scores: any[];

    constructor(private quizService: QuizService,
                private authService: AuthService) {
        this.quizService.quiz.subscribe((quiz) => {
            this.quiz = quiz;
            if (quiz) {
                this.quizService.getTopScoresByQuiz(this.quiz._id.$oid).subscribe((scores) => {
                    this.authService.currentUser.subscribe((user) => {
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
                        this.scores = scores.slice(0, 4);
                        if (this.scores.find((s) => user.email == s.email)) {
                            this.scores.push(scores[4]);
                        } else {
                            this.scores.push(scores[idx]);
                        }
                    });
                });
            }
        });
    }

    ngOnInit() {

    }
}
