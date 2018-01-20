import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        StartComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(ROUTES, {useHash: false, preloadingStrategy: PreloadAllModules}),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        SharedModule
    ],
    providers: [],
    bootstrap: [
        AppComponent]
})
export class AppModule {
}
