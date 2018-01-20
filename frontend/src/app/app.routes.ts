import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";
import {AuthGuard} from "./shared/services/auth.guard";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {path: 'start', component: StartComponent, canActivate: [AuthGuard], data: {title: 'Start'}},
    {path: '**', redirectTo: '/'}
];
