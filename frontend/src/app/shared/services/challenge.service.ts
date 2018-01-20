import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ChallengeService {
    private domain: string = 'api/challenge';

    constructor(private http: HttpService,
                private httpClient: HttpClient) {
    }

    public getAllChallenges(): Observable<any> {
        return this.http.generateRequest('GET', this.domain);
    }

    public getChallenge() {
        return this.httpClient.get("assets/data/quiz1.json");
    }
}
