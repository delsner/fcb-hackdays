import {NgxChartsModule} from '@swimlane/ngx-charts';
import {TranslateModule} from '@ngx-translate/core';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatSelectModule,
    MatCheckboxModule,
    MatStepperModule,
    MatGridListModule, MatProgressBarModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthService} from './services/auth.service';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {MainLayoutModule} from "./main-layout/main-layout.module";
import {SocketService} from "./services/socket.service";
import {AuthGuard} from "./services/auth.guard";
import {QuizService} from "./services/quiz.service";
import {QuizGuard} from "./services/quiz.guard";
import {QuestLogComponent} from './components/quest-log/quest-log.component';
import {FooterNavComponent} from './components/footer-nav/footer-nav.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        // Material Modules
        FlexLayoutModule,
        MatTooltipModule,
        MatGridListModule,
        MatButtonModule,
        MatStepperModule,
        MatCardModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatSnackBarModule,
        MatSelectModule,
        MatProgressBarModule,
        MatCheckboxModule,
        // custom modules
        MainLayoutModule,
        NgxChartsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule,
        // Material Modules
        FlexLayoutModule,
        MatTooltipModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatDialogModule,
        MatInputModule,
        MatStepperModule,
        MatIconModule,
        MatGridListModule,
        MatListModule,
        MatSnackBarModule,
        MatSelectModule,
        MatCheckboxModule,
        // translate module
        TranslateModule,
        // custom modules
        MainLayoutModule,
        NgxChartsModule,
        QuestLogComponent,
        FooterNavComponent
    ],
    declarations: [
        QuestLogComponent,
        FooterNavComponent],
    entryComponents: [],
    providers: [
        AuthService,
        HttpService,
        SocketService,
        AuthGuard,
        QuizService,
        QuizGuard
    ]
})
export class SharedModule {
}
