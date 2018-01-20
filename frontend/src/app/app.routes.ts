import {Routes} from "@angular/router";
import {HomeComponent} from "./shared/home/home.component";
import {QuizComponent} from "./shared/quiz/quiz.component";
import {ChallengeComponent} from "./shared/challenge/challenge.component";

export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent, data: {title: 'Home'}},
    {path: 'quiz', component: ChallengeComponent, data: {title: 'Quiz'}},
    {path: '**', redirectTo: '/home'}
];
