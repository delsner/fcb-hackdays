import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, Renderer2} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {Quiz} from "../shared/models/Quiz";
import {Question} from "../shared/models/Question";
import {Router} from "@angular/router";

@Component({
    selector: 'quiz',
    templateUrl: 'quiz.component.html',
    styleUrls: ['quiz.component.scss']
})

export class QuizComponent implements OnInit {

    public value = 100;
    @Input() data: any;

    @Output() submitted: EventEmitter<boolean> = new EventEmitter();



    public userAnswers = [];

    public actQuestionIndex = 0;

    public actQuestion: Question;

    constructor(private quizService: QuizService,
                private router: Router,
                private rd: Renderer2) {
        //TODO: reroute if not ok here


    }

    ngOnInit() {
        this.actQuestion = this.data.questions[0];

        this.startTimer();
    }

    private startTimer() {
        setInterval(() => {
            this.value = this.value - 1.7;
        }, 1000);
    }


    public submitAnswer(answerIndex: number) {

        this.userAnswers[this.actQuestionIndex] = answerIndex;

        this.actQuestionIndex++;

        if (this.actQuestionIndex >= this.data.questions.length) {
            this.submitted.emit(true);
            this.submitQuiz();
            return;
        }
        this.actQuestion = this.data.questions[this.actQuestionIndex];
    }

    public submitQuiz() {
        this.quizService.verifyQuiz(this.data._id.$oid, this.userAnswers).subscribe((res) => {
            this.router.navigateByUrl('/highscore');
        });
    }
}
