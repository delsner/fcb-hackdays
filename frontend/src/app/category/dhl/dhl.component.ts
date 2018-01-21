import {Component, OnInit} from '@angular/core';
import {Quest} from "../../shared/components/quest-log/quest-log.component";

@Component({
    selector: 'dhl',
    templateUrl: './dhl.component.html',
    styleUrls: ['./dhl.component.scss']
})
export class DhlComponent implements OnInit {
    public quests: Quest[] = [{
        name: 'Image Upload',
        route: '../dhl/package-image-upload',
        description: 'Image upload...'
    }];

    constructor() {
    }

    ngOnInit() {
    }

}
