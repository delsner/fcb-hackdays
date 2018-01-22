import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

export interface Quest {
    name: string;
    route: string;
    points: number;
}

@Component({
    selector: 'quest-log',
    templateUrl: './quest-log.component.html',
    styleUrls: ['./quest-log.component.scss']
})
export class QuestLogComponent implements OnInit {
    @Input() public quests: Quest[];
    @Input() public title: string = '';
    @Input() public imageUrl: string = '';

    constructor(public sanitizer: DomSanitizer) {
    }

    ngOnInit() {
    }

    public getImgUrl() {
        return this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageUrl})`);
    }

}
