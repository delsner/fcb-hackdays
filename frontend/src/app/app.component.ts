import {Component} from '@angular/core';
import {NavigationItem} from "./shared/main-layout/main-layout.types";
import {Subscription} from "rxjs/Subscription";
import {NavigationEnd, Router} from "@angular/router";
import {TranslateService} from '@ngx-translate/core';
import {ROUTES} from "./app.routes";
import 'rxjs/add/operator/filter';
import {AuthService} from "./shared/services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    public menuItems: NavigationItem[];
    private routerSub: Subscription;

    constructor(private router: Router,
                private translate: TranslateService,
                private authService: AuthService) {

        this.authService.currentUser.subscribe((user) => {
            if (user) {
                this.menuItems = [
                    // {
                    //     name: 'Terms of Participation',
                    //     route: 'terms'
                    // }
                ];
            } else {
                this.menuItems = [
                //     {
                //     name: 'Terms',
                //     route: 'terms'
                // }
            ];
            }
        });
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');

    }

    ngOnInit() {
        this.routerSub = this.router.events.filter((event) => event instanceof NavigationEnd).subscribe((event) => {
            window.scrollTo(0, 0);
        })
    }

    ngOnDestroy() {
        this.routerSub.unsubscribe();
    }
}
