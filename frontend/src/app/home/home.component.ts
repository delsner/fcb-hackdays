import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {QuizService} from "../shared/services/quiz.service";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls:['./home.component.scss']
})

export class HomeComponent implements OnInit {

    public email: string = '';
    public termsAccepted: boolean = false;

    constructor(private authService: AuthService,
                private quizService: QuizService,
                private router: Router) {
    }

    ngOnInit() {
    }

    public signup() {
        if (this.email && this.email.length > 0 && this.termsAccepted) {
            this.authService.signup(this.email).subscribe((res) => {
                if (res) {
                  this.router.navigateByUrl('/start');
                }
            })
        }
    }
}
