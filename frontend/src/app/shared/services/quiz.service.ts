import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class QuizService {
    private domain: string = 'api/quiz';

    constructor(private http: HttpService,
                private httpClient: HttpClient) {
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

    public getTopScoresByQuiz(quizId: string): Observable<any> {
        return this.http.generateRequest('GET', this.domain, `${quizId}/top_scores`);
    }

    public getQuiz() {
        return this.httpClient.get("assets/data/quiz1.json");
    }
}
