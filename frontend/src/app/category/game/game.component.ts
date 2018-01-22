import {Component, OnInit} from '@angular/core';
import {Quest} from "../../shared/components/quest-log/quest-log.component";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    public quests: Quest[] = [{
        name: 'Live Event: FC Bayern Quiz',
        route: 'show-case-demo',
        points: 10
    }, {
        name: 'Bet result FCB vs. TSG',
        route: '.',
        points: 5
    }, {
        name: 'Penalty shootout',
        route: '.',
        points: 10
    }];

    constructor() {
    }

    ngOnInit() {
    }

}
