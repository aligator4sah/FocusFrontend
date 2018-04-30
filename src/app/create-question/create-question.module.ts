import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateQuestionComponent } from './create-question.component';
import {SHARED_FORM_DIRECTIVES} from "@angular/forms/src/directives";
import {SharedModuleModule} from "../shared/shared-module/shared-module.module";
import {ControlBoxModule} from "../shared/shared-module/control-box.module";
import {RouterModule} from "@angular/router";
import {CreateDomainComponent} from "./create-domain/create-domain.component";
import {MatTooltipModule} from "@angular/material";
import {QuestionListComponent} from "./question-list/question-list.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModuleModule,
    MatTooltipModule,
    ControlBoxModule,
    RouterModule.forChild([
      {path: '', component: CreateQuestionComponent},
      {path: 'createDomain', component: CreateDomainComponent},
      {path: 'questionList', component: QuestionListComponent},
    ])
  ],
  declarations: [
    CreateQuestionComponent,
    CreateDomainComponent,
    QuestionListComponent,
    ],
  exports: [
    CreateQuestionComponent,
    CreateDomainComponent,
    QuestionListComponent,
    SharedModuleModule,
    ControlBoxModule,
    CommonModule,
    MatTooltipModule,
    RouterModule
  ]
})
export class CreateQuestionModule { }
