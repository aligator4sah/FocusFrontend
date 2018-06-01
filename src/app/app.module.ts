import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

// import modules
import { AppRoutingModule } from './app-routing.module';
import {LayoutModule} from './layout/layout/layout.module';

// import component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SysLoginComponent } from './login/sys-login/sys-login.component';
import { BhcoLoginComponent } from './login/non-sys-login/bhco-login/bhco-login.component';
import { MemberLoginComponent } from './login/non-sys-login/member-login/member-login.component';
import { ForgotPwdComponent } from './login/forgot-pwd/forgot-pwd.component';

//import service
import { QuestionControlService} from './shared/shared-control/question-control.service';
import { QuestionService} from './shared/shared-control/question.service';
import { UserService } from './service/user.service';
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "./service/message.service";
import {HttpErrorHandler} from "./service/http-error-handler.service";
import { HttpService } from './service/http.service';
import { QuestionModelService } from './service/question-model.service';
import { LocationService } from './service/location.service';
import {ChartsModule} from "ng2-charts/ng2-charts";
import {StateService} from "./service/state.service";
import {SummaryService} from "./service/summary.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SysLoginComponent,
    BhcoLoginComponent,
    MemberLoginComponent,
    ForgotPwdComponent,
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
  ],
  providers: [
    QuestionControlService,
    QuestionService,
    DatePipe,
    UserService,
    MessageService,
    HttpErrorHandler,
    HttpService,
    QuestionModelService,
    LocationService,
    StateService,
    SummaryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
