import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

    public quiz: any;

    @Output() submitted: EventEmitter<boolean> = new EventEmitter();

    public userAnswers = [];

    public actQuestionIndex = 0;

    public actQuestion: Question;

    constructor(private quizService: QuizService,
                private router: Router) {
        this.quizService.quiz.subscribe((quiz) => {
            this.quiz = quiz;
            console.log('QUIIIZZZ');
            if (quiz) {
                console.log('QUIIIZZZ1');
                this.quizService.startQuiz(quiz._id.$oid).subscribe((res) => {
                    console.log('STARTED QUIZ');
                });
            }
        });
    }

    ngOnInit() {
        this.actQuestion = this.quiz.questions[0];
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
        this.quizService.verifyQuiz(this.quiz._id.$oid, this.userAnswers).subscribe((res) => {
            this.router.navigateByUrl('/highscore');
        });
    }
}
