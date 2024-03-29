import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {Router} from "@angular/router";

@Component({
    selector: 'start',
    templateUrl: 'start.component.html',
    styleUrls: ['start.component.scss']
})

export class StartComponent implements OnInit {
    public steps: string[] = [
        'Answer as many questions as possible in 1 min!',
        'Be among the best players regarding correct answers.',
        'Win your FC Bayern jersey today.'
    ];

    constructor(private quizService: QuizService,
                private router: Router) {
    }

    ngOnInit() {
    }

    public checkParticipation() {
        // check quiz service participation and redirect to /quiz or /highscore
        this.quizService.quiz.subscribe((quiz) => {
            this.router.navigateByUrl('/quiz');
        });

    }
}
