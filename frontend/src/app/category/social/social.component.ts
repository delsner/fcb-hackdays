import {Component, OnInit} from '@angular/core';
import {Quest} from "../../shared/components/quest-log/quest-log.component";

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
    public quests: Quest[] = [{
        name: 'Draw',
        route: '../social/draw',
        description: 'Draw a figure'
    }];

    constructor() {
    }

    ngOnInit() {
    }

}
