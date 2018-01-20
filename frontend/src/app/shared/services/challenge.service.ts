import { Injectable } from '@angular/core';
import {Challenge} from "../models/Challenge";
import 'rxjs/Rx';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable()
export class ChallengeService {

    constructor(
        private http: HttpClient
    ) {
    }

    /*
    getChallenges(): Observable<Challenge[]> {
        //return this.http.get("assets/data/quiz1.json");
    }
    */

    getChallenge() {
        return this.http.get("assets/data/quiz1.json");
    }

}
