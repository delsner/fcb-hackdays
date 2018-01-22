import {Component, OnInit} from '@angular/core';
import {EpService} from "../shared/services/ep.service";

@Component({
    selector: 'account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
    public eps: any;

    constructor(private epService: EpService) {
    }

    ngOnInit() {
        this.eps = 0;
        setTimeout(() => {
            this.eps = this.epService.getEps();
        }, 1000);
    }

}
