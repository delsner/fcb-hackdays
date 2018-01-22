import {Component, OnInit} from '@angular/core';
import {Quest} from "../../shared/components/quest-log/quest-log.component";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
    public quests: Quest[] = [{
        name: 'Quiz',
        route: '/',
        description: 'Quiz...'
    }];

    constructor() {
    }

    ngOnInit() {
    }

}
