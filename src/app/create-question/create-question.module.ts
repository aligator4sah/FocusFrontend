import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import {SHARED_FORM_DIRECTIVES} from "@angular/forms/src/directives";
import {SharedModuleModule} from "../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateQuestionComponent}
    ])
  ],
  declarations: [
    CreateQuestionComponent,
    ],
  exports: [
    CreateQuestionComponent,
    SharedModuleModule,
    ControlBoxModule,
    CommonModule,
  ]
})
export class CreateQuestionModule { }
