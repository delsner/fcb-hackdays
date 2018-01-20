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

    constructor(private http: HttpService,
                private httpClient: HttpClient) {
    }

    public get quiz(): BehaviorSubject<any> {
        return this.$quiz;
    }

    public getLatestQuiz(): Observable<any> {
        return this.http.generateRequest('GET', this.domain, 'latest').pipe(
                map((response) => {
                    this.quiz.next(response);
                    return response;
                })
            );
    }

    public checkParticipationQuiz(quizId: string): Observable<any> {
        return this.http.generateRequest('GET', this.domain, `${quizId}/can_participate`);
    }

    public verifyQuiz(quizId: string, answers: number[]): Observable<any> {
        return this.http.generateRequest('POST', this.domain, `${quizId}/verify`, null, answers);
    }

    public getTopScoresByQuiz(quizId: string): Observable<any> {
        return this.http.generateRequest('GET', this.domain, `${quizId}/top_scores`);
    }

    public getQuiz() {
        return this.httpClient.get("assets/data/quiz1.json");
    }
}
