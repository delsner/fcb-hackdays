import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ChallengeService {
    private domain: string = 'api/challenge';

    constructor(private http: HttpService) {
    }

    public getAllChallenges(): Observable<any> {
        return this.http.generateRequest('GET', this.domain);
    }
}
