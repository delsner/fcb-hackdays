import {Component, Input, OnInit} from '@angular/core';

export interface Quest {
    name: string;
    route: string;
    description: string;
}

@Component({
    selector: 'quest-log',
    templateUrl: './quest-log.component.html',
    styleUrls: ['./quest-log.component.scss']
})
export class QuestLogComponent implements OnInit {
    @Input() public quests: Quest[];

    constructor() {
    }

    ngOnInit() {
    }

}
