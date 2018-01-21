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
import {QuizService} from "./shared/services/quiz.service";
import {HttpClientModule, HttpClient} from "@angular/common/http";
import {QuestionComponents} from "./quiz/question/question.component";
import {ChallengeComponent} from "./challenge/challenge.component";
import {ChallengeSubmitDialog} from "./dialog/challenge-submit-dialog";
import {HighscoreComponent} from "./highscore/highscore.component";
import {TermsComponent} from "./terms/terms.component";
import {PackageImageUploadComponent} from "./category/dhl/package-image-upload/package-image-upload.component";
import {AccountComponent} from './account/account.component';
import {CategoryComponent} from './category/category.component';
import {GameComponent} from './category/game/game.component';
import {DhlComponent} from './category/dhl/dhl.component';
import {SocialComponent} from './category/social/social.component';
import {DrawComponent} from './category/social/draw/draw.component';
import { CommunityComponent } from './community/community.component';
import {EpService} from "./shared/services/ep.service";
import {ImageUploadSuccessDialog} from "./category/dhl/package-image-upload/success/image-upload-success.dialog";



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
        ChallengeSubmitDialog,
        HighscoreComponent,
        TermsComponent,
        PackageImageUploadComponent,
        AccountComponent,
        CategoryComponent,
        GameComponent,
        DhlComponent,
        SocialComponent,
        DrawComponent,
        CommunityComponent,
        ImageUploadSuccessDialog
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
        ImageUploadSuccessDialog
    ],
    providers: [QuizService, EpService],
    bootstrap: [
        AppComponent]
})
export class AppModule {
}
