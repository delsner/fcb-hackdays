import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../shared/models/Question";

@Component({
    selector: 'question',
    templateUrl: 'question.component.html',
    styleUrls: ['question.component.scss']
})

export class QuestionComponents implements OnInit {
    @Output() submittedAnswer: EventEmitter<number> = new EventEmitter();

    @Input() question: Question;

    constructor() {
    }

    ngOnInit() {
    }

    public submitAnswer(answerIndex: number) {
        this.submittedAnswer.emit(answerIndex);
    }
}
