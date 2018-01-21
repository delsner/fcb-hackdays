import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {QuizService} from "./quiz.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class QuizGuard implements CanActivate {

    constructor(private quizService: QuizService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return Observable.create((observers) => {
            this.quizService.quiz.subscribe((quiz) => {
                if (quiz) {
                    this.quizService.checkParticipationQuiz(quiz._id.$oid).subscribe((res) => {
                        if (res.canParticipate) {
                            observers.next(true);
                        } else {
                            this.router.navigate(['/highscore']);
                            observers.next(false);
                        }
                    })
                }
            });
        });

    }
}
