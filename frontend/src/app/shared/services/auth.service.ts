import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {User} from '../types';
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    public token: string;
    private domain = 'api/user';
    private currentUser$: ReplaySubject<User> = new ReplaySubject<User>(1);

    constructor(private http: HttpClient,
                private router: Router) {
        if (localStorage.getItem('dhl-jwt')) {
            this.token = localStorage.getItem('dhl-jwt');
            this.currentUser$.next(this.getUserInfoFromToken());
        }
    }

    public get currentUser(): ReplaySubject<User> {
        return this.currentUser$;
    }

    public set currentUser(value: ReplaySubject<User>) {
        this.currentUser$ = value;
    }

    public login(email: string, password: string): Observable<boolean> {
        return this.http.post(`${this.domain}/login`, {email: email, password: password})
            .pipe(
                map((response: any) => {
                    // login successful if there's a jwt token in the response
                    const token = response && response.jwt;
                    if (token) {
                        this.token = token;
                        localStorage.setItem('dhl-jwt', token);
                        this.currentUser$.next(this.getUserInfoFromToken());
                        return true;
                    } else {
                        return false;
                    }
                })
            );
    }

    public signup(email: string): Observable<boolean> {
        return this.http.post(`${this.domain}/signup`, {email: email})
            .pipe(
                map((response: any) => {
                    // login successful if there's a jwt token in the response
                    const token = response && response.jwt;
                    if (token) {
                        this.token = token;
                        localStorage.setItem('dhl-jwt', token);
                        this.currentUser$.next(this.getUserInfoFromToken());
                        return true;
                    } else {
                        return false;
                    }
                })
            );
    }

    public logout(): void {
        this.token = null;
        localStorage.removeItem('dhl-jwt');
        this.currentUser$.next(null);
        this.router.navigateByUrl('/');
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('dhl-jwt');
        if (token) {
            if (new Date() > new Date(this.parseToken(token).exp * 1000)) {
                localStorage.removeItem('dhl-jwt');
                this.currentUser$.next(null);
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

    public getUserInfoFromToken(): User {
        const token = localStorage.getItem('dhl-jwt');
        if (token) {
            console.log(this.parseToken(token));
            return new User(this.parseToken(token).sub);
        }
    }

    private parseToken(token) {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }
}
