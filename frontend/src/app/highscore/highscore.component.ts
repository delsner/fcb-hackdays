import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {NgxChartsModule} from '@swimlane/ngx-charts';


@Component({
    selector: 'highscore-component',
    templateUrl: 'highscore.component.html',
    styleUrls: ['highscore.component.scss']
})

export class HighscoreComponent implements OnInit {
    public single: any[] = [
        {
          "name": "of Max Score",
          "value": 14
        }
      ]  
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

    constructor(private quizService: QuizService) {
        this.quizService.quiz.subscribe((quiz) => {
            this.quiz = quiz;
            if (quiz) {
                this.quizService.getTopScoresByQuiz(this.quiz._id.$oid).subscribe((scores) => {
                    this.scores = scores;
                });
            }
        });
    }

    ngOnInit() {

    }
}
