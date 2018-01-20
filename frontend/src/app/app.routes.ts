import {Routes} from "@angular/router";
import {HomeComponent} from "./shared/home/home.component";

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: '**', redirectTo: '/home'}
];
