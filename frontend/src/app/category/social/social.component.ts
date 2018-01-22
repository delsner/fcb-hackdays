import {Component, OnInit} from '@angular/core';
import {Quest} from "../../shared/components/quest-log/quest-log.component";

@Component({
    selector: 'social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
    public quests: Quest[] = [{
        name: 'Join the FC Bayern Hackdays',
        route: '../social/draw',
        points: 10
    }, {
        name: 'Take a selfie in your FCB jersey',
        route: '.',
        points: 5
    }, {
        name: 'Invite 5 friends to the community',
        route: '.',
        points: 20
    }];

    constructor() {
    }

    ngOnInit() {
    }

}
