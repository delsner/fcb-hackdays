import {TermsComponent} from './terms/terms.component';
import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";
import {AuthGuard} from "./shared/services/auth.guard";
import {ChallengeComponent} from "./challenge/challenge.component";
import {HighscoreComponent} from "./highscore/highscore.component";
import {QuizGuard} from "./shared/services/quiz.guard";
import {PackageImageUploadComponent} from "./category/dhl/package-image-upload/package-image-upload.component";
import {CommunityComponent} from "./community/community.component";
import {AccountComponent} from "./account/account.component";
import {CategoryComponent} from "./category/category.component";
import {GameComponent} from "./category/game/game.component";
import {DhlComponent} from "./category/dhl/dhl.component";
import {SocialComponent} from "./category/social/social.component";
import {DrawComponent} from "./category/social/draw/draw.component";


export const ROUTES: Routes = [
    {path: '', component: HomeComponent, data: {title: 'Home'}},
    {path: 'start', component: StartComponent, canActivate: [AuthGuard], data: {title: 'Start'}},
    {path: 'quiz', component: ChallengeComponent, canActivate: [AuthGuard, QuizGuard], data: {title: 'Quiz'}},
    {path: 'highscore', component: HighscoreComponent, canActivate: [AuthGuard], data: {title: 'Highscore'}},
    {path: 'terms', component: TermsComponent, data: {title: 'Terms'}},
    {
        path: 'community', component: CommunityComponent, data: {title: 'Community'}, children: [
        {path: 'account', component: AccountComponent, data: {title: 'Account'}},
        {path: 'category', component: CategoryComponent, data: {title: 'Category'}},
        {path: 'game', component: GameComponent, data: {title: 'Game'}}, // quiz -> redirect to home
        {path: 'dhl', component: DhlComponent, data: {title: 'DHL'}},
        {path: 'dhl/package-image-upload', component: PackageImageUploadComponent, data: {title: 'Image Upload'}},
        {path: 'social', component: SocialComponent, data: {title: 'Social'}},
        {path: 'social/draw', component: DrawComponent, data: {title: 'Draw'}},
        {path: '**', redirectTo: '/community/account'}

    ]
    },
    {path: '**', redirectTo: '/'}
];
