import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../shared/models/Question";

@Component({
    selector: 'demo-question',
    templateUrl: './demo-question.component.html',
    styleUrls: ['./demo-question.component.scss']
})
export class DemoQuestionComponent implements OnInit {
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
