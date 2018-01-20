import {Component, OnInit} from '@angular/core';
import {ChallengeService} from "../shared/services/challenge.service";

@Component({
    selector: 'start',
    templateUrl: 'start.component.html'
})

export class StartComponent implements OnInit {
    constructor(private challengeService: ChallengeService) {
    }

    ngOnInit() {
        this.challengeService.getAllChallenges().subscribe((challenges) => {
            console.log(challenges);
        });
    }
}
