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
    public quiz: any;

    @Output() submitted: EventEmitter<boolean> = new EventEmitter();


    public userAnswers = [];

    public actQuestionIndex = 0;

    public actQuestion: Question;

    private countdownTimeout;

    constructor(private quizService: QuizService,
                private router: Router,
                private rd: Renderer2) {
        this.quizService.quiz.subscribe((quiz) => {
            this.quiz = quiz;
            if (quiz) {
                this.quizService.startQuiz(quiz._id.$oid).subscribe((res) => {
                    console.log('STARTED QUIZ');
                });
            }
        });
    }

    ngOnInit() {
        this.actQuestion = this.quiz.questions[0];

        this.startTimer();
    }

    private startTimer() {

        this.countdownTimeout = setInterval(() => {
            if (this.value > 0) {
                console.log("runterzählen");
                this.value = this.value - (100 / 60);
            } else {
                console.log("submit");
                this.submitQuiz();
            }
        }, 1000);


    }


    public submitAnswer(answerIndex: number) {

        this.userAnswers[this.actQuestionIndex] = answerIndex;

        this.actQuestionIndex++;

        if (this.actQuestionIndex >= this.quiz.questions.length) {
            this.submitted.emit(true);
            this.submitQuiz();
            return;
        }
        this.actQuestion = this.quiz.questions[this.actQuestionIndex];
    }

    public submitQuiz() {
        clearInterval(this.countdownTimeout);

        this.quizService.verifyQuiz(this.quiz._id.$oid, this.userAnswers).subscribe((res) => {
            this.router.navigateByUrl('/highscore');
        });
    }
}
