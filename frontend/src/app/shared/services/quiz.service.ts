import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {map} from 'rxjs/operators';

@Injectable()
export class QuizService {

    private domain: string = 'api/quiz';

    private $quiz: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private http: HttpService) {
    }

    public get quiz(): BehaviorSubject<any> {
        if (!this.$quiz.getValue()) {
            this.getLatestQuiz().subscribe((quiz) => {
                this.$quiz.next(quiz);
            });
        }
        return this.$quiz;
    }

    public getLatestQuiz(): Observable<any> {
        return this.http.generateRequest('GET', this.domain, 'latest');
    }

    public checkParticipationQuiz(quizId: string): Observable<any> {
        return this.http.generateRequest('GET', this.domain, `${quizId}/can_participate`);
    }

    public verifyQuiz(quizId: string, answers: number[]): Observable<any> {
        return this.http.generateRequest('POST', this.domain, `${quizId}/verify`, null, answers);
    }

    public startQuiz(quizId: string): Observable<any> {
        return this.http.generateRequest('GET', this.domain, `${quizId}/start`);
    }

    public getTopScoresByQuiz(quizId: string): Observable<any> {
        return this.http.generateRequest('GET', this.domain, `${quizId}/top_scores`);
    }

    public getCurrentQuiz() {
        return this.$quiz.getValue();
    }
}
