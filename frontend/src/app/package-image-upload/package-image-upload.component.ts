import {Component, ElementRef} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {NavigationEnd, Router} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import {EpService} from "../shared/services/ep.service";
import {MatDialog} from "@angular/material";
import {ImageUploadSuccessDialog} from "./success/image-upload-success.dialog";

@Component({
    selector: 'file-image-upload',
    templateUrl: './package-image-upload.component.html'
})
export class PackageImageUploadComponent {

    private fileInput;


    constructor(private router: Router,
                private el: ElementRef,
                private epService: EpService,
                public dialog: MatDialog,
                private translate: TranslateService) {

    }

    ngOnInit() {

    }

    addEps() {
        this.epService.add(30);


        let dialogRef = this.dialog.open(ImageUploadSuccessDialog, {
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });
    }
}
