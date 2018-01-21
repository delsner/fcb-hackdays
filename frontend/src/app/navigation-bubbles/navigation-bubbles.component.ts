import {Component, OnInit} from '@angular/core';
import {QuizService} from "../shared/services/quiz.service";
import {Router} from "@angular/router";
import {EpService} from "../shared/services/ep.service";

@Component({
    selector: 'navigation-bubbles',
    templateUrl: 'navigation-bubbles.component.html',
    styleUrls:['./styles.scss']
})

export class NavigationBubblesComponent implements OnInit {

    public eps: number;
    constructor(
        private epService: EpService
    ) {

    }

    ngOnInit() {
        this.eps = 0;
        setTimeout(() => {
            this.eps = this.epService.getEps();
        }, 1000);
    }


}
