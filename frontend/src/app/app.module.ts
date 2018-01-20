import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";
import {QuizComponent} from "./quiz/quiz.component";
import {ChallengeService} from "./shared/services/challenge.service";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {QuestionComponents} from "./quiz/question/question.component";
import {ChallengeComponent} from "./challenge/challenge.component";
import {ChallengeSubmitDialog} from "./dialog/challenge-submit-dialog";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        QuizComponent,
        StartComponent,
        ChallengeComponent,
        QuestionComponents,
        ChallengeSubmitDialog
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
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
