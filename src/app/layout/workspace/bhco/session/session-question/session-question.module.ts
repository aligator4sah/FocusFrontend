import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionQuestionComponent } from './session-question.component';
import {SharedModuleModule} from "../../../../../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../../../../../shared/shared-module/control-box.module";
import {DemoQuestionModule} from "../../demographic/demo-question/demo-question.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    DemoQuestionModule,
    RouterModule.forChild([
      {path: '', component: SessionQuestionComponent}
      ])
  ],
  declarations: [SessionQuestionComponent],
  exports: [
    SharedModuleModule,
    ControlBoxModule,
    DemoQuestionModule,
    RouterModule,
    SessionQuestionComponent,
  ]
})
export class SessionQuestionModule { }
