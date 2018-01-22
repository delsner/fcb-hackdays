import {Component, OnInit} from '@angular/core';
import {Quest} from "../../shared/components/quest-log/quest-log.component";

@Component({
    selector: 'dhl',
    templateUrl: './dhl.component.html',
    styleUrls: ['./dhl.component.scss']
})
export class DhlComponent implements OnInit {
    public quests: Quest[] = [{
        name: 'Send a packet with DHL',
        route: '../dhl/package-image-upload',
        points: 5
    },
        {
            name: 'Buy your FC Bayern jersey',
            route: '.',
            points: 20
        },
        {
            name: 'Like the FC Bayern Facebook page',
            route: '.',
            points: 5
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
