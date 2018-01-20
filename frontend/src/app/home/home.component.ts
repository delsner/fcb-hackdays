import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {    
    
    public email: string = '';
    public termsAccepted: boolean = true;

    constructor(translate: TranslateService) {
    }

    ngOnInit() {
    }
}
