import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {HomeComponent} from "./shared/home/home.component";
import {QuizComponent} from "./shared/quiz/quiz.component";
import {ChallengeService} from "./shared/services/challenge.service";
import {HttpClientModule} from "@angular/common/http";
import {QuestionComponents} from "./shared/quiz/question/question.component";
import {ChallengeComponent} from "./shared/challenge/challenge.component";
import {ChallengeSubmitDialog} from "./shared/dialog/challenge-submit-dialog";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        QuizComponent,
        ChallengeComponent,
        QuestionComponents,
        ChallengeSubmitDialog
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
        SharedModule,
    ],
    entryComponents: [
        ChallengeSubmitDialog,
    ],
    providers: [ChallengeService],
    bootstrap: [
        AppComponent]
})
export class AppModule {
}
