import {Component, ElementRef} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {NavigationEnd, Router} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'file-image-upload',
    templateUrl: './package-image-upload.component.html'
})
export class PackageImageUploadComponent {

    private fileInput;


    constructor(private router: Router,
                private el: ElementRef,
                private translate: TranslateService) {

    }

    ngOnInit() {

    }

}
