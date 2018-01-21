import {Injectable} from '@angular/core';
import {HttpService} from "./http.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {map} from 'rxjs/operators';

@Injectable()
export class EpService {

    private counter = 30;
    constructor() {

    }

    getEps() {
        return this.counter;
    }

    add(number: number) {
        this.counter += number;
    }

    setEps(number: number) {
        this.counter = number;
    }
}
