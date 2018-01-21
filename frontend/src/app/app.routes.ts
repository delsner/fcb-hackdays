import {TermsComponent} from './terms/terms.component';
import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";
import {AuthGuard} from "./shared/services/auth.guard";
import {ChallengeComponent} from "./challenge/challenge.component";
import {HighscoreComponent} from "./highscore/highscore.component";
import {QuizGuard} from "./shared/services/quiz.guard";
import {PackageImageUploadComponent} from "./package-image-upload/package-image-upload.component";


export const ROUTES: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {path: 'start', component: StartComponent, canActivate: [AuthGuard], data: {title: 'Start'}},
    {path: 'quiz', component: ChallengeComponent, canActivate: [AuthGuard, QuizGuard], data: {title: 'Quiz'}},
    {path: 'highscore', component: HighscoreComponent, canActivate: [AuthGuard], data: {title: 'Highscore'}},
    {path: 'terms', component: TermsComponent, data: {title: 'Terms'}},
    {path: 'package-image-upload', component: PackageImageUploadComponent, data: {title: 'Image Upload'}},
    {path: '**', redirectTo: '/'}
];
