import {Component, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {Question} from "../../../shared/models/Question";
import {QuizService} from "../../../shared/services/quiz.service";
import {Router} from "@angular/router";

@Component({
    selector: 'demo-quiz',
    templateUrl: './demo-quiz.component.html',
    styleUrls: ['./demo-quiz.component.scss']
})
export class DemoQuizComponent implements OnInit {

    public value = 100;
    @Input() public quiz: any = {
        "name": "Quizname",
        "answers": [
            1,
            2,
            0
        ],
        "questions": [
            {
                "text": "Who is the head coach of FC Bayern?",
                "answers": [
                    {
                        "text": "Ottmar Hitzfeld"
                    },
                    {
                        "text": "Jupp Heynckes"
                    },
                    {
                        "text": "Carlo Ancelotti"
                    },
                    {
                        "text": "Karl-Heinz Rummenigge"
                    }
                ]
            },
            {
                "text": "When was FC Bayern founded?",
                "answers": [
                    {
                        "text": "1920"
                    },
                    {
                        "text": "1905"
                    },
                    {
                        "text": "1900"
                    },
                    {
                        "text": "1934"
                    }
                ]
            },
            {
                "text": "Against whom did FC Bayern win the last Champions League title?",
                "answers": [
                    {
                        "text": "Borussia Dortmund"
                    },
                    {
                        "text": "Real Madrid"
                    },
                    {
                        "text": "FC Barcelona"
                    },
                    {
                        "text": "Inter Mailand"
                    }
                ]
            }
        ]
    };

    @Output() submitted: EventEmitter<boolean> = new EventEmitter();


    public userAnswers = [];

    public actQuestionIndex = 0;

    public actQuestion: Question;

    private countdownTimeout;

    constructor(private quizService: QuizService,
                private router: Router,
                private rd: Renderer2) {
        /*this.quizService.quiz.subscribe((quiz) => {
            this.quiz = quiz;
            if (quiz) {
                this.quizService.startQuiz(quiz._id.$oid).subscribe((res) => {
                    console.log('STARTED QUIZ');
                });
            }
        });*/
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

    }

}
